import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300 pt-20 pb-12 border-t border-neutral-900 relative overflow-hidden">
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* 4 Clean Columns matching the mockup */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-neutral-900 text-xs tracking-wider">
          
          {/* MENU */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-4">
              MENU
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li><a href="#hero" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#lookbook" className="hover:text-white transition-colors">Lookbook</a></li>
              <li><a href="#ethos" className="hover:text-white transition-colors">The Ethos</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* ARCHIVES */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-4">
              ARCHIVES
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">SS26 Runway</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pop Art Series</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Silk Atelier</a></li>
            </ul>
          </div>

          {/* ATELIERS */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-4">
              ATELIERS
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>Paris Atelier</li>
              <li>Milan Showroom</li>
              <li>Tokyo Salon</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-4">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>Private Client</li>
              <li>Concierge Service</li>
              <li>press@zudio.com</li>
            </ul>
          </div>

        </div>

        {/* Massive Full-Width Editorial Serif Title (Direct from Mockup) */}
        <div className="pt-10 pb-6 text-center select-none overflow-hidden">
          <h1 className="font-bodoni text-[70px] sm:text-[130px] md:text-[180px] lg:text-[230px] font-normal tracking-tight text-white leading-none uppercase">
            ZUDIO
          </h1>
        </div>

        {/* Fine Bottom Copyright */}
        <div className="pt-6 border-t border-neutral-950 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-600 gap-2">
          <span>© 2026 ZUDIO. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400">PRIVACY</a>
            <a href="#" className="hover:text-neutral-400">TERMS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
