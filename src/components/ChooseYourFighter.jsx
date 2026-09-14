import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ShoppingBag, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Check, 
  X, 
  Maximize2, 
  SlidersHorizontal,
  Volume2,
  VolumeX
} from 'lucide-react';
import { FIGHTERS } from '../data/fighters';

export default function ChooseYourFighter({ onAddToCart }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [audioMuted, setAudioMuted] = useState(true);

  // Smooth scroll and momentum state
  const scrollProgress = useRef(0);
  const targetProgress = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartProgress = useRef(0);

  const containerRef = useRef(null);
  const runwayContainerRef = useRef(null);
  const parallaxBgRef = useRef(null);
  const totalFighters = FIGHTERS.length;
  const activeFighter = FIGHTERS[selectedIndex] || FIGHTERS[0];

  // Glide to specific index
  const goToIndex = (idx) => {
    const clamped = Math.max(0, Math.min(totalFighters - 1, idx));
    targetProgress.current = clamped;
  };

  const handlePrev = () => {
    const target = selectedIndex === 0 ? totalFighters - 1 : selectedIndex - 1;
    goToIndex(target);
  };

  const handleNext = () => {
    const target = selectedIndex === totalFighters - 1 ? 0 : selectedIndex + 1;
    goToIndex(target);
  };

  // Drag interaction across runway
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartProgress.current = targetProgress.current;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - dragStartX.current;
    const sensitivity = window.innerWidth < 768 ? 0.0035 : 0.0022;
    
    targetProgress.current = Math.max(
      0,
      Math.min(totalFighters - 1, dragStartProgress.current - deltaX * sensitivity)
    );
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const snapped = Math.round(targetProgress.current);
    targetProgress.current = Math.max(0, Math.min(totalFighters - 1, snapped));
  };

  // Wheel scroll interaction
  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 6) {
      const speed = 0.0016;
      targetProgress.current = Math.max(
        0,
        Math.min(totalFighters - 1, targetProgress.current + delta * speed)
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Main GSAP animation loop for cinematic momentum runway physics
  useEffect(() => {
    let animId;

    const render = () => {
      const lerpFactor = 0.088;
      scrollProgress.current += (targetProgress.current - scrollProgress.current) * lerpFactor;
      
      const currentProg = scrollProgress.current;
      const roundedIndex = Math.round(currentProg);

      if (roundedIndex !== selectedIndex && roundedIndex >= 0 && roundedIndex < totalFighters) {
        setSelectedIndex(roundedIndex);
      }

      // Parallax background numeral shift
      if (parallaxBgRef.current) {
        const bgOffset = -currentProg * 140;
        gsap.set(parallaxBgRef.current, { x: bgOffset });
      }

      // Model runway positions
      if (runwayContainerRef.current) {
        const modelElements = runwayContainerRef.current.querySelectorAll('.runway-model-item');
        const viewportWidth = window.innerWidth;
        const spacing = viewportWidth < 640 ? 280 : viewportWidth < 1024 ? 400 : 500;

        modelElements.forEach((el, idx) => {
          const delta = idx - currentProg;
          const xPos = delta * spacing;
          const absDelta = Math.abs(delta);

          // Center model is grand (1.22x), sides shrink to 0.75x
          const scale = Math.max(0.75, 1.22 - absDelta * 0.40);
          
          // Center is full opacity (1.0), sides fade to 0.20
          const opacity = Math.max(0.18, 1 - absDelta * 0.68);
          
          // Progressive optical blur
          const blur = Math.min(5, absDelta * 2.8);
          
          // Active model always on top
          const zIndex = Math.max(1, 30 - Math.round(absDelta * 10));

          gsap.set(el, {
            x: xPos,
            scale: scale,
            opacity: opacity,
            filter: `blur(${blur}px)`,
            zIndex: zIndex,
          });
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [selectedIndex, totalFighters]);

  const handleQuickAdd = () => {
    onAddToCart({
      id: activeFighter.id,
      name: activeFighter.name,
      price: activeFighter.price,
      image: activeFighter.image,
      category: activeFighter.category,
      size: 'M'
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <section 
      id="fighter-select" 
      ref={containerRef}
      onWheel={handleWheel}
      className="py-12 md:py-20 bg-[#faf8f5] relative overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grand Studio Frame */}
        <div className="relative bg-gradient-to-b from-[#faf8f5] via-[#f7f4ee] to-[#f2ede4] rounded-[36px] border border-neutral-300/80 shadow-[0_25px_70px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-12 min-h-[740px] md:min-h-[820px] flex flex-col justify-between overflow-hidden">
          
          {/* 1. Giant Background Watermark Numeral & ZUDIO Typographic Drift (Matching Image 1) */}
          <div 
            ref={parallaxBgRef}
            className="absolute inset-0 pointer-events-none flex items-center whitespace-nowrap z-0 opacity-[0.055]"
          >
            <div className="flex items-center gap-28 font-bodoni text-[280px] md:text-[380px] font-bold tracking-tighter uppercase leading-none">
              {FIGHTERS.map((item, i) => (
                <div key={i} className="flex items-center gap-16">
                  <span>{item.number}</span>
                  <span className="font-sans font-black text-[140px] md:text-[200px] tracking-tight text-stroke-dark">
                    ZUDIO
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Radiant Atmospheric Ambient Light (Matching Image 1 Golden & Tinted Glow) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 transition-all duration-1000">
            <div 
              className="w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] md:w-[900px] md:h-[900px] rounded-full blur-3xl opacity-30 transition-all duration-1000"
              style={{ backgroundColor: activeFighter.palette }}
            ></div>
          </div>

          {/* 3. Top Studio Header (Exact Mockup Branding & Atelier Code) */}
          <div className="flex items-center justify-between relative z-30">
            
            {/* Left Brand Identity */}
            <div>
              <span className="font-bodoni text-2xl sm:text-3xl font-semibold tracking-[0.16em] text-neutral-950 uppercase block leading-none">
                ZUDIO
              </span>
              <span className="text-[9px] font-mono tracking-[0.35em] text-neutral-500 uppercase block mt-1 font-semibold">
                HAUTE COUTURE • PARIS
              </span>
            </div>

            {/* Center Status Code Pill */}
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-200/90 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="font-bold text-neutral-900">CODICE ATELIER BLM-{String(selectedIndex + 1).padStart(2, '0')}V26</span>
              <span className="text-neutral-400">/ {String(totalFighters).padStart(2, '0')}</span>
            </div>

            {/* Right Atmosphere Toggle */}
            <button 
              onClick={() => setAudioMuted(!audioMuted)}
              className="p-2 rounded-full text-neutral-600 hover:text-black hover:bg-neutral-200/60 transition-colors hidden md:flex items-center gap-2 text-xs font-mono"
            >
              {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600 animate-pulse" />}
              <span className="text-[11px] uppercase tracking-wider">{audioMuted ? 'Atmosphere: Off' : 'Soundtrack: Live'}</span>
            </button>

          </div>

          {/* 4. Center Stage: Continuous 3D Spatial Runway with Multi-Model Perspective */}
          <div 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            className="relative my-auto flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px] w-full overflow-hidden cursor-grab active:cursor-grabbing z-20"
          >
            
            {/* Runway Floor Shadow & Spotlight Guide Rings */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-0">
              <div 
                className="w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full border border-neutral-300/60 flex items-center justify-center"
                style={{ transform: 'rotateX(76deg)' }}
              >
                <div className="w-[480px] h-[480px] rounded-full border border-dashed border-neutral-400/40 flex items-center justify-center">
                  <div className="w-[320px] h-[320px] rounded-full border border-neutral-300/50"></div>
                </div>
              </div>
              <div className="w-64 h-12 bg-neutral-950/15 rounded-full blur-xl mx-auto -mt-6"></div>
            </div>

            {/* Continuous Runway Sequence Container */}
            <div 
              ref={runwayContainerRef}
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
              {FIGHTERS.map((fighter, idx) => {
                return (
                  <div
                    key={fighter.id}
                    onClick={() => goToIndex(idx)}
                    className="runway-model-item absolute flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
                    style={{
                      width: '320px',
                      height: '520px',
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={fighter.image}
                        alt={fighter.name}
                        className="h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.22)] pointer-events-none transition-transform duration-300"
                        draggable={false}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Left Stepper Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-neutral-950 text-neutral-900 hover:text-white border border-neutral-200 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
              aria-label="Previous Outfit"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Floating Right Stepper Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-neutral-950 text-neutral-900 hover:text-white border border-neutral-200 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
              aria-label="Next Outfit"
            >
              <ChevronRight className="w-5 h-5 stroke-[2]" />
            </button>

          </div>

          {/* 5. Bottom Editorial Overlay & Interactive Runway Timeline (Exact Match to Image 1) */}
          <div className="relative z-30 pt-4 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 border-t border-neutral-200/80">
            
            {/* Bottom-Left: Editorial Details & Action Buttons (Image 1 Style) */}
            <div className="max-w-xl transition-all duration-500 space-y-2">
              
              {/* Badge */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-amber-700 font-bold bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  {activeFighter.collectionBadge}
                </span>
                <span className="text-neutral-400 text-xs font-mono">•</span>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  {activeFighter.category}
                </span>
              </div>

              {/* Giant Serif Title */}
              <h3 className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-950 tracking-tight leading-none">
                {activeFighter.name}
              </h3>

              {/* Editorial Description */}
              <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed max-w-md line-clamp-2">
                {activeFighter.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleQuickAdd}
                  className={`py-3 px-6 rounded-full text-xs font-semibold tracking-[0.18em] uppercase flex items-center gap-2 shadow-lg transition-all active:scale-95 ${
                    addedAnimation
                      ? 'bg-emerald-600 text-white'
                      : 'bg-neutral-950 text-white hover:bg-neutral-800'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5 text-[#e6c281]" />
                      <span>Add to Bag (₹{activeFighter.price})</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setSelectedOutfit(activeFighter);
                    setIsDetailsOpen(true);
                  }}
                  className="py-3 px-5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Bottom-Right: Interactive Numbered Timeline & Progress Bar (Image 1 Style) */}
            <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
              
              {/* Clickable Look Numbers */}
              <div className="flex items-center gap-3 sm:gap-5 text-xs font-mono tracking-widest">
                {FIGHTERS.map((item, idx) => {
                  const isActive = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => goToIndex(idx)}
                      className={`transition-all py-1 px-1.5 font-bold ${
                        isActive 
                          ? 'text-neutral-950 border-b-2 border-neutral-950 scale-110' 
                          : 'text-neutral-400 hover:text-neutral-800'
                      }`}
                    >
                      {item.number}
                    </button>
                  );
                })}
              </div>

              {/* Progress Track */}
              <div className="w-48 sm:w-64 h-[2px] bg-neutral-200 rounded-full relative overflow-hidden">
                <div 
                  className="h-full bg-neutral-950 transition-all duration-300 rounded-full"
                  style={{
                    width: `${((selectedIndex + 1) / totalFighters) * 100}%`
                  }}
                ></div>
              </div>

              <div className="flex items-center justify-between w-full lg:w-auto gap-6">
                <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                  SCROLL / DRAG HORIZONTALLY
                </span>

                {/* Circular Steppers */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black bg-white flex items-center justify-center text-neutral-800 transition-colors shadow-sm"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black bg-white flex items-center justify-center text-neutral-800 transition-colors shadow-sm"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 6. Look Specifications Slide-Out Drawer */}
      {isDetailsOpen && selectedOutfit && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsDetailsOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-lg w-full bg-[#faf8f5] shadow-2xl flex flex-col justify-between z-50 p-6 sm:p-10 animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
                  LOOK SPECIFICATIONS // {selectedOutfit.number}
                </span>
                <button 
                  onClick={() => setIsDetailsOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-black rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Outfit Header */}
              <div className="mt-8 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-700 font-semibold block">
                  {selectedOutfit.collectionBadge}
                </span>
                <h3 className="font-bodoni text-3xl font-bold text-neutral-950">
                  {selectedOutfit.name}
                </h3>
                <p className="text-base font-bold font-mono text-neutral-900">₹{selectedOutfit.price}</p>
                <p className="text-xs text-neutral-600 pt-2 font-light leading-relaxed">
                  {selectedOutfit.description}
                </p>
              </div>

              {/* Technical Fabrication Details */}
              <div className="mt-8 space-y-3 bg-white p-5 rounded-2xl border border-neutral-200">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-900 border-b border-neutral-100 pb-2">
                  Atelier Craftsmanship:
                </h4>
                <div className="space-y-2 text-xs text-neutral-600">
                  <p><strong className="text-neutral-900">Fabric:</strong> {selectedOutfit.details.fabric}</p>
                  <p><strong className="text-neutral-900">Tailoring:</strong> {selectedOutfit.details.tailoring}</p>
                  <p><strong className="text-neutral-900">Care:</strong> {selectedOutfit.details.care}</p>
                  <p><strong className="text-neutral-900">Fitting:</strong> {selectedOutfit.details.modelStats}</p>
                </div>
              </div>

              {/* Pieces Breakdown */}
              <div className="mt-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-900">
                  Included in Look:
                </h4>
                <div className="space-y-1.5">
                  {selectedOutfit.pieces.map((piece, i) => (
                    <div key={i} className="flex justify-between text-xs text-neutral-700 bg-white px-3.5 py-2 rounded-xl border border-neutral-100">
                      <span>• {piece.name}</span>
                      <span className="font-mono font-bold">₹{piece.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer Checkout */}
            <div className="pt-6 border-t border-neutral-200">
              <button
                onClick={() => {
                  onAddToCart({
                    id: selectedOutfit.id,
                    name: selectedOutfit.name,
                    price: selectedOutfit.price,
                    image: selectedOutfit.image,
                    category: selectedOutfit.category,
                    size: 'M'
                  });
                  setIsDetailsOpen(false);
                }}
                className="w-full py-4 bg-neutral-950 hover:bg-neutral-800 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <ShoppingBag className="w-4 h-4 text-[#e6c281]" />
                <span>Acquire Full Look (₹{selectedOutfit.price})</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
