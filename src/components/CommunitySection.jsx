import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMMUNITY_POSTS } from '../data/products';
import MarqueeBanner from './MarqueeBanner';

export default function CommunitySection() {
  const cardColors = ['bg-[#e83d34]', 'bg-[#4f644b]', 'bg-[#8c9472]'];

  return (
    <section id="community" className="pt-20 bg-[#faf8f5] relative">
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Header Banner with Zebra watermark matching mockup */}
        <div className="relative rounded-3xl overflow-hidden bg-black text-white py-12 px-6 sm:px-12 text-center mb-12 shadow-xl">
          {/* Subtle Zebra texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <svg className="w-full h-full object-cover" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 50 C 300 150, 700 0, 1000 100 L 1000 200 C 700 80, 300 250, 0 150 Z" fill="#fff" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide">
              ZUDIO Community
            </h2>
            <p className="font-bodoni italic text-neutral-400 text-sm sm:text-base mt-2">
              Real looks styled by our global circle across the world
            </p>
          </div>
        </div>

        {/* 3 Portrait Cards Grid (Exact Mockup Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-16">
          {COMMUNITY_POSTS.map((post, idx) => (
            <div 
              key={post.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <img 
                  src={post.image} 
                  alt={post.user}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom Color Banner Bar with Circular Arrow Action (Direct from Mockup) */}
                <div className={`absolute bottom-0 inset-x-0 ${cardColors[idx % cardColors.length]} text-white p-3.5 flex items-center justify-between`}>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    {post.user}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Secondary Gallery Marquee Strip (Directly from Mockup) */}
      <div className="py-4 border-y border-neutral-300 bg-[#f4ebd7] overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="font-bodoni text-base sm:text-lg md:text-xl font-medium tracking-wide text-neutral-900">
                Gallery
              </span>
              <span className="mx-6 text-sm">✶</span>
              <span className="font-bodoni italic text-base sm:text-lg md:text-xl font-medium tracking-wide text-neutral-900">
                View Community Gallery
              </span>
              <span className="mx-6 text-sm">✶</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
