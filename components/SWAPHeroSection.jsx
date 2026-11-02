'use client';

import React from 'react';
import { Building2 } from 'lucide-react';
const swapBuildingFacade = "/images/swap_building_facade_1793362746018.jpg";

export default function SWAPHeroSection({ onNavigate, onOpenQuote }) {

  const swapDisciplines = [
    { letter: 'S', title: 'Steel', category: 'steel' },
    { letter: 'W', title: 'Wood', category: 'wood' },
    { letter: 'A', title: 'Aluminum', category: 'aluminum' },
    { letter: 'P', title: 'PVC', category: 'pvc' },
  ];

  return (
    <div className="w-full">
      {/* =========================================================
          PART 1: THE ARCHITECTURAL FACADE BANNER (S · W · A · P)
          Re-imagined from the old website hero in our architectural theme
         ========================================================= */}
      <section className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#0A1626]">
        {/* Real Architectural Building Facade Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={swapBuildingFacade}
            alt="SWAP Windows Corp. - Architectural Building Facade with Steel, Wood, Aluminum, and PVC Fenestration"
            className="w-full h-full object-cover object-center brightness-100 contrast-100 transition-transform duration-1000 scale-100 hover:scale-[1.02]"
          />
        </div>

        {/* The 4 SWAP Columns Overlaid Across the Facade - Minimal and Clean */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 my-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {swapDisciplines.map((item) => (
              <div
                key={item.letter}
                onClick={() => onNavigate('products', { category: item.category })}
                className="group relative cursor-pointer rounded-xl py-6 sm:py-8 px-4 transition-all duration-300 flex flex-col items-center text-center justify-center backdrop-blur-md bg-[#001328]/60 hover:bg-[#001833]/85 border border-white/20 hover:border-[#E5B552] shadow-xl hover:shadow-[0_0_25px_rgba(229,181,82,0.25)] hover:-translate-y-1"
              >
                {/* Letter (Smaller & Proportional) */}
                <div className="mb-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C7] via-[#E5B552] to-[#B37E1C] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] select-none transition-transform duration-300 group-hover:scale-105 inline-block">
                    {item.letter}
                  </span>
                </div>

                {/* Material Name Only: Steel, Wood, Aluminum, PVC */}
                <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-wide group-hover:text-[#E6C687] transition-colors drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      
      </section>

      <section className="py-12 md:py-16 bg-white border-b border-slate-200 bg-architectural-grid relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2540]/5 border border-[#0A2540]/15 text-xs font-bold text-[#0A2540] uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-[#C59A45]" />
            <span>High-End Architectural Fenestration</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540] leading-tight tracking-tight">
            Welcome to SWAP Windows Corp.
          </h1>

          <p className="text-lg sm:text-xl text-slate-800 font-semibold italic max-w-3xl mx-auto leading-relaxed">
            “Upgrade Every Project — Commercial & Residential — with Premium, Energy-Efficient Windows and Doors.”
          </p>
        </div>
      </section>

    </div>
  );
}
