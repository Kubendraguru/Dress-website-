import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenWishlist, 
  onSearchClick,
  currentPage = 'home',
  activeCategory = 'All',
  activeGender = 'all',
  onNavigate = () => {}
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page, category = 'All', gender = null) => {
    onNavigate(page, category, gender);
    setMobileMenuOpen(false);
  };

  const handleSectionNav = (sectionId) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-neutral-200/60 transition-all">
      
      {/* 1. TOP MAIN NAV BAR */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between">
        
        {/* Left: MENU Button & Page Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 text-neutral-900 hover:opacity-70 transition-opacity font-mono text-xs uppercase tracking-[0.2em] font-semibold"
            aria-label="Open navigation menu"
          >
            <div className="flex flex-col gap-1 w-5">
              <span className="h-[1.5px] w-full bg-neutral-900 block"></span>
              <span className="h-[1.5px] w-3/4 bg-neutral-900 block"></span>
            </div>
            <span className="hidden sm:inline">MENU</span>
          </button>

          {/* Desktop Navigation Links (Men & Women Separately) */}
          <nav className="hidden md:flex items-center gap-6 ml-2 font-mono text-xs uppercase tracking-[0.16em]">
            <button
              onClick={() => handleNav('home')}
              className={`transition-all py-1 px-1 border-b-2 cursor-pointer ${
                currentPage === 'home' 
                  ? 'text-neutral-950 font-bold border-neutral-950' 
                  : 'text-neutral-500 hover:text-neutral-900 border-transparent'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('products', 'All', 'men')}
              className={`transition-all py-1 px-1 flex items-center gap-1.5 border-b-2 cursor-pointer ${
                currentPage === 'products' && activeGender === 'men'
                  ? 'text-neutral-950 font-bold border-neutral-950' 
                  : 'text-neutral-600 hover:text-neutral-950 border-transparent'
              }`}
            >
              <span>Men</span>
            </button>

            <button
              onClick={() => handleNav('products', 'All', 'women')}
              className={`transition-all py-1 px-1 flex items-center gap-1.5 border-b-2 cursor-pointer ${
                currentPage === 'products' && activeGender === 'women'
                  ? 'text-neutral-950 font-bold border-neutral-950' 
                  : 'text-neutral-600 hover:text-neutral-950 border-transparent'
              }`}
            >
              <span>Women</span>
            </button>
          </nav>
        </div>

        {/* Center: Brand Mark (Bloomair) */}
        <div className="text-center">
          <button 
            onClick={() => handleNav('home')}
            className="inline-block group focus:outline-none cursor-pointer"
          >
            <span className="font-bodoni text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.15em] text-neutral-950 uppercase transition-transform group-hover:scale-[1.02] inline-block">
              BLOOMAIR
            </span>
          </button>
        </div>

        {/* Right: Search, Mobile Men & Women Links, Bag */}
        <div className="flex items-center gap-2 sm:gap-6">
          <div className="md:hidden flex items-center gap-1 font-mono text-[11px] uppercase font-semibold">
            <button
              onClick={() => handleNav('products', 'All', 'men')}
              className={`px-2 py-1 rounded transition-colors ${
                currentPage === 'products' && activeGender === 'men' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:text-black'
              }`}
            >
              Men
            </button>
            <button
              onClick={() => handleNav('products', 'All', 'women')}
              className={`px-2 py-1 rounded transition-colors ${
                currentPage === 'products' && activeGender === 'women' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:text-black'
              }`}
            >
              Women
            </button>
          </div>

          <button 
            onClick={onSearchClick}
            className="text-neutral-900 hover:opacity-70 transition-opacity p-1"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
          </button>

          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 text-neutral-950 hover:opacity-70 transition-opacity font-mono text-xs uppercase tracking-[0.15em] font-bold p-1"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
            <span className="bg-neutral-950 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
              {cartCount}
            </span>
          </button>
        </div>

      </div>

      {/* Slide-out Navigation Drawer (Mobile) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-sm w-full bg-[#faf8f5] p-6 sm:p-8 shadow-2xl flex flex-col justify-between z-50 animate-in slide-in-from-left duration-300 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200">
                <span className="font-bodoni text-2xl font-bold tracking-widest">BLOOMAIR</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-600 hover:text-black cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-3 text-xs tracking-[0.18em] uppercase font-semibold">
                <button 
                  onClick={() => handleNav('home')}
                  className={`flex items-center justify-between py-2 border-b border-neutral-200/60 text-left transition-colors cursor-pointer ${
                    currentPage === 'home' ? 'text-neutral-950 font-bold' : 'hover:text-amber-700'
                  }`}
                >
                  <span>01. Home & Runway</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>

                {/* 02. Men's Collection */}
                <button 
                  onClick={() => handleNav('products', 'All', 'men')}
                  className={`flex items-center justify-between py-2.5 border-b border-neutral-200/60 text-left transition-colors cursor-pointer ${
                    currentPage === 'products' && activeGender === 'men' ? 'text-neutral-950 font-bold' : 'hover:text-amber-700'
                  }`}
                >
                  <span>02. Men's Collection</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>

                {/* 03. Women's Collection */}
                <button 
                  onClick={() => handleNav('products', 'All', 'women')}
                  className={`flex items-center justify-between py-2.5 border-b border-neutral-200/60 text-left transition-colors cursor-pointer ${
                    currentPage === 'products' && activeGender === 'women' ? 'text-neutral-950 font-bold' : 'hover:text-amber-700'
                  }`}
                >
                  <span>03. Women's Collection</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>

                {/* Categories in Mobile */}
                <div className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm mt-2">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-neutral-100">
                    <span className="text-[10px] font-mono text-amber-900 font-bold uppercase tracking-wider">
                      Categories
                    </span>
                    <button 
                      onClick={() => handleNav('products', 'All', activeGender)}
                      className="text-[9px] text-neutral-500 hover:text-black font-mono underline cursor-pointer"
                    >
                      ALL PIECES
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {tabs.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => handleNav('products', b.id, activeGender)}
                        className={`w-full text-left p-2 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                          activeCategory === b.id && currentPage === 'products'
                            ? 'bg-neutral-900 text-white border-neutral-900 font-bold'
                            : 'bg-neutral-50/60 hover:bg-neutral-100/80 border-neutral-200/80 text-neutral-900'
                        }`}
                      >
                        <span className="font-mono text-xs">{b.label}</span>
                        {b.count !== null && (
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                            activeCategory === b.id && currentPage === 'products' ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-100 text-neutral-600'
                          }`}>
                            {b.count}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleSectionNav('collections')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left"
                >
                  <span>03. Featured Collections</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button 
                  onClick={() => handleSectionNav('lookbook')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left"
                >
                  <span>04. Architectural Showcase</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button 
                  onClick={() => handleSectionNav('fighter-select')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left"
                >
                  <span>05. Atelier 3D Configurator</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button 
                  onClick={() => handleSectionNav('community')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left"
                >
                  <span>06. BLOOMAIR Community</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button 
                  onClick={() => handleSectionNav('newsletter')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left"
                >
                  <span>07. Step Into Your Power</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
              </nav>
            </div>

            <div className="pt-5 border-t border-neutral-200">
              <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest mb-0.5">Atelier Virtual Services</p>
              <p className="text-xs text-neutral-600 font-light">Paris • Milan • Tokyo • New York</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
