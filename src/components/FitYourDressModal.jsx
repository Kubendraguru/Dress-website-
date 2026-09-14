import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Camera, 
  Upload, 
  X, 
  ShoppingBag, 
  Sparkles, 
  Check, 
  RotateCw, 
  Maximize2, 
  Sliders, 
  Download, 
  Eye, 
  EyeOff, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  Info, 
  ShieldCheck, 
  RefreshCw,
  Layers,
  ArrowRight,
  Move,
  Scissors,
  Key,
  Wand2,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { TRYON_OUTFITS, SAMPLE_MODELS } from '../data/tryOnOutfits';
import { 
  getGeminiApiKey, 
  saveGeminiApiKey, 
  clearGeminiApiKey, 
  alignWithGeminiVision 
} from '../services/geminiTryOn';

export default function FitYourDressModal({ isOpen, onClose, onAddToCart }) {
  // Navigation & Mode
  const [activeMode, setActiveMode] = useState('welcome'); // 'welcome' | 'camera' | 'photo'
  const [selectedOutfitIndex, setSelectedOutfitIndex] = useState(0);
  const [addedToast, setAddedToast] = useState(false);
  
  // Personalization settings
  const [userHeight, setUserHeight] = useState(175);
  const [userWeight, setUserWeight] = useState(68);
  const [userSize, setUserSize] = useState('M');
  const [showPersonalize, setShowPersonalize] = useState(false);

  // Live Camera state
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [facingMode, setFacingMode] = useState('user');
  const [isDetecting, setIsDetecting] = useState(false);

  // Photo mode state
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isProcessingPhoto, setIsProcessingPhoto] = useState(false);
  const [detectionMessage, setDetectionMessage] = useState(null);

  // Gemini AI Try-On state
  const [isGeneratingGemini, setIsGeneratingGemini] = useState(false);
  const [geminiStatus, setGeminiStatus] = useState('');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [hasCustomKey, setHasCustomKey] = useState(Boolean(getGeminiApiKey()));

  // Garment Crop Mode (Full outfit vs Top/Bust Only)
  const [isTopOnly, setIsTopOnly] = useState(false);

  // Garment Transform on Photo (Collar anchor: x: 0..1, y: 0..1, scale: 0.5..3.0, rotation: rad clamped)
  const [transform, setTransform] = useState({
    x: 0.5,
    y: 0.48, // Aligns naturally below chin
    scale: 1.0, // 1.0 = full realistic shoulder coverage
    rotation: 0
  });

  // Manual sliders / Fine-tuning drawer
  const [outfitOpacity, setOutfitOpacity] = useState(1.0);
  const [showControls, setShowControls] = useState(false);

  // Canvas bounds tracking for pixel-perfect overlay
  const [canvasBounds, setCanvasBounds] = useState({ width: 400, height: 600, left: 0, top: 0 });

  // Interactive Drag & Resize on Canvas
  const [isDragging, setIsDragging] = useState(false);
  const [activeHandle, setActiveHandle] = useState(null); // 'move' | 'nw' | 'ne' | 'sw' | 'se' | 'rot'
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, initialTransform: { ...transform } });

  // Snapshot Capture
  const [capturedSnapshot, setCapturedSnapshot] = useState(null);
  const [isFlashActive, setIsFlashActive] = useState(false);

  // DOM Refs
  const stageContainerRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const photoCanvasRef = useRef(null);
  const streamRef = useRef(null);
  const animationFrameRef = useRef(null);
  const poseRef = useRef(null);

  // Camera Lerp smoothing state
  const smoothedPose = useRef({
    x: 0.5,
    y: 0.50,
    scale: 1.0,
    angle: 0,
    detected: false
  });

  const activeOutfit = TRYON_OUTFITS[selectedOutfitIndex] || TRYON_OUTFITS[0];
  const outfitImgRef = useRef(new Image());

  // Update canvas bounds on resize
  const updateCanvasBounds = useCallback(() => {
    const canvas = activeMode === 'camera' ? canvasRef.current : photoCanvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const parentRect = stageContainerRef.current?.getBoundingClientRect();
      if (parentRect) {
        setCanvasBounds({
          width: rect.width,
          height: rect.height,
          left: rect.left - parentRect.left,
          top: rect.top - parentRect.top
        });
      }
    }
  }, [activeMode]);

  useEffect(() => {
    window.addEventListener('resize', updateCanvasBounds);
    const timer = setTimeout(updateCanvasBounds, 100);
    return () => {
      window.removeEventListener('resize', updateCanvasBounds);
      clearTimeout(timer);
    };
  }, [updateCanvasBounds, uploadedImage, activeMode]);

  // Preload outfit image
  useEffect(() => {
    if (activeOutfit && activeOutfit.image) {
      const img = new Image();
      img.src = activeOutfit.image;
      img.onload = () => {
        outfitImgRef.current = img;
        if (activeMode === 'photo') {
          drawPhotoFrame();
        }
      };
    }
  }, [selectedOutfitIndex, activeOutfit]);

  // Sync API Key status
  useEffect(() => {
    setHasCustomKey(Boolean(getGeminiApiKey()));
  }, [showApiKeyModal]);

  // Helper: Create/Get MediaPipe Pose detector instance
  const getPoseDetector = async () => {
    if (poseRef.current) return poseRef.current;
    
    let detector = null;
    if (window.Pose) {
      detector = new window.Pose({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
      });
    } else {
      const { Pose } = await import('@mediapipe/pose');
      detector = new Pose({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
      });
    }

    detector.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      smoothSegmentation: false,
      minDetectionConfidence: 0.45,
      minTrackingConfidence: 0.45
    });

    poseRef.current = detector;
    return detector;
  };

  // Clean stop camera stream
  const stopCameraStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setIsCameraActive(false);
  }, []);

  // Initialize Camera Mode
  const startCamera = async () => {
    setCameraError(null);
    setActiveMode('camera');

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported by your browser.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          setIsCameraActive(true);
          initCameraPoseDetection();
          setTimeout(updateCanvasBounds, 200);
        };
      }
    } catch (err) {
      console.error('Camera Access Error:', err);
      setCameraError(err.message || 'Unable to access camera. Please allow camera permissions.');
    }
  };

  // Live Camera Pose Loop
  const initCameraPoseDetection = useCallback(async () => {
    try {
      const detector = await getPoseDetector();
      detector.onResults((results) => {
        handleCameraPoseResults(results);
      });
      setIsDetecting(true);
    } catch (e) {
      console.warn('MediaPipe Pose loading error:', e);
      setIsDetecting(false);
    }

    const renderLoop = async () => {
      if (videoRef.current && videoRef.current.readyState >= 2) {
        if (poseRef.current) {
          try {
            await poseRef.current.send({ image: videoRef.current });
          } catch (err) {
            // continue frame
          }
        }
        drawCameraFrame();
      }
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();
  }, []);

  // Handle Pose Landmarks from Camera
  const handleCameraPoseResults = (results) => {
    if (!results || !results.poseLandmarks) {
      smoothedPose.current.detected = false;
      return;
    }

    const landmarks = results.poseLandmarks;
    const leftShoulder = landmarks[11];
    const rightShoulder = landmarks[12];
    const nose = landmarks[0];

    if (leftShoulder && rightShoulder && (leftShoulder.visibility > 0.3 || rightShoulder.visibility > 0.3)) {
      const shoulderMidX = (leftShoulder.x + rightShoulder.x) / 2;
      const shoulderMidY = (leftShoulder.y + rightShoulder.y) / 2;

      const shoulderWidth = Math.hypot(
        rightShoulder.x - leftShoulder.x,
        rightShoulder.y - leftShoulder.y
      );

      const rawAngle = Math.atan2(
        leftShoulder.y - rightShoulder.y,
        leftShoulder.x - rightShoulder.x
      );
      const angle = Math.max(-0.4, Math.min(0.4, rawAngle));

      const lerp = 0.18;
      smoothedPose.current.x += (shoulderMidX - smoothedPose.current.x) * lerp;
      smoothedPose.current.y += (shoulderMidY - smoothedPose.current.y) * lerp;
      
      const targetScale = Math.max(0.75, Math.min(2.8, (shoulderWidth / 0.72) * 1.6));
      smoothedPose.current.scale += (targetScale - smoothedPose.current.scale) * lerp;
      smoothedPose.current.angle += (angle - smoothedPose.current.angle) * lerp;
      smoothedPose.current.detected = true;
      smoothedPose.current.landmarks = landmarks;
    } else if (nose && nose.visibility > 0.4) {
      const lerp = 0.18;
      smoothedPose.current.x += (nose.x - smoothedPose.current.x) * lerp;
      smoothedPose.current.y += ((nose.y + 0.18) - smoothedPose.current.y) * lerp;
      smoothedPose.current.scale += (1.2 - smoothedPose.current.scale) * lerp;
      smoothedPose.current.angle += (0 - smoothedPose.current.angle) * lerp;
      smoothedPose.current.detected = true;
    }
  };

  // Draw Live Camera Frame
  const drawCameraFrame = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;
    }

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // 1. Mirrored video feed
    ctx.save();
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, width, height);
    ctx.restore();

    // 2. Dress overlay anchored at collar
    const pose = smoothedPose.current;
    const img = outfitImgRef.current;

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.save();
      ctx.globalAlpha = outfitOpacity;

      let targetX, targetY, dressWidth, dressHeight, angle;

      if (pose.detected) {
        targetX = (1 - pose.x) * width;
        targetY = pose.y * height + height * 0.03;
        
        const baseWidth = width * (pose.scale * (activeOutfit.defaultScale || 1.0) * transform.scale * 0.55);
        dressWidth = baseWidth;
        dressHeight = baseWidth / (activeOutfit.aspectRatio || 0.65);
        angle = -pose.angle;
      } else {
        targetX = width * 0.5;
        targetY = height * 0.52;
        dressWidth = width * 0.55 * transform.scale;
        dressHeight = dressWidth / (activeOutfit.aspectRatio || 0.65);
        angle = 0;
      }

      ctx.translate(targetX, targetY);
      ctx.rotate(angle);
      
      ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
      ctx.shadowBlur = 22;
      ctx.shadowOffsetY = 14;

      if (isTopOnly) {
        const cropHeight = img.naturalHeight * 0.52;
        const topH = dressHeight * 0.52;
        ctx.drawImage(img, 0, 0, img.naturalWidth, cropHeight, -dressWidth / 2, -topH * 0.08, dressWidth, topH);
      } else {
        ctx.drawImage(img, -dressWidth / 2, -dressHeight * 0.08, dressWidth, dressHeight);
      }
      ctx.restore();

      // Debug skeleton
      if (showSkeleton && pose.landmarks) {
        ctx.save();
        ctx.fillStyle = '#10b981';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;

        [11, 12, 23, 24, 25, 26].forEach((idx) => {
          const lm = pose.landmarks[idx];
          if (lm && lm.visibility > 0.3) {
            const lx = (1 - lm.x) * width;
            const ly = lm.y * height;
            ctx.beginPath();
            ctx.arc(lx, ly, 6, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        ctx.restore();
      }
    }
  };

  // -------------------------------------------------------------
  // PHOTO MODE: Smart Pose Landmark Detection & Auto-Alignment
  // -------------------------------------------------------------
  const analyzeAndAlignPhoto = async (imageSrc) => {
    setIsProcessingPhoto(true);
    setDetectionMessage('Aligning collar & shoulder proportions...');

    const testImg = new Image();
    testImg.crossOrigin = 'anonymous';
    testImg.src = imageSrc;

    testImg.onload = async () => {
      try {
        const detector = await getPoseDetector();
        
        let detectedLandmarks = null;
        detector.onResults((results) => {
          if (results && results.poseLandmarks) {
            detectedLandmarks = results.poseLandmarks;
          }
        });

        await detector.send({ image: testImg });
        await new Promise(r => setTimeout(r, 80));

        if (detectedLandmarks) {
          const leftShoulder = detectedLandmarks[11];
          const rightShoulder = detectedLandmarks[12];
          const leftHip = detectedLandmarks[23];
          const nose = detectedLandmarks[0];
          const leftEye = detectedLandmarks[2];
          const rightEye = detectedLandmarks[5];

          if (leftShoulder && rightShoulder && (leftShoulder.visibility > 0.25 || rightShoulder.visibility > 0.25)) {
            const midX = (leftShoulder.x + rightShoulder.x) / 2;
            const midY = (leftShoulder.y + rightShoulder.y) / 2;
            const shoulderDist = Math.hypot(rightShoulder.x - leftShoulder.x, rightShoulder.y - leftShoulder.y);
            
            const rawAngle = Math.atan2(leftShoulder.y - rightShoulder.y, leftShoulder.x - rightShoulder.x);
            const clampedAngle = Math.max(-0.35, Math.min(0.35, rawAngle));

            const isBustShot = midY > 0.45 || shoulderDist > 0.35 || (!leftHip || leftHip.visibility < 0.3);
            
            // Proportional shoulder scale: aligns garment shoulders to user's real shoulders
            const computedScale = Math.max(0.9, Math.min(2.4, (shoulderDist / 0.74) * 1.35));

            setTransform({
              x: midX,
              y: midY + 0.02,
              scale: computedScale,
              rotation: clampedAngle
            });

            setIsTopOnly(isBustShot);
            setDetectionMessage(isBustShot ? '👤 Portrait Detected — Shoulder Proportions Calibrated' : '✨ Body Detected — Full Silhouette Fitted');
          } else if (nose && (nose.visibility > 0.35 || leftEye || rightEye)) {
            const faceY = nose.y;
            const eyeDist = (leftEye && rightEye) ? Math.hypot(rightEye.x - leftEye.x, rightEye.y - leftEye.y) : 0.15;
            
            setTransform({
              x: nose.x,
              y: Math.min(0.85, faceY + 0.18),
              scale: Math.max(1.15, eyeDist * 8.0),
              rotation: 0
            });
            setIsTopOnly(true);
            setDetectionMessage('👤 Close-up Portrait — Neckline placed below chin');
          } else {
            setTransform({
              x: 0.5,
              y: 0.48,
              scale: 1.15,
              rotation: 0
            });
            setIsTopOnly(false);
          }
        } else {
          setTransform({
            x: 0.5,
            y: 0.48,
            scale: 1.15,
            rotation: 0
          });
        }
      } catch (err) {
        console.warn('Photo pose detection fallback:', err);
      } finally {
        setIsProcessingPhoto(false);
        setTimeout(updateCanvasBounds, 100);
        setTimeout(() => setDetectionMessage(null), 4000);
      }
    };
  };

  // -------------------------------------------------------------
  // GEMINI AI: Ultra-Fast Precision Fit (<1.5 seconds)
  // -------------------------------------------------------------
  const handleRunGeminiTryOn = async () => {
    const key = getGeminiApiKey();
    if (!key) {
      setShowApiKeyModal(true);
      return;
    }

    if (!uploadedImage) return;

    setIsGeneratingGemini(true);
    setGeminiStatus('Gemini Vision calibrating shoulder & neck contours...');

    try {
      const alignment = await alignWithGeminiVision(uploadedImage, activeOutfit);

      if (alignment) {
        setTransform({
          x: alignment.collarX,
          y: alignment.collarY,
          scale: alignment.recommendedScale,
          rotation: alignment.tiltAngleRad
        });
        setIsTopOnly(alignment.isPortraitOrBust);
        setDetectionMessage(`✨ Gemini AI precision fit applied!`);
        setTimeout(updateCanvasBounds, 50);
      }
    } catch (err) {
      console.error('Gemini Try-On Error:', err);
      if (err.message === 'NO_API_KEY') {
        setShowApiKeyModal(true);
      } else {
        setDetectionMessage(`Gemini Notice: ${err.message}`);
      }
    } finally {
      setIsGeneratingGemini(false);
      setGeminiStatus('');
      setTimeout(() => setDetectionMessage(null), 5000);
    }
  };

  // Save API Key
  const handleSaveApiKey = () => {
    if (apiKeyInput.trim()) {
      saveGeminiApiKey(apiKeyInput.trim());
      setHasCustomKey(true);
      setShowApiKeyModal(false);
      setApiKeyInput('');
      handleRunGeminiTryOn();
    }
  };

  // Draw Photo Canvas
  const drawPhotoFrame = useCallback(() => {
    const canvas = photoCanvasRef.current;
    if (!canvas || !uploadedImage) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const baseImg = new Image();
    baseImg.src = uploadedImage;
    baseImg.onload = () => {
      canvas.width = baseImg.naturalWidth || 800;
      canvas.height = baseImg.naturalHeight || 1000;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // 1. Base Photo
      ctx.drawImage(baseImg, 0, 0, width, height);

      // 2. Dress overlay anchored at collar with generous natural shoulder scale (0.78 base)
      const img = outfitImgRef.current;
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.save();
        ctx.globalAlpha = outfitOpacity;

        const targetX = transform.x * width;
        const targetY = transform.y * height;
        const dressWidth = width * 0.78 * transform.scale * (activeOutfit.defaultScale || 1.0);
        const dressHeight = dressWidth / (activeOutfit.aspectRatio || 0.65);

        ctx.translate(targetX, targetY);
        ctx.rotate(transform.rotation);
        
        ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
        ctx.shadowBlur = 24;
        ctx.shadowOffsetY = 16;

        if (isTopOnly) {
          const cropHeight = img.naturalHeight * 0.52;
          const topH = dressHeight * 0.52;
          ctx.drawImage(img, 0, 0, img.naturalWidth, cropHeight, -dressWidth / 2, -topH * 0.08, dressWidth, topH);
        } else {
          ctx.drawImage(img, -dressWidth / 2, -dressHeight * 0.08, dressWidth, dressHeight);
        }
        ctx.restore();
      }

      updateCanvasBounds();
    };
  }, [uploadedImage, transform, outfitOpacity, activeOutfit, isTopOnly, updateCanvasBounds]);

  useEffect(() => {
    if (activeMode === 'photo' && uploadedImage) {
      drawPhotoFrame();
    }
  }, [activeMode, uploadedImage, selectedOutfitIndex, transform, outfitOpacity, isTopOnly, drawPhotoFrame]);

  // Handle Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        setUploadedImage(dataUrl);
        setActiveMode('photo');
        analyzeAndAlignPhoto(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // Select Sample Model
  const selectSampleModel = (model) => {
    setUploadedImage(model.image);
    setActiveMode('photo');
    analyzeAndAlignPhoto(model.image);
  };

  // -------------------------------------------------------------
  // Direct Interactive Pointer Drag & Resize Handling on Canvas
  // -------------------------------------------------------------
  const handlePointerDown = (e, handleType) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setActiveHandle(handleType);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      initialTransform: { ...transform }
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !activeHandle) return;
    const stage = stageContainerRef.current;
    if (!stage) return;

    const rect = canvasBounds;
    const deltaX = (e.clientX - dragStartRef.current.mouseX) / (rect.width || 400);
    const deltaY = (e.clientY - dragStartRef.current.mouseY) / (rect.height || 600);

    const initial = dragStartRef.current.initialTransform;

    if (activeHandle === 'move') {
      setTransform(prev => ({
        ...prev,
        x: Math.max(0.1, Math.min(0.9, initial.x + deltaX)),
        y: Math.max(0.1, Math.min(0.95, initial.y + deltaY))
      }));
    } else if (activeHandle === 'se' || activeHandle === 'sw' || activeHandle === 'ne' || activeHandle === 'nw') {
      const scaleDelta = (e.clientY - dragStartRef.current.mouseY) / 180;
      const newScale = Math.max(0.5, Math.min(3.0, initial.scale + (activeHandle.includes('s') ? scaleDelta : -scaleDelta)));
      setTransform(prev => ({
        ...prev,
        scale: newScale
      }));
    } else if (activeHandle === 'rot') {
      const stageRect = stage.getBoundingClientRect();
      const centerX = stageRect.left + rect.left + initial.x * rect.width;
      const centerY = stageRect.top + rect.top + initial.y * rect.height;
      const rawRad = Math.atan2(e.clientY - centerY, e.clientX - centerX) - Math.PI / 2;
      const clampedRad = Math.max(-0.45, Math.min(0.45, rawRad));
      setTransform(prev => ({
        ...prev,
        rotation: clampedRad
      }));
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setActiveHandle(null);
  };

  // Mouse wheel zoom
  const handleWheel = (e) => {
    if (activeMode !== 'photo') return;
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.05 : -0.05;
    setTransform(prev => ({
      ...prev,
      scale: Math.max(0.5, Math.min(3.0, prev.scale + zoomFactor))
    }));
  };

  // Capture Snapshot
  const takeSnapshot = () => {
    setIsFlashActive(true);
    setTimeout(() => setIsFlashActive(false), 300);

    const canvas = activeMode === 'camera' ? canvasRef.current : photoCanvasRef.current;
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      setCapturedSnapshot(dataUrl);
    }
  };

  // Add active outfit to bag
  const handleAddLook = () => {
    onAddToCart({
      id: activeOutfit.id,
      name: activeOutfit.name,
      price: activeOutfit.price,
      image: activeOutfit.image,
      category: activeOutfit.category,
      size: userSize
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  // Cleanup on close
  const handleClose = () => {
    stopCameraStream();
    setActiveMode('welcome');
    setCapturedSnapshot(null);
    onClose();
  };

  if (!isOpen) return null;

  // Compute displayed overlay box size in container pixels
  const renderedDressW = (canvasBounds.width || 400) * 0.78 * transform.scale * (activeOutfit.defaultScale || 1.0);
  const renderedDressH = renderedDressW / (activeOutfit.aspectRatio || 0.65) * (isTopOnly ? 0.52 : 1.0);
  const overlayLeft = canvasBounds.left + transform.x * canvasBounds.width;
  const overlayTop = canvasBounds.top + transform.y * canvasBounds.height;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-black/85 backdrop-blur-md select-none animate-in fade-in duration-300"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      
      {/* Flash Effect on Snapshot */}
      {isFlashActive && (
        <div className="absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-300 animate-out fade-out" />
      )}

      {/* Main Full-Screen Virtual Atelier Modal */}
      <div className="relative w-full h-full max-w-[1600px] max-h-[96vh] m-2 sm:m-4 bg-[#141416] text-white rounded-3xl shadow-2xl border border-neutral-800 flex flex-col justify-between overflow-hidden">
        
        {/* Top Header Bar */}
        <header className="relative z-30 px-6 py-4 border-b border-neutral-800/80 flex items-center justify-between bg-black/40 backdrop-blur-md">
          
          {/* Brand & Fitting Badge */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <div>
              <span className="font-bodoni text-lg sm:text-xl font-bold tracking-[0.18em] uppercase block leading-none text-white">
                BLOOMAIR
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-amber-400 uppercase font-semibold flex items-center gap-1.5">
                <span>VIRTUAL ATELIER // FIT YOUR DRESS</span>
                {hasCustomKey && (
                  <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded text-[8px] border border-emerald-500/30">
                    GEMINI AI ACTIVE
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Center Mode Controls */}
          {activeMode !== 'welcome' && (
            <div className="hidden sm:flex items-center gap-1.5 bg-neutral-900/90 border border-neutral-700/70 p-1 rounded-full text-xs font-mono">
              <button
                onClick={() => {
                  stopCameraStream();
                  startCamera();
                }}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeMode === 'camera' ? 'bg-white text-black font-bold shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Live Camera</span>
              </button>

              <button
                onClick={() => {
                  stopCameraStream();
                  setActiveMode('photo');
                  if (!uploadedImage && SAMPLE_MODELS[0]) {
                    selectSampleModel(SAMPLE_MODELS[0]);
                  }
                }}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeMode === 'photo' ? 'bg-white text-black font-bold shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Photo Fitting</span>
              </button>
            </div>
          )}

          {/* Right Action Items */}
          <div className="flex items-center gap-2.5">
            
            {/* Gemini API Key Config */}
            <button
              onClick={() => setShowApiKeyModal(true)}
              className={`p-2 rounded-full border transition-colors flex items-center gap-1.5 px-3 text-xs font-mono ${
                hasCustomKey 
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 hover:bg-amber-500/20' 
                  : 'bg-neutral-900 border-neutral-700 text-neutral-400 hover:text-white'
              }`}
              title="Configure Gemini API Key for Ultra-Realistic Try-On"
            >
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">{hasCustomKey ? 'Gemini AI' : 'Add Gemini Key'}</span>
            </button>

            {activeMode !== 'welcome' && (
              <button
                onClick={() => setShowControls(!showControls)}
                className={`p-2 rounded-full border transition-colors ${
                  showControls 
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400' 
                    : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white'
                }`}
                title="Fine-tune Fit"
              >
                <Sliders className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={handleClose}
              className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </header>

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: WELCOME SCREEN (Find Your Perfect Look) */}
        {/* ------------------------------------------------------------- */}
        {activeMode === 'welcome' && (
          <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 overflow-y-auto text-center max-w-4xl mx-auto my-auto space-y-8 animate-in fade-in zoom-in-95 duration-300">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>POWERED BY GOOGLE GEMINI AI // HIGH ATELIER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
                Find Your Perfect Look
              </h1>
              <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
                Try luxury silhouettes, dresses, and streetwear looks directly over your body in real time with AI pose tracking or uploaded photos.
              </p>
            </div>

            {/* Two Primary Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl pt-2">
              
              {/* Option 1: Live Camera Mode */}
              <div 
                onClick={startCamera}
                className="group relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 rounded-3xl border border-neutral-800 hover:border-amber-500/60 transition-all duration-300 cursor-pointer flex flex-col items-center text-center shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-800/80 group-hover:bg-amber-500 text-amber-400 group-hover:text-black flex items-center justify-center transition-all duration-300 mb-5 shadow-inner">
                  <Camera className="w-8 h-8 stroke-[1.75]" />
                </div>
                <h3 className="font-bodoni text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Try with Camera
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                  Live mirror camera stream with real-time body landmark tracking and dynamic garment fitting.
                </p>
                <div className="mt-auto px-5 py-2.5 rounded-full bg-white/10 group-hover:bg-amber-500 group-hover:text-black text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all">
                  <span>Launch Camera</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Option 2: Upload Photo Mode */}
              <label className="group relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 rounded-3xl border border-neutral-800 hover:border-amber-500/60 transition-all duration-300 cursor-pointer flex flex-col items-center text-center shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handlePhotoUpload} 
                  className="hidden" 
                />
                <div className="w-16 h-16 rounded-2xl bg-neutral-800/80 group-hover:bg-amber-500 text-amber-400 group-hover:text-black flex items-center justify-center transition-all duration-300 mb-5 shadow-inner">
                  <Upload className="w-8 h-8 stroke-[1.75]" />
                </div>
                <h3 className="font-bodoni text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Upload Photo
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                  Upload full-body portraits or selfies with Gemini AI collar alignment and interactive drag & drop.
                </p>
                <div className="mt-auto px-5 py-2.5 rounded-full bg-white/10 group-hover:bg-amber-500 group-hover:text-black text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all">
                  <span>Choose Photo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </label>

            </div>

            {/* Sample Models Quick Select */}
            <div className="pt-2 flex flex-col items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
                Or test with Atelier Preset Models:
              </span>
              <div className="flex items-center gap-3">
                {SAMPLE_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => selectSampleModel(model)}
                    className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono transition-colors"
                  >
                    <img src={model.image} alt={model.name} className="w-5 h-5 rounded-full object-cover" />
                    <span>{model.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Personalization Expander */}
            <div className="w-full max-w-xl border-t border-neutral-800/80 pt-6">
              <button
                onClick={() => setShowPersonalize(!showPersonalize)}
                className="text-xs font-mono text-neutral-400 hover:text-amber-400 flex items-center justify-center gap-1.5 mx-auto transition-colors"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{showPersonalize ? 'Hide Personalization' : 'Custom Sizing & Measurements (Optional)'}</span>
              </button>

              {showPersonalize && (
                <div className="mt-4 p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 grid grid-cols-3 gap-4 text-left text-xs font-mono animate-in fade-in duration-300">
                  <div>
                    <label className="text-neutral-400 block mb-1">Height (cm)</label>
                    <input 
                      type="number" 
                      value={userHeight} 
                      onChange={(e) => setUserHeight(Number(e.target.value))}
                      className="w-full bg-black/60 border border-neutral-700 rounded-lg px-3 py-1.5 text-white" 
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 block mb-1">Weight (kg)</label>
                    <input 
                      type="number" 
                      value={userWeight} 
                      onChange={(e) => setUserWeight(Number(e.target.value))}
                      className="w-full bg-black/60 border border-neutral-700 rounded-lg px-3 py-1.5 text-white" 
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 block mb-1">Preferred Size</label>
                    <select 
                      value={userSize} 
                      onChange={(e) => setUserSize(e.target.value)}
                      className="w-full bg-black/60 border border-neutral-700 rounded-lg px-3 py-1.5 text-white" 
                    >
                      <option value="XS">XS (34)</option>
                      <option value="S">S (36)</option>
                      <option value="M">M (38)</option>
                      <option value="L">L (40)</option>
                      <option value="XL">XL (42)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Privacy Guarantee Note */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-neutral-500 font-sans">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Camera feed & photos are processed 100% locally in your browser.</span>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* VIEW 2: ACTIVE LIVE CAMERA OR PHOTO STAGE */}
        {/* ------------------------------------------------------------- */}
        {activeMode !== 'welcome' && (
          <div 
            ref={stageContainerRef}
            onWheel={handleWheel}
            className="relative flex-1 flex flex-col items-center justify-center overflow-hidden bg-neutral-950 select-none cursor-default"
          >
            
            {/* Camera Error Display */}
            {cameraError && (
              <div className="absolute z-40 max-w-md p-6 bg-neutral-900 border border-red-500/50 rounded-2xl text-center space-y-4">
                <p className="text-sm text-red-400">{cameraError}</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={startCamera}
                    className="px-4 py-2 bg-amber-500 text-black font-bold text-xs rounded-full"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => {
                      setActiveMode('photo');
                      selectSampleModel(SAMPLE_MODELS[0]);
                    }}
                    className="px-4 py-2 bg-neutral-800 text-white text-xs rounded-full"
                  >
                    Use Sample Photo
                  </button>
                </div>
              </div>
            )}

            {/* Hidden Source Video Element for Live Camera */}
            <video
              ref={videoRef}
              playsInline
              muted
              className="hidden"
            />

            {/* Camera Render Canvas */}
            {activeMode === 'camera' && (
              <div className="relative w-full h-full flex items-center justify-center max-h-[70vh] sm:max-h-[74vh]">
                <canvas
                  ref={canvasRef}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />

                {/* Live Pose Detection Status Indicator */}
                <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-700 text-[10px] font-mono">
                  <span className={`w-2 h-2 rounded-full ${smoothedPose.current.detected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400 animate-ping'}`}></span>
                  <span>{smoothedPose.current.detected ? 'AI BODY TRACKING ON' : 'ALIGN BODY IN FRAME'}</span>
                </div>
              </div>
            )}

            {/* Photo Render Canvas */}
            {activeMode === 'photo' && (
              <div className="relative w-full h-full flex items-center justify-center max-h-[70vh] sm:max-h-[74vh] group">
                <canvas
                  ref={photoCanvasRef}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />

                {/* Pixel-Perfect Interactive Drag & Resize Overlay on the Garment */}
                <div 
                  className="absolute z-20 pointer-events-auto"
                  style={{
                    left: `${overlayLeft}px`,
                    top: `${overlayTop}px`,
                    transform: `translate(-50%, -8%) rotate(${transform.rotation}rad)`,
                    width: `${Math.max(100, renderedDressW)}px`,
                    height: `${Math.max(120, renderedDressH)}px`
                  }}
                >
                  {/* Hit Area for Dragging */}
                  <div 
                    onPointerDown={(e) => handlePointerDown(e, 'move')}
                    className={`w-full h-full cursor-grab active:cursor-grabbing border border-dashed rounded-2xl transition-all ${
                      isDragging 
                        ? 'border-amber-400 bg-amber-500/10 shadow-2xl ring-2 ring-amber-400/50' 
                        : 'border-white/20 hover:border-amber-400/80 hover:bg-white/5'
                    }`}
                  >
                    {/* Floating Collar Anchor Pin */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-400 border-2 border-black flex items-center justify-center shadow-lg" title="Collar Anchor Point">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    </div>

                    {/* Corner Resize Handles */}
                    <div 
                      onPointerDown={(e) => handlePointerDown(e, 'se')}
                      className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-white text-black border-2 border-amber-500 cursor-nwse-resize shadow-md flex items-center justify-center hover:scale-125 transition-transform"
                      title="Drag to resize shoulders & body"
                    >
                      <Maximize2 className="w-2.5 h-2.5" />
                    </div>

                    <div 
                      onPointerDown={(e) => handlePointerDown(e, 'sw')}
                      className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-white text-black border-2 border-amber-500 cursor-nesw-resize shadow-md flex items-center justify-center hover:scale-125 transition-transform"
                      title="Drag to resize shoulders & body"
                    >
                      <Maximize2 className="w-2.5 h-2.5" />
                    </div>

                    {/* Top Rotate Handle (centered right above collar) */}
                    <div 
                      onPointerDown={(e) => handlePointerDown(e, 'rot')}
                      className="absolute -top-7 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-neutral-900 text-amber-400 border border-amber-500/80 cursor-grab active:cursor-grabbing shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                      title="Drag to tilt"
                    >
                      <RotateCw className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Gemini AI Generating Spinner Overlay */}
                {isGeneratingGemini && (
                  <div className="absolute inset-0 z-40 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="relative w-14 h-14">
                      <div className="w-full h-full rounded-full border-4 border-amber-500/20 border-t-amber-400 animate-spin" />
                      <Sparkles className="w-5 h-5 text-amber-400 absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bodoni text-lg font-bold text-white">Gemini AI Stylist</h4>
                      <p className="text-xs font-mono text-amber-300 animate-pulse">{geminiStatus}</p>
                    </div>
                  </div>
                )}

                {/* Smart Detection Banner / Status */}
                {detectionMessage && !isGeneratingGemini && (
                  <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/40 text-xs font-mono text-amber-300 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                    <span>{detectionMessage}</span>
                  </div>
                )}
              </div>
            )}

            {/* Quick On-Stage Action Floating Toolbar */}
            <div className="absolute left-4 bottom-4 z-30 flex items-center gap-2 bg-black/75 backdrop-blur-md p-1.5 rounded-full border border-neutral-700/80 text-xs font-mono shadow-2xl">
              
              {/* Gemini AI Fast Fit Action Button */}
              {activeMode === 'photo' && uploadedImage && (
                <button
                  onClick={handleRunGeminiTryOn}
                  disabled={isGeneratingGemini}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 hover:from-amber-400 hover:to-amber-200 text-black font-bold transition-all shadow-lg flex items-center gap-2 active:scale-95"
                  title="Run Google Gemini AI Vision fitting"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>AI Gemini Fit</span>
                </button>
              )}

              {/* Toggle Top Only / Full Look */}
              <button
                onClick={() => setIsTopOnly(!isTopOnly)}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  isTopOnly ? 'bg-amber-500 text-black font-bold shadow' : 'text-neutral-300 hover:text-white'
                }`}
                title="Toggle between full outfit and upper jacket/top only"
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>{isTopOnly ? 'Top Focus' : 'Full Look'}</span>
              </button>

              {/* Reset positioning */}
              <button
                onClick={() => {
                  setTransform({ x: 0.5, y: 0.48, scale: 1.0, rotation: 0 });
                  setOutfitOpacity(1.0);
                  setTimeout(updateCanvasBounds, 50);
                }}
                className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all"
                title="Reset Position"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>

            </div>

            {/* Stage Side Utility Tools (Snapshot, Camera Flip, Skeleton Toggle) */}
            <div className="absolute right-4 top-4 z-30 flex flex-col gap-2.5">
              
              {/* Snapshot Button */}
              <button
                onClick={takeSnapshot}
                className="w-11 h-11 rounded-full bg-white text-black hover:bg-amber-400 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
                title="Capture Fit Photo"
              >
                <Camera className="w-5 h-5" />
              </button>

              {/* Camera Facing Flip */}
              {activeMode === 'camera' && (
                <button
                  onClick={() => {
                    const newMode = facingMode === 'user' ? 'environment' : 'user';
                    setFacingMode(newMode);
                    stopCameraStream();
                    setTimeout(startCamera, 100);
                  }}
                  className="w-11 h-11 rounded-full bg-black/60 text-white hover:bg-neutral-800 border border-neutral-700 flex items-center justify-center shadow-lg transition-all"
                  title="Switch Front/Back Camera"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              )}

              {/* Skeleton Toggle */}
              {activeMode === 'camera' && (
                <button
                  onClick={() => setShowSkeleton(!showSkeleton)}
                  className={`w-11 h-11 rounded-full border flex items-center justify-center shadow-lg transition-all ${
                    showSkeleton ? 'bg-emerald-500 text-black border-emerald-400' : 'bg-black/60 text-white border-neutral-700 hover:bg-neutral-800'
                  }`}
                  title="Toggle Body Pose Skeleton"
                >
                  <Layers className="w-4 h-4" />
                </button>
              )}

            </div>

            {/* Fine-Tuning Sliding Drawer */}
            {showControls && (
              <div className="absolute right-4 top-20 z-30 bg-black/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-700 space-y-3 w-64 text-xs font-mono animate-in slide-in-from-right duration-200 shadow-2xl">
                <div className="flex items-center justify-between pb-1 border-b border-neutral-700">
                  <span className="font-bold text-amber-400">PRECISION CONTROLS</span>
                  <button onClick={() => setShowControls(false)} className="text-neutral-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                
                <div>
                  <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
                    <span>Vertical Position (Y)</span>
                    <span>{Math.round(transform.y * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="0.9"
                    step="0.01"
                    value={transform.y}
                    onChange={(e) => setTransform(prev => ({ ...prev, y: Number(e.target.value) }))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
                    <span>Horizontal Position (X)</span>
                    <span>{Math.round(transform.x * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="0.8"
                    step="0.01"
                    value={transform.x}
                    onChange={(e) => setTransform(prev => ({ ...prev, x: Number(e.target.value) }))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
                    <span>Shoulder & Garment Scale</span>
                    <span>{Math.round(transform.scale * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.05"
                    value={transform.scale}
                    onChange={(e) => setTransform(prev => ({ ...prev, scale: Number(e.target.value) }))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
                    <span>Overlay Opacity</span>
                    <span>{Math.round(outfitOpacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.3"
                    max="1.0"
                    step="0.05"
                    value={outfitOpacity}
                    onChange={(e) => setOutfitOpacity(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>
            )}

            {/* Helpful floating hint */}
            {activeMode === 'photo' && !isDragging && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 bg-black/60 px-3 py-1 rounded-full border border-neutral-800 backdrop-blur-sm">
                <Move className="w-3 h-3 text-amber-400" />
                <span>Tip: Drag corners to widen shoulders • Click & drag dress directly onto your body</span>
              </div>
            )}

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM HORIZONTAL DRESS SELECTION CAROUSEL */}
        {/* ------------------------------------------------------------- */}
        {activeMode !== 'welcome' && (
          <footer className="relative z-30 bg-black/85 backdrop-blur-md border-t border-neutral-800 p-4 sm:p-5">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Left: Active Outfit Metadata & Quick Add */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex-1 md:flex-none">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      {activeOutfit.tag}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                      {activeOutfit.category}
                    </span>
                  </div>
                  <h4 className="font-bodoni text-lg sm:text-xl font-bold text-white truncate max-w-xs">
                    {activeOutfit.name}
                  </h4>
                  <p className="font-mono text-xs font-bold text-amber-300">
                    ${activeOutfit.price} USD
                  </p>
                </div>

                <button
                  onClick={handleAddLook}
                  className={`py-3 px-5 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg active:scale-95 ${
                    addedToast ? 'bg-emerald-600 text-white' : 'bg-amber-500 hover:bg-amber-400 text-black'
                  }`}
                >
                  {addedToast ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
              </div>

              {/* Center/Right: Horizontal Carousel of Outfits */}
              <div className="flex items-center gap-3 overflow-x-auto max-w-full py-1 no-scrollbar">
                {TRYON_OUTFITS.map((outfit, idx) => {
                  const isSelected = idx === selectedOutfitIndex;
                  return (
                    <div
                      key={outfit.id}
                      onClick={() => {
                        setSelectedOutfitIndex(idx);
                      }}
                      className={`relative flex-shrink-0 cursor-pointer rounded-2xl p-1.5 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-neutral-800 ring-2 ring-amber-400 scale-105 shadow-xl' 
                          : 'bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 opacity-70 hover:opacity-100'
                      }`}
                      style={{ width: '80px', height: '100px' }}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-between overflow-hidden">
                        <img 
                          src={outfit.thumbnail} 
                          alt={outfit.name} 
                          className="h-[68px] w-auto object-contain drop-shadow-md"
                        />
                        <span className="text-[9px] font-mono text-neutral-300 font-bold truncate w-full text-center">
                          ${outfit.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </footer>
        )}

      </div>

      {/* Snapshot Preview Modal */}
      {capturedSnapshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-md w-full bg-neutral-900 border border-neutral-700 rounded-3xl p-6 text-center space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                FITTING SNAPSHOT // SS26
              </span>
              <button onClick={() => setCapturedSnapshot(null)} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-inner">
              <img src={capturedSnapshot} alt="Fitting Snapshot" className="w-full h-auto object-contain" />
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <a
                href={capturedSnapshot}
                download={`bloomair-virtual-fit-${activeOutfit.id}.png`}
                className="flex-1 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-neutral-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Save Photo</span>
              </a>

              <button
                onClick={() => {
                  handleAddLook();
                  setCapturedSnapshot(null);
                }}
                className="flex-1 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Acquire Look</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gemini API Key Configuration Dialog */}
      {showApiKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-md w-full bg-neutral-900 border border-neutral-700 rounded-3xl p-6 text-center space-y-5 shadow-2xl">
            
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Key className="w-4 h-4" />
                <span>GOOGLE GEMINI AI CONFIGURATION</span>
              </div>
              <button onClick={() => setShowApiKeyModal(false)} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-left space-y-3 text-xs">
              <p className="text-neutral-300 leading-relaxed">
                Connect your <strong>Google Gemini API Key</strong> to unlock ultra-precise AI collar & face alignment.
              </p>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Gemini API Key:
                </label>
                <input 
                  type="password"
                  placeholder="AIzaSy..."
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  className="w-full bg-black/70 border border-neutral-700 focus:border-amber-400 rounded-xl px-4 py-2.5 text-white font-mono text-xs outline-none transition-colors"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                <span>Key is saved locally in your browser.</span>
                <a 
                  href="https://aistudio.google.com/app/apikey" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Get Free Key</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {hasCustomKey && (
                <button
                  onClick={() => {
                    clearGeminiApiKey();
                    setHasCustomKey(false);
                    setShowApiKeyModal(false);
                  }}
                  className="px-4 py-2.5 rounded-full bg-neutral-800 text-neutral-400 hover:text-red-400 text-xs font-mono transition-colors"
                >
                  Clear Key
                </button>
              )}

              <button
                onClick={handleSaveApiKey}
                disabled={!apiKeyInput.trim()}
                className="flex-1 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 hover:from-amber-400 hover:to-amber-200 disabled:opacity-50 text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
              >
                Activate Gemini AI
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
