import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { SHOP_PRODUCTS, HERO_OUTFITS } from '../data/products';

export default function WishlistDrawer({ isOpen, onClose, wishlist, onRemoveWishlist, onAddToCart }) {
  if (!isOpen) return null;

  // Combine products & hero items to resolve wishlist IDs
  const allItems = [...SHOP_PRODUCTS, ...HERO_OUTFITS];
  const wishlistedItems = allItems.filter(item => wishlist.includes(item.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#fbf9f5] shadow-2xl flex flex-col justify-between z-50 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span className="font-editorial text-xl font-bold uppercase tracking-wider text-neutral-950">
              Saved Silhouettes ({wishlistedItems.length})
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistedItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-neutral-200/60 flex items-center justify-center mx-auto text-neutral-400">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-editorial text-2xl font-bold text-neutral-800">Your Wishlist is Empty</h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Heart your favorite silhouettes and couture pieces to curate your bespoke look.
              </p>
            </div>
          ) : (
            wishlistedItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-4 rounded-2xl border border-neutral-200 flex gap-4 items-center shadow-sm"
              >
                <img 
                  src={item.image} 
                  alt={item.name || item.title} 
                  className="w-20 h-20 rounded-xl object-cover object-center bg-neutral-100 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-xs text-neutral-900 truncate">{item.name || item.title}</h5>
                  <p className="text-xs text-amber-700 font-mono font-bold mt-0.5">₹{item.price}</p>
                  
                  <div className="flex items-center justify-between mt-3">
                    <button
                      onClick={() => {
                        onAddToCart({
                          ...item,
                          name: item.name || item.title,
                          size: 'M'
                        });
                      }}
                      className="px-3 py-1.5 bg-neutral-950 text-white rounded-lg text-[11px] font-semibold uppercase tracking-wider hover:bg-amber-700 transition-colors flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add to Bag</span>
                    </button>

                    <button 
                      onClick={() => onRemoveWishlist(item.id)}
                      className="text-neutral-400 hover:text-red-500 p-1"
                      aria-label="Remove wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistedItems.length > 0 && (
          <div className="p-6 bg-white border-t border-neutral-200">
            <button
              onClick={() => {
                wishlistedItems.forEach(item => {
                  onAddToCart({
                    ...item,
                    name: item.name || item.title,
                    size: 'M'
                  });
                });
                onClose();
              }}
              className="w-full py-3.5 bg-neutral-950 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Add All to Bag</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
