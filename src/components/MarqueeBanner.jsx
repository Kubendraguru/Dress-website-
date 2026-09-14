import React from 'react';

export default function MarqueeBanner({ textItems }) {
  const items = textItems || [
    'Pop Art Energy',
    'Trend Alert',
    'Heritage Silk',
    'Color Meets Clarity',
    'Pop Art Energy',
    'Trend Alert',
    'Heritage Silk',
    'Haute Couture'
  ];

  return (
    <div className="py-3.5 sm:py-4 border-y border-neutral-300 bg-[#f4ebd7] overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 sm:mx-8">
            <span className="font-bodoni text-sm sm:text-base md:text-lg font-medium tracking-wide text-neutral-900">
              {item}
            </span>
            <span className="ml-6 sm:ml-8 text-neutral-700 text-xs">✶</span>
          </div>
        ))}
      </div>
    </div>
  );
}
