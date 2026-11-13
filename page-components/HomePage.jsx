'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Layers, ShieldCheck } from 'lucide-react';
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
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  const visibleCategories =
    activeFilter === 'ALL'
      ? SWAP_CATEGORIES
      : SWAP_CATEGORIES.filter((cat) => cat.letter === activeFilter);

  useEffect(() => {
    let rafId;

    const updateCardTransforms = () => {
      const isDesktop = window.innerWidth >= 1024;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const overlay = overlayRefs.current[index];

        if (!isDesktop || index === visibleCategories.length - 1) {
          card.style.transform = 'scale(1) translate3d(0, 0, 0)';
          if (overlay) overlay.style.opacity = '0';
          return;
        }

        const nextCard = cardRefs.current[index + 1];
        if (!nextCard) return;

        const cardRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        const distance = nextRect.top - cardRect.top;
        const maxRange = cardRect.height;

        const rawProgress = 1 - Math.max(0, Math.min(distance / maxRange, 1));
        const easedProgress = 1 - Math.pow(1 - rawProgress, 2);

        const targetScale = 1 - easedProgress * 0.045;
        const targetTranslateY = -easedProgress * 10;

        card.style.transform = `translate3d(0, ${targetTranslateY}px, 0) scale(${targetScale})`;

        if (overlay) {
          overlay.style.opacity = `${easedProgress * 0.14}`;
        }
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCardTransforms);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateCardTransforms();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [visibleCategories.length, activeFilter]);

  return (
    <div className="w-full bg-[#FAFAFA]">
      <SWAPHeroSection />
      <ProductMarquee />
      <WelcomeSection />

      {/* Architectural SWAP Brands Section */}
      <section className="relative py-20 md:py-28 bg-[#FAFAFA] overflow-clip">
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

          <div className="space-y-8 lg:space-y-12 mb-28 lg:pb-[calc(100vh-12rem)]">
            {visibleCategories.map((category, index) => (
              <div
                key={category.letter}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="group/row rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(10,37,64,0.08)] hover:border-[#C59A45]/50 sticky origin-top will-change-transform transform-gpu transition-[border-color,box-shadow] duration-300"
                style={{
                  top: `calc(6.5rem + ${index * 1.5}rem)`,
                  zIndex: index + 10,
                }}
              >
                <div
                  ref={(el) => {
                    overlayRefs.current[index] = el;
                  }}
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-[#0A2540] opacity-0 transition-opacity duration-75 z-20"
                />

                <span className="absolute top-3 left-3 h-2 w-2 border-t-2 border-l-2 border-[#C59A45]/40" />
                <span className="absolute top-3 right-3 h-2 w-2 border-t-2 border-r-2 border-[#C59A45]/40" />
                <span className="absolute bottom-3 left-3 h-2 w-2 border-b-2 border-l-2 border-[#C59A45]/40" />
                <span className="absolute bottom-3 right-3 h-2 w-2 border-b-2 border-r-2 border-[#C59A45]/40" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-8">
                    <div className="flex items-baseline gap-4">
                      <span className="font-heading text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#C59A45] leading-none select-none">
                        {category.letter}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A2540]">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#0A2540]/70">
                      <Layers className="w-3.5 h-3.5 text-[#C59A45]" />
                      <span>
                        {category.brands.length}{' '}
                        {category.brands.length === 1 ? 'Certified Partner' : 'Certified Partners'}
                      </span>
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
                          className="group/card relative flex flex-col justify-between rounded-2xl border border-slate-300 bg-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C59A45] hover:shadow-md"
                        >
                          <div className="flex h-14 w-full items-center justify-center my-1">
                            <img
                              src={brand.logo}
                              alt={`${brand.name} logo`}
                              className="max-h-11 max-w-[150px] object-contain grayscale-[35%] transition-all duration-300 group-hover/card:grayscale-0 group-hover/card:scale-105"
                              loading="lazy"
                            />
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                            <span className="text-xs font-bold text-[#0A2540] group-hover/card:text-[#C59A45] transition-colors">
                              {brand.name}
                            </span>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 transition-all duration-200 group-hover/card:border-[#C59A45] group-hover/card:bg-[#C59A45] group-hover/card:text-white">
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

          <div className="relative z-0 rounded-3xl bg-[#0A2540] p-8 sm:p-12 overflow-hidden shadow-xl">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#C59A45]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-[#C59A45] text-xs font-bold uppercase tracking-[0.25em] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Glazing & Facade Partners</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Architectural Glass Systems
                </h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md">
                High-performance solar control, acoustic, and structural glazing engineered to pair seamlessly with every S·W·A·P profile.
              </p>
            </div>

            <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {GLASS_BRANDS.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noreferrer"
                  title={`Visit ${brand.name}`}
                  className="group flex flex-col items-center justify-between rounded-2xl bg-white/[0.04] backdrop-blur-xs border border-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-[#C59A45]"
                >
                  <div className="flex h-14 w-full items-center justify-center rounded-xl bg-white/95 p-2.5 shadow-xs">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-10 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-white group-hover:text-[#0A2540] transition-colors">
                      {brand.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C59A45] opacity-70 group-hover:opacity-100" />
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