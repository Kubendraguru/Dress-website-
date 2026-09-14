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
  onNavigate = () => {}
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'All', label: 'All', count: null },
    { id: 'Shirts', label: 'Shirts', count: 5 },
    { id: 'T-Shirts', label: 'T-Shirts', count: 2 },
    { id: 'Pants', label: 'Pants', count: 2 },
    { id: 'Hoodies', label: 'Hoodies', count: 2 }
  ];

  const activeIndex = Math.max(0, tabs.findIndex((t) => t.id === activeCategory));
  const tabRefs = useRef([]);
  const [gliderStyle, setGliderStyle] = useState({ left: 4, width: 64, height: 32 });

  // Update Glider position and width dynamically to match the active tab element
  useEffect(() => {
    const activeEl = tabRefs.current[activeIndex];
    if (activeEl) {
      setGliderStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        height: activeEl.offsetHeight
      });
    }
  }, [activeIndex, currentPage]);

  const handleNav = (page, category = 'All') => {
    onNavigate(page, category);
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 ml-2 font-mono text-xs uppercase tracking-[0.16em]">
            <button
              onClick={() => handleNav('home')}
              className={`transition-all py-1 px-1 border-b-2 ${
                currentPage === 'home' 
                  ? 'text-neutral-950 font-bold border-neutral-950' 
                  : 'text-neutral-500 hover:text-neutral-900 border-transparent'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('products', 'All')}
              className={`transition-all py-1 px-1 flex items-center gap-1.5 border-b-2 ${
                currentPage === 'products' 
                  ? 'text-neutral-950 font-bold border-amber-900 text-amber-900' 
                  : 'text-neutral-600 hover:text-neutral-900 border-transparent'
              }`}
            >
              <span>Products</span>
              <span className="text-[9px] font-sans px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold tracking-wider uppercase">
                Catalog
              </span>
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

        {/* Right: Search, Mobile Products Link & Bag */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={() => handleNav('products', 'All')}
            className={`md:hidden text-xs font-mono font-semibold uppercase tracking-wider px-2 py-1 rounded transition-colors ${
              currentPage === 'products' ? 'bg-amber-100 text-amber-900' : 'text-neutral-700 hover:text-black'
            }`}
          >
            Products
          </button>

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

      {/* ----------------------------------------------------------------- */}
      {/* 2. DOWN THE NAV BAR: PERFECT DYNAMIC GLIDER TAB BAR */}
      {/* ----------------------------------------------------------------- */}
      <div className="bg-[#f5f1ea]/90 border-t border-neutral-200/60 py-2 sm:py-2.5 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          
          {/* Left Sub-Label */}
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-700 animate-pulse" />
            <span>Category:</span>
          </div>

          {/* Glider Container (Uiverse.io Dynamic Sliding Tabs) */}
          <div className="mx-auto sm:mx-0 w-full sm:w-auto overflow-x-auto scrollbar-none flex justify-center py-0.5">
            <div className="relative inline-flex items-center bg-white p-1 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.06)] border border-neutral-200/80">
              
              {/* Dynamic Sliding Animated Glider Pill */}
              <div 
                className="absolute rounded-full bg-neutral-950 shadow-md transition-all duration-300 ease-out z-0"
                style={{
                  left: `${gliderStyle.left}px`,
                  width: `${gliderStyle.width}px`,
                  top: '4px',
                  bottom: '4px'
                }}
              />

              {/* Tab Buttons */}
              {tabs.map((tab, idx) => {
                const isActive = activeIndex === idx && currentPage === 'products';
                return (
                  <button
                    key={tab.id}
                    ref={(el) => (tabRefs.current[idx] = el)}
                    onClick={() => handleNav('products', tab.id)}
                    className={`relative z-10 flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-200 rounded-full cursor-pointer select-none whitespace-nowrap ${
                      isActive 
                        ? 'text-white font-bold' 
                        : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.count !== null && (
                      <span className={`flex items-center justify-center min-w-[16px] h-4 px-1 text-[9px] font-sans font-bold rounded-full transition-colors ${
                        isActive 
                          ? 'bg-amber-400 text-neutral-950' 
                          : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}

            </div>
          </div>

          {/* Right Curation Tag */}
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
            <span>Atelier Curation</span>
            <span className="text-amber-800">&bull;</span>
            <span className="text-neutral-600 font-semibold">2026</span>
          </div>

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
                  className="p-1.5 text-neutral-600 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-3 text-xs tracking-[0.18em] uppercase font-semibold">
                <button 
                  onClick={() => handleNav('home')}
                  className={`flex items-center justify-between py-2 border-b border-neutral-200/60 text-left transition-colors ${
                    currentPage === 'home' ? 'text-neutral-950 font-bold' : 'hover:text-amber-700'
                  }`}
                >
                  <span>01. Home & Runway</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>

                {/* 02. Products Categories in Mobile */}
                <div className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-neutral-100">
                    <span className="text-[10px] font-mono text-amber-900 font-bold uppercase tracking-wider">
                      Categories
                    </span>
                    <button 
                      onClick={() => handleNav('products', 'All')}
                      className="text-[9px] text-neutral-500 hover:text-black font-mono underline"
                    >
                      ALL (11)
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {tabs.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => handleNav('products', b.id)}
                        className={`w-full text-left p-2 rounded-xl border flex items-center justify-between transition-all ${
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
