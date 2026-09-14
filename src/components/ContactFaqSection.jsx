import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Check, Send, ShoppingBag, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import ShopLookModal from './ShopLookModal';

export default function ContactFaqSection({ onAddToCart = () => {} }) {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0); // First item open by default
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('PRESS');
  const [inquirySent, setInquirySent] = useState(false);
  const [isShopLookModalOpen, setIsShopLookModalOpen] = useState(false);

  // Featured Runway Product Model Link
  const featuredProduct = {
    id: 'hero-tokyo-streetwear',
    shortTitle: 'Tokyo Streetwear',
    tag: 'AVANT-GARDE STREETWEAR • SS26',
    title: 'Tokyo Layered Streetwear Set',
    subtitle: 'Double-Layer Oversized Tee & Washed Charcoal Cargo Trousers',
    price: 340,
    rating: 5.0,
    reviewsCount: 162,
    image: "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393791/streetwear-cutout_pu0nq7.png",
    cutoutImage: "https://res.cloudinary.com/qrhgjdrs/image/upload/v1789393791/streetwear-cutout_pu0nq7.png",
    badge: 'Editorial Favorite',
    description: 'Minimalist Tokyo street tailoring featuring a double-layer oversized black tee over cream micro-waffle longsleeve, washed charcoal relaxed cargo trousers, and monochrome court sneakers.',
    palette: ['#121212', '#dedede', '#4b4b4b', '#ffffff'],
    items: [
      { name: 'Oversized Double-Layer Heavyweight Tee', price: 120, id: 'item-streetwear-tee', category: 'Tees', size: 'L' },
      { name: 'Washed Charcoal Relaxed Cargo Trousers', price: 140, id: 'item-streetwear-cargo', category: 'Pants', size: '32' },
      { name: 'Sterling Silver Atelier Chain Necklace', price: 80, id: 'item-streetwear-chain', category: 'Accessories', size: 'One Size' }
    ]
  };

  const faqs = [
    {
      id: 1,
      number: '01',
      question: 'How can I get in touch with ZUDIO for collaborations?',
      answer: "We're always open to new creative ventures, editorial partnerships, and stylist loans. For partnership or collaboration inquiries, please reach out via our sales and PR desk at pr.atelier@zudio.com, and our curatorial team will review your portfolio within 48 hours."
    },
    {
      id: 2,
      number: '02',
      question: 'Where can I find information on ZUDIO campaigns and releases?',
      answer: "Our seasonal runway drops, SS26 editions, and capsule collections are published in the Atelier Archives and across our official channels. Subscribers to our private salon receive early access to lookbooks and secret drops 48 hours prior to public launch."
    },
    {
      id: 3,
      number: '03',
      question: 'How can I reach your customer support & concierge team?',
      answer: "Our dedicated client concierge is available Monday through Saturday, 9:00 AM – 8:00 PM IST / CET. You can reach out directly via support@zudio.com or schedule a private showroom consultation in Mumbai, Milan, or Paris."
    },
    {
      id: 4,
      number: '04',
      question: 'How to purchase ZUDIO Atelier runway & limited edition products?',
      answer: "Explore our curated 2-piece sets, suits, and separates in the digital catalog. Select your tailored size and place your order for complimentary express courier dispatch with luxury garment dust bag packaging and tracking."
    },
    {
      id: 5,
      number: '05',
      question: 'What is the bespoke tailoring and return guarantee policy?',
      answer: "We offer complimentary 14-day global returns and size exchanges on all unworn items with original atelier security tags attached. Custom bespoke measurements can also be tailored upon request through our concierge."
    }
  ];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#121212', '#d4af37', '#e83d34']
      });
    } catch (err) {}
    setTimeout(() => {
      setInquiryModalOpen(false);
      setInquirySent(false);
    }, 2500);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('collections') || document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#products';
    }
  };

  return (
    <section id="contact" className="w-full bg-white text-black relative select-none font-sans overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP SUB-HEADER STRIP */}
      {/* ========================================================================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 pb-6 border-b border-neutral-100 flex items-center justify-between text-xs tracking-wider">
        {/* Brand / Logo */}
        <div className="font-extrabold font-mono tracking-[0.25em] text-sm uppercase">
          ZUDIO ATELIER
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-neutral-600">
          <a href="#hero" className="hover:text-black transition-colors">ABOUT</a>
          <a href="#collections" className="hover:text-black transition-colors">CAMPAIGN</a>
          <a href="#contact" className="hover:text-black font-bold text-black border-b border-black pb-0.5">CONTACT US</a>
        </div>

        {/* Right CTA */}
        <div>
          <button 
            onClick={() => setInquiryModalOpen(true)}
            className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-black hover:opacity-70 transition-all font-semibold cursor-pointer"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. GIANT EDITORIAL HEADLINE & PRODUCT MODEL SHOWCASE */}
      {/* ========================================================================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 relative min-h-[500px] sm:min-h-[580px] lg:min-h-[660px]">
        
        {/* Giant Headline: CONTACT US */}
        <div className="relative z-10">
          <h1 className="text-[14vw] sm:text-[13vw] lg:text-[11.5rem] font-black tracking-tighter leading-none text-black select-none uppercase pointer-events-none">
            CONTACT US
          </h1>
        </div>

        {/* Right Standing Editorial Product Model with Interactive Shop Tag */}
        <div className="absolute top-2 sm:top-6 right-0 sm:right-4 lg:right-10 z-20 w-[180px] sm:w-[260px] md:w-[330px] lg:w-[400px] xl:w-[450px] flex flex-col items-end group">
          
          {/* Interactive Floating Product Tag */}
          <button 
            onClick={() => setIsShopLookModalOpen(true)}
            className="mb-2 mr-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#121214]/95 text-white border border-neutral-800 shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex items-center gap-2.5 hover:bg-[#fbbf24] hover:text-black transition-all cursor-pointer group-hover:scale-105 z-30"
          >
            <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></div>
            <div className="text-left">
              <p className="font-syne text-[8px] sm:text-[9px] uppercase tracking-widest text-neutral-400 group-hover:text-black leading-none font-bold">
                SS26 RUNWAY PIECE
              </p>
              <p className="font-bebas text-xs sm:text-sm tracking-wider leading-tight pt-0.5">
                TOKYO LAYERED SET • $340
              </p>
            </div>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Model Image with Click to Open Product Modal */}
          <div 
            onClick={() => setIsShopLookModalOpen(true)}
            className="cursor-pointer relative transform transition-transform duration-500 hover:scale-[1.03] w-full flex justify-end"
            title="Click to view & shop this atelier piece"
          >
            <img 
              src={featuredProduct.image}
              alt={featuredProduct.title}
              className="w-full h-auto max-h-[480px] sm:max-h-[580px] md:max-h-[660px] lg:max-h-[720px] object-contain object-top drop-shadow-2xl select-none"
            />
            
            {/* Quick View Floating Pill on Hover */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 text-white px-3.5 py-1.5 rounded-full text-[10.5px] font-bebas tracking-[0.18em] uppercase flex items-center gap-1.5 shadow-2xl pointer-events-none whitespace-nowrap border border-neutral-700">
              <ShoppingBag className="w-3 h-3 text-[#fbbf24]" />
              <span>SHOP THIS LOOK • $340</span>
            </div>
          </div>

        </div>

        {/* Manifesto & 3 Contact Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 sm:pt-10 pb-16 relative z-10 border-b border-neutral-200">
          
          {/* Column 1: Manifesto Intro */}
          <div className="md:col-span-4 lg:col-span-4 pr-4">
            <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed max-w-xs">
              For any inquiries, collaborations, or just to say hello, we&apos;d love to hear from you! Reach out, and let&apos;s connect.
            </p>
          </div>

          {/* Directory Columns (Spanning to left of model on desktop) */}
          <div className="md:col-span-8 lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            
            {/* PRESS */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-black">
                PRESS
              </h3>
              <div className="text-[11px] text-neutral-500 space-y-1 font-light leading-relaxed">
                <p className="font-medium text-neutral-800">TRENT ATELIER CORP</p>
                <p>Centro Direzionale Milanofiori, Assago Milano</p>
                <p className="pt-1">
                  <a href="mailto:pr.atelier@zudio.com" className="font-mono text-black underline underline-offset-2 hover:text-neutral-600">
                    pr.atelier@zudio.com
                  </a>
                </p>
              </div>
            </div>

            {/* SALES */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-black">
                SALES
              </h3>
              <div className="text-[11px] text-neutral-500 space-y-1 font-light leading-relaxed">
                <p className="font-medium text-neutral-800">ZUDIO SHOWROOM</p>
                <p>Private Salon &amp; Sizing</p>
                <p className="pt-1">
                  <a href="mailto:showroom@zudio.com" className="font-mono text-black underline underline-offset-2 hover:text-neutral-600">
                    showroom@zudio.com
                  </a>
                </p>
              </div>
            </div>

            {/* HEAD OFFICE */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-black">
                HEAD OFFICE
              </h3>
              <div className="text-[11px] text-neutral-500 space-y-1 font-light leading-relaxed">
                <p className="font-medium text-neutral-800">TRENT LTD / TATA</p>
                <p>BKC, Mumbai 400051, India</p>
                <p className="pt-1 font-mono text-black">
                  +91 (022) 6700-9000
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. FREQUENTLY ASKED QUESTIONS (INTERACTIVE ACCORDION) */}
      {/* ========================================================================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          
          {/* FAQ Title on Left */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-black leading-tight">
              FREQUENTLY ASKED<br />QUESTIONS
            </h2>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              Find quick answers regarding our atelier production, bespoke tailoring, worldwide concierge dispatch, and private salon appointments.
            </p>
          </div>

          {/* Accordion List on Right */}
          <div className="lg:col-span-7 divide-y divide-neutral-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.id} className="py-5 sm:py-6 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-neutral-400 font-medium">
                        {faq.number}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base font-bold tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors uppercase">
                        {faq.question}
                      </span>
                    </div>

                    <div className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center flex-shrink-0 text-neutral-700 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs sm:text-[13px] text-neutral-600 font-light leading-relaxed pl-7 sm:pl-8 pr-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. CLAIM YOUR STYLE → TRANSITION ACTION BANNER */}
      {/* ========================================================================= */}
      <div className="w-full bg-white py-14 sm:py-20 border-t border-neutral-200 flex items-center justify-center">
        <button
          onClick={scrollToProducts}
          className="group relative inline-flex items-center gap-4 text-sm sm:text-lg md:text-xl font-black uppercase tracking-widest text-black hover:text-white transition-all duration-300 px-10 py-5 rounded-full border-2 border-black hover:bg-black shadow-lg cursor-pointer"
        >
          <span>CLAIM YOUR STYLE</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 stroke-[2.5]" />
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 5. KINETIC MARQUEE TICKER BANNER */}
      {/* ========================================================================= */}
      <div className="w-full bg-black text-white py-4 overflow-hidden select-none border-y border-neutral-800">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
              <span>FROM SEOUL TO PARIS</span>
              <span className="text-[#e83d34] text-base">✻</span>
              <span>FROM MUMBAI TO MILAN</span>
              <span className="text-[#e83d34] text-base">✻</span>
              <span>FROM TOKYO TO NEW YORK</span>
              <span className="text-[#e83d34] text-base">✻</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE CONCIERGE INQUIRY MODAL */}
      {/* ========================================================================= */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121212] text-white w-full max-w-lg rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-2xl relative">
            
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white font-mono text-sm cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e83d34]">
                  ATELIER CONCIERGE DESK
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                  Direct Private Inquiry
                </h3>
                <p className="text-xs text-neutral-400">
                  Send a direct request to our PR, Sales, or Runway Styling team.
                </p>
              </div>

              {inquirySent ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Inquiry Transmitted</h4>
                  <p className="text-xs text-neutral-400">Our curatorial director will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {['PRESS', 'SALES', 'BESPOKE'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`py-2 text-[11px] font-mono rounded-lg border uppercase transition-colors cursor-pointer ${
                          inquiryType === type 
                            ? 'bg-white text-black border-white font-bold' 
                            : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Your Full Name / Organization"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />

                  <textarea
                    required
                    rows={3}
                    placeholder="How may our atelier assist you?"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white font-sans resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>TRANSMIT INQUIRY</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Interactive Shop Look Modal for Featured Runway Piece */}
      <ShopLookModal
        outfit={featuredProduct}
        isOpen={isShopLookModalOpen}
        onClose={() => setIsShopLookModalOpen(false)}
        onAddToCart={onAddToCart}
      />

    </section>
  );
}
