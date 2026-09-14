import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ShoppingBag, 
  Sparkles, 
  Check, 
  Eye, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { HERO_OUTFITS } from '../data/products';
import ShopLookModal from './ShopLookModal';

export default function Hero({ onAddToCart }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isShopLookModalOpen, setIsShopLookModalOpen] = useState(false);

  // Smooth scroll and momentum runway state for model images only
  const scrollProgress = useRef(0);
  const targetProgress = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartProgress = useRef(0);
  const hasMoved = useRef(false);

  const runwayContainerRef = useRef(null);
  const totalOutfits = HERO_OUTFITS.length;
  const currentOutfit = HERO_OUTFITS[selectedIndex] || HERO_OUTFITS[0];

  // Glide to specific index
  const goToIndex = (idx) => {
    const clamped = Math.max(0, Math.min(totalOutfits - 1, idx));
    targetProgress.current = clamped;
  };

  const handlePrev = () => {
    const target = selectedIndex === 0 ? totalOutfits - 1 : selectedIndex - 1;
    goToIndex(target);
  };

  const handleNext = () => {
    const target = selectedIndex === totalOutfits - 1 ? 0 : selectedIndex + 1;
    goToIndex(target);
  };

  // Drag interaction across model runway
  const handleMouseDown = (e) => {
    isDragging.current = true;
    hasMoved.current = false;
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartProgress.current = targetProgress.current;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - dragStartX.current;
    if (Math.abs(deltaX) > 4) {
      hasMoved.current = true;
    }
    const sensitivity = window.innerWidth < 768 ? 0.0035 : 0.0024;
    
    targetProgress.current = Math.max(
      0,
      Math.min(totalOutfits - 1, dragStartProgress.current - deltaX * sensitivity)
    );
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const snapped = Math.round(targetProgress.current);
    targetProgress.current = Math.max(0, Math.min(totalOutfits - 1, snapped));
  };

  // Wheel scroll interaction on model area
  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 10) {
      const speed = 0.0015;
      targetProgress.current = Math.max(
        0,
        Math.min(totalOutfits - 1, targetProgress.current + delta * speed)
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Main GSAP animation loop for cinematic model gliding
  useEffect(() => {
    let animId;

    const render = () => {
      const lerpFactor = 0.088;
      scrollProgress.current += (targetProgress.current - scrollProgress.current) * lerpFactor;
      
      const currentProg = scrollProgress.current;
      const roundedIndex = Math.round(currentProg);

      if (roundedIndex !== selectedIndex && roundedIndex >= 0 && roundedIndex < totalOutfits) {
        setSelectedIndex(roundedIndex);
      }

      // Model runway positions and 3D depth perspective
      if (runwayContainerRef.current) {
        const modelElements = runwayContainerRef.current.querySelectorAll('.hero-model-item');
        const viewportWidth = window.innerWidth;
        const spacing = viewportWidth < 640 ? 220 : viewportWidth < 1024 ? 290 : 350;

        modelElements.forEach((el, idx) => {
          const delta = idx - currentProg;
          const xPos = delta * spacing;
          const absDelta = Math.abs(delta);

          // Center model is full grand scale (1.02x), side models scale down to 0.70x
          const scale = Math.max(0.68, 1.02 - absDelta * 0.34);
          
          // Center is full opacity (1.0), side models fade to ~0.26, distant fade to 0
          const opacity = Math.max(0, 1 - absDelta * 0.72);
          
          // Progressive optical blur
          const blur = Math.min(5, absDelta * 2.6);
          
          // Active model always on top
          const zIndex = Math.max(1, 30 - Math.round(absDelta * 10));

          gsap.set(el, {
            x: xPos,
            scale: scale,
            opacity: opacity,
            filter: `blur(${blur}px)`,
            zIndex: zIndex,
            transformOrigin: 'top center',
            pointerEvents: absDelta < 1.2 ? 'auto' : 'none',
          });
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [selectedIndex, totalOutfits]);

  const handleNavClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isWhitePoplin = currentOutfit.id === 'hero-white-poplin';
  const isNavyCrew = currentOutfit.id === 'hero-navy-crewneck';
  const isStripe = currentOutfit.id === 'hero-bengal-stripe';
  const isLemon = currentOutfit.id === 'hero-lemon-linen';
  const isSandDenim = currentOutfit.id === 'hero-sand-denim';
  const isStreetwear = currentOutfit.id === 'hero-tokyo-streetwear';

  return (
    <section 
      id="hero" 
      className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 bg-[#faf8f5] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Main Locked Graphic Canvas Frame (All Background Elements Remain Fixed) */}
      <div className="relative w-full max-w-[1020px] h-[600px] sm:h-[660px] md:h-[720px] flex items-center justify-center px-4">
        
        {/* Concentric Circular Wireframe Rings (Locked Background behind model) */}
        <div className="absolute top-[16%] sm:top-[14%] left-1/2 -translate-x-1/2 pointer-events-none z-0">
          <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-neutral-300/60"></div>
            <div className="absolute inset-[15%] rounded-full border border-neutral-300/45"></div>
            <div className="absolute inset-[30%] rounded-full border border-dashed border-neutral-300/35"></div>
            <div className="absolute inset-[46%] rounded-full border border-neutral-200/50"></div>
          </div>
        </div>

        {/* Headline: "Bloomair" (Locked Background Behind Head & Shoulders) */}
        <div className="absolute top-[4%] sm:top-[3%] inset-x-0 text-center pointer-events-none z-0">
          <h1 className="font-bodoni text-[90px] sm:text-[140px] md:text-[170px] font-normal text-[#121212] tracking-[-0.03em] leading-none select-none">
            Bloomair
          </h1>
        </div>

        {/* Split Second Line: "We Bel" (Left) and "Fashion" (Right) (Locked Background) */}
        <div className="absolute top-[36%] sm:top-[34%] md:top-[33%] inset-x-0 flex items-center justify-between px-2 sm:px-6 md:px-10 pointer-events-none z-0">
          <div className="w-1/2 pr-12 sm:pr-20 md:pr-24 text-left">
            <span className="font-bodoni italic text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal text-[#121212] tracking-tight leading-none block">
              We Bel
            </span>
          </div>
          <div className="w-1/2 pl-12 sm:pl-20 md:pl-24 text-right">
            <span className="font-bodoni text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal text-[#121212] tracking-tight leading-none block">
              Fashion
            </span>
          </div>
        </div>

        {/* Left Editorial Description (Under "We Bel" - Updates Smoothly for Active Look) */}
        <div className="absolute left-2 sm:left-6 md:left-10 top-[52%] sm:top-[50%] max-w-[180px] sm:max-w-[220px] md:max-w-[250px] z-30 text-left pointer-events-auto">
          <div className="mb-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-full">
              {currentOutfit.tag}
            </span>
          </div>
          <p className="text-neutral-800 text-[11px] sm:text-xs md:text-[13px] font-sans font-normal leading-relaxed transition-all duration-300">
            {currentOutfit.description}
          </p>
        </div>

        {/* Diagonal Ribbon Banner (Passing Behind Model & Hips - Locked Background) */}
        <div className="absolute inset-x-[-15%] bottom-[16%] sm:bottom-[15%] -rotate-[7deg] pointer-events-none z-10 overflow-hidden">
          <div className="w-[140%] -ml-[20%] py-2.5 sm:py-3.5 bg-[#f4ecd8] border-y border-neutral-300/80 shadow-sm flex items-center justify-around text-neutral-900">
            <div className="flex items-center gap-6 sm:gap-10 animate-marquee whitespace-nowrap">
              <span className="font-bodoni italic text-sm sm:text-base md:text-lg font-medium tracking-wide">✦ Art Energy</span>
              <span className="text-xs">✶</span>
              <span className="font-bodoni text-sm sm:text-base md:text-lg font-medium tracking-wide">Pure Form</span>
              <span className="text-xs">✦</span>
              <span className="font-bodoni italic text-sm sm:text-base md:text-lg font-medium tracking-wide">Power</span>
              <span className="text-xs">✶</span>
              <span className="font-bodoni text-sm sm:text-base md:text-lg font-medium tracking-wide">Atelier SS26</span>
              <span className="text-xs">✦</span>
              <span className="font-bodoni italic text-sm sm:text-base md:text-lg font-medium tracking-wide">Art Energy</span>
              <span className="text-xs">✶</span>
              <span className="font-bodoni text-sm sm:text-base md:text-lg font-medium tracking-wide">Pure Form</span>
              <span className="text-xs">✦</span>
              <span className="font-bodoni italic text-sm sm:text-base md:text-lg font-medium tracking-wide">Power</span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. DYNAMIC 3D RUNWAY STAGE - ONLY MODEL IMAGES GLIDE/SCROLL */}
        {/* ------------------------------------------------------------- */}
        <div 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          onWheel={handleWheel}
          className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        >
          
          {/* Continuous Runway Sequence Container */}
          <div 
            ref={runwayContainerRef}
            className="relative w-full h-full flex items-center justify-center pointer-events-none"
          >
            {HERO_OUTFITS.map((outfit, idx) => {
              const imageSrc = outfit.cutoutImage || outfit.image;
              return (
                <div
                  key={outfit.id}
                  onClick={(e) => {
                    if (!hasMoved.current) {
                      goToIndex(idx);
                    }
                  }}
                  className="hero-model-item absolute flex flex-col items-center justify-start pointer-events-auto cursor-pointer select-none top-0 sm:top-1"
                  style={{
                    width: '380px',
                    height: '670px',
                  }}
                >
                  <div className="relative w-full h-full flex items-start justify-center pt-0">
                    <img
                      src={imageSrc}
                      alt={outfit.title}
                      className="w-auto h-[520px] sm:h-[600px] md:h-[660px] max-w-[340px] sm:max-w-[400px] object-contain object-top drop-shadow-[0_24px_45px_rgba(0,0,0,0.22)] pointer-events-none transition-transform duration-300"
                      draggable={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Model Runway Left Floating Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-8 md:left-14 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-neutral-950 text-neutral-900 hover:text-white border border-neutral-300/80 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous Outfit"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Model Runway Right Floating Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-8 md:right-14 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-neutral-950 text-neutral-900 hover:text-white border border-neutral-300/80 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next Outfit"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>

        </div>

        {/* Floating Prominent Shop Pill Button (Directly Anchored in Center Stage) */}
        <div className="absolute bottom-[2%] sm:bottom-[3%] left-1/2 -translate-x-1/2 z-30 whitespace-nowrap pointer-events-auto">
          <button
            onClick={() => setIsShopLookModalOpen(true)}
            className="group/btn relative px-6 sm:px-7 py-3 bg-neutral-950 hover:bg-neutral-900 text-white rounded-full text-xs sm:text-[13px] font-mono font-bold tracking-[0.16em] uppercase flex items-center gap-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] border border-white/20 hover:border-amber-400/60 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            </div>
            <span>SHOP LOOK (${currentOutfit.price})</span>
          </button>
        </div>

        {/* Right Side Stacked Action Card (Locked Background Element) */}
        <div className="absolute right-2 sm:right-6 md:right-10 top-[46%] sm:top-[44%] z-30 pointer-events-auto">
          
          <div className="relative">
            {/* Back offset black card */}
            <div className="absolute inset-0 bg-[#121212] rounded-xl -rotate-[3deg] translate-x-2 translate-y-2 shadow-md"></div>

            {/* Front Crisp White Box */}
            <div className="relative bg-white border border-neutral-300 rounded-xl p-2.5 sm:p-3 shadow-xl min-w-[170px] sm:min-w-[195px] md:min-w-[215px] space-y-1.5">
              
              <button
                onClick={() => setIsShopLookModalOpen(true)}
                className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-[13px] font-semibold tracking-wide flex items-center justify-between transition-all bg-neutral-950 text-white shadow-sm hover:bg-amber-800 cursor-pointer"
              >
                <span>Shop This Look</span>
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              </button>

              <button
                onClick={() => handleNavClick('lookbook')}
                className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-[13px] font-semibold tracking-wide flex items-center justify-between transition-all text-neutral-800 hover:bg-neutral-100 cursor-pointer"
              >
                <span>View Lookbook</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleNavClick('collections')}
                className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-[13px] font-semibold tracking-wide flex items-center justify-between transition-all text-neutral-800 hover:bg-neutral-100 cursor-pointer"
              >
                <span>Discover More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

        {/* Right Vertical Faint Watermark Outline Typography (Locked Background Element) */}
        <div className="absolute right-[-2%] sm:right-[0%] top-[38%] select-none pointer-events-none z-0 hidden sm:block">
          <span className="font-bodoni text-[85px] md:text-[105px] lg:text-[120px] font-normal text-transparent tracking-widest uppercase rotate-90 block origin-center text-stroke-dark opacity-[0.06]">
            {isStripe ? 'PARIS' : isLemon ? 'RIVIERA' : isSandDenim ? 'SEOUL' : isStreetwear ? 'TOKYO' : isWhitePoplin ? 'MINIMAL' : isNavyCrew ? 'IVY' : 'ATELIER'}
          </span>
        </div>

      </div>

      {/* Shop Look Interactive Modal */}
      <ShopLookModal
        outfit={currentOutfit}
        isOpen={isShopLookModalOpen}
        onClose={() => setIsShopLookModalOpen(false)}
        onAddToCart={onAddToCart}
      />

    </section>
  );
}

