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

export default function FeaturedCollections({ onAddToCart, onSelectCollection }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeModalOutfit, setActiveModalOutfit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // The 7 Curated Showroom Slices from our website products
  const showroomSlices = [
    {
      id: 'slice-1',
      title: 'Sand Utility Shacket',
      category: "Men's Outerwear",
      price: 78,
      image: "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393786/sand-denim-model_jo9mrm.png",
      tag: 'NEW ARRIVAL',
      items: [
        { id: 'item-s1-1', name: 'Sand Utility Safari Shacket', price: 78, category: 'Outerwear', size: 'M' },
        { id: 'item-s1-2', name: 'Pleated Ecru Trouser', price: 62, category: 'Pants', size: '32' }
      ]
    },
    {
      id: 'slice-2',
      title: 'Noir Atelier Suiting',
      category: 'Signature Suiting',
      price: 145,
      image: "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393750/couple-noir-linen_jhoevy.png",
      tag: 'RUNWAY',
      items: [
        { id: 'item-s2-1', name: 'Noir Double-Breasted Blazer', price: 145, category: 'Suiting', size: 'L' },
        { id: 'item-s2-2', name: 'Fluid Black Silk Shirt', price: 75, category: 'Shirts', size: 'L' }
      ]
    },
    {
      id: 'slice-3',
      title: 'Leather Rucksack & Bag',
      category: 'Accessories',
      price: 185,
      image: '/editorial-leather-backpack.png',
      tag: 'HANDCRAFTED',
      items: [
        { id: 'item-s3-1', name: 'Full-Grain Italian Leather Rucksack', price: 185, category: 'Accessories', size: 'One Size' },
        { id: 'item-s3-2', name: 'Matching Leather Card Case', price: 45, category: 'Accessories', size: 'One Size' }
      ]
    },
    {
      id: 'slice-4',
      title: 'Fluid Linen Kurti Dress',
      category: "Women's Dresses",
      price: 65,
      image: "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393762/floral-kurti-model_cs7lwi.png",
      tag: 'LIMITED',
      items: [
        { id: 'item-s4-1', name: 'Fluid Slate Blue Linen Kurti Dress', price: 65, category: 'Dresses', size: 'S' },
        { id: 'item-s4-2', name: 'Palazzo Linen Trousers', price: 55, category: 'Pants', size: 'S' }
      ]
    },
    {
      id: 'slice-5',
      title: 'Blush Corduroy Blazer Set',
      category: "Women's Combos",
      price: 92,
      image: "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393792/women-combo-pink-corduroy_mbiouw.png",
      tag: 'BESTSELLER',
      items: [
        { id: 'item-s5-1', name: 'Blush Tailored Corduroy Jacket', price: 92, category: 'Jackets', size: 'M' },
        { id: 'item-s5-2', name: 'High-Rise Corduroy Mini Skirt', price: 48, category: 'Skirts', size: 'M' }
      ]
    },
    {
      id: 'slice-6',
      title: 'Crisp Poplin Atelier Rail',
      category: 'Signature Shirts',
      price: 54,
      image: "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393762/hanger-shirts-hero-new_fqk0ca.jpg",
      tag: 'ESSENTIALS',
      items: [
        { id: 'item-s6-1', name: 'Crisp White Poplin Oversized Shirt', price: 54, category: 'Shirts', size: 'M' },
        { id: 'item-s6-2', name: 'Earth-Tone Over-Shirt Layer', price: 68, category: 'Shirts', size: 'M' }
      ]
    },
    {
      id: 'slice-7',
      title: 'Sage Silk Pinstripe Shirt',
      category: "Women's Shirting",
      price: 58,
      image: "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393802/women-shirt-sage-pinstripe_p9ql6o.png",
      tag: 'NEW DROP',
      items: [
        { id: 'item-s7-1', name: 'Tailored Sage Pinstripe Poplin', price: 58, category: 'Shirts', size: 'S' },
        { id: 'item-s7-2', name: 'Horseshoe Indigo Relaxed Denim', price: 82, category: 'Pants', size: '28' }
      ]
    }
  ];

  const handleOpenSliceModal = (slice) => {
    setActiveModalOutfit(slice);
    setIsModalOpen(true);
  };

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#f4f3f0] relative overflow-hidden select-none">
      
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(0,0,0,0.03) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP TITLE: "MODERN ROOM" (DIRECT FROM REFERENCE IMAGE) */}
        {/* ========================================================================= */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-[0.14em] text-[#1c1a20] uppercase leading-none">
            MODERN ROOM
          </h2>
          <div className="w-16 h-1 bg-neutral-900 mx-auto mt-4 rounded-full opacity-20" />
        </div>

        {/* ========================================================================= */}
        {/* KINETIC SLANTED PARALLELOGRAM GALLERY (THE 7 SLICES) */}
        {/* ========================================================================= */}
        <div className="relative py-4 sm:py-6 overflow-x-auto lg:overflow-visible no-scrollbar">
          
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4.5 min-w-[860px] lg:min-w-0 px-4">
            
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
                    relative h-[380px] sm:h-[440px] md:h-[490px] cursor-pointer
                    transition-all duration-500 ease-out
                    ${hasActiveHover 
                      ? (isHovered ? 'w-[210px] sm:w-[240px] md:w-[260px] z-30 shadow-2xl scale-[1.02]' : 'w-[100px] sm:w-[125px] md:w-[135px] opacity-75 grayscale-[20%]')
                      : 'w-[110px] sm:w-[135px] md:w-[155px] hover:shadow-xl'
                    }
                  `}
                >
                  {/* Outer Slanted Parallelogram Container */}
                  <div 
                    className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-200 border-2 border-white/80 shadow-md transition-all duration-500 relative"
                    style={{
                      transform: 'skewX(-12deg)',
                      WebkitTransform: 'skewX(-12deg)'
                    }}
                  >
                    {/* Inner Content (Counter-skewed so images remain upright) */}
                    <div 
                      className="w-full h-full relative"
                      style={{
                        transform: 'skewX(12deg) scale(1.45)',
                        WebkitTransform: 'skewX(12deg) scale(1.45)'
                      }}
                    >
                      <img 
                        src={slice.image} 
                        alt={slice.title}
                        className={`w-full h-full object-cover object-center transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                      />

                      {/* Ambient Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                      {/* Hover Info Capsule */}
                      <div 
                        className={`absolute inset-0 p-4 flex flex-col justify-between transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                      >
                        {/* Top Tag */}
                        <div className="flex justify-start">
                          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-950 font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                            {slice.tag}
                          </span>
                        </div>

                        {/* Bottom Title & Price */}
                        <div className="space-y-1 text-white text-left">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-semibold">
                            {slice.category}
                          </p>
                          <h4 className="font-sans font-bold text-sm sm:text-base leading-tight drop-shadow-md">
                            {slice.title}
                          </h4>
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-xs font-mono font-bold text-white/90">
                              ${slice.price}.00
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-neutral-900 bg-white px-2 py-0.5 rounded-full shadow-xs">
                              <span>Shop</span>
                              <ArrowUpRight className="w-2.5 h-2.5" />
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>

                    {/* Edge Sheen */}
                    <div className="absolute inset-0 border border-white/30 rounded-2xl sm:rounded-3xl pointer-events-none" />

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
        {/* BOTTOM HEADLINE (DIRECT FROM REFERENCE IMAGE) */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-20 max-w-4xl mx-auto text-center px-4">
          <p className="font-sans font-black text-xs sm:text-sm md:text-base lg:text-[17px] tracking-[0.06em] text-[#1c1a20] uppercase leading-relaxed sm:leading-snug">
            SAVE TIME AND MONEY WHILE SATISFYING ALL YOUR FASHION, CLOTHING AND ACCESSORY NEEDS BY VISITING THESE BEST SHOWROOM
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all hover:scale-105 shadow-md cursor-pointer"
            >
              <span>Explore All Showrooms</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
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
