import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  ChevronDown,
  PhoneCall
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
  const [menMenuOpen, setMenMenuOpen] = useState(false);
  const [womenMenuOpen, setWomenMenuOpen] = useState(false);
  const [isMenPinned, setIsMenPinned] = useState(false);
  const [isWomenPinned, setIsWomenPinned] = useState(false);
  const [mobileMenExpanded, setMobileMenExpanded] = useState(true);
  const [mobileWomenExpanded, setMobileWomenExpanded] = useState(true);

  const menMenuRef = useRef(null);
  const womenMenuRef = useRef(null);
  const menTimeoutRef = useRef(null);
  const womenTimeoutRef = useRef(null);

  const MEN_CATEGORIES = [
    {
      id: 'Shirts',
      name: 'Shirt',
      desc: 'Linen, Oxford & Rib-Knit Polos',
      badge: 'Atelier',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
        </svg>
      )
    },
    {
      id: 'Pants',
      name: 'Pant',
      desc: 'Pleated Trousers & Italian Chinos',
      badge: 'Tailored',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16v3l-2 13h-4.5L12 10l-1.5 10H6L4 7V4z"/>
        </svg>
      )
    },
    {
      id: 'T-Shirts',
      name: 'T-Shirt',
      desc: 'Graphic Series & Heavyweight Tees',
      badge: 'Essential',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      )
    },
    {
      id: 'Combos',
      name: 'Combo',
      desc: 'Curated Head-to-Toe Look Sets',
      badge: '15% OFF',
      highlight: true,
      icon: (
        <Sparkles className="w-4 h-4 text-amber-400" />
      )
    }
  ];

  const WOMEN_CATEGORIES = [
    {
      id: 'Shirts',
      name: 'Shirt',
      desc: 'Linen Blouses, Poplin & Atelier Tops',
      badge: 'Couture',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
        </svg>
      )
    },
    {
      id: 'Pants',
      name: 'Pant',
      desc: 'Wide-Leg Trousers, Pleated & Tailored Chinos',
      badge: 'Tailored',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16v3l-2 13h-4.5L12 10l-1.5 10H6L4 7V4z"/>
        </svg>
      )
    },
    {
      id: 'T-Shirts',
      name: 'T-Shirt',
      desc: 'Boxy Cropped & Heavyweight Graphic Tees',
      badge: 'Essential',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      )
    },
    {
      id: 'Combos',
      name: 'Combo',
      desc: 'Co-ord Sets & Curated Runway Ensembles',
      badge: '15% OFF',
      highlight: true,
      icon: (
        <Sparkles className="w-4 h-4 text-amber-400" />
      )
    }
  ];

  const handleMenMouseEnter = () => {
    if (menTimeoutRef.current) {
      clearTimeout(menTimeoutRef.current);
      menTimeoutRef.current = null;
    }
    setMenMenuOpen(true);
  };

  const handleMenMouseLeave = () => {
    if (isMenPinned) return;
    if (menTimeoutRef.current) {
      clearTimeout(menTimeoutRef.current);
    }
    menTimeoutRef.current = setTimeout(() => {
      setMenMenuOpen(false);
    }, 300);
  };

  const handleWomenMouseEnter = () => {
    if (womenTimeoutRef.current) {
      clearTimeout(womenTimeoutRef.current);
      womenTimeoutRef.current = null;
    }
    setWomenMenuOpen(true);
  };

  const handleWomenMouseLeave = () => {
    if (isWomenPinned) return;
    if (womenTimeoutRef.current) {
      clearTimeout(womenTimeoutRef.current);
    }
    womenTimeoutRef.current = setTimeout(() => {
      setWomenMenuOpen(false);
    }, 300);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (menTimeoutRef.current) clearTimeout(menTimeoutRef.current);
      if (womenTimeoutRef.current) clearTimeout(womenTimeoutRef.current);
    };
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menMenuRef.current && !menMenuRef.current.contains(event.target)) {
        if (menTimeoutRef.current) clearTimeout(menTimeoutRef.current);
        setMenMenuOpen(false);
        setIsMenPinned(false);
      }
      if (womenMenuRef.current && !womenMenuRef.current.contains(event.target)) {
        if (womenTimeoutRef.current) clearTimeout(womenTimeoutRef.current);
        setWomenMenuOpen(false);
        setIsWomenPinned(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (page, category = 'All', gender = null) => {
    if (menTimeoutRef.current) clearTimeout(menTimeoutRef.current);
    if (womenTimeoutRef.current) clearTimeout(womenTimeoutRef.current);
    onNavigate(page, category, gender);
    setMobileMenuOpen(false);
    setMenMenuOpen(false);
    setWomenMenuOpen(false);
    setIsMenPinned(false);
    setIsWomenPinned(false);
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
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-neutral-200/70 transition-all">
      
      {/* 1. TOP MAIN NAV BAR */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between">
        
        {/* Left: MENU Button & Page Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 text-neutral-900 hover:opacity-70 transition-opacity font-mono text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer"
            aria-label="Open navigation menu"
          >
            <div className="flex flex-col gap-1 w-5">
              <span className="h-[1.5px] w-full bg-neutral-900 block"></span>
              <span className="h-[1.5px] w-3/4 bg-neutral-900 block"></span>
            </div>
            <span className="hidden sm:inline">MENU</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-[0.16em]">
            {/* HOME LINK */}
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

            {/* MEN MENU (NO HAMBURGER ICON, OPENS MENU WITH SHIRT, PANT, T-SHIRT, COMBO) */}
            <div 
              ref={menMenuRef}
              className="relative"
              onMouseEnter={handleMenMouseEnter}
              onMouseLeave={handleMenMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (menTimeoutRef.current) clearTimeout(menTimeoutRef.current);
                  const nextState = !menMenuOpen;
                  setMenMenuOpen(nextState);
                  setIsMenPinned(nextState);
                  if (nextState) {
                    setWomenMenuOpen(false);
                    setIsWomenPinned(false);
                  }
                }}
                className={`transition-all py-1 px-2.5 rounded-full flex items-center gap-1.5 cursor-pointer border ${
                  menMenuOpen || (currentPage === 'products' && activeGender === 'men')
                    ? 'bg-neutral-950 text-amber-300 border-neutral-900 font-bold shadow-xs'
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200/60 border-transparent'
                }`}
                aria-haspopup="true"
                aria-expanded={menMenuOpen}
              >
                <span>Men</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${menMenuOpen ? 'rotate-180 text-amber-300' : 'text-neutral-500'}`} />
              </button>

              {/* Seamless Dropdown Menu with Shirt, Pant, T-Shirt, Combo */}
              {menMenuOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleMenMouseEnter}
                  onMouseLeave={handleMenMouseLeave}
                >
                  <div className="rounded-2xl bg-[#121214]/95 backdrop-blur-xl border border-neutral-700/60 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_25px_rgba(245,158,11,0.15)] p-3">
                    <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-neutral-800 px-2">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        <span>Men's Department</span>
                      </span>
                      <span className="text-[9px] font-mono text-amber-400 font-bold uppercase tracking-wider">SS26</span>
                    </div>

                    <div className="space-y-1">
                      {MEN_CATEGORIES.map((cat) => {
                        const isActive = currentPage === 'products' && activeGender === 'men' && (activeCategory === cat.id || activeCategory === cat.name);
                        return (
                          <button
                            key={cat.id}
                            onClick={() => handleNav('products', cat.id, 'men')}
                            className={`w-full group text-left p-2.5 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                              isActive
                                ? 'bg-amber-400/20 text-white border border-amber-400/50 shadow-inner'
                                : 'hover:bg-neutral-800/80 text-neutral-200 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                cat.highlight 
                                  ? 'bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]' 
                                  : 'bg-neutral-800/90 text-neutral-300 group-hover:bg-amber-400 group-hover:text-black group-hover:scale-105'
                              }`}>
                                {cat.icon}
                              </div>
                              <div>
                                <div className="font-mono text-xs font-bold uppercase tracking-wider group-hover:text-amber-300 transition-colors flex items-center gap-2">
                                  <span>{cat.name}</span>
                                  {cat.badge && (
                                    <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-extrabold ${
                                      cat.highlight 
                                        ? 'bg-amber-400 text-black shadow-sm' 
                                        : 'bg-neutral-800 text-neutral-400 group-hover:bg-neutral-700'
                                    }`}>
                                      {cat.badge}
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10.5px] text-neutral-400 font-sans tracking-tight">
                                  {cat.desc}
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-300 group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-neutral-800/90 px-1">
                      <button
                        onClick={() => handleNav('products', 'All', 'men')}
                        className="w-full py-2 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-mono text-[10.5px] font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-colors cursor-pointer border border-neutral-700/60 shadow-sm"
                      >
                        <span>Explore All Men's</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* WOMEN MENU (NO HAMBURGER ICON, OPENS MENU WITH SHIRT, PANT, T-SHIRT, COMBO) */}
            <div 
              ref={womenMenuRef}
              className="relative"
              onMouseEnter={handleWomenMouseEnter}
              onMouseLeave={handleWomenMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (womenTimeoutRef.current) clearTimeout(womenTimeoutRef.current);
                  const nextState = !womenMenuOpen;
                  setWomenMenuOpen(nextState);
                  setIsWomenPinned(nextState);
                  if (nextState) {
                    setMenMenuOpen(false);
                    setIsMenPinned(false);
                  }
                }}
                className={`transition-all py-1 px-2.5 rounded-full flex items-center gap-1.5 cursor-pointer border ${
                  womenMenuOpen || (currentPage === 'products' && activeGender === 'women')
                    ? 'bg-neutral-950 text-amber-300 border-neutral-900 font-bold shadow-xs'
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200/60 border-transparent'
                }`}
                aria-haspopup="true"
                aria-expanded={womenMenuOpen}
              >
                <span>Women</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${womenMenuOpen ? 'rotate-180 text-amber-300' : 'text-neutral-500'}`} />
              </button>

              {/* Seamless Dropdown Menu with Shirt, Pant, T-Shirt, Combo */}
              {womenMenuOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleWomenMouseEnter}
                  onMouseLeave={handleWomenMouseLeave}
                >
                  <div className="rounded-2xl bg-[#121214]/95 backdrop-blur-xl border border-neutral-700/60 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_25px_rgba(245,158,11,0.15)] p-3">
                    <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-neutral-800 px-2">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        <span>Women's Department</span>
                      </span>
                      <span className="text-[9px] font-mono text-amber-400 font-bold uppercase tracking-wider">SS26</span>
                    </div>

                    <div className="space-y-1">
                      {WOMEN_CATEGORIES.map((cat) => {
                        const isActive = currentPage === 'products' && activeGender === 'women' && (activeCategory === cat.id || activeCategory === cat.name);
                        return (
                          <button
                            key={cat.id}
                            onClick={() => handleNav('products', cat.id, 'women')}
                            className={`w-full group text-left p-2.5 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                              isActive
                                ? 'bg-amber-400/20 text-white border border-amber-400/50 shadow-inner'
                                : 'hover:bg-neutral-800/80 text-neutral-200 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                cat.highlight 
                                  ? 'bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]' 
                                  : 'bg-neutral-800/90 text-neutral-300 group-hover:bg-amber-400 group-hover:text-black group-hover:scale-105'
                              }`}>
                                {cat.icon}
                              </div>
                              <div>
                                <div className="font-mono text-xs font-bold uppercase tracking-wider group-hover:text-amber-300 transition-colors flex items-center gap-2">
                                  <span>{cat.name}</span>
                                  {cat.badge && (
                                    <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-extrabold ${
                                      cat.highlight 
                                        ? 'bg-amber-400 text-black shadow-sm' 
                                        : 'bg-neutral-800 text-neutral-400 group-hover:bg-neutral-700'
                                    }`}>
                                      {cat.badge}
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10.5px] text-neutral-400 font-sans tracking-tight">
                                  {cat.desc}
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-300 group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-neutral-800/90 px-1">
                      <button
                        onClick={() => handleNav('products', 'All', 'women')}
                        className="w-full py-2 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-mono text-[10.5px] font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-colors cursor-pointer border border-neutral-700/60 shadow-sm"
                      >
                        <span>Explore All Women's</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Center: Brand Mark (ZUDIO) */}
        <div className="text-center">
          <button 
            onClick={() => handleNav('home')}
            className="inline-block group focus:outline-none cursor-pointer"
          >
            <span className="font-bodoni text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.15em] text-neutral-950 uppercase transition-transform group-hover:scale-[1.02] inline-block">
              ZUDIO
            </span>
          </button>
        </div>

        {/* Right: Contact, Search, Add To Bag */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Quick Category Switchers */}
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

          {/* Contact Button */}
          <button
            onClick={() => handleSectionNav('newsletter')}
            className="hidden sm:flex items-center gap-1.5 text-neutral-800 hover:text-black py-1.5 px-3 rounded-full hover:bg-neutral-200/70 transition-all font-mono text-xs uppercase tracking-wider cursor-pointer border border-neutral-300/80 bg-white/70 shadow-xs"
            title="Contact Atelier"
          >
            <PhoneCall className="w-3.5 h-3.5 text-neutral-700" />
            <span>Contact</span>
          </button>

          {/* Search Button */}
          <button 
            onClick={onSearchClick}
            className="p-2 text-neutral-800 hover:text-black transition-colors rounded-full hover:bg-neutral-200/70 cursor-pointer"
            aria-label="Search Archive"
            title="Search Archive"
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Bag Button */}
          <button 
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-neutral-950 text-amber-400 hover:bg-neutral-800 transition-all py-1.5 px-3 sm:px-4 rounded-full font-mono text-xs uppercase tracking-widest cursor-pointer shadow-sm active:scale-95"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-bold">BAG</span>
            <span className="bg-amber-400 text-neutral-950 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center ml-0.5">
              {cartCount}
            </span>
          </button>
        </div>

      </div>

      {/* MOBILE FULL DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden flex animate-in fade-in duration-200">
          <div className="w-4/5 max-w-sm bg-[#faf8f5] h-full p-6 flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200">
                <span className="font-bodoni text-2xl font-bold tracking-widest">ZUDIO</span>
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

                {/* 02. Men's Section */}
                <div className="border-b border-neutral-200/60 pb-3">
                  <div className="flex items-center justify-between py-2">
                    <button 
                      onClick={() => handleNav('products', 'All', 'men')}
                      className={`text-left transition-colors cursor-pointer flex items-center gap-2 ${
                        currentPage === 'products' && activeGender === 'men' ? 'text-neutral-950 font-bold' : 'hover:text-amber-700'
                      }`}
                    >
                      <span>02. Men's Collection</span>
                      <span className="text-[9px] font-mono bg-neutral-900 text-amber-300 px-1.5 py-0.5 rounded font-bold">
                        ALL
                      </span>
                    </button>

                    <button
                      onClick={() => setMobileMenExpanded(!mobileMenExpanded)}
                      className="p-1.5 text-neutral-500 hover:text-black rounded-lg hover:bg-neutral-100 cursor-pointer"
                      aria-label="Toggle Men Categories"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileMenExpanded ? 'rotate-180 text-amber-600' : ''}`} />
                    </button>
                  </div>

                  {/* Men Categories Grid in Mobile Drawer */}
                  {mobileMenExpanded && (
                    <div className="grid grid-cols-2 gap-2 pt-1 pb-1">
                      {MEN_CATEGORIES.map((cat) => {
                        const isActive = currentPage === 'products' && activeGender === 'men' && (activeCategory === cat.id || activeCategory === cat.name);
                        return (
                          <button
                            key={cat.id}
                            onClick={() => handleNav('products', cat.id, 'men')}
                            className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                              isActive
                                ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                                : 'bg-white hover:bg-neutral-50 border-neutral-200/90 text-neutral-900'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                                isActive ? 'bg-amber-400 text-black' : 'bg-neutral-100 text-neutral-800'
                              }`}>
                                {cat.icon}
                              </div>
                              {cat.badge && (
                                <span className={`text-[8px] font-mono px-1 rounded font-bold ${
                                  cat.highlight 
                                    ? 'bg-amber-400 text-black' 
                                    : isActive ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                                }`}>
                                  {cat.badge}
                                </span>
                              )}
                            </div>
                            <div>
                              <span className="font-mono text-xs font-bold uppercase block">{cat.name}</span>
                              <span className={`text-[9.5px] leading-tight block truncate ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                                {cat.desc}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 03. Women's Section */}
                <div className="border-b border-neutral-200/60 pb-3">
                  <div className="flex items-center justify-between py-2">
                    <button 
                      onClick={() => handleNav('products', 'All', 'women')}
                      className={`text-left transition-colors cursor-pointer flex items-center gap-2 ${
                        currentPage === 'products' && activeGender === 'women' ? 'text-neutral-950 font-bold' : 'hover:text-amber-700'
                      }`}
                    >
                      <span>03. Women's Collection</span>
                      <span className="text-[9px] font-mono bg-neutral-900 text-amber-300 px-1.5 py-0.5 rounded font-bold">
                        ALL
                      </span>
                    </button>

                    <button
                      onClick={() => setMobileWomenExpanded(!mobileWomenExpanded)}
                      className="p-1.5 text-neutral-500 hover:text-black rounded-lg hover:bg-neutral-100 cursor-pointer"
                      aria-label="Toggle Women Categories"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileWomenExpanded ? 'rotate-180 text-amber-600' : ''}`} />
                    </button>
                  </div>

                  {/* Women Categories Grid in Mobile Drawer */}
                  {mobileWomenExpanded && (
                    <div className="grid grid-cols-2 gap-2 pt-1 pb-1">
                      {WOMEN_CATEGORIES.map((cat) => {
                        const isActive = currentPage === 'products' && activeGender === 'women' && (activeCategory === cat.id || activeCategory === cat.name);
                        return (
                          <button
                            key={cat.id}
                            onClick={() => handleNav('products', cat.id, 'women')}
                            className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                              isActive
                                ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                                : 'bg-white hover:bg-neutral-50 border-neutral-200/90 text-neutral-900'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                                isActive ? 'bg-amber-400 text-black' : 'bg-neutral-100 text-neutral-800'
                              }`}>
                                {cat.icon}
                              </div>
                              {cat.badge && (
                                <span className={`text-[8px] font-mono px-1 rounded font-bold ${
                                  cat.highlight 
                                    ? 'bg-amber-400 text-black' 
                                    : isActive ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                                }`}>
                                  {cat.badge}
                                </span>
                              )}
                            </div>
                            <div>
                              <span className="font-mono text-xs font-bold uppercase block">{cat.name}</span>
                              <span className={`text-[9.5px] leading-tight block truncate ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                                {cat.desc}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => handleSectionNav('collections')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left cursor-pointer"
                >
                  <span>04. Featured Collections</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button 
                  onClick={() => handleSectionNav('lookbook')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left cursor-pointer"
                >
                  <span>05. Architectural Showcase</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button 
                  onClick={() => handleSectionNav('fighter-select')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left cursor-pointer"
                >
                  <span>06. Atelier 3D Configurator</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button 
                  onClick={() => handleSectionNav('community')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left cursor-pointer"
                >
                  <span>07. ZUDIO Community</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button 
                  onClick={() => handleSectionNav('newsletter')}
                  className="hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-neutral-200/60 text-left cursor-pointer"
                >
                  <span>08. Step Into Your Power</span>
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
