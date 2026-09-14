import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Plus, ShoppingBag, Sparkles } from 'lucide-react';
import { LOOKBOOK_SLIDES, HERO_OUTFITS } from '../data/products';
import ShopLookModal from './ShopLookModal';

export default function LookbookShowcase({ onAddToCart }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const slide = LOOKBOOK_SLIDES[currentSlideIndex];

  // Match corresponding outfit data for modal bundle
  const matchingOutfit = HERO_OUTFITS.find((o) => 
    o.title.toLowerCase().includes(slide.title.toLowerCase().split(' ')[0])
  ) || {
    id: slide.id,
    title: slide.title,
    subtitle: slide.subtitle,
    price: slide.price || 380,
    image: slide.image,
    description: slide.editorialNote,
    tag: slide.season,
    items: slide.hotspots ? slide.hotspots.map((h, i) => ({
      id: `${slide.id}-item-${i}`,
      name: h.label,
      price: parseInt(h.price.replace('$', '')) || 120,
      category: 'Garment',
      size: 'M'
    })) : []
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? LOOKBOOK_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev === LOOKBOOK_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="lookbook" className="py-20 md:py-28 bg-[#faf8f5] relative overflow-hidden select-none">
      
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-0.5 rounded-full bg-neutral-950 text-white font-mono font-medium">
                {slide.season}
              </span>
              <span className="text-xs text-neutral-500 font-light tracking-wider">
                &bull; &nbsp; Architectural Lookbook 0{currentSlideIndex + 1} / 0{LOOKBOOK_SLIDES.length}
              </span>
            </div>
            <h2 className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-950">
              {slide.title}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            {slide.editorialNote}
          </p>
        </div>

        {/* Main Architectural Card Showcase (Exact Frame from Mockup) */}
        <div className="relative bg-white rounded-3xl p-4 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-neutral-200/80">
          
          {/* Image & Geometry Container */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[620px] overflow-hidden rounded-2xl bg-neutral-900 group">
            
            <img 
              key={slide.id}
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-1000 animate-in fade-in duration-500"
            />

            {/* Ambient Dark Gradient Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Left Circular Navigation Button */}
            <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/90 backdrop-blur-md text-white flex items-center justify-center shadow-xl hover:scale-110 hover:bg-black transition-all cursor-pointer border border-white/20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Right Circular Next Button */}
            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
              <button 
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-black flex items-center justify-center shadow-xl hover:scale-110 transition-all cursor-pointer border border-neutral-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Floating Black Pill Button: SHOP LOOK */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
              <button
                onClick={() => setIsShopModalOpen(true)}
                className="px-6 sm:px-8 py-3 bg-neutral-950 hover:bg-neutral-900 text-white rounded-full text-xs sm:text-[13px] font-mono font-bold tracking-[0.16em] uppercase flex items-center gap-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.4)] border border-white/20 hover:border-amber-400 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                </div>
                <span>SHOP LOOK (${slide.price || 380})</span>
              </button>
            </div>

            {/* Right Edge Fine Vertical Editorial Caption */}
            <div className="absolute right-4 top-8 bottom-8 hidden md:flex items-center pointer-events-none select-none">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/80 rotate-90 origin-right">
                ARCHITECTURAL ATELIER • SS26
              </span>
            </div>

          </div>

          {/* Bottom Bar: POP ART ENERGY • TONAL RICH • LIMITED DROPS */}
          <div className="mt-8 pt-6 border-t border-neutral-200/80 text-center flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-neutral-600">
            <span>• POP ART ENERGY</span>
            <span className="font-bodoni font-bold text-neutral-950 text-sm sm:text-base underline decoration-neutral-900 underline-offset-8">
              {slide.title}
            </span>
            <span>• LIMITED DROPS •</span>
          </div>

        </div>

      </div>

      {/* Shop Look Interactive Modal */}
      <ShopLookModal
        outfit={matchingOutfit}
        isOpen={isShopModalOpen}
        onClose={() => setIsShopModalOpen(false)}
        onAddToCart={onAddToCart}
      />

    </section>
  );
}
