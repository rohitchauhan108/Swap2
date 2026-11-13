'use client';

import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export default function Footer({ currentRoute, onNavigate, onOpenQuote }) {
  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#061426] via-[#0A2540] to-[#3E301B] text-slate-300 py-10 border-t border-[#163659]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-9 flex flex-col gap-5 border-b border-[#1E3A5F] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#E6C687]">SWAP Windows Corp.</p>
            <h2 className="mt-1 text-2xl font-heading font-bold text-white">Wholesale windows, doors & glass.</h2>
            {/* <p className="mt-2 text-sm text-slate-400">Takeoffs, fabrication and job-site delivery for the window trade.</p> */}
          </div>
          <button onClick={onOpenQuote} className="inline-flex items-center justify-center gap-2 rounded-lg bg-swap-gold-btn px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
            Get a quote <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-9 text-base sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-3">
            <div className="bg-white p-2.5 rounded-lg inline-block shadow-sm">
              <img
                src="/logo-transparent.webp"
                alt="SWAP Windows Corp."
                className="md:w-[280px] w-[180px]"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">Premium fenestration supply for glazing contractors, dealers, builders and architects across the USA, Canada and Europe.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E3A5F] pb-3">
              <span className="text-sm font-bold uppercase tracking-wider text-white">Website</span>
              <span className="text-xs uppercase tracking-wider text-[#E6C687]">Explore</span>
            </div>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => {
                const isActive = currentRoute === link.id;
                return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm transition-all ${
                    isActive
                      ? 'border-[#C59A45]/60 bg-white/10 text-white'
                      : 'border-transparent text-slate-300 hover:border-[#C59A45]/40 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className={`h-3.5 w-3.5 transition-colors ${isActive ? 'text-[#E6C687]' : 'text-slate-500 group-hover:text-[#E6C687]'}`} />
                </button>
                );
              })}
            </nav>
          </div>

          {/* Column 4: Official Contact */}
          <div className="space-y-4">
            <div className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#1E3A5F] pb-3">
              Official Contact
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-white font-semibold hover:text-[#E6C687] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E6C687]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:text-[#E6C687] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E6C687]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Trade Notice */}
        <div className="mt-9 flex flex-col gap-2 border-t border-[#163659] pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} SWAP Windows Corp. All rights reserved.
          </div>
          <span>USA Tested · European Tested</span>
        </div>
      </div>
    </footer>
  );
}
