'use client';

import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  Truck,
  Building2,
  Compass,
  FileCheck2,
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, MATERIAL_CATEGORIES, WHY_WORK_WITH_SWAP, BRANDS } from '@/data/companyData';
const heroArchitecturalFacade = "/images/hero_architectural_facade_1793359234348.jpg";
const materialsAluminumCurtainwall = "/images/materials_aluminum_curtainwall_1793359235401.jpg";

export default function AboutPage({ onNavigate, onOpenQuote }) {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Editorial Header (Quarty Classic Style) */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#0A2540]">
              <span className="w-8 h-[2px] bg-[#C59A45]"></span>
              <span>About SWAP Windows Corp.</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540] leading-tight">
              A Partnership Built for the Window Trade.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              SWAP Windows Corp. provides wholesale windows, doors, architectural aluminum glazing systems, and glass for commercial and residential projects across the United States.
            </p>
          </div>

          {/* Overlapping Image & Editorial Layout (Quarty About Us Classic aesthetic) */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/10] bg-slate-100">
                <img
                  src={heroArchitecturalFacade}
                  alt="Modern architectural glazing pavilion"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Caption Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-200 max-w-sm">
                <div className="text-xs uppercase font-bold tracking-wider text-[#C59A45] mb-1">
                  Testing & Standards
                </div>
                <div className="text-sm font-heading font-bold text-[#0A2540]">
                  USA Tested & European Tested
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Stringent compliance for structural wind load, thermal envelope integrity, and water tightness.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6 lg:pl-4">
              <div className="p-6 bg-[#FAFAFA] rounded-xl border border-slate-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Trade Model
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0A2540]">
                  Wholesale Only
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We work exclusively with glazing contractors, commercial window dealers, developers, and architects. We do not sell retail.
                </p>
              </div>

              <div className="p-6 bg-[#FAFAFA] rounded-xl border border-slate-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Engineering Scope
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0A2540]">
                  Takeoffs & Shop Drawings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Send your schedules. We prepare takeoffs, review the scope, coordinate engineering calculations, and supply prompt project-specific pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0A2540]">
                Single-Source Supply Across Four Materials.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Rather than coordinating with multiple separate vendors for steel fenestration, aluminum curtain walls, architectural timber, and glass-only packages, SWAP serves as your integrated wholesale partner.
              </p>
              <div className="pt-2 text-xs text-slate-500 bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-800 block mb-1">Trade Availability Notice:</span>
                Product availability is determined by the selected system and project requirements.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MATERIAL_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
                >
                  <div className="text-xs uppercase font-bold tracking-wider text-[#C59A45]">
                    {cat.shortName} System
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#0A2540]">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                  <button
                    onClick={() => onNavigate('products', { category: cat.id })}
                    className="text-xs font-semibold text-[#0A2540] hover:text-[#C59A45] flex items-center gap-1 pt-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown (The 8 Services from PDF) with Blueprint Grid */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-200 bg-architectural-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Full Project Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540]">
              From Architectural Schedules to Direct Job-Site Delivery.
            </h2>
            <p className="text-base text-slate-600 font-light">
              We handle every technical phase to ensure flawless fabrication and reliable delivery across the USA, Canada, and Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.number}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm hover:border-[#0A2540] transition-colors"
              >
                <div className="text-xl font-heading font-bold text-[#C59A45]">
                  {srv.number}.
                </div>
                <h3 className="text-base font-heading font-bold text-[#0A2540]">
                  {srv.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Teams & Logistics (Verified from PDF) */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
                Logistics & Support
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540]">
                Installation Teams & Site Delivery.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                SWAP can help locate qualified installation teams, including experienced glazing contractors able to provide insurance required for the project. Regardless of order size, we coordinate logistics to your needs and arrange prompt delivery directly to the job site.
              </p>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C59A45]" />
                  <span>Qualified, insured glazing contractor network referrals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C59A45]" />
                  <span>Custom wooden crate packing with shock and moisture protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C59A45]" />
                  <span>Customs clearance, port handling, and domestic flatbed transport</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
                <img
                  src={materialsAluminumCurtainwall}
                  alt="Job-site commercial installation of architectural glazing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#E6C687] font-semibold">
            Partner With SWAP Windows Corp.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white max-w-2xl mx-auto">
            Ready to partner on your upcoming glazing projects?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
            Send us your architectural drawings and schedules. Our team prepares accurate takeoffs and project-specific pricing promptly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-[#C59A45] hover:bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-widest rounded transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Submit Project Takeoff</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-slate-500 text-xs font-bold uppercase tracking-widest rounded transition-all"
            >
              Contact Our Trade Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
