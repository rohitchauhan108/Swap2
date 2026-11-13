'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SWAPHeroSection from '@/components/home/SWAPHeroSection';
import ProductMarquee from '@/components/home/ProductMarquee';
import WelcomeSection from '@/components/home/WelcomeSection';

const SWAP_CATEGORIES = [
  {
    letter: 'S',
    title: 'Steel',
    tagline: 'Ultra-slim sightlines & fire-rated structural integrity',
    accent: 'from-slate-800 to-slate-900',
    brands: [
      { name: 'Forster', origin: 'Switzerland', logo: '/brands/forester.png', url: 'https://www.forstersystems.ch/' },
      { name: 'Hansen - Slim as Steel', origin: 'Denmark', logo: '/brands/alumimium/hansen.png', url: 'https://hansensystems.com/' },
    ],
  },
  {
    letter: 'W',
    title: 'Wood',
    tagline: 'Natural warmth paired with precision timber engineering',
    accent: 'from-amber-900 to-stone-900',
    brands: [
      { name: 'Aluwood', origin: 'Europe', logo: '/brands/aluwood.png', url: 'https://www.aluwood.com/' },
    ],
  },
  {
    letter: 'A',
    title: 'Aluminum',
    tagline: 'High-span thermally broken architectural fenestration',
    accent: 'from-[#0A2540] to-slate-900',
    brands: [
      { name: 'Reynaers Aluminium', origin: 'Belgium', logo: '/brands/alumimium/reynoers.png', url: 'https://www.reynaers.com/' },
      { name: 'Aluprof', origin: 'Poland', logo: '/brands/alumimium/aluprof.png', url: 'https://aluprof.com/en' },
      { name: 'Cortizo', origin: 'Spain', logo: '/brands/alumimium/cortizo.png', url: 'https://www.cortizo.com/en' },
      { name: 'Schüco', origin: 'Germany', logo: '/brands/alumimium/schuco.png', url: 'https://www.schueco.com/' },
      { name: 'ASAS', origin: 'Turkey', logo: '/brands/asas.png', url: 'https://www.asasalu.com/' },
      { name: 'Aliplast', origin: 'Belgium', logo: '/brands/aliplast.png', url: 'https://www.aliplast.com/en' },
    ],
  },
  {
    letter: 'P',
    title: 'PVC',
    tagline: 'Multi-chamber acoustic & thermal insulation systems',
    accent: 'from-slate-700 to-[#0A2540]',
    brands: [
      { name: 'Aluplast', origin: 'Germany', logo: '/brands/aluplast.png', url: 'https://www.aluplast.com.pl/en' },
      { name: 'Veratec', origin: 'Europe', logo: '/brands/veratec.png', url: 'https://www.veratec.com/' },
    ],
  },
];

const GLASS_BRANDS = [
  { name: 'Sisecam', logo: '/brands/glass/sisecam.png', url: 'https://www.sisecam.com/en' },
  { name: 'Saint-Gobain', logo: '/brands/glass/saint-goblin.png', url: 'https://www.saint-gobain-glass.com/' },
  { name: 'Guardian Glass', logo: '/brands/glass/guardian-glass.png', url: 'https://www.guardianglass.com/' },
  { name: 'Press Glass', logo: '/brands/glass/pressglass.png', url: 'https://www.pressglass.com/' },
  { name: 'AGC', logo: '/brands/glass/agc.png', url: 'https://www.agc.com/' },
];

const ALL_BRANDS = [...SWAP_CATEGORIES.flatMap((category) => category.brands), ...GLASS_BRANDS];

function BrandLogoCard({ brand, isDuplicate }) {
  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noreferrer"
      title={`Visit ${brand.name}`}
      tabIndex={isDuplicate ? -1 : undefined}
      className="group/card relative flex h-48 w-[calc((100vw-2.5rem)/2)] shrink-0 flex-col justify-between rounded-2xl border border-white/20 bg-white/[0.04] p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#C59A45] hover:shadow-md sm:w-[calc((100vw-5rem)/3)] sm:p-4 md:w-[calc((100vw-6rem)/4)] lg:w-[calc((100vw-7rem)/6)] lg:p-5"
      aria-hidden={isDuplicate || undefined}
    >
      <div className="my-1 flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-2">
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="h-full w-full object-contain transition-transform duration-300 group-hover/card:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-xs font-bold text-white">{brand.name}</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 group-hover/card:border-[#C59A45] group-hover/card:bg-[#C59A45]">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

function BrandLogoMarquee({ brands }) {
  return (
    <div className="overflow-hidden">
      <div className="product-marquee-track flex w-max items-center">
        {[false, true].map((isDuplicate) => (
          <div
            key={isDuplicate ? 'duplicate' : 'original'}
            className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4"
            aria-hidden={isDuplicate || undefined}
          >
            {brands.map((brand) => (
              <BrandLogoCard
                key={brand.name}
                brand={brand}
                isDuplicate={isDuplicate}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <SWAPHeroSection />
      <ProductMarquee />
      <WelcomeSection />

      {/* Architectural SWAP Brands Section - White Background */}
      <section className="relative py-20 md:py-28 bg-white overflow-clip">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0A2540 1px, transparent 1px), linear-gradient(to bottom, #0A2540 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center sm:mb-14">
            <div className="max-w-2xl space-y-3 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2540]/5 border border-[#0A2540]/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59A45]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#0A2540] font-bold">
                  Global Manufacturing Partners
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540] tracking-tight">
                Brands We <span className="text-[#C59A45]">Supply</span>
              </h2>
            </div>
          </div>

          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0A2540] py-8 shadow-xl sm:py-10">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#C59A45]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
            <BrandLogoMarquee brands={ALL_BRANDS} />
          </div>
        </div>
      </section>
    </div>
  );
}