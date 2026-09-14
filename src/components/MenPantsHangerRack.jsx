import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Layers,
  Eye
} from 'lucide-react';
import { MEN_PANTS_HERO } from '../data/productsCatalog';

const MEN_PANTS_HERO_IMAGE_URL = '/men-pants-hanger-hero.jpg';

// The 5 Interactive Hotspot Coordinates across the Clothes Rail Photo
const MEN_PANTS_HOTSPOTS = [
  { id: 0, key: 'men-pants-noir-pleated', name: 'Noir Pleated Trousers', x: 12.1, y: 45.0, hex: '#18181a' },
  { id: 1, key: 'men-pants-olive-cargo', name: 'Washed Olive Utility Cargo', x: 30.5, y: 45.0, hex: '#646862' },
  { id: 2, key: 'men-pants-white-skate', name: 'Optical White Skate Denim', x: 48.4, y: 45.0, hex: '#f5f4ef' },
  { id: 3, key: 'men-pants-acid-denim', name: 'Acid Blue Baggy Denim', x: 66.4, y: 45.0, hex: '#7ba4c9' },
  { id: 4, key: 'men-pants-cyber-jogger', name: 'Cyber-Tribal Sweatpants', x: 85.9, y: 45.0, hex: '#141416' }
];

export default function MenPantsHangerRack({ onAddToCart, onToggleWishlist, wishlist = [], onQuickView }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('32');
  const [cardSelectedSizes, setCardSelectedSizes] = useState({});
  const [isAutoStepping, setIsAutoStepping] = useState(false);

  const pants = MEN_PANTS_HERO;
  const activePant = pants[activeIdx] || pants[0];

  // Auto-step slideshow
  useEffect(() => {
    let interval = null;
    if (isAutoStepping) {
      interval = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % pants.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoStepping, pants.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + pants.length) % pants.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % pants.length);
  };

  const handleCardSizeSelect = (pantId, size) => {
    setCardSelectedSizes((prev) => ({
      ...prev,
      [pantId]: size
    }));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-4 pb-12 sm:pb-16 relative z-10 select-none">
      
      {/* Header Title */}
      <div className="text-center mb-7 sm:mb-9 select-none">
        <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-normal tracking-tight">
          every man needs
        </h1>
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium mt-1.5 flex items-center justify-center gap-2">
          <span>&bull;&bull;</span>
          <span>SIGNATURE ATELIER SUITING &amp; WIDE DENIM TROUSERS</span>
          <span>&bull;&bull;</span>
        </p>
      </div>

      {/* Main Interactive Stage: 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
        
        {/* 1. Left Card: The Real Photograph with 5 Interactive Hotspots (7 cols) */}
        <div className="lg:col-span-7 xl:col-span-7 relative bg-[#ede8de]/60 rounded-3xl p-4 sm:p-5 border border-neutral-300/60 shadow-sm overflow-hidden flex flex-col justify-between">
          
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-neutral-900">
            <img 
              src={MEN_PANTS_HERO_IMAGE_URL} 
              alt="Curated Men's Trousers & Denim on Wooden Clothes Rail" 
              className="w-full h-full object-cover object-center"
            />

            {/* Hotspot Markers */}
            {MEN_PANTS_HOTSPOTS.map((spot) => {
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
                </button>
              );
            })}
          </div>

          {/* Bottom Hotspot Legend Strip */}
          <div className="w-full mt-3.5 flex items-center justify-between text-xs text-neutral-600 px-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
              Click any trouser pin on the wooden rail to inspect tailoring
            </span>
            <div className="flex items-center gap-1.5">
              {pants.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-3.5 h-3.5 rounded-full transition-all cursor-pointer ${
                    activeIdx === idx ? 'scale-125 ring-2 ring-neutral-950 shadow-xs' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: p.hex }}
                  title={p.name}
                />
              ))}
            </div>
          </div>

        </div>

        {/* 2. Right Side: UNIFIED PORTRAIT VIEW & PRODUCT DETAILS CARD (5 cols) */}
        <div className="lg:col-span-5 xl:col-span-5 w-full bg-[#faf8f5] rounded-3xl p-5 sm:p-6 border border-neutral-200/90 shadow-md flex flex-col justify-between space-y-4">
          
          {/* 3:4 Portrait View with Transparent Cutout */}
          <div className="relative w-full aspect-[3/4] max-h-[320px] sm:max-h-[360px] mx-auto flex items-center justify-center overflow-hidden rounded-2xl bg-white/80 border border-neutral-200/70 shadow-inner group/portrait">
            <img 
              key={activePant.id}
              src={activePant.imageUrl}
              onError={(e) => { e.currentTarget.src = activePant.localImage || '/men-pants-noir-pleated.png'; }}
              alt={`${activePant.name} Portrait View`}
              className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover/portrait:scale-105 animate-in fade-in zoom-in-95 drop-shadow-sm"
            />
            <span className="absolute top-3 left-3 bg-neutral-950 text-white text-[9px] font-mono px-2.5 py-1 rounded-full tracking-widest uppercase shadow-xs">
              MEN'S TAILORED TROUSERS
            </span>
          </div>

          {/* Details & Actions */}
          <div className="space-y-3.5 pt-1">
            
            {/* Title & Price Header */}
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h2 className="font-bodoni text-xl sm:text-2xl font-normal text-neutral-950 leading-tight">
                  {activePant.name}
                </h2>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  {activePant.subName}
                </p>
              </div>
              <span className="text-xl sm:text-2xl font-medium text-neutral-950">
                ${activePant.price.toFixed(2)}
              </span>
            </div>

            {/* Description / Fabric */}
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">
              {activePant.description}
            </p>

            {/* Colorway Selection Swatches */}
            <div>
              <label className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Colorway Selection
              </label>
              <div className="flex items-center gap-2">
                {pants.map((pant, idx) => (
                  <button
                    key={pant.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                      activeIdx === idx 
                        ? 'scale-115 ring-2 ring-neutral-950 ring-offset-2 border-transparent shadow-xs' 
                        : 'border-black/20 hover:scale-105 opacity-75'
                    }`}
                    style={{ backgroundColor: pant.hex }}
                    title={pant.name}
                  />
                ))}
                <span className="text-xs text-neutral-500 font-mono ml-1.5">
                  {activePant.name}
                </span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Select Waist Size
              </label>
              <div className="flex items-center gap-1.5">
                {['28', '30', '32', '34', '36'].map((sz) => (
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
            <div className="pt-2.5 border-t border-neutral-200/70 flex items-center gap-2">
              <button
                onClick={() => {
                  onAddToCart({
                    id: `hero-${activePant.id}`,
                    name: activePant.name,
                    price: activePant.price,
                    size: selectedSize,
                    color: activePant.name,
                    category: 'Pants',
                    gender: 'men',
                    image: activePant.imageUrl
                  });
                }}
                className="flex-1 bg-neutral-950 hover:bg-neutral-800 text-white h-10 px-4 rounded-full text-xs font-medium uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add To Bag &bull; ${activePant.price.toFixed(2)}</span>
              </button>

              <button
                onClick={() => {
                  if (onQuickView) {
                    onQuickView({
                      ...activePant,
                      sizes: ['28', '30', '32', '34', '36']
                    });
                  }
                }}
                className="h-10 px-3.5 rounded-full border border-neutral-200 hover:border-neutral-900 bg-white text-neutral-800 hover:bg-neutral-50 flex items-center justify-center gap-1.5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer shadow-2xs flex-shrink-0"
                title="Quick View Details"
              >
                <Eye className="w-3.5 h-3.5 text-neutral-600" />
                <span>View</span>
              </button>

              <button
                onClick={() => onToggleWishlist(activePant.id)}
                className={`h-10 w-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ${
                  wishlist.includes(activePant.id)
                    ? 'bg-red-50 border-red-200 text-red-600'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-900 bg-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${wishlist.includes(activePant.id) ? 'fill-red-600' : ''}`} />
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

      {/* 3. PRODUCT CARDS AT DOWN / BOTTOM */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-300/60">
        
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-600 font-bold flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>Men's Trousers &amp; Denim &bull; Atelier Catalog</span>
          </span>
          <span className="text-[11px] font-mono text-neutral-400">
            {pants.length} Tailored Silhouettes
          </span>
        </div>

        {/* Product Cards Grid matching Women section sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {pants.map((p, idx) => {
            const isSelected = activeIdx === idx;
            const currentCardSize = cardSelectedSizes[p.id] || '32';
            const isWishlisted = wishlist.includes(p.id);

            return (
              <div
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                className={`group flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 p-4 sm:p-5 relative cursor-pointer ${
                  isSelected 
                    ? 'border-neutral-950 shadow-xl ring-2 ring-neutral-950/20 -translate-y-1' 
                    : 'border-neutral-200/90 hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Top Garment Image Area */}
                <div className="relative w-full aspect-[4/5] max-h-[290px] mb-3.5 flex items-center justify-center bg-[#faf8f5]/80 rounded-xl overflow-hidden group-hover:bg-[#f5f0e6]/60 transition-colors p-3.5">
                  <img 
                    src={p.imageUrl} 
                    alt={p.name}
                    className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Wishlist Heart on Top Right */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(p.id);
                    }}
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded-full transition-colors z-10 ${
                      isWishlisted ? 'text-red-500 bg-red-50' : 'text-neutral-400 hover:text-neutral-900 bg-white/80 backdrop-blur-xs shadow-xs'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-red-500' : ''}`} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-2.5">
                  
                  {/* Swatch & Colorway Name */}
                  <div className="flex items-center gap-1.5">
                    <span 
                      className="w-3 h-3 rounded-full border border-neutral-300 shadow-2xs"
                      style={{ backgroundColor: p.hex }}
                    />
                    <span className="text-[10px] font-mono text-neutral-500">
                      {p.name.split(' ')[0]} {p.name.split(' ')[1]}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bodoni text-sm sm:text-base font-normal text-neutral-950 leading-snug line-clamp-2">
                      {p.name}
                    </h3>
                    <span className="text-sm font-medium text-neutral-950 flex-shrink-0">
                      ${p.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-[11px] text-neutral-500 font-light truncate">
                    {p.subName}
                  </p>

                  {/* Size Selector Pills Strip */}
                  <div className="flex items-center gap-1 pt-1 text-[9px] font-mono">
                    {['28', '30', '32', '34', '36'].map((sz) => (
                      <button
                        key={sz}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardSizeSelect(p.id, sz);
                        }}
                        className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                          currentCardSize === sz
                            ? 'bg-neutral-950 text-white border-neutral-950 font-bold'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-black'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>

                  {/* Action Buttons: View & Add to Bag */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onQuickView) {
                          onQuickView({
                            ...p,
                            sizes: ['28', '30', '32', '34', '36']
                          });
                        }
                      }}
                      className="px-2.5 py-2 bg-white hover:bg-neutral-950 hover:text-white text-neutral-800 border border-neutral-300 rounded-full text-[10.5px] font-medium uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer shadow-2xs flex-shrink-0"
                      title="Quick View Details"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart({
                          id: p.id,
                          name: p.name,
                          price: p.price,
                          size: currentCardSize,
                          color: p.name,
                          category: 'Pants',
                          gender: 'men',
                          image: p.imageUrl
                        });
                      }}
                      className="flex-1 bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-900 py-2 rounded-full text-[10.5px] font-medium uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs truncate"
                    >
                      <ShoppingBag className="w-3 h-3 flex-shrink-0" />
                      <span>Add to Bag</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
