'use client';

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
const heroArchitecturalFacade = "/images/hero_architectural_facade_1793359234348.jpg";

export default function TradePartnershipSection({ onNavigate, onOpenQuote }) {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white border-b border-slate-200 bg-architectural-grid">
      {/* Architectural CAD Blueprint Corner Markers */}
      <div className="absolute top-4 left-6 text-slate-300 font-mono text-[10px] select-none pointer-events-none hidden sm:block">
        + 41°19'N 74°11'W · CAD GRID: 44MM
      </div>
      <div className="absolute top-4 right-6 text-slate-300 font-mono text-[10px] select-none pointer-events-none hidden sm:block">
        REV. 2026.10 · SWAP WHOLESALE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Editorial Kicker */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#0A2540] mb-6">
          <span className="w-8 h-[2px] bg-[#C59A45]"></span>
          <span>Wholesale Supply for Glazing Contractors & Dealers</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Typography Column */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540] leading-tight">
              A Partnership Built for the Window Trade.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
              SWAP Windows Corp. provides wholesale windows, doors, architectural aluminum glazing systems, and glass for commercial and residential projects across the USA, Canada, and Europe. We deliver project-specific takeoffs, precision engineering, and job-site delivery.
            </p>

            {/* Action Buttons with Logo Gradient */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="px-7 py-4 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md flex items-center justify-center gap-3 group border border-[#1A4B82]/50"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-[#E6C687] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuote}
                className="px-7 py-4 bg-transparent hover:bg-slate-50 text-[#0A2540] border border-slate-300 hover:border-[#0A2540] text-xs font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Material Sub-kicker */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <span className="text-[#0A2540] font-semibold">Core Disciplines:</span>
              <span>Steel Fenestration</span>
              <span className="text-slate-300">·</span>
              <span>Architectural Aluminum</span>
              <span className="text-slate-300">·</span>
              <span>Engineered Wood</span>
              <span className="text-slate-300">·</span>
              <span>Multi-Chamber PVC</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#C59A45] font-semibold">Glass-Only Supply</span>
            </div>
          </div>

          {/* Right Architectural Visual Composition (Quarty overlapping aesthetic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] bg-slate-100">
              <img
                src={heroArchitecturalFacade}
                alt="Modern architectural glass facade with slim aluminum windows"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Overlaid Editorial Glass Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-slate-100 shadow-lg">
                <div className="flex items-center justify-between text-xs font-semibold text-[#0A2540] mb-1">
                  <span>ARCHITECTURAL GLAZING</span>
                  <span className="text-[#C59A45]">USA & EU TESTED</span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Commercial facades, ultra-slim steel sightlines, and Reynaers SL38 systems supplied directly to your job site.
                </p>
              </div>
            </div>

            {/* Decorative Subtle Floating Card with Logo Blue Gradient */}
            <div className="hidden sm:block absolute -top-6 -left-8 bg-gradient-to-br from-[#00132B] via-[#002148] to-[#0D3B73] text-white p-4 rounded-xl shadow-xl max-w-[200px] border border-[#17467B]/70">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#E6C687] mb-0.5">
                Reynaers SL38
              </div>
              <div className="text-xs font-medium text-slate-200">
                Special discount pricing on slim-profile systems.
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Statistics Strip (Quarty inspired) */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0A2540]">
              04
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Material Options
            </div>
            <div className="text-xs text-slate-500">
              Steel, Wood, Aluminum, and PVC
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0A2540]">
              100%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Project Takeoffs
            </div>
            <div className="text-xs text-slate-500">
              Prepared directly from your drawings
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0A2540]">
              Dual
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Tested Standards
            </div>
            <div className="text-xs text-slate-500">
              USA Tested & European Tested
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0A2540]">
              Direct
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Job-Site Delivery
            </div>
            <div className="text-xs text-slate-500">
              Prompt coordination regardless of order size
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
