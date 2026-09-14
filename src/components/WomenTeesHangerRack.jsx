import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { WOMEN_TEES_HERO } from '../data/productsCatalog';

const WOMEN_HERO_IMAGE_URL = "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393806/women-tees-hanger-hero_wa5mfw.jpg";

// The 4 Interactive Hotspot Coordinates on the Real Photo
const WOMEN_TEE_HOTSPOTS = [
  { id: 0, key: 'women-tee-block-stripe-polo', name: 'Block-Stripe Rugby Polo', x: 16.5, y: 48, hex: '#1b2838' },
  { id: 1, key: 'women-tee-beardless-jersey', name: 'Beardle Athletic Jersey', x: 39.5, y: 48, hex: '#141416' },
  { id: 2, key: 'women-tee-la-varsity-polo', name: 'Varsity Script Ribbed Polo', x: 63.5, y: 48, hex: '#162238' },
  { id: 3, key: 'women-tee-milan-striped-knit', name: 'Breton Fine-Knit Polo', x: 86.5, y: 48, hex: '#1c2430' }
];

export default function WomenTeesHangerRack({ onAddToCart, onToggleWishlist, wishlist = [], onQuickView }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isAutoStepping, setIsAutoStepping] = useState(false);

  // Use the 4 hero shirts matching the photo
  const heroTees = WOMEN_TEES_HERO.slice(0, 4);
  const activeTee = heroTees[activeIdx] || heroTees[0];

  // Auto-step slideshow
  useEffect(() => {
    let interval = null;
    if (isAutoStepping) {
      interval = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % heroTees.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoStepping, heroTees.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + heroTees.length) % heroTees.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % heroTees.length);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-4 pb-12 sm:pb-16 relative z-10 select-none">
      
      {/* Header Title in Reference Image Aesthetic */}
      <div className="text-center mb-7 sm:mb-9 select-none">
        <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-normal tracking-tight">
          every woman needs
        </h1>
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium mt-1.5">
          (AND YOU ONLY WEAR 1 &bull;&bull;)
        </p>
      </div>

      {/* Main Interactive Stage: 2-Column Grid with Distinct Space Gap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
        
        {/* 1. Left Card: The 4-Shirt Real Photo with Hotspots (7 cols) */}
        <div className="lg:col-span-7 xl:col-span-7 relative bg-[#ede8de]/60 rounded-2xl p-4 sm:p-5 border border-neutral-300/60 shadow-sm overflow-hidden flex flex-col justify-between">
          
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-900">
            <img 
              src={WOMEN_HERO_IMAGE_URL} 
              alt="Women's Signature Polos & Tees on Hanger" 
              className="w-full h-full object-cover object-center"
            />

            {/* Hotspot Markers */}
            {WOMEN_TEE_HOTSPOTS.map((spot) => {
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
                          : 'border-white/80 hover:scale-110 opacity-90'
                      }`}
                      style={{ backgroundColor: spot.hex }}
                    >
                      {isActive && <span className="w-1 h-1 rounded-full bg-white block" />}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Hotspot Legend Strip */}
          <div className="w-full mt-3 flex items-center justify-between text-xs text-neutral-600 px-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
              Click Hanger Pin to Inspect
            </span>
            <div className="flex items-center gap-1.5">
              {WOMEN_TEE_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveIdx(s.id)}
                  className={`w-3 h-3 rounded-full transition-transform cursor-pointer ${
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
        <div className="lg:col-span-5 xl:col-span-5 w-full bg-[#faf8f5] rounded-2xl p-4 sm:p-5 border border-neutral-200/90 shadow-md flex flex-col justify-between space-y-4">
          
          {/* 3:4 Portrait View */}
          <div className="relative w-full aspect-[3/4] max-h-[340px] sm:max-h-[380px] mx-auto flex items-center justify-center overflow-hidden rounded-xl bg-white/70 border border-neutral-200/60 shadow-inner group/portrait">
            <img 
              key={activeTee.id}
              src={activeTee.imageUrl}
              onError={(e) => { e.currentTarget.src = activeTee.localImage || "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393806/women-tee-block-stripe-polo_woq63u.png"; }}
              alt={`${activeTee.name} Portrait View`}
              className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover/portrait:scale-105 animate-in fade-in zoom-in-95 drop-shadow-sm"
            />
            <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-xs text-white text-[9px] font-mono px-2 py-0.5 rounded tracking-widest uppercase">
              WOMEN'S ATELIER
            </span>
          </div>

          {/* Details & Actions */}
          <div className="space-y-3.5 pt-1">
            
            {/* Title & Price Header */}
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h2 className="font-bodoni text-xl sm:text-2xl font-normal text-neutral-950 leading-tight">
                  {activeTee.name}
                </h2>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  {activeTee.subName}
                </p>
              </div>
              <span className="text-xl sm:text-2xl font-medium text-neutral-950">₹{activeTee.price.toFixed(2)}</span>
            </div>

            {/* Colorway Selection Swatches */}
            <div>
              <label className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Colorway Selection
              </label>
              <div className="flex items-center gap-2">
                {heroTees.map((tee, idx) => (
                  <button
                    key={tee.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                      activeIdx === idx 
                        ? 'scale-115 ring-2 ring-neutral-950 ring-offset-2 border-transparent shadow-xs' 
                        : 'border-black/20 hover:scale-105 opacity-75'
                    }`}
                    style={{ backgroundColor: tee.hex }}
                    title={tee.name}
                  />
                ))}
                <span className="text-xs text-neutral-500 font-mono ml-1.5">
                  {activeTee.name}
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
                    id: `hero-${activeTee.id}`,
                    name: activeTee.name,
                    price: activeTee.price,
                    size: selectedSize,
                    color: activeTee.name,
                    category: 'T-Shirts',
                    gender: 'women',
                    image: activeTee.imageUrl
                  });
                }}
                className="flex-1 bg-neutral-950 hover:bg-neutral-800 text-white h-10 px-4 rounded-full text-xs font-medium uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add To Bag &bull; ₹{activeTee.price.toFixed(2)}</span>
              </button>

              <button
                onClick={() => onToggleWishlist(activeTee.id)}
                className={`h-10 w-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  wishlist.includes(activeTee.id)
                    ? 'bg-red-50 border-red-200 text-red-600'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-900 bg-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${wishlist.includes(activeTee.id) ? 'fill-red-600' : ''}`} />
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
