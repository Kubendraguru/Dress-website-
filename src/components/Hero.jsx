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
import LiquidCarveButton from './originkit/ui/liquid-carve-button-base';

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
        const spacing = viewportWidth < 640 ? 260 : viewportWidth < 1024 ? 380 : 460;

        modelElements.forEach((el, idx) => {
          const delta = idx - currentProg;
          const xPos = delta * spacing;
          const absDelta = Math.abs(delta);

          // Center model is full grand scale (1.04x), side models scale down to 0.70x
          const scale = Math.max(0.68, 1.04 - absDelta * 0.36);
          
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
      className="relative pt-16 pb-8 sm:pt-20 sm:pb-12 bg-[#faf8f5] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Main Locked Graphic Canvas Frame (Wide High-End Editorial Presentation) */}
      <div className="relative w-full max-w-[1440px] h-[640px] sm:h-[700px] md:h-[780px] flex items-center justify-center px-4 sm:px-8 lg:px-12">
        
        {/* Concentric Circular Wireframe Rings (Locked Background behind model) */}
        <div className="absolute top-[14%] sm:top-[12%] left-1/2 -translate-x-1/2 pointer-events-none z-0">
          <div className="relative w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] md:w-[700px] md:h-[700px] lg:w-[780px] lg:h-[780px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-neutral-300/60"></div>
            <div className="absolute inset-[15%] rounded-full border border-neutral-300/45"></div>
            <div className="absolute inset-[30%] rounded-full border border-dashed border-neutral-300/35"></div>
            <div className="absolute inset-[46%] rounded-full border border-neutral-200/50"></div>
          </div>
        </div>

        {/* Headline: "Zudio" (Grand Wide Typography Locked Background) */}
        <div className="absolute top-[3%] sm:top-[2%] inset-x-0 text-center pointer-events-none z-0">
          <h1 className="font-bodoni text-[110px] sm:text-[170px] md:text-[220px] lg:text-[260px] font-normal text-[#121212] tracking-[-0.035em] leading-none select-none">
            Zudio
          </h1>
        </div>

        {/* Split Second Line: "We Bel" (Left) and "Fashion" (Right) (Wide Spaced Out) */}
        <div className="absolute top-[36%] sm:top-[34%] md:top-[33%] inset-x-0 flex items-center justify-between px-4 sm:px-10 md:px-16 lg:px-24 pointer-events-none z-0">
          <div className="w-1/2 pr-16 sm:pr-24 md:pr-32 lg:pr-40 text-left">
            <span className="font-bodoni italic text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-[#121212] tracking-tight leading-none block">
              We Bel
            </span>
          </div>
          <div className="w-1/2 pl-16 sm:pl-24 md:pl-32 lg:pl-40 text-right">
            <span className="font-bodoni text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-[#121212] tracking-tight leading-none block">
              Fashion
            </span>
          </div>
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
                    width: '420px',
                    height: '720px',
                  }}
                >
                  <div className="relative w-full h-full flex items-start justify-center pt-0">
                    <img
                      src={imageSrc}
                      alt={outfit.title}
                      className="w-auto h-[540px] sm:h-[620px] md:h-[680px] lg:h-[720px] max-w-[360px] sm:max-w-[420px] md:max-w-[460px] object-contain object-top drop-shadow-[0_24px_45px_rgba(0,0,0,0.22)] pointer-events-none transition-transform duration-300"
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
            className="absolute left-3 sm:left-6 md:left-10 lg:left-14 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-neutral-950 text-neutral-900 hover:text-white border border-neutral-300/80 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
            className="absolute right-3 sm:right-6 md:right-10 lg:right-14 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-neutral-950 text-neutral-900 hover:text-white border border-neutral-300/80 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next Outfit"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>

        </div>

        {/* Floating Prominent Liquid Carve Shop Pill Button */}
        <div className="absolute bottom-[2%] sm:bottom-[2.5%] left-1/2 -translate-x-1/2 z-30 whitespace-nowrap pointer-events-auto filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
          <LiquidCarveButton
            label={`SHOP LOOK • $${currentOutfit.price}`}
            colors={{
              fill: "#101012",
              textColor: "#FFFFFF"
            }}
            blob={{
              color: "#f59e0b",
              size: 72,
              smoothness: 55
            }}
            font={{
              fontFamily: '"Space Mono", monospace',
              fontWeight: 700,
              fontSize: 12.5,
              lineHeight: "1.2em",
              letterSpacing: "0.18em",
              textAlign: "center"
            }}
            padding="14px 34px 14px 30px"
            rounded={100}
            addIcon={true}
            icon={{
              type: "symbol",
              symbol: "✦",
              color: "#f59e0b",
              size: 13,
              padding: 0,
              rounded: 0,
              side: "left"
            }}
            gap={10}
            onClick={() => setIsShopLookModalOpen(true)}
          />
        </div>

        {/* Right Side Stacked Action Card (Positioned Generously to the Right) */}
        <div className="absolute right-3 sm:right-6 md:right-10 lg:right-14 top-[44%] sm:top-[42%] md:top-[40%] z-30 pointer-events-auto">
          
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

