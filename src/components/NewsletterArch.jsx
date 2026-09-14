import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function NewsletterArch() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#0e38b1', '#e5a919', '#d4af37', '#121212']
      });
    } catch (err) {}
  };

  return (
    <section id="newsletter" className="py-20 md:py-28 bg-[#faf8f5] relative overflow-hidden">
      
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Blue Archway Container from Mockup */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e38b1] to-[#082375] text-white p-8 sm:p-12 md:p-16 shadow-2xl flex flex-col items-center text-center">
          
          {/* Architectural Cobalt Arches in Background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
            <div className="w-[450px] h-[450px] border-[30px] border-white rounded-t-full -top-12"></div>
            <div className="w-[650px] h-[650px] border-2 border-white rounded-t-full -top-24"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide">
              ✶ Step Into Your Power ✶
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto">
              Join our private salon to receive secret drops & invitation-only previews
            </p>
          </div>

          {/* Floating White Subscription Card from Mockup */}
          <div className="relative z-20 mt-10 w-full max-w-lg bg-white text-neutral-900 rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
            
            {/* Left Model Thumbnail (Cobalt Blue Look) */}
            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop" 
                alt="Cobalt Vest Preview"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Form */}
            <div className="flex-1 w-full text-left">
              {submitted ? (
                <div className="py-2 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-semibold text-xs mb-1">
                    <Check className="w-4 h-4" />
                    <span>Invitation Dispatched</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Welcome to the private salon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Private Atelier Club
                  </span>
                  <div className="flex items-center gap-2">
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address..."
                      required
                      className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg text-xs focus:outline-none focus:border-black font-sans bg-neutral-50"
                    />
                    <button
                      type="submit"
                      className="w-9 h-9 rounded-lg bg-[#e83d34] text-white flex items-center justify-center hover:bg-black transition-colors flex-shrink-0"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
