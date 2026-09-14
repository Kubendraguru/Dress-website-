import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ShoppingBag, 
  ArrowRight, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  X, 
  Check, 
  ShieldCheck, 
  Maximize2,
  Sliders,
  Volume2,
  VolumeX
} from 'lucide-react';
import { FASHION_COLLECTION } from '../data/fashionCollection';

export default function CinematicHorizontalScroll({ onAddToCart, cartCount, onOpenCart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [audioMuted, setAudioMuted] = useState(true);

  // Smooth scroll state
  const scrollProgress = useRef(0);
  const targetProgress = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartProgress = useRef(0);

  const containerRef = useRef(null);
  const modelsContainerRef = useRef(null);
  const parallaxBgRef = useRef(null);
  const activeOutfit = FASHION_COLLECTION[currentIndex];
  const totalOutfits = FASHION_COLLECTION.length;

  // Glide to specific index with smooth GSAP easing
  const goToIndex = (idx) => {
    const clamped = Math.max(0, Math.min(totalOutfits - 1, idx));
    targetProgress.current = clamped;
  };

  const handlePrev = () => {
    goToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    goToIndex(currentIndex + 1);
  };

  // Drag handlers
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
      Math.min(totalOutfits - 1, dragStartProgress.current - deltaX * sensitivity)
    );
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    // Snap to nearest whole look index
    const snapped = Math.round(targetProgress.current);
    targetProgress.current = Math.max(0, Math.min(totalOutfits - 1, snapped));
  };

  // Wheel scroll handler (transforms vertical/horizontal scroll into horizontal progress)
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const speed = 0.0018;
    targetProgress.current = Math.max(
      0, 
      Math.min(totalOutfits - 1, targetProgress.current + delta * speed)
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') handleNext();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Main GSAP Animation Loop for buttery smooth cinematic interpolation
  useEffect(() => {
    let animationFrameId;

    const render = () => {
      // Smooth lerp (linear interpolation) with luxurious momentum
      const lerpFactor = 0.085;
      scrollProgress.current += (targetProgress.current - scrollProgress.current) * lerpFactor;
      
      const currentProg = scrollProgress.current;
      const roundedIndex = Math.round(currentProg);
      
      if (roundedIndex !== currentIndex && roundedIndex >= 0 && roundedIndex < totalOutfits) {
        setCurrentIndex(roundedIndex);
      }

      // Parallax background drift
      if (parallaxBgRef.current) {
        const bgOffset = -currentProg * 180;
        gsap.set(parallaxBgRef.current, { x: bgOffset });
      }

      // Position each model along the horizontal runway
      if (modelsContainerRef.current) {
        const modelElements = modelsContainerRef.current.querySelectorAll('.runway-model-card');
        const viewportWidth = window.innerWidth;
        const spacing = viewportWidth < 640 ? viewportWidth * 0.75 : viewportWidth < 1024 ? 420 : 540;

        modelElements.forEach((el, idx) => {
          const delta = idx - currentProg;
          const xPos = delta * spacing;
          
          // Distance from screen center
          const absDelta = Math.abs(delta);
          
          // Cinematic Scale: Center is 1.22x, side models shrink to 0.78x
          const scale = Math.max(0.75, 1.22 - absDelta * 0.42);
          
          // Opacity: Center is 1.0, side models fade to 0.25
          const opacity = Math.max(0.18, 1 - absDelta * 0.68);
          
          // Soft focal blur: Center is 0px, side models blur progressively
          const blur = Math.min(5, absDelta * 2.8);
          
          // Z-Index: Active model always in front
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

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [currentIndex, totalOutfits]);

  const handleQuickAdd = () => {
    onAddToCart({
      id: activeOutfit.id,
      name: activeOutfit.name,
      price: activeOutfit.price,
      image: activeOutfit.image,
      category: activeOutfit.category,
      size: 'M'
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div 
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      className="relative w-screen h-screen overflow-hidden bg-[#faf8f5] text-neutral-950 select-none cursor-grab active:cursor-grabbing flex flex-col justify-between"
    >
      
      {/* 1. Background Parallax Layer: Giant Numeral & Atmospheric Typography */}
      <div 
        ref={parallaxBgRef}
        className="absolute inset-0 pointer-events-none flex items-center whitespace-nowrap z-0 opacity-[0.045]"
      >
        <div className="flex items-center gap-32 font-bodoni text-[260px] md:text-[380px] font-bold tracking-tighter uppercase leading-none">
          {FASHION_COLLECTION.map((item, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>{item.number}</span>
              <span className="font-sans font-black text-[120px] md:text-[180px] tracking-tight text-stroke-dark">
                BLOOMAIR
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 transition-all duration-1000">
        <div 
          className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full blur-3xl opacity-25 transition-all duration-1000"
          style={{ backgroundColor: activeOutfit.palette }}
        ></div>
      </div>

      {/* 2. Top Luxury Navigation Bar */}
      <header className="relative z-30 pt-6 sm:pt-8 px-6 sm:px-12 flex items-center justify-between">
        
        {/* Left Brand Identity */}
        <div className="flex items-center gap-4">
          <a href="#" className="group">
            <span className="font-bodoni text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-neutral-950 uppercase block leading-none">
              BLOOMAIR
            </span>
            <span className="text-[9px] font-mono tracking-[0.35em] text-neutral-500 uppercase block mt-1 font-semibold">
              HAUTE COUTURE • PARIS
            </span>
          </a>
        </div>

        {/* Center Live Look Index */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-200/80 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="font-bold text-neutral-900">RUNWAY {activeOutfit.number}</span>
          <span className="text-neutral-400">/ 0{totalOutfits}</span>
        </div>

        {/* Right Actions (Audio Atmosphere & Atelier Bag) */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setAudioMuted(!audioMuted)}
            className="p-2 rounded-full text-neutral-600 hover:text-black hover:bg-neutral-200/60 transition-colors hidden md:flex items-center gap-2 text-xs font-mono"
            aria-label="Toggle Atmosphere"
          >
            {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600 animate-pulse" />}
            <span className="text-[11px] uppercase tracking-wider">{audioMuted ? 'Atmosphere: Off' : 'Soundtrack: 128 BPM'}</span>
          </button>

          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2.5 bg-neutral-950 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-md active:scale-95"
            aria-label="Atelier Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#e6c281]" />
            <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline">Bag</span>
            <span className="bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {cartCount}
            </span>
          </button>
        </div>

      </header>

      {/* 3. Central Horizontal Runway Stage (Driven by GSAP Engine) */}
      <div className="relative flex-1 flex items-center justify-center z-10 w-full overflow-hidden my-auto">
        
        {/* The Continuous Horizontal Sequence Container */}
        <div 
          ref={modelsContainerRef}
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
        >
          {FASHION_COLLECTION.map((item, idx) => {
            const isCurrent = idx === currentIndex;

            return (
              <div 
                key={item.id}
                onClick={() => goToIndex(idx)}
                className="runway-model-card absolute flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
                style={{
                  width: '320px',
                  height: '560px',
                }}
              >
                {/* Silhouette Model Figure */}
                <div className="relative group w-full h-full flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="h-[360px] sm:h-[440px] md:h-[520px] lg:h-[580px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.22)] transition-all duration-300 pointer-events-none"
                    draggable={false}
                  />

                  {/* Floor Contact Shadow */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-8 bg-neutral-950/15 rounded-full blur-xl pointer-events-none -z-10"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 4. Active Outfit UI Overlay: Editorial Information & Action Controls */}
      <footer className="relative z-30 pb-6 sm:pb-8 px-6 sm:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          
          {/* Left: Active Outfit Information Block */}
          <div className="max-w-xl transition-all duration-500 space-y-2">
            
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-amber-700 font-bold bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                {activeOutfit.collection}
              </span>
              <span className="text-neutral-400 text-xs font-mono">•</span>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                {activeOutfit.category}
              </span>
            </div>

            {/* Giant Title */}
            <h1 className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-950 tracking-tight leading-none">
              {activeOutfit.name}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed max-w-md line-clamp-2">
              {activeOutfit.description}
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
                    <span>Add to Bag (${activeOutfit.price})</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setSelectedOutfit(activeOutfit);
                  setIsDetailsOpen(true);
                }}
                className="py-3 px-5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 shadow-sm transition-colors flex items-center gap-1.5"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Center-Right: Interactive Timeline & Progress Bar */}
          <div className="flex flex-col items-center gap-3 w-full lg:w-auto">
            
            {/* Clickable Index Numbers */}
            <div className="flex items-center gap-3 sm:gap-5 text-xs font-mono tracking-widest">
              {FASHION_COLLECTION.map((item, idx) => {
                const isActive = idx === currentIndex;
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

            {/* Interactive Timeline Track */}
            <div className="w-48 sm:w-64 h-[2px] bg-neutral-200 rounded-full relative overflow-hidden">
              <div 
                className="h-full bg-neutral-950 transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / totalOutfits) * 100}%`
                }}
              ></div>
            </div>

            <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase hidden sm:block">
              SCROLL / DRAG HORIZONTALLY
            </span>
          </div>

          {/* Right: Tactile Arrow Steppers */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 text-neutral-900 flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm"
              aria-label="Previous Outfit"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === totalOutfits - 1}
              className="w-12 h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 text-neutral-900 flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm"
              aria-label="Next Outfit"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </footer>

      {/* 5. Slide-Out Look Details Drawer */}
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
                  {selectedOutfit.collection}
                </span>
                <h3 className="font-bodoni text-3xl font-bold text-neutral-950">
                  {selectedOutfit.name}
                </h3>
                <p className="text-base font-bold font-mono text-neutral-900">
                  ${selectedOutfit.price} USD
                </p>
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
                      <span className="font-mono font-bold">${piece.price}</span>
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
                <span>Acquire Full Look (${selectedOutfit.price})</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
