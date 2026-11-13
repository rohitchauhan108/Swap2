'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
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

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const visibleCategories =
    activeFilter === 'ALL'
      ? SWAP_CATEGORIES
      : SWAP_CATEGORIES.filter((cat) => cat.letter === activeFilter);

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center justify-center gap-6 mb-16 pb-8 border-b border-slate-200">
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

          <div className="space-y-8 mb-20">
            {visibleCategories.map((category) => (
              <div
                key={category.letter}
                className="group/row rounded-3xl bg-[#0A2540] border border-slate-200/90 p-6 sm:p-8 lg:p-10 transition-[border-color,box-shadow] duration-300 hover:border-[#C59A45]/50 shadow-xl text-white"
              >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  <div className="lg:col-span-4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/50 pb-6 lg:pb-0 lg:pr-8">
                    <div className="flex items-baseline gap-4">
                      <span className="font-heading text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-[#ebb760] leading-none select-none">
                        {category.letter}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div
                      className={`grid gap-4 ${
                        category.brands.length === 1
                          ? 'grid-cols-1 sm:grid-cols-2'
                          : category.brands.length <= 3
                          ? 'grid-cols-1 sm:grid-cols-3'
                          : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                      }`}
                    >
                      {category.brands.map((brand) => (
                        <a
                          key={brand.name}
                          href={brand.url}
                          target="_blank"
                          rel="noreferrer"
                          title={`Visit ${brand.name}`}
                          className="group/card relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C59A45] hover:shadow-md"
                        >
                          <div className="flex h-14 w-full items-center justify-center my-1 bg-white rounded-xl p-2.5">
                            <img
                              src={brand.logo}
                              alt={`${brand.name} logo`}
                              className="max-h-10 max-w-[150px] object-contain transition-transform duration-300 group-hover/card:scale-105"
                              loading="lazy"
                            />
                          </div>

                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                            <span className="text-xs font-bold text-white transition-colors">
                              {brand.name}
                            </span>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white group-hover/card:border-[#C59A45] group-hover/card:bg-[#C59A45] group-hover/card:text-white transition-all duration-200">
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-0 rounded-3xl bg-[#0A2540] p-8 sm:p-12 overflow-hidden shadow-xl text-white">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#C59A45]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Architectural Glass Systems
                </h3>
              </div>
            </div>

            <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {GLASS_BRANDS.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noreferrer"
                  title={`Visit ${brand.name}`}
                  className="group/card flex flex-col items-center justify-between rounded-2xl bg-white/[0.04] backdrop-blur-xs border border-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C59A45] hover:shadow-md"
                >
                  <div className="flex h-14 w-full items-center justify-center rounded-xl bg-white/95 p-2.5 shadow-xs">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-10 w-full object-contain transition-transform duration-300 group-hover/card:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-white">
                      {brand.name}
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white transition-all duration-200 group-hover/card:border-[#C59A45] group-hover/card:bg-[#C59A45] group-hover/card:text-white">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}