import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Sparkles, Check, Eye } from 'lucide-react';
import { HERO_OUTFITS } from '../data/products';
import ShopLookModal from './ShopLookModal';

export default function Hero({ onAddToCart }) {
  const [activeNavIndex, setActiveNavIndex] = useState(1);
  const [activeModelKey, setActiveModelKey] = useState('hero-ochre-jumpsuit');
  const [isShopLookModalOpen, setIsShopLookModalOpen] = useState(false);

  const currentOutfit = HERO_OUTFITS.find((o) => o.id === activeModelKey) || HERO_OUTFITS[0];

  const handleNavClick = (index, targetId) => {
    setActiveNavIndex(index);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine model image source
  const modelImageSrc = currentOutfit.cutoutImage || currentOutfit.image;
  const isYellow = currentOutfit.id === 'hero-ochre-jumpsuit';
  const isWhitePoplin = currentOutfit.id === 'hero-white-poplin';
  const isNavyCrew = currentOutfit.id === 'hero-navy-crewneck';
  const isStripe = currentOutfit.id === 'hero-bengal-stripe';
  const isLemon = currentOutfit.id === 'hero-lemon-linen';
  const isSandDenim = currentOutfit.id === 'hero-sand-denim';
  const isStreetwear = currentOutfit.id === 'hero-tokyo-streetwear';

  return (
    <section id="hero" className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 bg-[#faf8f5] overflow-hidden flex flex-col items-center justify-center select-none">
      
      {/* 1. Top Look Switcher Controls */}
      <div className="mb-6 z-30 px-2">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white/95 backdrop-blur-md rounded-full border border-neutral-200/90 shadow-sm text-xs max-w-full">
          
          {/* 01. Pop Art Ochre ($420) */}
          <button
            onClick={() => setActiveModelKey('hero-ochre-jumpsuit')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
              activeModelKey === 'hero-ochre-jumpsuit'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#e5a919] shadow-sm"></span>
            <span>Pop Art Ochre</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
              activeModelKey === 'hero-ochre-jumpsuit' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
            }`}>
              $420
            </span>
          </button>

          {/* 02. Crisp White Poplin ($370) */}
          <button
            onClick={() => setActiveModelKey('hero-white-poplin')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
              activeModelKey === 'hero-white-poplin'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#e2ded9] border border-neutral-400 shadow-sm"></span>
            <span>Crisp White Poplin</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
              activeModelKey === 'hero-white-poplin' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
            }`}>
              $370
            </span>
          </button>

          {/* 03. Midnight Navy Crew ($410) */}
          <button
            onClick={() => setActiveModelKey('hero-navy-crewneck')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
              activeModelKey === 'hero-navy-crewneck'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1e293b] shadow-sm"></span>
            <span>Midnight Navy Crew</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
              activeModelKey === 'hero-navy-crewneck' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
            }`}>
              $410
            </span>
          </button>

          {/* 04. Bengal Blue Stripe ($390) */}
          <button
            onClick={() => setActiveModelKey('hero-bengal-stripe')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
              activeModelKey === 'hero-bengal-stripe'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#7ba4c9] shadow-sm"></span>
            <span>Bengal Stripe</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
              activeModelKey === 'hero-bengal-stripe' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
            }`}>
              $390
            </span>
          </button>

          {/* 05. Lemon Linen Resort ($360) */}
          <button
            onClick={() => setActiveModelKey('hero-lemon-linen')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
              activeModelKey === 'hero-lemon-linen'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#fde047] shadow-sm"></span>
            <span>Lemon Linen</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
              activeModelKey === 'hero-lemon-linen' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
            }`}>
              $360
            </span>
          </button>

          {/* 06. Sand Denim & Hoodie ($460) */}
          <button
            onClick={() => setActiveModelKey('hero-sand-denim')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
              activeModelKey === 'hero-sand-denim'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#d8caa8] shadow-sm"></span>
            <span>Sand Denim</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
              activeModelKey === 'hero-sand-denim' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
            }`}>
              $460
            </span>
          </button>

          {/* 07. Tokyo Streetwear ($380) */}
          <button
            onClick={() => setActiveModelKey('hero-tokyo-streetwear')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
              activeModelKey === 'hero-tokyo-streetwear'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#4a4a50] shadow-sm"></span>
            <span>Tokyo Cargo</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
              activeModelKey === 'hero-tokyo-streetwear' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
            }`}>
              $380
            </span>
          </button>

        </div>
      </div>

      {/* 2. Main Locked Graphic Canvas Frame */}
      <div className="relative w-full max-w-[1020px] h-[600px] sm:h-[660px] md:h-[720px] flex items-center justify-center px-4">
        
        {/* Concentric Circular Wireframe Rings (Centered directly behind model) */}
        <div className="absolute top-[16%] sm:top-[14%] left-1/2 -translate-x-1/2 pointer-events-none z-0">
          <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-neutral-300/60"></div>
            <div className="absolute inset-[15%] rounded-full border border-neutral-300/45"></div>
            <div className="absolute inset-[30%] rounded-full border border-dashed border-neutral-300/35"></div>
            <div className="absolute inset-[46%] rounded-full border border-neutral-200/50"></div>
          </div>
        </div>

        {/* Headline: "Bloomair" (Directly Behind Head & Shoulders) */}
        <div className="absolute top-[4%] sm:top-[3%] inset-x-0 text-center pointer-events-none z-0">
          <h1 className="font-bodoni text-[90px] sm:text-[140px] md:text-[170px] font-normal text-[#121212] tracking-[-0.03em] leading-none select-none">
            Bloomair
          </h1>
        </div>

        {/* Split Second Line: "We Bel" (Left) and "Fashion" (Right) */}
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

        {/* Left Editorial Description (Under "We Bel") */}
        <div className="absolute left-2 sm:left-6 md:left-10 top-[52%] sm:top-[50%] max-w-[180px] sm:max-w-[220px] md:max-w-[250px] z-20 text-left">
          <div className="mb-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-full">
              {currentOutfit.tag}
            </span>
          </div>
          <p className="text-neutral-800 text-[11px] sm:text-xs md:text-[13px] font-sans font-normal leading-relaxed">
            {currentOutfit.description}
          </p>
        </div>

        {/* Diagonal Ribbon Banner (Passing Behind Model & Hips) */}
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

        {/* Model Display in Center */}
        <div className="relative z-20 flex flex-col items-center justify-center max-w-[280px] sm:max-w-[360px] md:max-w-[420px] pt-10 sm:pt-12 md:pt-14">
          
          <div className="relative group">
            
            {/* Model Image with Smooth Transition */}
            <div className="relative overflow-visible">
              <img 
                key={currentOutfit.id}
                src={modelImageSrc} 
                alt={currentOutfit.title}
                className="w-full h-auto max-h-[500px] sm:max-h-[580px] md:max-h-[640px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-all duration-500 hover:scale-[1.01] animate-in fade-in zoom-in-95 duration-300"
              />
            </div>

            {/* ------------------------------------------------------------- */}
            {/* 3. PROMINENT FLOATING PILL BUTTON (EXACTLY AS IN MOCKUP) */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
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

          </div>

        </div>

        {/* Right Side Stacked Action Card */}
        <div className="absolute right-2 sm:right-6 md:right-10 top-[46%] sm:top-[44%] z-30">
          
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
                onClick={() => handleNavClick(1, 'lookbook')}
                className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-[13px] font-semibold tracking-wide flex items-center justify-between transition-all text-neutral-800 hover:bg-neutral-100 cursor-pointer"
              >
                <span>View Lookbook</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleNavClick(2, 'collections')}
                className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-[13px] font-semibold tracking-wide flex items-center justify-between transition-all text-neutral-800 hover:bg-neutral-100 cursor-pointer"
              >
                <span>Discover More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

        {/* Right Vertical Faint Watermark Outline Typography */}
        <div className="absolute right-[-2%] sm:right-[0%] top-[38%] select-none pointer-events-none z-0 hidden sm:block">
          <span className="font-bodoni text-[85px] md:text-[105px] lg:text-[120px] font-normal text-transparent tracking-widest uppercase rotate-90 block origin-center text-stroke-dark opacity-[0.06]">
            {isStripe ? 'PARIS' : isLemon ? 'RIVIERA' : isSandDenim ? 'SEOUL' : isStreetwear ? 'TOKYO' : isWhitePoplin ? 'MINIMAL' : isNavyCrew ? 'IVY' : isYellow ? 'WOMAN' : 'ATELIER'}
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
