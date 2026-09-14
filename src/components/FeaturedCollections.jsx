import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ShoppingBag, 
  ChevronRight,
  Eye,
  Check
} from 'lucide-react';
import ShopLookModal from './ShopLookModal';
import LiquidCarveButton from './originkit/ui/liquid-carve-button-base';

export default function FeaturedCollections({ onAddToCart, onSelectCollection }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeModalOutfit, setActiveModalOutfit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 7 Showroom Slices: Curated mix of Women, Men, and Couple Co-Ords
  const showroomSlices = [
    {
      id: 'slice-1',
      gender: 'women',
      title: 'Plaid Cropped Boxy Blouse',
      category: "Women's Blouses",
      price: 72,
      image: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393804/women-plaid-crop-model_ui5xut.png',
      objectPos: '50% 10%',
      tag: 'WOMEN • BESTSELLER',
      items: [
        { id: 'item-s1-1', name: 'Plaid Boxy Cropped Atelier Top', price: 72, category: 'Shirts', size: 'M' },
        { id: 'item-s1-2', name: 'High-Rise Denim Indigo Pant', price: 78, category: 'Pants', size: '28' }
      ]
    },
    {
      id: 'slice-2',
      gender: 'men',
      title: 'Sand Utility Safari Shacket',
      category: "Men's Outerwear",
      price: 78,
      image: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393786/sand-denim-model_jo9mrm.png',
      objectPos: '50% 12%',
      tag: 'MEN • NEW ARRIVAL',
      items: [
        { id: 'item-s2-1', name: 'Sand Utility Safari Shacket', price: 78, category: 'Outerwear', size: 'M' },
        { id: 'item-s2-2', name: 'Pleated Ecru Trouser', price: 62, category: 'Pants', size: '32' }
      ]
    },
    {
      id: 'slice-3',
      gender: 'women',
      title: 'Navy NY23 Varsity Series',
      category: "Women's Varsity",
      price: 64,
      image: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393794/women-navy-ny23-model_ctrf7l.jpg',
      objectPos: '50% 12%',
      tag: 'WOMEN • COUTURE',
      items: [
        { id: 'item-s3-1', name: 'Navy NY23 Heavyweight Varsity Top', price: 64, category: 'Tees', size: 'S' },
        { id: 'item-s3-2', name: 'Vintage Washed Flare Trouser', price: 88, category: 'Pants', size: '28' }
      ]
    },
    {
      id: 'slice-4',
      gender: 'couple',
      title: 'Mocha Linen Couple Co-Ords',
      category: 'Couple Coordinates',
      price: 148,
      image: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393752/couple-mocha-linen_q7b1gk.png',
      objectPos: '50% 10%',
      tag: 'COUPLE • HARMONY',
      items: [
        { id: 'item-s4-1', name: 'Mocha Linen Camp Collar Shirt (His)', price: 68, category: 'Shirts', size: 'M' },
        { id: 'item-s4-2', name: 'Mocha Linen Shirt Dress (Hers)', price: 80, category: 'Dresses', size: 'S' }
      ]
    },
    {
      id: 'slice-5',
      gender: 'men',
      title: 'Noir Zip Knit Polo',
      category: "Men's Knitwear",
      price: 68,
      image: '/men-black-zip-polo-model.jpg',
      objectPos: '50% 10%',
      tag: 'MEN • RUNWAY',
      items: [
        { id: 'item-s4-1', name: 'Noir Zip Textured Knit Polo', price: 68, category: 'Polos', size: 'L' },
        { id: 'item-s4-2', name: 'Pleated Suiting Trouser', price: 78, category: 'Pants', size: '32' }
      ]
    },
    {
      id: 'slice-6',
      gender: 'women',
      title: 'Fluid Slate Kurti Dress',
      category: "Women's Dresses",
      price: 65,
      image: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393762/floral-kurti-model_cs7lwi.png',
      objectPos: '50% 8%',
      tag: 'WOMEN • LIMITED',
      items: [
        { id: 'item-s6-1', name: 'Fluid Slate Blue Floral Kurti Dress', price: 65, category: 'Dresses', size: 'S' },
        { id: 'item-s6-2', name: 'Palazzo Linen Trousers', price: 55, category: 'Pants', size: 'S' }
      ]
    },
    {
      id: 'slice-7',
      gender: 'men',
      title: 'Oversized Streetwear Tee',
      category: "Men's Streetwear",
      price: 48,
      image: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393789/streetwear-model_ow6jj5.png',
      objectPos: '50% 10%',
      tag: 'MEN • ESSENTIAL',
      items: [
        { id: 'item-s7-1', name: 'Oversized Heavyweight Streetwear Tee', price: 48, category: 'Tees', size: 'L' },
        { id: 'item-s7-2', name: 'Cyber Cargo Jogger Pant', price: 72, category: 'Pants', size: '32' }
      ]
    }
  ];

  const handleOpenSliceModal = (slice) => {
    setActiveModalOutfit(slice);
    setIsModalOpen(true);
  };

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#f4f3f0] relative overflow-hidden select-none">
      
      {/* Subtle architectural background ambiance */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(0,0,0,0.03) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP TITLE: "MODERN ROOM" (DIRECT FROM REFERENCE IMAGE) */}
        {/* ========================================================================= */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-[92px] tracking-[0.18em] text-[#121214] uppercase leading-none font-black drop-shadow-xs">
            MODERN ROOM
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 mt-2">
            CURATED ATELIER ARCHIVE &bull; SS26 SHOWROOM
          </p>
          <div className="w-16 h-1 bg-neutral-900 mx-auto mt-3 rounded-full opacity-30" />
        </div>

        {/* ========================================================================= */}
        {/* KINETIC SLANTED PARALLELOGRAM GALLERY (WOMEN, MEN & COUPLE) */}
        {/* ========================================================================= */}
        <div className="relative py-4 sm:py-6 overflow-x-auto lg:overflow-visible no-scrollbar">
          
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 min-w-[920px] lg:min-w-0 px-4">
            
            {showroomSlices.map((slice, index) => {
              const isHovered = hoveredIdx === index;
              const hasActiveHover = hoveredIdx !== null;

              return (
                <div
                  key={slice.id}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => handleOpenSliceModal(slice)}
                  className={`
                    relative h-[440px] sm:h-[500px] md:h-[540px] lg:h-[560px] cursor-pointer
                    transition-all duration-500 ease-out
                    ${hasActiveHover 
                      ? (isHovered ? 'w-[230px] sm:w-[260px] md:w-[280px] z-30 shadow-2xl scale-[1.02]' : 'w-[100px] sm:w-[125px] md:w-[135px] opacity-75 grayscale-[20%]')
                      : 'w-[120px] sm:w-[145px] md:w-[165px] hover:shadow-xl'
                    }
                  `}
                >
                  {/* Outer Slanted Parallelogram Container */}
                  <div 
                    className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#e8e6e1] border-2 border-white/90 shadow-md transition-all duration-500 relative"
                    style={{
                      transform: 'skewX(-12deg)',
                      WebkitTransform: 'skewX(-12deg)'
                    }}
                  >
                    {/* Inner Content (Counter-skewed so images remain upright & head perfectly framed) */}
                    <div 
                      className="w-full h-full relative"
                      style={{
                        transform: 'skewX(12deg) scale(1.18)',
                        WebkitTransform: 'skewX(12deg) scale(1.18)',
                        transformOrigin: 'top center'
                      }}
                    >
                      <img 
                        src={slice.image} 
                        alt={slice.title}
                        style={{ objectPosition: slice.objectPos }}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
                      />

                      {/* Subtle Vignette / Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity" />

                      {/* Hover Info Capsule */}
                      <div 
                        className={`absolute inset-0 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                      >
                        {/* Top Tag */}
                        <div className="flex justify-start">
                          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-neutral-950 font-syne text-[9px] font-extrabold uppercase tracking-wider shadow-sm">
                            {slice.tag}
                          </span>
                        </div>

                        {/* Bottom Title & Price */}
                        <div className="space-y-1.5 text-white text-left">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[#fbbf24] font-semibold">
                            {slice.category}
                          </p>
                          <h4 className="font-bebas text-lg sm:text-xl tracking-wider leading-tight drop-shadow-md uppercase text-white font-bold">
                            {slice.title}
                          </h4>
                          
                          <div className="pt-1 flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-white/95">
                              ₹{slice.price}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 px-2.5 py-1 rounded-full shadow-xs transition-colors">
                              <span>VIEW LOOK</span>
                              <ArrowUpRight className="w-2.5 h-2.5" />
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>

                    {/* Edge Glass Highlights */}
                    <div className="absolute inset-0 border border-white/40 rounded-2xl sm:rounded-3xl pointer-events-none" />

                  </div>

                  {/* Micro Index Number */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-neutral-400 font-bold opacity-70">
                    0{index + 1}
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM HEADLINE & INTERACTIVE LIQUID CURSOR BUTTON */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-20 max-w-4xl mx-auto text-center px-4">
          <p className="font-sans font-black text-xs sm:text-sm md:text-base lg:text-[17px] tracking-[0.06em] text-[#1c1a20] uppercase leading-relaxed sm:leading-snug">
            SAVE TIME AND MONEY WHILE SATISFYING ALL YOUR FASHION, CLOTHING AND ACCESSORY NEEDS BY EXPLORING OUR MEN, WOMEN &amp; COUPLE PRODUCTS
          </p>

          {/* Liquid Cursor Interactive Button */}
          <div className="mt-8 flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
            <LiquidCarveButton
              label="EXPLORE MEN, WOMEN & COUPLE PRODUCTS  ↗"
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
                fontSize: 12,
                lineHeight: "1.2em",
                letterSpacing: "0.18em",
                textAlign: "center"
              }}
              padding="16px 36px"
              rounded={9999}
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </div>

      </div>

      {/* Interactive ShopLookModal */}
      {activeModalOutfit && (
        <ShopLookModal
          outfit={activeModalOutfit}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setActiveModalOutfit(null);
          }}
          onAddToCart={onAddToCart}
        />
      )}

    </section>
  );
}
