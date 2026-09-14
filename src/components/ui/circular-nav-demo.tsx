"use client";
 
import React, { useState } from "react";
import CircularNavigation, { NavItem } from "@/components/ui/cicular-navigation-bar";
import {
  Shirt,
  Sparkles,
  Scissors,
  Layers,
  Flame,
  Crown,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
 
const menNavItems: NavItem[] = [
  { name: "Shirts", icon: Shirt, href: "/products?gender=men&category=Shirts", badge: "Atelier" },
  { name: "Pants", icon: Scissors, href: "/products?gender=men&category=Pants", badge: "Tailored" },
  { name: "T-Shirts", icon: Layers, href: "/products?gender=men&category=T-Shirts", badge: "Essential" },
  { name: "Combos", icon: Sparkles, href: "/products?gender=men&category=Combos", badge: "15% OFF" },
  { name: "Archive", icon: Flame, href: "/products?gender=men", badge: "SS26" },
  { name: "All Men", icon: Crown, href: "/products?gender=men" },
];
 
export default function CircularNavDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
 
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#121214] text-white rounded-2xl border border-neutral-800">
      <Button 
        onClick={toggleMenu}
        className="bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold tracking-widest uppercase px-6 py-3 rounded-full shadow-lg"
      >
        Explore Men Radial Menu
      </Button>
      <CircularNavigation
        navItems={menNavItems}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        title="MEN ATELIER"
      />
    </div>
  );
}
