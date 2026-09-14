import React, { useState } from 'react';
import { Sparkles, Newspaper, ArrowRight, Flame, BookOpen, X, ArrowUpRight, Check, Clock, User } from 'lucide-react';
import confetti from 'canvas-confetti';

const ZUDIO_TIMES_IMAGE = "/zudio-times-hero.jpg";

const BLOG_ARTICLES = {
  dress_right: {
    tag: 'STYLE GUIDE • SS26',
    category: 'EDITORIAL COLUMN',
    title: 'Dress Right, Feel Good: The Modern Sartorial Philosophy',
    subtitle: 'Shirts, Trousers, Blazers & Layered sets tailored to elevate your natural presence.',
    author: 'Zudio Atelier Editorial Staff',
    readTime: '3 min read',
    date: 'March 14, 2026',
    image: ZUDIO_TIMES_IMAGE,
    content: [
      'True fashion begins with comfort and intentional posture. When garments are cut with modern proportions — dropped shoulders, relaxed chests, and fluid drape — you move with natural confidence.',
      'Our French poplin button-downs and relaxed pleated trousers are engineered to transition effortlessly from morning meetings to evening gallery openings without ever feeling restrictive.',
      'By focusing on clean lines and durable, breathable textiles, every piece becomes a versatile foundation for effortless daily rotation.'
    ]
  },
  new_collection: {
    tag: 'LOOKBOOK REVIEW',
    category: 'SEASONAL ARCHIVE',
    title: 'The New Collection: Classic, Modern & Versatile Silhouettes',
    subtitle: 'Deconstructing modern silhouettes built for effortless daily rotation.',
    author: 'Elena Rostova • Atelier Direction',
    readTime: '4 min read',
    date: 'March 12, 2026',
    image: ZUDIO_TIMES_IMAGE,
    content: [
      'The SS26 capsule reflects a deep appreciation for tonal harmony. We embraced earthy sand tones, washed olive charcoals, and crisp Parisian poplin white to construct an interchangeable capsule wardrobe.',
      'Every garment is rigorously wear-tested by our design teams across Tamil Nadu, Mumbai, and Milan to ensure durable seam integrity, zero shrinkage, and long-lasting shape retention.',
      'Whether layered as a complete co-ord set or styled as standalone separates, this collection defines the essence of modern understated elegance.'
    ]
  },
  zudio_difference: {
    tag: 'ATELIER MANIFESTO',
    category: 'BRAND VALUES',
    title: 'The Zudio Difference: Premium Looks at Everyday Prices',
    subtitle: 'Democratizing high-fashion design without compromising on fabric quality.',
    author: 'Zudio Design Council',
    readTime: '3 min read',
    date: 'March 10, 2026',
    image: ZUDIO_TIMES_IMAGE,
    content: [
      'We believe high-fashion aesthetics should never be locked behind exorbitant price tags. By working directly with master mills and operating in limited, efficient micro-batches, we deliver luxury silhouettes directly to you.',
      'From 480 GSM heavyweight cottons to pure French Normandy linen, every piece carries our pledge of uncompromising craftsmanship.',
      'Our formula is simple: Everyday Wear • Everyday Prices • For Every You.'
    ]
  },
  every_occasion: {
    tag: 'OCCASION WEAR',
    category: 'STYLE JOURNAL',
    title: 'Style For Every Occasion: Office, College, Casual & Party',
    subtitle: 'One versatile capsule, endless expressions across all aspects of life.',
    author: 'Atelier Styling Desk',
    readTime: '3 min read',
    date: 'March 08, 2026',
    image: ZUDIO_TIMES_IMAGE,
    content: [
      'A versatile wardrobe eliminates morning decision fatigue. Layering our open-collar knit polos under tailored blazers creates an instant smart-casual look, while pairing them with washed denim delivers weekend ease.',
      'From lecture halls and creative studios to late-night rooftop gatherings, our curated garments are engineered to move with your rhythm.',
      'Explore our full catalog and claim your signature pieces tailored for any event on your calendar.'
    ]
  }
};

export default function CommunitySection() {
  const [isNewspaperModalOpen, setIsNewspaperModalOpen] = useState(false);
  const [selectedArticleKey, setSelectedArticleKey] = useState(null);

  const scrollToProducts = () => {
    const el = document.getElementById('products') || document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#products';
    }
  };

  const selectedArticle = selectedArticleKey ? BLOG_ARTICLES[selectedArticleKey] : null;

  return (
    <section id="community" className="pt-20 bg-[#faf8f5] relative select-none font-sans overflow-hidden">
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. DARK HEADER BANNER (Matching Mockup) */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden bg-black text-white py-12 px-6 sm:px-12 text-center shadow-xl">
          {/* Subtle Zebra / Wave texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <svg className="w-full h-full object-cover" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 50 C 300 150, 700 0, 1000 100 L 1000 200 C 700 80, 300 250, 0 150 Z" fill="#fff" />
            </svg>
          </div>

          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-[10px] font-mono uppercase tracking-[0.2em] text-[#fbbf24] mb-1">
              <Sparkles className="w-3 h-3 text-[#e83d34]" />
              <span>GLOBAL EDITORIAL CIRCLE</span>
            </div>
            <h2 className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white">
              ZUDIO Community &amp; Times
            </h2>
            <p className="font-bodoni italic text-neutral-400 text-sm sm:text-base max-w-lg mx-auto font-light">
              Real looks, editorial columns &amp; seasonal dispatches from our global circle
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ZUDIO TIMES OFFICIAL EDITORIAL SPOTLIGHT & BLOG FEATURE */}
        {/* ========================================================================= */}
        <div className="relative bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-500 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Image Showcase: Ultra High-Resolution ZUDIO TIMES Graphic */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex items-center justify-center bg-gradient-to-br from-[#f8f6f0] via-[#f1eee7] to-[#e8e4da] relative overflow-hidden">
              <div 
                onClick={() => setIsNewspaperModalOpen(true)}
                className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center cursor-pointer group/img"
                title="Click to view full newspaper"
              >
                <img 
                  src={ZUDIO_TIMES_IMAGE} 
                  alt="ZUDIO TIMES - Style Fashion You | Trending Styles at Zudio" 
                  className="w-full h-auto object-contain transform transition-transform duration-700 group-hover/img:scale-105 drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] select-none"
                />

                {/* Quick Expand Pill */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover/img:opacity-100 transition-all duration-300 px-3 py-1.5 rounded-full bg-black/85 text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                  <Newspaper className="w-3 h-3 text-[#fbbf24]" />
                  <span>CLICK TO EXPAND NEWSPAPER</span>
                </div>
              </div>


            </div>

            {/* Right Editorial Info & Rich Blog Style Cards */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6 text-black">
              
              {/* Editorial Headline & Manifesto */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e83d34] font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#fbbf24]" />
                  <span>OFFICIAL ATELIER JOURNAL</span>
                </div>

                <h3 className="font-bodoni text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-neutral-900">
                  Trending Styles <span className="italic font-normal">at Zudio</span>
                </h3>

                <p className="font-bodoni text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
                  <strong className="text-black font-semibold font-sans">Affordable Fashion. Always.</strong> From everyday basics to statement looks — Zudio brings you effortless style that fits every you.
                </p>
              </div>

              {/* 4 Interactive Blog Editorial Columns (Rich Magazine Styling) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-y border-neutral-100 py-4">
                
                {/* 1. DRESS RIGHT • FEEL GOOD */}
                <div 
                  onClick={() => setSelectedArticleKey('dress_right')}
                  className="group/card bg-[#faf8f5] hover:bg-neutral-900 text-black hover:text-white p-3.5 rounded-2xl border border-neutral-200/80 hover:border-black transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#e83d34] font-bold group-hover/card:text-[#fbbf24] transition-colors">
                        STYLE GUIDE
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/card:text-white group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all" />
                    </div>
                    <h4 className="font-bodoni text-sm sm:text-[15px] font-bold tracking-tight leading-snug">
                      Dress Right <span className="italic font-normal">&bull; Feel Good</span>
                    </h4>
                    <p className="font-serif italic text-[11px] text-neutral-600 group-hover/card:text-neutral-300 leading-relaxed pt-0.5">
                      Shirts, Trousers, Blazers &amp; Layered sets that look better on you.
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400 group-hover/card:text-neutral-200 font-semibold flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>READ COLUMN</span>
                  </div>
                </div>
                
                {/* 2. THE NEW COLLECTION */}
                <div 
                  onClick={() => setSelectedArticleKey('new_collection')}
                  className="group/card bg-[#faf8f5] hover:bg-neutral-900 text-black hover:text-white p-3.5 rounded-2xl border border-neutral-200/80 hover:border-black transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#e83d34] font-bold group-hover/card:text-[#fbbf24] transition-colors">
                        LOOKBOOK
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/card:text-white group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all" />
                    </div>
                    <h4 className="font-bodoni text-sm sm:text-[15px] font-bold tracking-tight leading-snug">
                      The New Collection
                    </h4>
                    <p className="font-serif italic text-[11px] text-neutral-600 group-hover/card:text-neutral-300 leading-relaxed pt-0.5">
                      Classic, modern &amp; versatile cuts crafted for everyday wear.
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400 group-hover/card:text-neutral-200 font-semibold flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>READ COLUMN</span>
                  </div>
                </div>

                {/* 3. ZUDIO DIFFERENCE */}
                <div 
                  onClick={() => setSelectedArticleKey('zudio_difference')}
                  className="group/card bg-[#faf8f5] hover:bg-neutral-900 text-black hover:text-white p-3.5 rounded-2xl border border-neutral-200/80 hover:border-black transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#d97706] font-bold group-hover/card:text-[#fbbf24] transition-colors">
                        MANIFESTO
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/card:text-white group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all" />
                    </div>
                    <h4 className="font-bodoni text-sm sm:text-[15px] font-bold tracking-tight leading-snug">
                      Zudio Difference
                    </h4>
                    <p className="font-mono text-[10.5px] text-neutral-700 group-hover/card:text-neutral-300 leading-relaxed pt-0.5">
                      &bull; Premium Looks &bull; Everyday Prices &bull; For Every You
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400 group-hover/card:text-neutral-200 font-semibold flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>READ COLUMN</span>
                  </div>
                </div>

                {/* 4. FOR EVERY OCCASION */}
                <div 
                  onClick={() => setSelectedArticleKey('every_occasion')}
                  className="group/card bg-[#faf8f5] hover:bg-neutral-900 text-black hover:text-white p-3.5 rounded-2xl border border-neutral-200/80 hover:border-black transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9.5px] uppercase tracking-widest text-neutral-500 font-bold group-hover/card:text-[#fbbf24] transition-colors">
                        OCCASIONS
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/card:text-white group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all" />
                    </div>
                    <h4 className="font-bodoni text-sm sm:text-[15px] font-bold tracking-tight leading-snug">
                      For Every Occasion
                    </h4>
                    <p className="font-serif italic text-[11px] text-neutral-600 group-hover/card:text-neutral-300 leading-relaxed pt-0.5">
                      Office &bull; College &bull; Casual &bull; Party Wear for Men &amp; Women.
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400 group-hover/card:text-neutral-200 font-semibold flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>READ COLUMN</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={scrollToProducts}
                  className="px-6 py-3.5 bg-black text-white hover:bg-[#e83d34] transition-all rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer group/btn"
                >
                  <span>SHOP TRENDING STYLES</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => setIsNewspaperModalOpen(true)}
                  className="px-5 py-3.5 bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors rounded-xl text-xs font-mono font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Newspaper className="w-3.5 h-3.5 text-neutral-600" />
                  <span>VIEW FULL NEWSPAPER</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. SECONDARY GALLERY MARQUEE STRIP */}
      {/* ========================================================================= */}
      <div className="mt-14 py-4 border-y border-neutral-300 bg-[#f4ebd7] overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="font-bodoni text-base sm:text-lg md:text-xl font-medium tracking-wide text-neutral-900">
                Zudio Times
              </span>
              <span className="mx-6 text-sm text-[#e83d34]">✶</span>
              <span className="font-bodoni italic text-base sm:text-lg md:text-xl font-medium tracking-wide text-neutral-900">
                Trending Styles by Zudio
              </span>
              <span className="mx-6 text-sm text-[#e83d34]">✶</span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-700">
                AFFORDABLE FASHION ALWAYS
              </span>
              <span className="mx-6 text-sm text-[#e83d34]">✶</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE BLOG ARTICLE READER MODAL */}
      {/* ========================================================================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white text-neutral-900 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative border border-neutral-200 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-[#fcf8f2] sticky top-0 z-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e83d34] font-bold">
                <BookOpen className="w-4 h-4" />
                <span>{selectedArticle.category}</span>
                <span>&bull;</span>
                <span className="text-neutral-500">{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticleKey(null)}
                className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-black hover:text-white flex items-center justify-center transition-colors font-mono text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-[10px] font-mono uppercase tracking-widest font-bold">
                  {selectedArticle.tag}
                </span>
                
                <h2 className="font-bodoni text-2xl sm:text-3xl md:text-4xl text-neutral-900 font-bold tracking-tight leading-snug">
                  {selectedArticle.title}
                </h2>

                <p className="font-bodoni italic text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                  &ldquo;{selectedArticle.subtitle}&rdquo;
                </p>
              </div>

              {/* Author Strip */}
              <div className="flex items-center justify-between py-3 border-y border-neutral-100 text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-neutral-700" />
                  <span className="font-semibold text-neutral-800">{selectedArticle.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{selectedArticle.date}</span>
                </div>
              </div>

              {/* Article Paragraphs with elegant editorial typography */}
              <div className="space-y-4 text-neutral-800 font-serif text-[15px] sm:text-base leading-relaxed">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Quote Highlight */}
              <div className="p-5 rounded-2xl bg-[#faf8f5] border-l-4 border-[#e83d34] space-y-1.5">
                <p className="font-bodoni italic text-sm sm:text-base text-neutral-900">
                  &ldquo;Affordable fashion. Always. From everyday basics to statement looks.&rdquo;
                </p>
                <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  — ZUDIO ATELIER SS26 EDITORIAL
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-mono text-neutral-500">
                  READY TO ELEVATE YOUR WARDROBE?
                </span>
                <button
                  onClick={() => {
                    setSelectedArticleKey(null);
                    scrollToProducts();
                  }}
                  className="px-6 py-3 bg-black text-white hover:bg-[#e83d34] transition-colors rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>EXPLORE STYLES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. HIGH-RES NEWSPAPER MODAL */}
      {/* ========================================================================= */}
      {isNewspaperModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white text-black w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative border border-neutral-200 flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-[#fcf8f2]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e83d34] font-bold">
                <Newspaper className="w-4 h-4" />
                <span>ZUDIO TIMES &bull; OFFICIAL EDITION</span>
              </div>
              <button
                onClick={() => setIsNewspaperModalOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-black hover:text-white flex items-center justify-center transition-colors font-mono text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body with Full High-Res Image */}
            <div className="p-4 sm:p-8 overflow-y-auto space-y-6">
              <div className="rounded-2xl overflow-hidden bg-neutral-50 p-2 sm:p-4 border border-neutral-200 shadow-inner flex justify-center">
                <img 
                  src={ZUDIO_TIMES_IMAGE} 
                  alt="Zudio Times Full High Resolution"
                  className="w-full h-auto max-h-[680px] object-contain rounded-xl select-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-neutral-100">
                <div className="text-left">
                  <h4 className="font-bodoni text-2xl tracking-tight text-neutral-900 font-bold">
                    Style <span className="italic font-normal">&bull; Fashion &bull; You</span>
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono">
                    Official Zudio Atelier &bull; Everyday Wear &bull; Everyday Prices
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsNewspaperModalOpen(false);
                    scrollToProducts();
                  }}
                  className="px-8 py-3.5 bg-black text-white hover:bg-[#e83d34] transition-colors rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg flex-shrink-0"
                >
                  <span>EXPLORE ALL COLLECTIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
