import React, { useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { SHOP_PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? SHOP_PRODUCTS.slice(0, 3) 
    : SHOP_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.color.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-start justify-center p-4 pt-20">
        <div className="relative w-full max-w-2xl bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200">
          
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
            <div className="flex items-center gap-3 flex-1">
              <Search className="w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search silhouettes, noir tailoring, silk shirts, footwear..."
                autoFocus
                className="w-full bg-transparent border-none text-base sm:text-lg focus:outline-none placeholder:text-neutral-400 font-editorial"
              />
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-black rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick suggestions */}
          <div className="py-4 flex items-center gap-2 overflow-x-auto text-xs font-mono">
            <span className="text-neutral-400">Popular:</span>
            {['Porcelain Floral', 'Noir Shirt', 'Pleated Trousers', 'Linen Shirt', 'Jumpsuit', 'Loafers'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-full bg-neutral-200/70 hover:bg-neutral-300 text-neutral-800 transition-colors whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="mt-4 space-y-3 max-h-96 overflow-y-auto">
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              {query.trim() === '' ? 'Curated Suggestions' : `${results.length} Silhouettes Found`}
            </p>

            {results.length === 0 ? (
              <p className="text-sm text-neutral-500 py-6 text-center">No garments found matching "{query}".</p>
            ) : (
              results.map((prod) => (
                <div 
                  key={prod.id}
                  onClick={() => {
                    onSelectProduct(prod);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-100 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-14 h-14 rounded-xl object-cover bg-neutral-100"
                    />
                    <div>
                      <h4 className="font-editorial text-base font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-neutral-500 font-mono">${prod.price} • {prod.category}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
