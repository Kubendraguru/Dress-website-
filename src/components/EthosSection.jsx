import React from 'react';

export default function EthosSection() {
  return (
    <section id="ethos" className="py-24 md:py-32 bg-[#faf8f5] relative overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="font-bodoni text-4xl sm:text-5xl md:text-6xl font-normal text-neutral-950 tracking-[-0.01em] leading-tight">
            The Ethos
          </h2>
          <p className="font-bodoni italic text-2xl sm:text-3xl text-neutral-700 mt-1">
            Style With Soul
          </p>
          <p className="text-neutral-500 text-xs sm:text-sm mt-3 tracking-wider font-mono uppercase">
            Empowering modern self-expression.
          </p>
        </div>

        {/* 3 Geometric Rows matching the mockup layout */}
        <div className="space-y-12 max-w-4xl mx-auto">
          
          {/* Row 1: Orange Striped Wrap in Horizontal Pill Arch + Left Badge 01 */}
          <div className="flex items-center gap-6 sm:gap-10">
            {/* Left Circular Badge 01 & Label */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center font-mono text-xs sm:text-sm font-bold shadow-md">
                01
              </div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 [writing-mode:vertical-rl] rotate-180 hidden sm:block">
                Color & Expression
              </span>
            </div>

            {/* Pill-shaped Arch Image Container */}
            <div className="flex-1 overflow-hidden rounded-full aspect-[21/9] sm:aspect-[24/9] bg-[#fae8d8] border border-neutral-300 shadow-sm relative group">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
                alt="Color and Expression"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Row 2: Bauhaus Color Block Grid & Model + Right Badge 02 */}
          <div className="flex items-center gap-6 sm:gap-10">
            
            {/* Geometric Grid Shape Container */}
            <div className="flex-1 grid grid-cols-12 gap-3 sm:gap-4 aspect-[21/9] sm:aspect-[24/9]">
              
              {/* Pop Art / Geometric Panel */}
              <div className="col-span-7 rounded-2xl overflow-hidden bg-gradient-to-tr from-amber-400 via-rose-400 to-blue-500 border border-neutral-300 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Pop Art Pattern"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Semi-Circle Arch Panel */}
              <div className="col-span-5 rounded-r-full overflow-hidden bg-[#e8e2d5] border border-neutral-300 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
                  alt="Structure and Form"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

            {/* Right Circular Badge 02 & Label */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center font-mono text-xs sm:text-sm font-bold shadow-md">
                02
              </div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 [writing-mode:vertical-rl] rotate-180 hidden sm:block">
                Structure & Form
              </span>
            </div>

          </div>

          {/* Row 3: Optical Zebra Black & White Stripes Arch + Left Badge 03 */}
          <div className="flex items-center gap-6 sm:gap-10">
            {/* Left Circular Badge 03 & Label */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center font-mono text-xs sm:text-sm font-bold shadow-md">
                03
              </div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 [writing-mode:vertical-rl] rotate-180 hidden sm:block">
                Timeless Contrast
              </span>
            </div>

            {/* Arch-top / Half-circle Container with Optical Zebra Waves */}
            <div className="flex-1 overflow-hidden rounded-t-full aspect-[21/9] sm:aspect-[24/9] bg-black border border-neutral-300 shadow-sm relative group flex items-center justify-center">
              {/* Dynamic SVG Optical Waves */}
              <svg className="w-full h-full object-cover" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="300" fill="#000" />
                <path d="M0 0 L150 300 L230 300 L80 0 Z" fill="#fff" />
                <path d="M160 0 L310 300 L390 300 L240 0 Z" fill="#fff" />
                <path d="M320 0 L470 300 L550 300 L400 0 Z" fill="#fff" />
                <path d="M480 0 L630 300 L710 300 L560 0 Z" fill="#fff" />
                <path d="M640 0 L790 300 L870 300 L720 0 Z" fill="#fff" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
