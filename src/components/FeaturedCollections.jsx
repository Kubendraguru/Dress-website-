import React from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURED_COLLECTIONS } from '../data/products';

export default function FeaturedCollections({ onSelectCollection }) {
  return (
    <section id="collections" className="py-20 md:py-28 relative bg-[#faf8f5] overflow-hidden">
      
      {/* Subtle Abstract Zebra Background Watermark (Directly from Mockup) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none flex items-center justify-center">
        <svg className="w-full h-full object-cover" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 C 300 200, 700 0, 1000 150 L 1000 250 C 700 100, 300 300, 0 200 Z" fill="#000" />
          <path d="M0 400 C 350 500, 650 300, 1000 450 L 1000 550 C 650 400, 350 600, 0 500 Z" fill="#000" />
          <path d="M0 700 C 400 800, 600 600, 1000 750 L 1000 850 C 600 700, 400 900, 0 800 Z" fill="#000" />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="font-bodoni text-4xl sm:text-5xl md:text-6xl font-normal text-neutral-950 tracking-[-0.01em] leading-tight">
            Featured Collections
          </h2>
          <p className="font-bodoni italic text-2xl sm:text-3xl text-neutral-700 mt-2">
            Color Meets Clarity
          </p>
        </div>

        {/* 3 Tilted Cards Grid matching the mockup arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 pt-2 pb-8 items-center max-w-5xl mx-auto perspective-1000">
          
          {FEATURED_COLLECTIONS.map((col, index) => {
            const tiltClass = index === 0 
              ? 'card-tilt-left' 
              : index === 1 
              ? 'card-tilt-center' 
              : 'card-tilt-right';

            return (
              <div 
                key={col.id}
                onClick={() => onSelectCollection(col)}
                className={`group relative bg-white p-3 sm:p-4 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-neutral-200 transition-all duration-500 cursor-pointer ${tiltClass}`}
              >
                {/* Image Frame with white polaroid padding */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
                  <img 
                    src={col.image} 
                    alt={col.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-neutral-950 font-bold text-xs uppercase tracking-widest rounded shadow-lg flex items-center gap-1">
                      <span>View Look</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Polaroid Bottom Tag */}
                <div className="pt-4 pb-2 px-1 flex items-center justify-between">
                  <span className="font-bodoni italic text-sm text-neutral-800">
                    {index === 0 ? 'Solar Light' : index === 1 ? 'Terracotta Steps' : 'Cobalt Contrast'}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Pagination Dots / Slider Indicators (from mockup) */}
        <div className="mt-10 flex items-center justify-center gap-4 text-neutral-400">
          <button className="p-1 hover:text-black transition-colors" aria-label="Previous">
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
          </div>

          <button className="p-1 hover:text-black transition-colors" aria-label="Next">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
