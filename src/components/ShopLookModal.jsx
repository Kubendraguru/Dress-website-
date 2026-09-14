import React, { useState } from 'react';
import { X, ShoppingBag, Check, ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function ShopLookModal({ outfit, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !outfit) return null;

  const [selectedItems, setSelectedItems] = useState(
    outfit.items ? outfit.items.map((it) => it.id) : []
  );
  const [itemSizes, setItemSizes] = useState(
    outfit.items ? outfit.items.reduce((acc, it) => ({ ...acc, [it.id]: it.size || 'M' }), {}) : {}
  );
  const [addedSuccess, setAddedSuccess] = useState(false);

  const toggleItem = (id) => {
    setSelectedItems((prev) => 
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSizeChange = (id, size) => {
    setItemSizes((prev) => ({ ...prev, [id]: size }));
  };

  const totalCalculated = outfit.items
    ? outfit.items
        .filter((it) => selectedItems.includes(it.id))
        .reduce((sum, it) => sum + it.price, 0)
    : outfit.price;

  const handleAddBundleToCart = () => {
    if (outfit.items) {
      const activeItems = outfit.items.filter((it) => selectedItems.includes(it.id));
      activeItems.forEach((item) => {
        onAddToCart({
          id: `${outfit.id}-${item.id}-${Date.now()}`,
          name: `${item.name} (${outfit.title})`,
          price: item.price,
          size: itemSizes[item.id] || 'M',
          color: outfit.title,
          category: item.category || 'Lookbook',
          image: outfit.image
        });
      });
    } else {
      onAddToCart({
        id: outfit.id,
        name: outfit.title,
        price: outfit.price,
        size: 'M',
        color: outfit.title,
        category: 'Full Look',
        image: outfit.image
      });
    }

    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-[#faf8f5] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-neutral-200/80 z-10 flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/90 text-neutral-800 hover:bg-neutral-950 hover:text-white transition-colors shadow-md cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Look Visual Preview */}
        <div className="md:w-1/2 bg-neutral-900 relative overflow-hidden flex items-center justify-center p-6 min-h-[320px] md:min-h-auto">
          <img 
            src={outfit.image} 
            alt={outfit.title}
            className="w-full h-full max-h-[520px] object-cover md:object-contain rounded-2xl shadow-xl"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white z-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] px-2.5 py-1 rounded-full bg-amber-400 text-neutral-950 font-bold mb-2 inline-block">
              {outfit.tag || 'Atelier Outfit'}
            </span>
            <h3 className="font-bodoni text-2xl sm:text-3xl font-normal leading-tight text-white">
              {outfit.title}
            </h3>
            <p className="text-xs text-white/80 font-light mt-1">
              {outfit.subtitle}
            </p>
          </div>
        </div>

        {/* Right Side: Items Breakdown & Add to Cart */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          
          <div>
            {/* Header */}
            <div className="pb-4 border-b border-neutral-100 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-900 font-semibold">
                  Complete Styled Ensemble
                </span>
                <span className="text-xs text-neutral-500">
                  {selectedItems.length} of {outfit.items ? outfit.items.length : 1} Selected
                </span>
              </div>
              <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
                {outfit.description}
              </p>
            </div>

            {/* Individual Garment Items List */}
            <div className="space-y-3">
              {outfit.items && outfit.items.map((item) => {
                const isChecked = selectedItems.includes(item.id);
                return (
                  <div 
                    key={item.id}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isChecked 
                        ? 'bg-neutral-50/80 border-neutral-900/40 shadow-sm' 
                        : 'bg-white border-neutral-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors border cursor-pointer ${
                            isChecked 
                              ? 'bg-neutral-950 border-neutral-950 text-white' 
                              : 'bg-white border-neutral-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>
                        
                        <div>
                          <p className="text-xs font-semibold text-neutral-900">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">
                            {item.category}
                          </p>
                        </div>
                      </div>

                      <span className="font-mono text-xs font-bold text-neutral-950">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Size Selector for Wearables */}
                    {isChecked && item.category !== 'Eyewear' && item.category !== 'Jewelry' && (
                      <div className="mt-2.5 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[10px]">
                        <span className="text-neutral-500 font-mono uppercase">Size:</span>
                        <div className="flex items-center gap-1">
                          {item.category === 'Footwear' 
                            ? ['40', '41', '42', '43'].map((sz) => (
                                <button
                                  key={sz}
                                  onClick={() => handleSizeChange(item.id, sz)}
                                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                                    itemSizes[item.id] === sz
                                      ? 'bg-neutral-950 text-white border-neutral-950'
                                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
                                  }`}
                                >
                                  {sz}
                                </button>
                              ))
                            : ['S', 'M', 'L', 'XL'].map((sz) => (
                                <button
                                  key={sz}
                                  onClick={() => handleSizeChange(item.id, sz)}
                                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                                    itemSizes[item.id] === sz
                                      ? 'bg-neutral-950 text-white border-neutral-950'
                                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
                                  }`}
                                >
                                  {sz}
                                </button>
                              ))
                          }
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

          {/* Footer Action Strip */}
          <div className="mt-6 pt-4 border-t border-neutral-200">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                Bundle Total
              </span>
              <div className="text-right">
                <span className="text-2xl font-bold font-mono text-neutral-950">
                  ${totalCalculated.toFixed(2)}
                </span>
                <p className="text-[10px] text-emerald-700 font-medium">
                  ✦ Complimentary Express Shipping
                </p>
              </div>
            </div>

            <button
              onClick={handleAddBundleToCart}
              disabled={selectedItems.length === 0}
              className={`w-full h-12 rounded-full font-mono text-xs uppercase tracking-[0.18em] font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl cursor-pointer ${
                addedSuccess 
                  ? 'bg-emerald-600 text-white' 
                  : selectedItems.length === 0
                  ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  : 'bg-neutral-950 text-white hover:bg-neutral-800 active:scale-[0.99]'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Look Added to Bag!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>Shop Look &bull; ${totalCalculated.toFixed(2)}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
