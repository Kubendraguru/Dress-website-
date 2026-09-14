import React, { useState } from 'react';
import { 
  ArrowUp, 
  ArrowRight, 
  Check, 
  Shirt, 
  Gem, 
  Sparkles, 
  Users, 
  Globe 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#ffffff', '#e83d34', '#e5a919', '#3b82f6']
      });
    } catch (err) {}
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-neutral-300 pt-16 sm:pt-20 pb-10 border-t border-neutral-900 relative overflow-hidden select-none font-sans">
      
      {/* Soft Ambient Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(255,255,255,0.12) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. 3 HIGH-FASHION EDITORIAL DIRECTORY COLUMNS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 pb-12 border-b border-neutral-900 text-xs text-center sm:text-left">
          
          {/* GLOBAL STORES */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white pb-1.5 border-b border-neutral-800">
              STORES &amp; SALONS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11.5px] font-mono text-neutral-400 font-light">
              <div className="space-y-1.5">
                <p>SOUTH KOREA</p>
                <p>AUSTRALIA</p>
                <p>AUSTRIA</p>
                <p>INDIA (BKC MUMBAI)</p>
              </div>
              <div className="space-y-1.5">
                <p>FRANCE (PARIS)</p>
                <p>ITALY (MILAN)</p>
                <p>JAPAN (TOKYO)</p>
                <p>UNITED KINGDOM</p>
              </div>
            </div>
          </div>

          {/* FOLLOW US */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white pb-1.5 border-b border-neutral-800">
              FOLLOW US
            </h4>
            <div className="text-[11.5px] font-mono text-neutral-400 space-y-2 font-light">
              <p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">INSTAGRAM &bull; @ZUDIO</a></p>
              <p><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YOUTUBE ATELIER</a></p>
              <p><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TWITTER (X)</a></p>
              <p><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TIKTOK EDITORIAL</a></p>
            </div>
          </div>

          {/* CONTACT & PRIVATE SALON */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white pb-1.5 border-b border-neutral-800">
              CONTACT &amp; SALON
            </h4>
            <div className="text-[11.5px] font-mono text-neutral-400 space-y-1.5 font-light">
              <p className="text-white font-medium">pr.atelier@zudio.com</p>
              <p>showroom.it@zudio.com</p>
              <p className="text-neutral-500 pt-1 text-[11px]">+91 (022) 6700-9000</p>
              <p className="text-[10px] text-neutral-600">TRENT HOUSE, BKC, MUMBAI</p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. ZUDIO BRAND BANNER PICTURE */}
        {/* ========================================================================= */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-neutral-800 shadow-2xl group">
          <img 
            src="https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393807/zudio-footer-banner_fzpsmb.webp" 
            alt="Zudio - Style That Moves You | Trendy Styles For Every You"
            className="w-full h-auto block select-none"
          />
        </div>

        {/* ========================================================================= */}
        {/* 3. 4 VALUE PROPOSITIONS STRIP */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2 pb-8 border-b border-neutral-900 text-xs">
          
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
        {/* 4. VIP PRIVATE SALON QUICK SUBSCRIPTION */}
        {/* ========================================================================= */}
        <div className="max-w-md mx-auto bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 backdrop-blur-sm text-center">
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-mono text-xs py-2">
              <Check className="w-4 h-4" />
              <span>INVITATION DISPATCHED TO PRIVATE SALON</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-neutral-300 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#e5a919]" />
                <span>JOIN PRIVATE ATELIER CLUB</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-3 py-2 bg-neutral-950 border border-neutral-700 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#e83d34] text-white rounded-lg text-xs font-mono font-bold hover:bg-white hover:text-black transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 5. FINE BOTTOM COPYRIGHT & UTILITIES */}
        {/* ========================================================================= */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
          
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span>&copy; 2026 ZUDIO ATELIER. ALL RIGHTS RESERVED.</span>
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
