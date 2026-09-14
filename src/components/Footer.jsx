import React from 'react';
import { 
  ArrowUp, 
  Shirt, 
  Gem, 
  Sparkles, 
  Users, 
  Globe 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-neutral-300 pt-16 sm:pt-20 pb-10 border-t border-neutral-900 relative overflow-hidden select-none">
      
      {/* Soft Ambient Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(255,255,255,0.08) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. 4 CLEAN NAVIGATION COLUMNS (AT TOP IN BLACK THEME) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-neutral-900 text-xs tracking-wider">
          
          {/* MENU */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-4 pb-1 border-b border-neutral-800">
              MENU
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light text-[12px]">
              <li><a href="#hero" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Modern Room Showroom</a></li>
              <li><a href="#ethos" className="hover:text-white transition-colors">The Ethos</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">2-Piece Sets</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community &amp; Gallery</a></li>
            </ul>
          </div>

          {/* ARCHIVES */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-4 pb-1 border-b border-neutral-800">
              ARCHIVES
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light text-[12px]">
              <li><a href="#products" className="hover:text-white transition-colors">SS26 Runway Edition</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Pop Art Graphic Series</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Silk &amp; Linen Series</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Tailored Suiting</a></li>
            </ul>
          </div>

          {/* STORES */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-4 pb-1 border-b border-neutral-800">
              STORES
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light text-[12px]">
              <li>Flagship Salons</li>
              <li>Store Locator</li>
              <li>Paris &bull; Milan &bull; Tokyo</li>
              <li>New York SoHo</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-4 pb-1 border-b border-neutral-800">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light text-[12px]">
              <li>Private Client Concierge</li>
              <li>Customer Support</li>
              <li className="font-mono text-white font-medium pt-0.5">support@zudio.com</li>
              <li className="font-mono text-[11px] text-neutral-500">+1 (800) 983-4628</li>
            </ul>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. ZUDIO BRAND BANNER PICTURE (MIDDLE) */}
        {/* ========================================================================= */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-neutral-800 shadow-2xl group">
          <img 
            src="https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393807/zudio-footer-banner_fzpsmb.webp" 
            alt="Zudio - Style That Moves You | Trendy Styles For Every You"
            className="w-full h-auto block select-none"
          />
        </div>

        {/* ========================================================================= */}
        {/* 3. 4 VALUE PROPOSITIONS STRIP (DOWN / BELOW THE ZUDIO IMAGE) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 pb-10 border-b border-neutral-900 text-xs">
          
          {/* 1. WIDE RANGE */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
              <Shirt className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Wide Range
              </h5>
              <p className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed font-light">
                Trendy styles curated for every mood &amp; occasion.
              </p>
            </div>
          </div>

          {/* 2. AFFORDABLE */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
              <Gem className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Affordable
              </h5>
              <p className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed font-light">
                Great fashion and elevated silhouettes at the best prices.
              </p>
            </div>
          </div>

          {/* 3. PREMIUM QUALITY */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Premium Quality
              </h5>
              <p className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed font-light">
                All-day breathable comfort meets durable tailoring.
              </p>
            </div>
          </div>

          {/* 4. FOR EVERYONE */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                For Everyone
              </h5>
              <p className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed font-light">
                Designed for Men &bull; Women &bull; Unisex fits.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. FINE BOTTOM COPYRIGHT & UTILITIES */}
        {/* ========================================================================= */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
          
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span>&copy; 2026 ZUDIO. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
            <a href="#products" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#products" className="hover:text-white transition-colors">TERMS</a>
            <a href="#products" className="hover:text-white transition-colors">SUSTAINABILITY</a>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors font-bold cursor-pointer text-neutral-400"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}
