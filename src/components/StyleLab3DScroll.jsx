import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Sparkles, Disc, Activity, Layers, Palette, Eye, RotateCw, Volume2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StyleLab3DScroll({ onAddToCart }) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeColor, setActiveColor] = useState('noir'); // 'noir', 'cobalt', 'solar', 'crimson'
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const panels = [
    {
      id: 0,
      title: 'TELEMETRY',
      tag: '01 / SPECTRUM',
      type: 'spectrum',
      icon: Activity,
      desc: 'Real-time ground force telemetry & lateral stability curve.'
    },
    {
      id: 1,
      title: 'ANGLES',
      tag: '02 / SILHOUETTE',
      type: 'angles',
      icon: Layers,
      desc: 'Tri-axis CAD perspective scan & aerodynamic contour.'
    },
    {
      id: 2,
      title: 'SOUNDTRACK',
      tag: '03 / VINYL HUD',
      type: 'disc',
      icon: Disc,
      desc: 'Paris Runway Audio Layer • BPM 128 • Synthwave 2026'
    },
    {
      id: 3,
      title: 'MOTION',
      tag: '04 / KINETICS',
      type: 'motion',
      icon: RotateCw,
      desc: 'High-impact skate absorption & carbon shank recoil.'
    },
    {
      id: 4,
      title: 'MATERIALS',
      tag: '05 / BLUEPRINT',
      type: 'materials',
      icon: ShieldCheck,
      desc: 'Italian full-grain calfskin, micro-mesh & Zoom Air core.'
    },
    {
      id: 5,
      title: 'COLOR LAB',
      tag: '06 / PALETTE',
      type: 'palette',
      icon: Palette,
      desc: 'Custom dye saturation & dual-tone contrast presets.'
    }
  ];

  const totalPanels = panels.length;
  const angleStep = 360 / totalPanels;
  const radius = 340; // 3D cylinder radius in px

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handleMouseMove = (e) => {
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    if (isDragging) {
      const deltaX = currentX - startX;
      setRotation((prev) => prev + deltaX * 0.45);
      setStartX(currentX);
    }

    // Parallax mouse tilt for 3D sneaker
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel scroll interaction
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      setRotation((prev) => prev - e.deltaX * 0.3);
    } else {
      setRotation((prev) => prev - e.deltaY * 0.25);
    }
  };

  const rotateTo = (index) => {
    const targetRotation = -index * angleStep;
    setRotation(targetRotation);
  };

  // Active front panel index
  const normalizedRotation = ((-rotation % 360) + 360) % 360;
  const activeIndex = Math.round(normalizedRotation / angleStep) % totalPanels;

  return (
    <section 
      id="style-lab" 
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#e5e8ed] via-[#d4d8e0] to-[#c2c7d0] text-neutral-900 overflow-hidden select-none cursor-grab active:cursor-grabbing min-h-[750px] md:min-h-[880px] flex flex-col justify-between"
    >
      
      {/* Background Soft Studio Lighting & Subtle Radial Grid */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-white/40 blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Top HUD Telemetry Bar (Exact Mockup Layout) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-neutral-400/50 pb-4 gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-600 uppercase font-semibold">
              + MODEL: ZUDIO 6.0 ZOOM PRIMO ID
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-neutral-950 flex items-center gap-2 mt-0.5">
              <span>STYLE LAB</span>
              <span className="text-xs px-2 py-0.5 rounded bg-neutral-900 text-white font-mono font-normal">
                3D CYLINDER HUD
              </span>
            </h2>
          </div>

          {/* Quick HUD Navigation Pill */}
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-sm">
            <span className="text-xs font-mono font-bold text-neutral-700">
              ORBIT: {Math.round(normalizedRotation)}°
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
            <span className="text-xs font-mono font-bold text-amber-700 uppercase">
              PANEL: {panels[activeIndex].title}
            </span>
          </div>
        </div>

        {/* Central 3D Stage: 3D Cylindrical Orbit Carousel & Floating Product */}
        <div className="relative my-auto min-h-[460px] sm:min-h-[520px] md:min-h-[580px] flex items-center justify-center">
          
          {/* 1. Floor Holographic Radar & Dial Platform (Direct from Mockup) */}
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-0">
            <div 
              className="relative w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[620px] md:h-[620px] rounded-full border-2 border-dashed border-neutral-500/40 flex items-center justify-center transition-transform duration-300"
              style={{
                transform: `rotateX(72deg) rotateZ(${rotation}deg)`
              }}
            >
              {/* Center Concentric Dial Rings */}
              <div className="absolute inset-8 rounded-full border border-neutral-500/30"></div>
              <div className="absolute inset-20 rounded-full border border-neutral-500/20"></div>
              <div className="absolute inset-32 rounded-full bg-neutral-400/20 blur-sm"></div>

              {/* 6 Peripheral Orbit HUD Sector Badges on the Floor Ring */}
              {panels.map((p, idx) => {
                const angle = (idx * angleStep * Math.PI) / 180;
                const r = 260; // placement radius
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;

                return (
                  <div
                    key={p.id}
                    className="absolute w-8 h-8 rounded-lg bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-neutral-800 shadow-md transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`
                    }}
                  >
                    <p.icon className="w-4 h-4 stroke-[2]" />
                  </div>
                );
              })}
            </div>

            {/* Soft Contact Shadow under floating sneaker */}
            <div className="w-56 h-12 bg-neutral-900/30 rounded-full blur-xl mx-auto -mt-6"></div>
          </div>

          {/* 2. Floating 3D Product in Spotlight (Tilts with mouse and rotation) */}
          <div 
            className="relative z-10 pointer-events-none transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(-15px) rotateX(${-mousePos.y * 18}deg) rotateY(${mousePos.x * 24}deg)`
            }}
          >
            <div className="relative max-w-[320px] sm:max-w-[420px] md:max-w-[480px]">
              <img 
                src="/style-lab-sneaker.png" 
                alt="Nike 6.0 Zoom Primo iD"
                className="w-full h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)] filter contrast-105"
              />
            </div>
          </div>

          {/* 3. 3D Cylindrical Orbit Carousel Panels (Exact 3D Curved Perspective of Mockup) */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              perspective: '1200px',
              perspectiveOrigin: '50% 50%'
            }}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(6deg) rotateY(${rotation}deg)`
              }}
            >
              {panels.map((panel, idx) => {
                const angle = idx * angleStep;
                // Calculate angular distance to front
                const currentAngularPos = (((angle + rotation) % 360) + 360) % 360;
                const isFront = currentAngularPos > 300 || currentAngularPos < 60;
                const rad = (currentAngularPos * Math.PI) / 180;
                const opacity = Math.max(0.2, (Math.cos(rad) + 1) / 2);

                return (
                  <div
                    key={panel.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      rotateTo(idx);
                    }}
                    className={`absolute w-[180px] sm:w-[220px] md:w-[240px] h-[130px] sm:h-[150px] rounded-2xl p-4 transition-all duration-200 pointer-events-auto cursor-pointer border shadow-lg backdrop-blur-md flex flex-col justify-between ${
                      isFront
                        ? 'bg-white/85 border-white shadow-2xl text-neutral-900 scale-105 ring-2 ring-white/80'
                        : 'bg-white/35 border-white/50 text-neutral-700 hover:bg-white/60'
                    }`}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      opacity: opacity
                    }}
                  >
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-neutral-300/60 pb-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-neutral-500">
                        {panel.tag}
                      </span>
                      <panel.icon className="w-4 h-4 text-neutral-800" />
                    </div>

                    {/* Panel Dynamic Content (Mockup Features) */}
                    <div className="my-auto">
                      
                      {/* 1. Spectrum / Telemetry Bars */}
                      {panel.type === 'spectrum' && (
                        <div className="flex items-end justify-between gap-1 h-10 pt-2">
                          {[40, 75, 90, 60, 100, 45, 80, 65, 95, 50].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-full bg-neutral-900 rounded-t-sm transition-all duration-300"
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>
                      )}

                      {/* 2. Silhouette 3D Angle Icons */}
                      {panel.type === 'angles' && (
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          {['Lateral', 'Medial', 'Top'].map((pos, i) => (
                            <div key={i} className="bg-neutral-900/10 rounded-lg p-1 text-center">
                              <span className="text-[9px] font-mono font-bold block">{pos}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 3. Vinyl Disc Player */}
                      {panel.type === 'disc' && (
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-400 border border-white shadow-inner flex items-center justify-center ${isPlayingAudio ? 'animate-spin' : ''}`}>
                            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsPlayingAudio(!isPlayingAudio);
                            }}
                            className="text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-white px-2.5 py-1 rounded-md font-bold"
                          >
                            {isPlayingAudio ? 'Pause' : 'Play Beat'}
                          </button>
                        </div>
                      )}

                      {/* 4. Motion Dynamics */}
                      {panel.type === 'motion' && (
                        <div className="space-y-1 text-xs font-mono">
                          <div className="flex justify-between text-[10px]">
                            <span>FLEX RATE:</span>
                            <span className="font-bold text-emerald-700">98.4%</span>
                          </div>
                          <div className="w-full bg-neutral-300 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-600 h-full w-[98%]"></div>
                          </div>
                        </div>
                      )}

                      {/* 5. Materials Blueprint */}
                      {panel.type === 'materials' && (
                        <div className="text-[10px] font-mono text-neutral-600 space-y-0.5">
                          <p>• Italian Full-Grain Calfskin</p>
                          <p>• Encapsulated Zoom Air Unit</p>
                        </div>
                      )}

                      {/* 6. Color Lab */}
                      {panel.type === 'palette' && (
                        <div className="flex items-center gap-2 pt-1">
                          {['#121212', '#c0272d', '#0e38b1', '#e5a919'].map((c, i) => (
                            <span 
                              key={i} 
                              className="w-5 h-5 rounded-full border border-white shadow-sm"
                              style={{ backgroundColor: c }}
                            ></span>
                          ))}
                        </div>
                      )}

                    </div>

                    {/* Bottom Label */}
                    <div className="flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-neutral-900 pt-1">
                      <span>{panel.title}</span>
                      <span className="text-[9px] font-mono text-neutral-400">CLICK TO LOCK</span>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Interactive Action Console */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-neutral-400/50 gap-4">
          
          {/* Orbit Navigation Hint */}
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-700">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900 animate-ping"></span>
              <span>DRAG HORIZONTALLY OR SCROLL TO ROTATE 3D HUD</span>
            </span>
          </div>

          {/* Quick Steppers & Equip Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setRotation((prev) => prev + angleStep)}
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-900 border border-neutral-300 flex items-center justify-center shadow-md transition-all active:scale-95"
              aria-label="Previous 3D panel"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setRotation((prev) => prev - angleStep)}
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-900 border border-neutral-300 flex items-center justify-center shadow-md transition-all active:scale-95"
              aria-label="Next 3D panel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                onAddToCart({
                  id: 'prod-zoom-primo-id',
                  name: 'Zudio 6.0 Zoom Primo iD',
                  price: 240,
                  image: '/style-lab-sneaker.png',
                  category: 'Footwear Lab'
                });
              }}
              className="py-3 px-6 rounded-2xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl active:scale-95 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Customize & Add to Bag ($240)</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
