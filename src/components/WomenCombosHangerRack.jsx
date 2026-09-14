import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { WOMEN_COMBOS_HERO } from '../data/productsCatalog';

const WOMEN_COMBOS_HERO_IMAGE_URL = '/women-combos-hanger-hero.jpg';

// The 4 Interactive Hotspot Coordinates on the Real Photo
const WOMEN_COMBOS_HOTSPOTS = [
  { id: 0, key: 'combo-women-pink-corduroy', name: 'Dusty Rose Corduroy & Blue Denim Set', x: 15.5, y: 46, hex: '#d89b9e' },
  { id: 1, key: 'combo-women-brown-corduroy', name: 'Mocha Corduroy & Charcoal Denim Set', x: 39.0, y: 46, hex: '#6c4e3e' },
  { id: 2, key: 'combo-women-denim-corset', name: 'Sculpted Denim Corset Jumpsuit Duo', x: 61.0, y: 46, hex: '#6d8fa8' },
  { id: 3, key: 'combo-women-lace-corset', name: 'Espresso Lace Corset & Sand Chinos Set', x: 83.5, y: 46, hex: '#4a2e24' }
];

export default function WomenCombosHangerRack({ onAddToCart, onToggleWishlist, wishlist = [], onQuickView }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isAutoStepping, setIsAutoStepping] = useState(false);

  const combos = WOMEN_COMBOS_HERO;
  const activeCombo = combos[activeIdx] || combos[0];

  // Auto-step slideshow
  useEffect(() => {
    let interval = null;
    if (isAutoStepping) {
      interval = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % combos.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoStepping, combos.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + combos.length) % combos.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % combos.length);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-4 pb-12 sm:pb-16 relative z-10 select-none">
      
      {/* Header Title in Reference Image Aesthetic */}
      <div className="text-center mb-7 sm:mb-9 select-none">
        <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-normal tracking-tight">
          every woman needs
        </h1>
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium mt-1.5 flex items-center justify-center gap-2">
          <span>&bull;&bull;</span>
          <span>CURATED 2-PIECE CO-ORD ENSEMBLES</span>
          <span>&bull;&bull;</span>
        </p>
      </div>

      {/* Main Interactive Stage: 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
        
        {/* 1. Left Card: The Real Photograph with 4 Interactive Hotspots (7 cols) */}
        <div className="lg:col-span-7 xl:col-span-7 relative bg-[#ede8de]/60 rounded-3xl p-4 sm:p-5 border border-neutral-300/60 shadow-sm overflow-hidden flex flex-col justify-between">
          
          <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-neutral-900">
            <img 
              src={WOMEN_COMBOS_HERO_IMAGE_URL} 
              alt="Women's Signature 2-Piece Combos on Wooden Clothes Rail" 
              className="w-full h-full object-cover object-center"
            />

            {/* Hotspot Markers */}
            {WOMEN_COMBOS_HOTSPOTS.map((spot) => {
              const isActive = activeIdx === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveIdx(spot.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/spot z-20 cursor-pointer focus:outline-none"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  aria-label={`Select ${spot.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Outer Pulse Ring */}
                    {isActive && (
                      <span 
                        className="absolute w-8 h-8 rounded-full animate-ping opacity-40"
                        style={{ backgroundColor: spot.hex }}
                      />
                    )}
                    {/* Main Dot */}
                    <span 
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                        isActive 
                          ? 'scale-125 border-white ring-2 ring-neutral-950' 
                          : 'border-white/90 hover:scale-110 opacity-90'
                      }`}
                      style={{ backgroundColor: spot.hex }}
                    >
                      {isActive && <span className="w-1 h-1 rounded-full bg-white block" />}
                    </span>
                  </div>

                  {/* Tooltip Tag */}
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded-md text-[9px] font-mono whitespace-nowrap tracking-wider shadow-md transition-all duration-200 pointer-events-none ${
                    isActive 
                      ? 'bg-neutral-950 text-white opacity-100 translate-y-0 scale-100 font-semibold z-30' 
                      : 'bg-white/95 text-neutral-800 opacity-0 group-hover/spot:opacity-100 translate-y-1'
                  }`}>
                    {spot.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Hotspot Legend Strip */}
          <div className="w-full mt-3.5 flex items-center justify-between text-xs text-neutral-600 px-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
              Click any outfit pin to inspect 2-piece set
            </span>
            <div className="flex items-center gap-2">
              {WOMEN_COMBOS_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveIdx(s.id)}
                  className={`w-3.5 h-3.5 rounded-full transition-all cursor-pointer ${
                    activeIdx === s.id ? 'scale-125 ring-2 ring-neutral-950 shadow-xs' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: s.hex }}
                  title={s.name}
                />
              ))}
            </div>
          </div>

        </div>

        {/* 2. Right Side: UNIFIED PORTRAIT VIEW & PRODUCT DETAILS CARD (5 cols) */}
        <div className="lg:col-span-5 xl:col-span-5 w-full bg-[#faf8f5] rounded-3xl p-5 sm:p-6 border border-neutral-200/90 shadow-md flex flex-col justify-between space-y-4">
          
          {/* 3:4 Portrait View */}
          <div className="relative w-full aspect-[3/4] max-h-[320px] sm:max-h-[360px] mx-auto flex items-center justify-center overflow-hidden rounded-2xl bg-white/80 border border-neutral-200/70 shadow-inner group/portrait">
            <img 
              key={activeCombo.id}
              src={activeCombo.imageUrl}
              onError={(e) => { e.currentTarget.src = activeCombo.localImage || '/women-combo-pink-corduroy.png'; }}
              alt={`${activeCombo.name} Portrait View`}
              className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover/portrait:scale-105 animate-in fade-in zoom-in-95 drop-shadow-sm"
            />
            <span className="absolute top-3 left-3 bg-neutral-950 text-white text-[9px] font-mono px-2.5 py-1 rounded-full tracking-widest uppercase shadow-xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              <span>2-PIECE CO-ORD ATELIER &bull; 15% OFF</span>
            </span>
          </div>

          {/* Details & Actions */}
          <div className="space-y-3.5 pt-1">
            
            {/* Title & Price Header */}
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h2 className="font-bodoni text-xl sm:text-2xl font-normal text-neutral-950 leading-tight">
                  {activeCombo.name}
                </h2>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  {activeCombo.subName}
                </p>
              </div>
              <span className="text-xl sm:text-2xl font-medium text-neutral-950">
                ${activeCombo.price.toFixed(2)}
              </span>
            </div>

            {/* Description / Fabric */}
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">
              {activeCombo.description}
            </p>

            {/* Colorway Selection Swatches */}
            <div>
              <label className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Colorway Selection
              </label>
              <div className="flex items-center gap-2">
                {combos.map((combo, idx) => (
                  <button
                    key={combo.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                      activeIdx === idx 
                        ? 'scale-115 ring-2 ring-neutral-950 ring-offset-2 border-transparent shadow-xs' 
                        : 'border-black/20 hover:scale-105 opacity-75'
                    }`}
                    style={{ backgroundColor: combo.hex }}
                    title={combo.name}
                  />
                ))}
                <span className="text-xs text-neutral-500 font-mono ml-1.5">
                  {activeCombo.name}
                </span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Select Size
              </label>
              <div className="flex items-center gap-1.5">
                {['XS', 'S', 'M', 'L', 'XL'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`w-8 h-8 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-neutral-950 text-white font-bold'
                        : 'bg-white text-neutral-700 border border-neutral-200 hover:border-black'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2.5 border-t border-neutral-200/70 flex items-center gap-2.5">
              <button
                onClick={() => {
                  onAddToCart({
                    id: `hero-${activeCombo.id}`,
                    name: activeCombo.name,
                    price: activeCombo.price,
                    size: selectedSize,
                    color: activeCombo.name,
                    category: 'Combos',
                    gender: 'women',
                    image: activeCombo.imageUrl
                  });
                }}
                className="flex-1 bg-neutral-950 hover:bg-neutral-800 text-white h-10 px-4 rounded-full text-xs font-medium uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add Set To Bag &bull; ${activeCombo.price.toFixed(2)}</span>
              </button>

              <button
                onClick={() => onToggleWishlist(activeCombo.id)}
                className={`h-10 w-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  wishlist.includes(activeCombo.id)
                    ? 'bg-red-50 border-red-200 text-red-600'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-900 bg-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${wishlist.includes(activeCombo.id) ? 'fill-red-600' : ''}`} />
              </button>
            </div>

            {/* Stepper Controls */}
            <div className="pt-2 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2 font-medium">
                <button 
                  onClick={handlePrev}
                  className="text-neutral-600 hover:text-neutral-950 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Previous
                </button>
                <span className="text-neutral-200">/</span>
                <button 
                  onClick={handleNext}
                  className="text-neutral-600 hover:text-neutral-950 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <button 
                onClick={() => setIsAutoStepping(!isAutoStepping)}
                className={`text-[11px] tracking-wide transition-colors cursor-pointer ${
                  isAutoStepping ? 'text-amber-800 font-semibold' : 'text-neutral-400 hover:text-neutral-800'
                }`}
              >
                {isAutoStepping ? 'Pause Slideshow' : 'Auto Play'}
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
