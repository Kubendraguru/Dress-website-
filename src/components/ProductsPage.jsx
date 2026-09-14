import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Eye, 
  Check, 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Grid3X3, 
  Grid2X2,
  Users
} from 'lucide-react';
import { DRESS_SHIRTS_HERO, WOMEN_TEES_HERO, HANGING_RACK_TEES, CATALOG_PRODUCTS } from '../data/productsCatalog';
import WomenTeesHangerRack from './WomenTeesHangerRack';
import WomenShirtsHangerRack from './WomenShirtsHangerRack';
import WomenPantsHangerRack from './WomenPantsHangerRack';
import WomenCombosHangerRack from './WomenCombosHangerRack';

const HERO_IMAGE_URL = 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789314616/Comment_SHOP_and_I_ll_send_the_links_in_your_DM____mensfashion_wardrobeessentials_menswearindia_outfitideas_minimalstyle_menwithstyle_styleguide_summeroutfits_mensoutfit_fashionreels_simplefashion_cleanstyle_essentials_lar9h1.jpg';
const HERO_LOCAL_URL = '/hanger-shirts-hero.jpg';

// The 5 Interactive Hotspot Coordinates on the Real Photo
const SHIRT_HOTSPOTS = [
  { id: 0, key: 'shirt-white', name: 'Crisp White', x: 18, y: 50, hex: '#f8f8fa' },
  { id: 1, key: 'shirt-beige', name: 'Sand Beige', x: 34, y: 50, hex: '#d8caa8' },
  { id: 2, key: 'shirt-stripe', name: 'Bengal Stripe', x: 50, y: 50, hex: '#7ba4c9' },
  { id: 3, key: 'shirt-brown', name: 'Rust Terracotta', x: 66, y: 50, hex: '#8c4a38' },
  { id: 4, key: 'shirt-blue', name: 'Midnight Navy', x: 83, y: 50, hex: '#1c2d42' }
];

// Flat-lay Garment Vector for Crewneck Catalog Items
function FlatLayTee({ colorHex = '#6b3636', graphicType = null, className = "w-full h-full" }) {
  const isLight = colorHex === '#f4efe6' || colorHex === '#e8e3d9' || colorHex === '#d6cbbd' || colorHex === '#fbfbfb';
  const labelColor = isLight ? '#1c1c1e' : '#ffffff';
  const stitchColor = isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)';

  return (
    <div className={`relative flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 480" 
        className="w-full h-full max-h-[320px] drop-shadow-md transition-transform duration-500 group-hover:scale-105" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`tee-grad-${colorHex.replace('#','')}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colorHex} />
            <stop offset="60%" stopColor={colorHex} />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <path 
          d="M 120 70 C 145 76, 170 78, 200 78 C 230 78, 255 76, 280 70 L 360 135 C 368 142, 362 165, 345 190 L 305 170 L 310 435 C 310 445, 300 450, 200 450 C 100 450, 90 445, 90 435 L 95 170 L 55 190 C 38 165, 32 142, 40 135 Z" 
          fill={`url(#tee-grad-${colorHex.replace('#','')})`}
        />

        <path d="M 92 430 Q 200 436 308 430" stroke={stitchColor} strokeWidth="2" strokeDasharray="3 3" />
        <path d="M 60 180 L 98 162" stroke={stitchColor} strokeWidth="1.5" />
        <path d="M 340 180 L 302 162" stroke={stitchColor} strokeWidth="1.5" />

        <path 
          d="M 140 68 C 160 102, 240 102, 260 68 C 240 85, 160 85, 140 68 Z" 
          fill={colorHex}
          stroke={stitchColor}
          strokeWidth="2"
        />

        <path d="M 152 70 C 168 84, 232 84, 248 70 C 235 60, 165 60, 152 70 Z" fill="#0a0a0c" opacity="0.3" />
        <rect x="184" y="80" width="32" height="18" rx="2" fill="#ffffff" opacity="0.9" />
        <text x="200" y="92" textAnchor="middle" fontSize="6.5" fontFamily="monospace" fontWeight="bold" fill="#121212" letterSpacing="1">
          ZUDIO
        </text>

        {graphicType === 'waves' && (
          <g transform="translate(140, 170)" opacity="0.85">
            <circle cx="60" cy="60" r="48" fill="none" stroke={labelColor} strokeWidth="1.5" opacity="0.3" />
            <path d="M 22 45 Q 60 25 98 45 Q 60 65 22 45 Z" fill="none" stroke={labelColor} strokeWidth="2" opacity="0.6" />
            <path d="M 16 62 Q 60 42 104 62 Q 60 82 16 62 Z" fill="none" stroke={labelColor} strokeWidth="2.5" opacity="0.75" />
            <path d="M 24 78 Q 60 60 96 78 Q 60 95 24 78 Z" fill="none" stroke={labelColor} strokeWidth="2" opacity="0.6" />
          </g>
        )}
      </svg>
    </div>
  );
}

// Flat-lay Garment Vector for Tailored Pants & Trousers
function FlatLayPants({ colorHex = '#c8bba2', className = "w-full h-full" }) {
  return (
    <div className={`relative flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 340 480" 
        className="w-full h-full max-h-[300px] drop-shadow-md transition-transform duration-500 group-hover:scale-105" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 90 60 L 250 60 L 260 140 L 235 450 L 175 450 L 170 200 L 165 450 L 105 450 L 80 140 Z" 
          fill={colorHex} 
        />
        <path d="M 90 60 L 250 60 L 250 85 L 90 85 Z" fill="rgba(0,0,0,0.12)" />
        <path d="M 170 60 L 170 160" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <path d="M 130 90 L 130 440" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 210 90 L 210 440" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="170" cy="72" r="4" fill="#2d2d2d" />
      </svg>
    </div>
  );
}

// Flat-lay Garment Vector for Heavyweight Hoodies
function FlatLayHoodie({ colorHex = '#7a4234', className = "w-full h-full" }) {
  return (
    <div className={`relative flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 480" 
        className="w-full h-full max-h-[300px] drop-shadow-md transition-transform duration-500 group-hover:scale-105" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hood */}
        <path d="M 130 90 C 130 20, 270 20, 270 90 C 250 110, 150 110, 130 90 Z" fill={colorHex} stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
        <path d="M 155 85 C 165 55, 235 55, 245 85 Z" fill="rgba(0,0,0,0.25)" />
        {/* Body & Sleeves */}
        <path d="M 120 90 L 280 90 L 370 165 L 340 205 L 305 180 L 310 435 L 90 435 L 95 180 L 60 205 L 30 165 Z" fill={colorHex} />
        {/* Kangaroo Pocket */}
        <path d="M 130 280 L 270 280 L 290 380 L 110 380 Z" fill="rgba(0,0,0,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        {/* Hem & Cuffs */}
        <rect x="90" y="420" width="220" height="18" fill="rgba(0,0,0,0.15)" />
      </svg>
    </div>
  );
}

// Flat-Lay Atelier Objects
function FlatLayObject({ objectType = 'leather-tray', colorHex = '#b4733e' }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 select-none">
      <svg viewBox="0 0 320 320" className="w-full h-full max-h-[260px] drop-shadow-lg transition-transform duration-500 group-hover:scale-105" fill="none">
        <g transform="translate(40, 40)">
          <rect x="0" y="0" width="240" height="240" rx="20" fill={colorHex} stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <rect x="12" y="12" width="216" height="216" rx="14" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="16" cy="16" r="6" fill="#eab308" stroke="#713f12" strokeWidth="1.5" />
          <circle cx="224" cy="16" r="6" fill="#eab308" stroke="#713f12" strokeWidth="1.5" />
          <circle cx="16" cy="224" r="6" fill="#eab308" stroke="#713f12" strokeWidth="1.5" />
          <circle cx="224" cy="224" r="6" fill="#eab308" stroke="#713f12" strokeWidth="1.5" />
          <text x="120" y="126" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="rgba(0,0,0,0.4)" letterSpacing="2">ZUDIO ATELIER</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// MAIN PRODUCTS PAGE WITH EMBEDDED PORTRAIT VIEW AT TOP OF DRESS DETAILS
// ---------------------------------------------------------------------------
export default function ProductsPage({ 
  initialCategory = 'All',
  initialGender = 'all',
  onAddToCart = () => {}, 
  onToggleWishlist = () => {}, 
  wishlist = [],
  onNavigateHome = () => {}
}) {
  // Default active shirt is Crisp White (index 0)
  const [activeShirtIndex, setActiveShirtIndex] = useState(0);
  const [selectedHeroSize, setSelectedHeroSize] = useState('M');
  const [isAutoStepping, setIsAutoStepping] = useState(false);

  // Gender Filter: 'all' | 'men' | 'women'
  const [activeGender, setActiveGender] = useState(initialGender || 'all');

  // Catalog grid category filter
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'All');
  const [activeProductSwatches, setActiveProductSwatches] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [gridColumns, setGridColumns] = useState(4);

  // Sync when initialCategory prop changes from Navbar
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  // Sync when initialGender prop changes from Navbar
  useEffect(() => {
    if (initialGender) {
      setActiveGender(initialGender);
    }
  }, [initialGender]);

  // Determine which interactive rack to show
  const currentHeroMode = activeGender === 'women' ? 'women' : 'men';

  const activeShirt = DRESS_SHIRTS_HERO[activeShirtIndex] || DRESS_SHIRTS_HERO[0];

  // Auto-step timer for Hero
  useEffect(() => {
    let interval = null;
    if (isAutoStepping) {
      interval = setInterval(() => {
        setActiveShirtIndex((prev) => (prev + 1) % DRESS_SHIRTS_HERO.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoStepping]);

  const handlePrevShirt = () => {
    setActiveShirtIndex((prev) => (prev - 1 + DRESS_SHIRTS_HERO.length) % DRESS_SHIRTS_HERO.length);
  };

  const handleNextShirt = () => {
    setActiveShirtIndex((prev) => (prev + 1) % DRESS_SHIRTS_HERO.length);
  };

  const handleSwatchSelect = (productId, swatch) => {
    setActiveProductSwatches((prev) => ({
      ...prev,
      [productId]: swatch
    }));
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size
    }));
  };

  // 1. Gender Filter applied first
  const genderFilteredProducts = CATALOG_PRODUCTS.filter((product) => {
    if (activeGender === 'all') return true;
    if (activeGender === 'men') return product.gender === 'men' || product.gender === 'unisex';
    if (activeGender === 'women') return product.gender === 'women' || product.gender === 'unisex';
    if (activeGender === 'couple') return product.category === 'Combos' || product.gender === 'unisex' || product.isCombo;
    return true;
  });

  // 2. Category filter applied to gender-filtered list
  const filteredProducts = genderFilteredProducts.filter((product) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Shirts' || activeCategory === 'Shirt') return product.category === 'Shirts' || product.category === 'Dress Shirts';
    if (activeCategory === 'T-Shirts' || activeCategory === 'T-Shirt') return product.category === 'T-Shirts' || product.category === 'Mens' || product.category === 'Graphic Series' || product.category === 'T-Shirt';
    if (activeCategory === 'Pants' || activeCategory === 'Pant') return product.category === 'Pants' || product.category === 'Pant';
    if (activeCategory === 'Combos' || activeCategory === 'Combo') return product.category === 'Combos' || product.category === 'Combo' || product.isCombo;
    if (activeCategory === 'Hoodies') return product.category === 'Hoodies';
    if (activeCategory === 'Objects') return product.category === 'Objects';
    return product.category === activeCategory;
  });

  // Calculate dynamic tab counts based on current gender selection
  const getCategoryCount = (catId) => {
    if (catId === 'All') return genderFilteredProducts.length;
    return genderFilteredProducts.filter((p) => {
      if (catId === 'Shirts' || catId === 'Shirt') return p.category === 'Shirts' || p.category === 'Dress Shirts';
      if (catId === 'T-Shirts' || catId === 'T-Shirt') return p.category === 'T-Shirts' || p.category === 'Mens' || p.category === 'Graphic Series' || p.category === 'T-Shirt';
      if (catId === 'Pants' || catId === 'Pant') return p.category === 'Pants' || p.category === 'Pant';
      if (catId === 'Combos' || catId === 'Combo') return p.category === 'Combos' || p.category === 'Combo' || p.isCombo;
      if (catId === 'Hoodies') return p.category === 'Hoodies';
      if (catId === 'Objects') return p.category === 'Objects';
      return p.category === catId;
    }).length;
  };

  return (
    <div className="bg-[#fcfbf9] text-neutral-900 min-h-screen selection:bg-neutral-900 selection:text-white font-sans antialiased">
      
      {/* ----------------------------------------------------------------- */}
      {/* HERO SECTION: INTERACTIVE RACK & DRESS DETAILS WITH TOP PORTRAIT */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative w-full bg-[#f7f5f0] border-b border-neutral-200/80 overflow-hidden select-none">
        
        {/* Soft Ambient Radial Lighting */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8) 0%, transparent 65%), radial-gradient(circle at 100% 100%, rgba(0,0,0,0.03) 0%, transparent 50%)`
          }}
        />

        {/* Dynamic Interactive Rack Rendering */}
        {currentHeroMode === 'women' ? (
          <div className="pt-2 pb-10 sm:pb-14">
            {/* Render Category-Specific Hanger Rack */}
            {(activeCategory === 'Pants' || activeCategory === 'Pant') ? (
              <WomenPantsHangerRack 
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlist={wishlist}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ) : (activeCategory === 'Combos' || activeCategory === 'Combo') ? (
              <WomenCombosHangerRack 
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlist={wishlist}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ) : (activeCategory === 'T-Shirts' || activeCategory === 'T-Shirt') ? (
              <WomenTeesHangerRack 
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlist={wishlist}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ) : (
              <WomenShirtsHangerRack 
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlist={wishlist}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            )}
          </div>
        ) : (
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-4 pb-12 sm:pb-16 relative z-10">
            
            {/* Header Title in Reference Image Aesthetic */}
            <div className="text-center mb-7 sm:mb-9 select-none">
              <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-normal tracking-tight">
                every man needs
              </h1>
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium mt-1.5">
                (AND YOU ONLY WEAR 1 &bull;&bull;)
              </p>
            </div>

            {/* Main Interactive Stage: 2-Column Grid with Distinct Space Gap */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
              
              {/* 1. Left Card: The 5-Shirt Hanging Rack Photo (7 cols) */}
              <div className="lg:col-span-7 xl:col-span-7 relative bg-[#ede8de]/60 rounded-2xl p-4 sm:p-5 border border-neutral-300/60 shadow-sm overflow-hidden flex flex-col justify-between">
                
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-900">
                  <img 
                    src={HERO_IMAGE_URL} 
                    onError={(e) => { e.currentTarget.src = HERO_LOCAL_URL; }}
                    alt="Zudio Signature Shirts on Hanger" 
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Hotspot Markers */}
                  {SHIRT_HOTSPOTS.map((spot) => {
                    const isActive = activeShirtIndex === spot.id;
                    return (
                      <button
                        key={spot.id}
                        onClick={() => setActiveShirtIndex(spot.id)}
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

                        {/* Tooltip Tag */}
                        <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded-md text-[9px] font-mono whitespace-nowrap tracking-wider shadow-md transition-all duration-200 pointer-events-none ${
                          isActive 
                            ? 'bg-neutral-950 text-white opacity-100 translate-y-0 scale-100 font-semibold' 
                            : 'bg-white/95 text-neutral-800 opacity-0 group-hover/spot:opacity-100 translate-y-1'
                        }`}>
                          {spot.name}
                        </span>
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
                    {SHIRT_HOTSPOTS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveShirtIndex(s.id)}
                        className={`w-3 h-3 rounded-full transition-transform ${
                          activeShirtIndex === s.id ? 'scale-125 ring-2 ring-neutral-950 shadow-xs' : 'opacity-60 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: s.hex }}
                        title={s.name}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* 2. Right Side: UNIFIED PORTRAIT VIEW & DRESS DETAILS CARD (5 cols) */}
              <div className="lg:col-span-5 xl:col-span-5 w-full bg-[#faf8f5] rounded-2xl p-4 sm:p-5 border border-neutral-200/90 shadow-md flex flex-col justify-between space-y-4">
                
                {/* 3:4 Portrait View */}
                <div className="relative w-full aspect-[3/4] max-h-[340px] sm:max-h-[380px] mx-auto flex items-center justify-center overflow-hidden rounded-xl bg-white/70 border border-neutral-200/60 shadow-inner group/portrait">
                  <img 
                    key={activeShirt.id}
                    src={activeShirt.imageUrl}
                    onError={(e) => { e.currentTarget.src = activeShirt.localImage || '/shirt-white.jpg'; }}
                    alt={`${activeShirt.name} Portrait View`}
                    className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover/portrait:scale-105 animate-in fade-in zoom-in-95 drop-shadow-sm"
                  />
                  <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-xs text-white text-[9px] font-mono px-2 py-0.5 rounded tracking-widest uppercase">
                    MEN'S LINEN
                  </span>
                </div>

                {/* Details & Actions */}
                <div className="space-y-3.5 pt-1">
                  
                  {/* Title & Price Header */}
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-bodoni text-xl sm:text-2xl font-normal text-neutral-950 leading-tight">
                      {activeShirt.name}
                    </h2>
                    <span className="text-xl sm:text-2xl font-medium text-neutral-950">
                      ${activeShirt.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Colorway Selection Swatches */}
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Colorway Selection
                    </label>
                    <div className="flex items-center gap-2">
                      {DRESS_SHIRTS_HERO.map((shirt, idx) => (
                        <button
                          key={shirt.id}
                          onClick={() => setActiveShirtIndex(idx)}
                          className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                            activeShirtIndex === idx 
                              ? 'scale-115 ring-2 ring-neutral-950 ring-offset-2 border-transparent shadow-xs' 
                              : 'border-black/20 hover:scale-105 opacity-75'
                          }`}
                          style={{ backgroundColor: shirt.hex }}
                          title={shirt.name}
                        />
                      ))}
                      <span className="text-xs text-neutral-500 font-mono ml-1.5">
                        {activeShirt.name}
                      </span>
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Select Size
                    </label>
                    <div className="flex items-center gap-1.5">
                      {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedHeroSize(sz)}
                          className={`w-8 h-8 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                            selectedHeroSize === sz
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
                          id: `hero-${activeShirt.id}`,
                          name: `${activeShirt.name} Linen Shirt`,
                          price: activeShirt.price,
                          size: selectedHeroSize,
                          color: activeShirt.name,
                          category: 'Shirts',
                          gender: 'men',
                          image: activeShirt.imageUrl || activeShirt.localImage || '/shirt-white.jpg'
                        });
                      }}
                      className="flex-1 bg-neutral-950 hover:bg-neutral-800 text-white h-10 px-4 rounded-full text-xs font-medium uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add To Bag &bull; ${activeShirt.price.toFixed(2)}</span>
                    </button>

                    <button
                      onClick={() => onToggleWishlist(activeShirt.id)}
                      className={`h-10 w-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                        wishlist.includes(activeShirt.id)
                          ? 'bg-red-50 border-red-200 text-red-600'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-900 bg-white'
                      }`}
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${wishlist.includes(activeShirt.id) ? 'fill-red-600' : ''}`} />
                    </button>
                  </div>

                  {/* Stepper Controls */}
                  <div className="pt-2 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-2 font-medium">
                      <button 
                        onClick={handlePrevShirt}
                        className="text-neutral-600 hover:text-neutral-950 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" /> Previous
                      </button>
                      <span className="text-neutral-200">/</span>
                      <button 
                        onClick={handleNextShirt}
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
        )}
      </section>

      {/* ----------------------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        
        {/* TOP GENDER SELECTION SWITCHER */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="text-center mb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              Select Department
            </span>
          </div>
          
          <div className="inline-flex items-center p-1.5 bg-white rounded-full border border-neutral-200/90 shadow-sm text-xs">
            
            {/* All Pieces */}
            <button
              onClick={() => { setActiveGender('all'); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                activeGender === 'all'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <span>All Pieces</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeGender === 'all' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
              }`}>
                {CATALOG_PRODUCTS.length}
              </span>
            </button>

            {/* Male (Men's) */}
            <button
              onClick={() => { setActiveGender('men'); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                activeGender === 'men'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <span>Male (Men's)</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeGender === 'men' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
              }`}>
                {CATALOG_PRODUCTS.filter(p => p.gender === 'men' || p.gender === 'unisex').length}
              </span>
            </button>

            {/* Female (Women's) */}
            <button
              onClick={() => { setActiveGender('women'); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                activeGender === 'women'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Female (Women's)</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeGender === 'women' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
              }`}>
                {CATALOG_PRODUCTS.filter(p => p.gender === 'women' || p.gender === 'unisex').length}
              </span>
            </button>

            {/* Couple Sets */}
            <button
              onClick={() => { setActiveGender('couple'); setActiveCategory('Combos'); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                activeGender === 'couple'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <span>Couple</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeGender === 'couple' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-500'
              }`}>
                {CATALOG_PRODUCTS.filter(p => p.category === 'Combos' || p.gender === 'unisex' || p.isCombo).length}
              </span>
            </button>

          </div>
        </div>

        {/* Category Filter Pills Strip */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {[
            { id: 'All', label: 'All Categories' },
            { id: 'Shirts', label: 'Shirts & Tops' },
            { id: 'T-Shirts', label: 'T-Shirts & Polos' },
            { id: 'Pants', label: 'Pants & Trousers' },
            { id: 'Combos', label: '2-Piece Combos', badge: '15% OFF' },
            { id: 'Hoodies', label: 'Hoodies' }
          ].map((cat) => {
            const count = getCategoryCount(cat.id);
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-sm font-semibold'
                    : 'bg-white text-neutral-600 border border-neutral-200/80 hover:border-black hover:text-black shadow-2xs'
                }`}
              >
                {cat.id === 'Combos' && <Sparkles className="w-3 h-3 text-amber-400" />}
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-100 text-neutral-500'
                }`}>
                  {count}
                </span>
                {cat.badge && (
                  <span className="text-[9px] font-mono font-bold text-amber-500 bg-amber-50 px-1.5 py-0.2 rounded">
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Navigation Bar / Catalog Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200/80 gap-5">
          
          <div className="flex items-center gap-3">
            <h3 className="font-editorial text-2xl font-bold text-neutral-950">
              {activeGender === 'all' ? 'All Archive Garments' : activeGender === 'men' ? "Men's Atelier Wardrobe" : "Women's Atelier Wardrobe"}
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              ({filteredProducts.length} pieces)
            </span>
          </div>

          {/* Right: Department Label & Grid Switcher */}
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <div className="font-mono text-[11px] uppercase tracking-wider bg-neutral-100 px-3 py-1 rounded-full">
              Showing: <span className="text-neutral-950 font-bold">{activeGender === 'all' ? 'All Pieces' : activeGender === 'men' ? "Men's Collection" : "Women's Collection"}</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => setGridColumns(3)}
                className={`p-1.5 rounded-lg transition-colors ${gridColumns === 3 ? 'bg-neutral-900 text-white' : 'hover:bg-neutral-100 text-neutral-600 bg-white border border-neutral-200'}`}
                aria-label="3 columns"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                className={`p-1.5 rounded-lg transition-colors ${gridColumns === 4 ? 'bg-neutral-900 text-white' : 'hover:bg-neutral-100 text-neutral-600 bg-white border border-neutral-200'}`}
                aria-label="4 columns"
              >
                <Grid2X2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        <div className={`mt-10 grid gap-6 sm:gap-8 ${
          gridColumns === 3 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}>
          {filteredProducts.map((product) => {
            const activeSwatch = activeProductSwatches[product.id] || (product.swatches ? product.swatches[0] : null);
            const activeColorHex = activeSwatch ? activeSwatch.hex : product.colorHex;
            const currentSize = selectedSizes[product.id] || (product.sizes ? product.sizes[0] : 'M');
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div 
                key={product.id}
                className="group flex flex-col justify-between bg-white rounded-xl border border-neutral-200/80 p-3.5 sm:p-4 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Top Badge & Gender Pill & Wishlist Button */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {product.badge && (
                      <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-800 font-semibold border border-neutral-200">
                        {product.badge}
                      </span>
                    )}
                    <span className={`text-[9px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full font-bold ${
                      product.gender === 'women'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : product.gender === 'men'
                        ? 'bg-sky-50 text-sky-800 border border-sky-200'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {product.gender === 'women' ? 'Women' : product.gender === 'men' ? 'Men' : 'Unisex'}
                    </span>
                  </div>

                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className={`p-1.5 rounded-full transition-colors ${
                      isWishlisted ? 'text-red-500 bg-red-50' : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-red-500' : ''}`} />
                  </button>
                </div>

                {/* Garment Image Area */}
                <div className="relative h-48 sm:h-56 my-3 flex items-center justify-center bg-neutral-50/60 rounded-lg overflow-hidden group-hover:bg-neutral-100/60 transition-colors">
                  {product.imageUrl ? (
                    /* Real Photo or Cutout Shirt Preview */
                    <div className="w-full h-full p-2 flex items-center justify-center relative">
                      <img 
                        src={product.imageUrl} 
                        onError={(e) => { e.currentTarget.src = product.localImage || HERO_LOCAL_URL; }}
                        alt={product.name}
                        className={`w-full h-full object-contain p-1 rounded-lg transition-all duration-500 drop-shadow-sm ${
                          product.hoverImage && product.hoverImage !== product.imageUrl
                            ? "group-hover:opacity-0 group-hover:scale-95"
                            : "group-hover:scale-105"
                        }`}
                      />
                      {product.hoverImage && product.hoverImage !== product.imageUrl && (
                        <img 
                          src={product.hoverImage} 
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-contain p-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 drop-shadow-sm pointer-events-none"
                        />
                      )}
                      <div className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-sm text-white text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded font-medium z-10">
                        {product.colorway}
                      </div>
                    </div>
                  ) : product.type === 'pants' ? (
                    /* Tailored Pants */
                    <FlatLayPants colorHex={activeColorHex} />
                  ) : product.type === 'hoodie' ? (
                    /* Heavyweight French Terry Hoodie */
                    <FlatLayHoodie colorHex={activeColorHex} />
                  ) : product.type === 'object' ? (
                    /* Atelier Object */
                    <FlatLayObject 
                      objectType={product.objectType} 
                      colorHex={activeColorHex} 
                    />
                  ) : (
                    /* Flat-Lay Essential or Graphic Tee */
                    <FlatLayTee 
                      colorHex={activeColorHex} 
                      graphicType={product.graphicType} 
                    />
                  )}

                  {/* Hover Quick View Button */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="bg-white text-neutral-950 text-xs font-medium uppercase tracking-wider px-3.5 py-2 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-neutral-950 hover:text-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  {/* Color Swatch Selector Dots */}
                  {product.swatches && product.swatches.length > 1 && (
                    <div className="flex items-center gap-1.5 mb-2">
                      {product.swatches.map((swatch) => {
                        const isSelected = activeSwatch && activeSwatch.id === swatch.id;
                        return (
                          <button
                            key={swatch.id}
                            onClick={() => handleSwatchSelect(product.id, swatch)}
                            className={`w-3 h-3 rounded-full border transition-transform ${
                              isSelected ? 'scale-125 ring-2 ring-neutral-950 ring-offset-1 border-transparent' : 'border-black/20 hover:scale-110 opacity-75'
                            }`}
                            style={{ backgroundColor: swatch.hex }}
                            title={swatch.name}
                          />
                        );
                      })}
                      <span className="text-[10px] text-neutral-400 ml-1">
                        {activeSwatch ? activeSwatch.name : product.colorway}
                      </span>
                    </div>
                  )}

                  {/* Title & Price */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-bodoni text-base font-normal text-neutral-950 leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-neutral-500 font-light">
                        {activeSwatch ? activeSwatch.name : product.colorway}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-neutral-950 flex-shrink-0">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Size Selector Strip */}
                  {product.sizes && (
                    <div className="flex items-center gap-1 mb-2.5 text-[9px]">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => handleSizeSelect(product.id, sz)}
                          className={`px-1.5 py-0.5 rounded border transition-colors ${
                            currentSize === sz
                              ? 'bg-neutral-950 text-white border-neutral-950 font-medium'
                              : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-black'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Add to Bag Action */}
                  <button
                    onClick={() => {
                      onAddToCart({
                        id: product.id,
                        name: `${product.name} (${activeSwatch ? activeSwatch.name : product.colorway})`,
                        price: product.price,
                        size: currentSize,
                        color: activeSwatch ? activeSwatch.name : product.colorway,
                        category: product.category,
                        image: product.imageUrl || product.localImage || '/hanger-shirts-hero.jpg'
                      });
                    }}
                    className="w-full bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-900 py-2 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Add to Bag</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* ----------------------------------------------------------------- */}
      {/* QUICK VIEW DRAWER MODAL */}
      {/* ----------------------------------------------------------------- */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setQuickViewProduct(null)}
          />
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              {/* Image Preview */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-center justify-center h-80 overflow-hidden">
                {quickViewProduct.imageUrl ? (
                  <img 
                    src={quickViewProduct.imageUrl} 
                    onError={(e) => { e.currentTarget.src = quickViewProduct.localImage || HERO_LOCAL_URL; }}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover sm:object-contain rounded-xl"
                  />
                ) : quickViewProduct.type === 'pants' ? (
                  <FlatLayPants colorHex={quickViewProduct.colorHex} />
                ) : quickViewProduct.type === 'hoodie' ? (
                  <FlatLayHoodie colorHex={quickViewProduct.colorHex} />
                ) : quickViewProduct.type === 'object' ? (
                  <FlatLayObject objectType={quickViewProduct.objectType} colorHex={quickViewProduct.colorHex} />
                ) : (
                  <FlatLayTee colorHex={quickViewProduct.colorHex} graphicType={quickViewProduct.graphicType} />
                )}
              </div>

              {/* Details & Action */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 font-medium">
                    {quickViewProduct.category}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                    {quickViewProduct.gender === 'women' ? "Women's" : quickViewProduct.gender === 'men' ? "Men's" : "Unisex"}
                  </span>
                </div>

                <h2 className="font-bodoni text-2xl font-normal mt-2 text-neutral-950">
                  {quickViewProduct.name}
                </h2>
                <p className="text-xl font-light text-neutral-950 mt-1">
                  ${quickViewProduct.price.toFixed(2)}
                </p>

                <p className="text-xs text-neutral-600 font-light mt-3 leading-relaxed">
                  {quickViewProduct.description || 'Crafted with premium materials and signature atelier tailoring for everyday durability.'}
                </p>

                {quickViewProduct.details && (
                  <ul className="mt-4 space-y-1.5 text-xs text-neutral-600 font-light">
                    {quickViewProduct.details.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => {
                    onAddToCart({
                      id: quickViewProduct.id,
                      name: quickViewProduct.name,
                      price: quickViewProduct.price,
                      size: 'M',
                      category: quickViewProduct.category,
                      image: quickViewProduct.imageUrl || quickViewProduct.localImage || '/hanger-shirts-hero.jpg'
                    });
                    setQuickViewProduct(null);
                  }}
                  className="mt-6 w-full bg-neutral-950 hover:bg-neutral-800 text-white py-3 rounded-full text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Bag &bull; ${quickViewProduct.price.toFixed(2)}</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
