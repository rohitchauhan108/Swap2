'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Maximize2,
  Filter,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import {
  PRODUCTS_CATALOG,
  MATERIAL_CATEGORIES,
  ALUMINUM_SYSTEMS,
  GLASS_ONLY_SUPPLY,
  COMPANY_INFO
} from '@/data/companyData';

export default function ProductsPage({ initialCategory, initialSystem, onOpenQuote, onSelectProduct }) {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (initialCategory) {
      setActiveFilter(initialCategory);
    }
  }, [initialCategory]);

  const filterTabs = [
    { id: 'all', label: 'All Systems' },
    { id: 'steel', label: 'Steel Windows & Doors' },
    { id: 'aluminum', label: 'Aluminum Systems' },
    { id: 'wood', label: 'Wood Windows & Doors' },
    { id: 'pvc', label: 'PVC Windows & Doors' },
    { id: 'glass', label: 'Glass-Only Supply' },
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Editorial Page Header */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Architectural Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#0A2540] tracking-tight">
              Windows, Doors & Glazing Systems.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Explore our four material disciplines, commercial aluminum systems, and custom glass supply engineered to USA and European testing standards.
            </p>
          </div>

          {/* Availability Notice from Client PDF */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 max-w-2xl text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">Important Trade Availability Notice:</span>
              <span>Product availability is determined by the selected system and project requirements. Standard sliding windows and doors may also be available in other materials.</span>
            </div>
          </div>

          {/* Interactive Filter Tabs — Architectural Segmented Dock */}
          <div className="mt-12 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/90 inline-flex flex-wrap items-center gap-1.5 shadow-inner">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              const count = tab.id === 'all'
                ? PRODUCTS_CATALOG.length
                : PRODUCTS_CATALOG.filter((p) => p.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00142E] via-[#002148] to-[#0A3668] text-white shadow-md border border-[#17467B] -translate-y-0.5'
                      : 'text-slate-600 hover:text-[#0A2540] hover:bg-white/80'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium transition-colors ${
                      isActive
                        ? 'bg-[#12365C] text-[#E6C687] border border-[#1E4D80]'
                        : 'bg-slate-200/90 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(prod)}>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {prod.badge && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#00142E] to-[#0A3366] text-[#E6C687] text-[11px] font-bold px-3 py-1 rounded shadow border border-[#143B66]/60">
                      {prod.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-md text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#C59A45] uppercase tracking-wider">
                      <span>{prod.material}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{prod.systemType}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(prod)}
                      className="text-xl font-heading font-bold text-[#0A2540] hover:text-[#C59A45] transition-colors cursor-pointer"
                    >
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {prod.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#C59A45] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0A2540] transition-colors"
                    >
                      System Specs
                    </button>
                    <button
                      onClick={() => onOpenQuote(prod.name)}
                      className="px-4 py-2 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow-sm border border-[#1A4B82]/50"
                    >
                      <span>Takeoff</span>
                      <ArrowRight className="w-3 h-3 text-[#E6C687]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Glass-Only Supply Callout Banner with SWAP Logo Gradient */}
          {activeFilter !== 'glass' && (
            <div className="mt-16 bg-gradient-to-r from-[#00142E] via-[#002148] to-[#0D3C73] text-white rounded-2xl p-8 sm:p-12 shadow-lg border border-[#143B66]/60 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#124480]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-2 max-w-2xl relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E6C687]">
                  Frameless Architectural Glazing
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Need Glass Without Frames?
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  We supply glass separately for storefronts, curtain walls, windows, doors, balconies, and showers — manufactured to your project drawings and specifications.
                </p>
              </div>

              <button
                onClick={() => onOpenQuote('Glass-Only Supply')}
                className="px-6 py-3.5 bg-swap-gold-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shadow-md border border-[#D4A143]/40 relative z-10"
              >
                Request Glass-Only Pricing
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Architectural Aluminum Systems Checklist */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Engineering Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0A2540]">
              Aluminum Architectural Systems Range.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light">
              Supplied as complete aluminum systems with comprehensive engineering calculations and job-site logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALUMINUM_SYSTEMS.map((sys) => (
              <div
                key={sys.title}
                className="p-6 rounded-xl bg-[#FAFAFA] border border-slate-200 space-y-3"
              >
                <div className="text-xs uppercase font-bold text-[#C59A45]">
                  {sys.tagline}
                </div>
                <h4 className="text-lg font-heading font-bold text-[#0A2540]">
                  {sys.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sys.description}
                </p>
                <button
                  onClick={() => onOpenQuote(`Aluminum ${sys.title}`)}
                  className="text-xs font-semibold text-[#0A2540] hover:text-[#C59A45] transition-colors pt-2 block"
                >
                  Request Takeoff on {sys.title} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
