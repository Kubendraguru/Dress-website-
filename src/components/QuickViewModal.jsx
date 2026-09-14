import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Star, Check, Sparkles, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart, onToggleWishlist, isWishlisted }) {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'M');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({
      ...product,
      size: selectedSize
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-4xl transform overflow-hidden rounded-3xl bg-[#fbf9f5] text-left shadow-2xl transition-all border border-neutral-200">
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-600 hover:text-black hover:bg-white shadow-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image Preview */}
            <div className="relative aspect-[3/4] md:aspect-auto bg-neutral-100 overflow-hidden min-h-[380px] md:min-h-[500px]">
              <img 
                src={product.image || product.imageUrl || product.localImage || '/hanger-shirts-hero.jpg'} 
                alt={product.name || product.title} 
                className="w-full h-full object-contain md:object-cover object-center p-4 md:p-0"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-md">
                {product.badge || 'Atelier Selection'}
              </div>
            </div>

            {/* Details & Selection */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                    {product.category || 'SS26 Capsule'}
                  </span>
                  <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{product.rating || '4.9'} ({product.reviewsCount || 84} reviews)</span>
                  </div>
                </div>

                <h3 className="font-editorial text-3xl font-bold text-neutral-950 mt-2">
                  {product.name || product.title}
                </h3>

                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-editorial text-3xl font-bold text-neutral-900">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm mt-4 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Select Atelier Size:
                    </span>
                    <button className="text-[11px] text-amber-700 underline font-mono">Size Guide</button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(product.sizes || ['S', 'M', 'L', 'XL']).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[48px] py-2 px-3 text-xs font-mono font-bold rounded-xl border transition-all ${
                          selectedSize === size
                            ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                            : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-950'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6 pt-6 border-t border-neutral-200 grid grid-cols-2 gap-3 text-[11px] text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-neutral-800 flex-shrink-0" />
                    <span>Complimentary Express</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-neutral-800 flex-shrink-0" />
                    <span>30-Day Atelier Returns</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={handleAdd}
                  disabled={added}
                  className={`flex-1 py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg transition-all ${
                    added 
                      ? 'bg-emerald-700 text-white' 
                      : 'bg-neutral-950 text-white hover:bg-amber-700'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-amber-400" />
                      <span>Add to Bag (₹{product.price})</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="p-4 rounded-2xl border border-neutral-300 hover:border-black transition-colors"
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-neutral-700'}`} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
