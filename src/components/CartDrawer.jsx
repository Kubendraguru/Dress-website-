import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Check, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const calculatedDiscount = discountApplied ? Math.round(subtotal * 0.15) : 0;
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const finalTotal = Math.max(0, subtotal - calculatedDiscount + shipping);

  const applyCoupon = () => {
    if (discountCode.trim().toUpperCase() === 'ATELIER-VIP15') {
      setDiscountApplied(true);
      setDiscountAmount(15);
    } else {
      alert('Invalid promo code. Use ATELIER-VIP15 from the VIP club!');
    }
  };

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderComplete(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#fbf9f5] shadow-2xl flex flex-col justify-between z-50 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-neutral-900" />
            <span className="font-editorial text-xl font-bold uppercase tracking-wider text-neutral-950">
              Your Atelier Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          
          {orderComplete ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="font-editorial text-3xl font-bold text-neutral-950">
                Order Confirmed
              </h3>
              <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                Your bespoke garments are being prepared at our Paris Atelier. Order #BLM-2026-{Math.floor(1000 + Math.random() * 9000)}.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-neutral-200 text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between"><span>Atelier Courier:</span><span className="font-bold">DHL Express Worldwide</span></div>
                <div className="flex justify-between"><span>Estimated Delivery:</span><span className="font-bold">3 Business Days</span></div>
                <div className="flex justify-between"><span>Total Paid:</span><span className="font-bold text-amber-700">₹{finalTotal}</span></div>
              </div>
              <button
                onClick={() => {
                  onClearCart();
                  setOrderComplete(false);
                  onClose();
                }}
                className="w-full py-3 bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Continue Exploring Atelier
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-neutral-200/60 flex items-center justify-center mx-auto text-neutral-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-editorial text-2xl font-bold text-neutral-800">Your Bag is Empty</h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Explore our flagship Atelier collection or runway pieces to begin your curated wardrobe.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-neutral-950 text-white text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-amber-700 transition-colors"
              >
                Explore Looks
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white p-4 rounded-2xl border border-neutral-200 flex gap-4 items-center shadow-sm"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 rounded-xl object-cover object-center bg-neutral-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-xs text-neutral-900 truncate">{item.name}</h5>
                    <p className="text-[11px] text-neutral-500 font-mono mt-0.5">Size: {item.size || 'M'} • ₹{item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity buttons */}
                      <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-neutral-200 transition-colors"
                        >
                          <Minus className="w-3 h-3 text-neutral-600" />
                        </button>
                        <span className="px-2.5 text-xs font-mono font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-neutral-200 transition-colors"
                        >
                          <Plus className="w-3 h-3 text-neutral-600" />
                        </button>
                      </div>

                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-neutral-400 hover:text-red-500 p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo code input */}
              <div className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Promo: ATELIER-VIP15"
                    className="flex-1 px-3.5 py-2 text-xs border border-neutral-300 rounded-xl uppercase font-mono placeholder:normal-case focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-xl hover:bg-black transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-[11px] text-emerald-600 font-medium mt-1.5 flex items-center gap-1">
                    <Check className="w-3 h-3" /> 15% VIP Atelier Privilege applied!
                  </p>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer Summary & Checkout */}
        {!orderComplete && cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-neutral-200 space-y-3">
            <div className="space-y-1.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-mono text-neutral-900 font-semibold">₹{subtotal}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>VIP Discount (15%):</span>
                  <span className="font-mono">-₹{calculatedDiscount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Express Worldwide Shipping:</span>
                <span className="font-mono text-neutral-900">
                  {shipping === 0 ? <span className="text-emerald-600 font-bold uppercase">Complimentary</span> : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-neutral-950 pt-2 border-t border-neutral-200">
                <span>Estimated Total:</span>
                <span className="font-mono font-editorial text-xl text-amber-700">₹{finalTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full py-4 bg-neutral-950 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
            >
              {checkingOut ? (
                <span>Securing Atelier Allocation...</span>
              ) : (
                <>
                  <span>Proceed to Checkout (₹{finalTotal})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 font-mono pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>256-BIT ENCRYPTED LUXURY CHECKOUT</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
