"use client";
 
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Sparkles, Orbit } from "lucide-react";
 
export interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  badge?: string;
  desc?: string;
  onClick?: () => void;
}
 
export interface CircularNavigationProps {
  navItems: NavItem[];
  isOpen: boolean;
  toggleMenu: () => void;
  title?: string;
  subtitle?: string;
}
 
export default function CircularNavigation({
  navItems,
  isOpen,
  toggleMenu,
  title = "ZUDIO MEN",
  subtitle = "SS26 ATELIER ORBIT"
}: CircularNavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
 
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Dark Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            onClick={toggleMenu}
          />

          {/* Close Button Top Right of Screen */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={toggleMenu}
            className="fixed top-6 right-6 sm:top-8 sm:right-8 z-[100001] w-11 h-11 rounded-full bg-neutral-900/90 hover:bg-amber-400 hover:text-black text-white border border-neutral-700/80 flex items-center justify-center transition-all cursor-pointer shadow-2xl group"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
          </motion.button>
 
          {/* Main Radial Container (Guaranteed 100% Centered & Contained) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotate: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[100000] aspect-square w-[350px] sm:w-[480px] max-w-[92vw] max-h-[92vw] rounded-full flex items-center justify-center select-none shadow-[0_0_100px_rgba(0,0,0,0.9),0_0_60px_rgba(245,158,11,0.15)]"
            style={{
              background: "radial-gradient(circle, rgba(25, 25, 28, 0.98) 0%, rgba(12, 12, 14, 0.99) 70%, rgba(5, 5, 6, 1) 100%)",
              border: "1.5px solid rgba(245, 158, 11, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Orbital Dashed Ring Guide */}
            <div className="absolute w-[230px] h-[230px] sm:w-[310px] sm:h-[310px] rounded-full border border-dashed border-amber-400/20 pointer-events-none animate-[spin_60s_linear_infinite]" />

            {/* Center Orbit Hub */}
            <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-amber-400/30 bg-neutral-950/90 backdrop-blur-2xl flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.15)] text-center p-2">
              <span className="font-bodoni text-[11px] sm:text-sm font-bold text-amber-300 tracking-[0.2em] uppercase">
                {title}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-neutral-400 tracking-wider mt-1 px-1 truncate max-w-full">
                {hoveredItem ? `• ${hoveredItem} •` : subtitle}
              </span>
            </div>

            {/* Radial Items Orbit */}
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const total = navItems.length;
              const angle = (360 / total) * index - 90; // Start directly at top
              
              // Responsive radius fitting perfectly inside container
              const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 112 : 152;

              return (
                <div
                  key={item.name}
                  className="absolute z-20 pointer-events-auto"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  {item.onClick ? (
                    <button
                      type="button"
                      className={`flex flex-col items-center justify-center w-15 h-15 sm:w-20 sm:h-20 aspect-square rounded-full transition-all duration-300 cursor-pointer border ${
                        hoveredItem === item.name
                          ? "bg-gradient-to-br from-amber-400 to-amber-500 text-black border-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.8)] scale-110 -translate-y-1"
                          : "bg-neutral-900/95 text-neutral-200 border-neutral-700/80 hover:border-amber-400/60 shadow-xl backdrop-blur-md"
                      }`}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => {
                        item.onClick?.();
                        toggleMenu();
                      }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5" />
                      <span className="text-[9.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className={`text-[7px] sm:text-[8px] font-mono px-1 rounded-full font-extrabold mt-0.5 ${
                          hoveredItem === item.name ? "bg-black text-amber-300" : "bg-amber-400 text-black"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`flex flex-col items-center justify-center w-15 h-15 sm:w-20 sm:h-20 aspect-square rounded-full transition-all duration-300 no-underline border ${
                        hoveredItem === item.name
                          ? "bg-gradient-to-br from-amber-400 to-amber-500 text-black border-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.8)] scale-110 -translate-y-1"
                          : "bg-neutral-900/95 text-neutral-200 border-neutral-700/80 hover:border-amber-400/60 shadow-xl backdrop-blur-md"
                      }`}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={toggleMenu}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5" />
                      <span className="text-[9.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className={`text-[7px] sm:text-[8px] font-mono px-1 rounded-full font-extrabold mt-0.5 ${
                          hoveredItem === item.name ? "bg-black text-amber-300" : "bg-amber-400 text-black"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
