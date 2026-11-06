'use client';

import React from 'react';
import SWAPHeroSection from '@/components/SWAPHeroSection';
import ProductMarquee from '@/components/ProductMarquee';
import WelcomeSection from '@/components/WelcomeSection';
import TradePartnershipSection from '@/components/TradePartnershipSection';

const HOME_BRANDS = [
  { name: 'Reynaers Aluminium', logo: '/brands/alumimium/reynoers.png', url: 'https://www.reynaers.com/' },
  { name: 'Schüco', logo: '/brands/alumimium/schuco.png', url: 'https://www.schueco.com/' },
  { name: 'Hansen', logo: '/brands/alumimium/hansen.png', url: 'https://hansensystems.com/' },
  { name: 'Cortizo', logo: '/brands/alumimium/cortizo.png', url: 'https://www.cortizo.com/en' },
  { name: 'Aluprof', logo: '/brands/alumimium/aluprof.png', url: 'https://aluprof.com/en' },
  { name: 'Sisecam', logo: '/brands/glass/sisecam.png', url: 'https://www.sisecam.com/en' },
  { name: 'Saint-Gobain', logo: '/brands/glass/saint-goblin.png', url: 'https://www.saint-gobain.com/' },
  { name: 'Guardian Glass', logo: '/brands/glass/guardian-glass.png', url: 'https://www.guardianglass.com/' },
  { name: 'Press Glass', logo: '/brands/glass/pressglass.png', url: 'https://www.pressglass.com/' },
  { name: 'AGC', logo: '/brands/glass/agc.png', url: 'https://www.agc.com/' },
  { name: 'Veratec', logo: '/brands/veratec.png', url: 'https://www.veratec.com/' },
  { name: 'Aluwood', logo: '/brands/aluwood.png', url: 'https://www.aluwood.com/' },
  { name: 'Forster', logo: '/brands/forester.png', url: 'https://www.forstersystems.ch/' },
  { name: 'ASAS', logo: '/brands/asas.png', url: 'https://www.asasalu.com/' },
  { name: 'Otto Stumm', logo: '/brands/ottostumm.png', url: 'https://ottostumm-mogs.com/en/' },
  { name: 'Aluplast', logo: '/brands/aluplast.png', url: 'https://www.aluplast.com.pl/en' },
  { name: 'Aliplast', logo: '/brands/aliplast.png', url: 'https://www.aliplast.com/en' },
];

export default function HomePage({ onNavigate, onOpenQuote, onSelectProduct }) {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* 1. NEW SWAP HERO SECTION (S - Steel, W - Wood, A - Aluminum, P - PVC in our architectural theme) */}
      <SWAPHeroSection onNavigate={onNavigate} onOpenQuote={onOpenQuote} />
      <ProductMarquee />
      <WelcomeSection />
      <TradePartnershipSection />

      {/* Brand partners */}
      <section className="py-14 md:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Global Manufacturing Partners
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540]">
              Brands We Supply
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light">
              Selected profile and glass manufacturing partners.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {HOME_BRANDS.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-center transition-all hover:-translate-y-1 hover:shadow-md"
                title={`Visit ${brand.name}`}
              >
                <img src={brand.logo} alt={`${brand.name} logo`} className="h-14 w-full object-contain" loading="lazy" />
                <span className="text-xs font-semibold text-[#0A2540]">{brand.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
