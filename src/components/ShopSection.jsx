import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Star, Sparkles, Filter } from 'lucide-react';
import { SHOP_PRODUCTS } from '../data/products';

export default function ShopSection({ onAddToCart, onQuickView, onToggleWishlist, wishlist }) {
  const [activeGender, setActiveGender] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Tops & Shirts', 'Hoodies & Sweats', 'Trousers', 'Suits & One-Pieces', 'Outerwear', 'Footwear', 'Jewelry & Accessories'];

  const filteredProducts = SHOP_PRODUCTS.filter((p) => {
    const matchesGender = activeGender === 'All' 
      ? true 
      : activeGender === 'Men' 
      ? (p.gender === 'men' || p.gender === 'unisex')
      : (p.gender === 'women' || p.gender === 'unisex');

    const matchesCategory = activeCategory === 'All'
      ? true
      : p.category === activeCategory;

    return matchesGender && matchesCategory;
  });

  return (
    <section id="shop" className="py-24 bg-[#f5f0e8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-neutral-300 pb-8">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-amber-800 bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Direct From Atelier
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-neutral-950 tracking-tight">
              Shop The Wardrobe
            </h2>
            <p className="font-editorial italic text-neutral-600 text-lg sm:text-xl mt-1">
              Precision tailored garments & heirloom accessories for Men and Women
            </p>
          </div>

          {/* Department / Gender Switcher */}
          <div className="mt-6 md:mt-0 flex items-center p-1 bg-white rounded-full border border-neutral-300 shadow-sm text-xs font-semibold">
            {['All', 'Men', 'Women'].map((gender) => (
              <button
                key={gender}
                onClick={() => setActiveGender(gender)}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeGender === gender
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                {gender === 'All' ? 'All Pieces' : gender === 'Men' ? "Men's" : "Women's"}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar max-w-full border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-white/80 text-neutral-700 hover:bg-white hover:text-black border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[3/4] bg-[#eae4d7] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Secondary badge */}
                <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded">
                  {product.badge}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-700 hover:text-red-500 hover:scale-110 transition-all shadow-sm"
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                {/* Quick Action Overlay on Hover */}
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => onQuickView(product)}
                    className="flex-1 py-2.5 bg-white/95 backdrop-blur-md text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>

                  <button
                    onClick={() => onAddToCart({ ...product, size: product.sizes[0] })}
                    className="p-2.5 bg-neutral-950 text-white rounded-xl hover:bg-amber-600 transition-colors shadow-md"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    <span>{product.category}</span>
                    <span className="flex items-center gap-1 text-amber-600 font-sans font-semibold">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Pricing & Size Pills */}
                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-editorial text-2xl font-bold text-neutral-950">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart({ ...product, size: product.sizes[0] })}
                    className="px-4 py-2 bg-neutral-950 hover:bg-amber-700 text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
