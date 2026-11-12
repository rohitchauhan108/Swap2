'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
const swapBuildingFacade = "/images/swap_building_facade_1793362746018.jpg";

export default function SWAPHeroSection() {

  const swapDisciplines = [
    { letter: 'S', title: 'Steel' },
    { letter: 'W', title: 'Wood' },
    { letter: 'A', title: 'Aluminum' },
    { letter: 'P', title: 'PVC' },
  ];

  return (
    <div className="w-full">
      {/* =========================================================
          PART 1: THE ARCHITECTURAL FACADE BANNER (S · W · A · P)
          Re-imagined from the old website hero in our architectural theme
         ========================================================= */}
      <section className="relative w-full h-[60vh] flex flex-col justify-between overflow-hidden bg-[#0A1626]">
        {/* Real Architectural Building Facade Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={swapBuildingFacade}
            alt="SWAP Windows Corp. - Architectural Building Facade with Steel, Wood, Aluminum, and PVC Fenestration"
            className="w-full h-full object-cover object-center brightness-100 contrast-100 transition-transform duration-1000 scale-100 hover:scale-[1.02]"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-architectural-grid-dark opacity-100" />

        {/* The 4 SWAP Columns Overlaid Across the Facade - Minimal and Clean */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 my-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {swapDisciplines.map((item) => (
              <div
                key={item.letter}
                className="group relative rounded-xl py-6 sm:py-8 px-4 transition-all duration-300 flex flex-col items-center text-center justify-center backdrop-blur-md bg-[#001328]/60 hover:bg-[#001833]/85 border border-white/20 hover:border-[#E5B552] shadow-xl hover:shadow-[0_0_25px_rgba(229,181,82,0.25)] hover:-translate-y-1"
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
          <div className="mt-6 flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:gap-8">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-2 text-xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-colors hover:text-[#E5B552] sm:text-2xl"
            >
              <Phone className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden="true" />
              {COMPANY_INFO.phone}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-colors hover:text-[#E5B552] sm:text-2xl"
            >
              <Mail className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden="true" />
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>

      
      </section>
    </div>
  );
}
