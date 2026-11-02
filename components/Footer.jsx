'use client';

import React from 'react';
import { Phone, Mail, Globe, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO, MATERIAL_CATEGORIES, ALUMINUM_SYSTEMS, SERVICES } from '@/data/companyData';

export default function Footer({ onNavigate, onOpenQuote }) {
  return (
    <footer className="bg-gradient-to-br from-[#061426] via-[#0A2540] to-[#6B4A17] text-slate-300 pt-20 pb-12 border-t border-[#163659]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Editorial Banner */}
        <div className="border-b border-[#1E3A5F] pb-14 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-sm uppercase tracking-widest text-[#E6C687] font-semibold">
                Wholesale Supplier to Glazing Contractors & Dealers · USA · Canada · Europe
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white leading-tight font-bold">
                A Partnership Built for the Window Trade.
              </h2>
              <p className="text-slate-300 text-base max-w-2xl font-light">
                Send us your architectural drawings and schedules. SWAP prepares accurate takeoffs, reviews the scope, and follows up promptly with competitive wholesale pricing.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#C59A45] hover:bg-[#D4AF37] text-white text-sm font-bold uppercase tracking-widest rounded transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Submit Takeoff / Get Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#E6C687]" />
                <span>USA Tested · European Tested</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 text-base">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-3 rounded-lg inline-block shadow-sm">
              <img
                src="/swap-logo.png"
                alt="SWAP Windows Corp."
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 text-base leading-relaxed max-w-sm">
              SWAP Windows Corp. provides wholesale windows, doors, architectural aluminum glazing systems, and glass for commercial and residential projects across the USA, Canada, and Europe.
            </p>
            <div className="pt-1 space-y-1.5 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E6C687] shrink-0 mt-0.5" />
                <span className="text-slate-300">{COMPANY_INFO.address}</span>
              </div>
              <div className="text-[13px] text-slate-400 pl-5">
                Wholesale Distribution Center & Commercial Takeoff Desk
              </div>
            </div>
          </div>

          {/* Column 2: Material Disciplines */}
          <div className="space-y-4">
            <div className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#1E3A5F] pb-2">
              Four Materials
            </div>
            <ul className="space-y-2 text-slate-300 text-sm">
              {MATERIAL_CATEGORIES.map((m) => (
                <li key={m.id}>
                  <button
                    onClick={() => onNavigate('products', { category: m.id })}
                    className="hover:text-white transition-colors text-left"
                  >
                    {m.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'glass' })}
                  className="hover:text-white transition-colors text-left text-[#E6C687]"
                >
                  Glass-Only Supply (Frameless)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Aluminum Systems */}
          <div className="space-y-4">
            <div className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#1E3A5F] pb-2">
              Architectural Systems
            </div>
            <ul className="space-y-2 text-slate-300 text-sm">
              {ALUMINUM_SYSTEMS.map((sys) => (
                <li key={sys.title}>
                  <button
                    onClick={() => onNavigate('products', { system: sys.title })}
                    className="hover:text-white transition-colors text-left"
                  >
                    {sys.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Contact */}
          <div className="space-y-4">
            <div className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#1E3A5F] pb-2">
              Official Contact
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-slate-400 text-[13px]">Toll-Free Phone:</div>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-white font-semibold hover:text-[#E6C687] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E6C687]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              <div>
                <div className="text-slate-400 text-[13px]">Direct Takeoffs & Plans:</div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:text-[#E6C687] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E6C687]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              <div>
                <div className="text-slate-400 text-[13px]">Corporate Office:</div>
                <div className="text-slate-300 mt-0.5 text-sm">
                  {COMPANY_INFO.address}
                </div>
              </div>

              <div className="pt-2 text-slate-400">
                <span className="text-[13px] block">Job-Site Logistics:</span>
                <span className="text-slate-300">Prompt Crated Delivery Direct to Job Sites Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Trade Notice */}
        <div className="pt-8 border-t border-[#163659] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>
            © {new Date().getFullYear()} SWAP Windows Corp. All rights reserved. Wholesale Supply to Glazing Contractors & Window Dealers.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              About Us
            </button>
            <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">
              Products
            </button>
            <button onClick={() => onNavigate('brands')} className="hover:text-white transition-colors">
              Brands
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact & Takeoffs
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
