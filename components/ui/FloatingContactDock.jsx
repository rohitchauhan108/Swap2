'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export default function FloatingContactDock() {
  // WhatsApp direct link with trade takeoff prefill
  const whatsappUrl = `https://wa.me/18772127927?text=${encodeURIComponent(
    'Hello SWAP Windows Corp, I would like to request project-specific pricing and submit architectural drawings for takeoff.'
  )}`;

  // Email link with project takeoff prefill
  const emailUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    'Architectural Drawings & Takeoff Inquiry — SWAP Windows Corp'
  )}&body=${encodeURIComponent(
    'Hello SWAP Estimating Desk,\n\nI would like to request trade pricing for an upcoming project.\n\nProject Name:\nLocation / Zip Code:\nScope / Material (Steel / Aluminum / Wood / PVC / Glass):\nEstimated Window/Door Count:\n\nAttached are our drawings and schedules.\n\nThank you!'
  )}`;

  return (
    <aside
      aria-label="Quick Trade Contact Dock"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto select-none"
    >
      {/* Floating Architectural Dock Pill Container */}
      <div className="relative group/dock bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_40px_rgba(10,37,64,0.18)] rounded-full p-2 flex flex-col items-center gap-2.5 transition-all duration-300 hover:shadow-[0_16px_50px_rgba(10,37,64,0.25)] ring-1 ring-black/5">
        
        {/* 1. WHATSAPP FLOATING ACTION BUTTON */}
        <div className="relative flex items-center justify-end">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with SWAP Windows Corp. on WhatsApp (877-212-7927)"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#4ADE80] text-white shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {/* Animated Glow Halo on Hover */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-40 blur-md group-hover:scale-130 transition-all duration-300 pointer-events-none" />

            {/* Official WhatsApp SVG Icon with Gentle Rotation Animation */}
            <svg
              className="w-6 h-6 fill-current relative z-10 drop-shadow-sm group-hover:-rotate-12 transition-transform duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </div>

        {/* 2. EMAIL FLOATING ACTION BUTTON */}
        <div className="relative flex items-center justify-end">
          <a
            href={emailUrl}
            aria-label="Email SWAP Windows Corp. (SWAP@swapwindows.com)"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#00142E] via-[#002148] to-[#0A3668] text-white shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border border-[#E6C687]/40 cursor-pointer"
          >
            {/* Animated Glow Halo on Hover */}
            <span className="absolute inset-0 rounded-full bg-[#C59A45] opacity-0 group-hover:opacity-30 blur-md group-hover:scale-130 transition-all duration-300 pointer-events-none" />

            <Mail className="w-5 h-5 text-[#E6C687] relative z-10 drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </aside>
  );
}
