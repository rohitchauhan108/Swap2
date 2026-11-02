'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Maximize2,
  Sparkles,
  Layers,
  Compass,
  Sliders,
  Eye
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
const materialsAluminumCurtainwall = "/images/materials_aluminum_curtainwall_1793359235401.jpg";
const materialsSteelMinimal = "/images/materials_steel_minimal_1793359234398.jpg";
const materialsWoodGlazing = "/images/materials_wood_glazing_1793359235420.jpg";
const heroArchitecturalFacade = "/images/hero_architectural_facade_1793359234348.jpg";

const HERO_MATERIALS = {
  aluminum: {
    id: 'aluminum',
    label: 'ALUMINUM',
    title: 'Reynaers SL38 Slim-Profile System',
    category: 'Architectural Aluminum Fenestration',
    description: 'Ultra-slim 38mm visible sightline with steel-look aesthetics and superior multi-chamber thermal breaks.',
    image: materialsAluminumCurtainwall,
    frameColor: '#1e242b',
    borderHue: 'border-slate-700/80',
    accentColor: '#C59A45',
    specs: {
      profile: '38 mm Slim Sightline',
      thermal: 'U-Value 1.1 W/m²K',
      glazing: 'Triple Glazed Low-E',
      standard: 'USA & EU Tested',
    },
    badge: 'Special Trade Pricing on SL38',
  },
  steel: {
    id: 'steel',
    label: 'STEEL',
    title: 'Forster Swiss Steel Windows & Doors',
    category: 'Monumental Steel Fenestration',
    description: 'Slender Swiss steel mullions delivering monumental structural load capacity and historic French divided-lites.',
    image: materialsSteelMinimal,
    frameColor: '#12151a',
    borderHue: 'border-slate-800',
    accentColor: '#E6C687',
    specs: {
      profile: '25 mm Slender Mullions',
      thermal: 'Thermally Broken Swiss Steel',
      glazing: 'Acoustic Laminated IGU',
      standard: 'High Wind-Load Rated',
    },
    badge: 'Authentic Swiss Precision',
  },
  wood: {
    id: 'wood',
    label: 'WOOD',
    title: 'Laminated European White Oak System',
    category: 'Engineered Timber Fenestration',
    description: 'Engineered 4-layer solid laminated timber providing master European joinery, acoustic warmth, and heritage luxury.',
    image: materialsWoodGlazing,
    frameColor: '#6e4b2d',
    borderHue: 'border-amber-900/60',
    accentColor: '#D4AF37',
    specs: {
      profile: '4-Layer Solid White Oak',
      thermal: 'Passive House Standard',
      glazing: 'Triple Low-E Krypton',
      standard: 'Natural Acoustic Damping',
    },
    badge: 'European Timber Heritage',
  },
  pvc: {
    id: 'pvc',
    label: 'PVC',
    title: 'Multi-Chamber uPVC Performance Windows',
    category: 'High-Efficiency Multi-Chamber uPVC',
    description: 'Engineered multi-chamber chambers reinforced with galvanized steel inserts for maximum thermal retention.',
    image: heroArchitecturalFacade,
    frameColor: '#282d37',
    borderHue: 'border-slate-700',
    accentColor: '#C59A45',
    specs: {
      profile: '6-Chamber Internal Core',
      thermal: 'U-Value down to 0.76 W/m²K',
      glazing: 'Double / Triple Compatible',
      standard: 'Galvanized Core Reinforcement',
    },
    badge: 'High Value-to-Performance',
  },
};

export default function HeroSection({ onNavigate, onOpenQuote }) {
  const [selectedMaterialKey, setSelectedMaterialKey] = useState('aluminum');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const stageRef = useRef(null);

  const activeMaterial = HERO_MATERIALS[selectedMaterialKey] || HERO_MATERIALS.aluminum;

  // Mouse Parallax & 3D Tilt calculation
  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalizing between -1 and 1
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;

    setMousePos({
      x: normalizedX,
      y: normalizedY,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // 3D rotation angles
  const rotateX = isHovered ? -mousePos.y * 7 : 0;
  const rotateY = isHovered ? mousePos.x * 9 : 0;
  const glintTranslateX = isHovered ? -mousePos.x * 60 : 0;
  const glintTranslateY = isHovered ? -mousePos.y * 60 : 0;

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-20 overflow-hidden bg-white border-b border-slate-200">
      {/* Background Architectural Grid Lines (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, #001F43 1px, transparent 1px), linear-gradient(to bottom, #001F43 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* TOP ASYMMETRICAL 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* LEFT SIDE: Typography & Editorial Pitch */}
          <div className="lg:col-span-5 space-y-6 lg:pr-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#C59A45]">
              <span className="w-6 h-[2px] bg-[#C59A45]"></span>
              <span>Architectural Windows & Glazing Systems</span>
            </div>

            {/* Syne Editorial Heading with Creative Line Breaks */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-heading font-extrabold text-[#001F43] tracking-tight leading-[1.04]">
              More Than <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001F43] via-[#0A3668] to-[#184E8E]">
                Windows.
              </span> <br />
              A Better Way <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A6A1E] via-[#C59A45] to-[#E5BA60]">
                To Frame Life.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-xl">
              SWAP Windows Corp. provides wholesale windows, doors, architectural aluminum systems, and glass supply for commercial and residential projects. We deliver project-specific takeoffs, precision engineering, and job-site delivery directly to glazing contractors and window dealers nationwide.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="px-8 py-4 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md flex items-center justify-center gap-3 group border border-[#1A4B82]/50 hover:shadow-xl transition-all"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-[#E6C687] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-swap-gold-btn text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md flex items-center justify-center gap-2 group border border-[#D4A143]/40 hover:shadow-xl transition-all"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex items-center gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#C59A45]" />
                <span className="font-semibold">USA & European Tested</span>
              </div>
              <span className="text-slate-300">·</span>
              <span>Project Takeoffs Directly from Drawings</span>
            </div>
          </div>

          {/* RIGHT SIDE: Large 3D Realistic Architectural Window Stage */}
          <div className="lg:col-span-7 relative">
            {/* Interactive Material Floating Pills Switcher (Top of Stage) */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Interactive Material Preview
              </span>
              <div className="flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-lg border border-slate-200 backdrop-blur-sm shadow-inner">
                {Object.keys(HERO_MATERIALS).map((key) => {
                  const m = HERO_MATERIALS[key];
                  const isActive = selectedMaterialKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedMaterialKey(key)}
                      className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all ${
                        isActive
                          ? 'bg-[#001F43] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                      }`}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3D Window Viewport Canvas */}
            <div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-2 sm:p-3 shadow-2xl overflow-hidden cursor-crosshair border border-slate-300/60"
              style={{
                perspective: '1200px',
              }}
            >
              {/* Background Architectural Scene / Photography */}
              <div
                className="relative w-full h-full rounded-xl overflow-hidden transition-all duration-700"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
                  transformStyle: 'preserve-3d',
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Architectural Room & Nature View through Glass */}
                <img
                  src={activeMaterial.image}
                  alt={activeMaterial.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                {/* Simulated Realistic Glass Specular Highlight / Reflection Glint */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-45 mix-blend-overlay transition-transform duration-150"
                  style={{
                    background:
                      'linear-gradient(115deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 30%, transparent 60%, rgba(255,255,255,0.25) 100%)',
                    transform: `translate(${glintTranslateX}px, ${glintTranslateY}px)`,
                  }}
                />

                {/* 3D Realistic Window Mullion Frame Overlay */}
                <div className="absolute inset-0 pointer-events-none border-[12px] sm:border-[16px] border-[#0F172A]/90 shadow-[inset_0_2px_12px_rgba(0,0,0,0.6)] flex items-stretch">
                  {/* Vertical Center Mullion */}
                  <div className="w-[10px] sm:w-[14px] bg-[#0F172A] mx-auto h-full shadow-[0_0_8px_rgba(0,0,0,0.6)] relative">
                    {/* Metal Sheen Highlight on Mullion */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/20" />
                    <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-black/40" />
                  </div>
                </div>

                {/* Floating Architectural Annotation: Top Right */}
                <div
                  className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-lg shadow-xl border border-slate-200/90 max-w-[210px] pointer-events-none transition-transform duration-300"
                  style={{
                    transform: `translateZ(40px)`,
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#C59A45] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#001F43]">
                      Precision Engineering
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 line-clamp-1">
                    {activeMaterial.title}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {activeMaterial.specs.profile} · {activeMaterial.specs.thermal}
                  </div>
                </div>

                {/* Floating Architectural Annotation: Center Left */}
                <div
                  className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-xl border border-slate-200/90 pointer-events-none transition-transform duration-300"
                  style={{
                    transform: `translateZ(50px)`,
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#184E8E]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#001F43]">
                      Architectural Excellence
                    </span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-700">
                    USA & European Tested
                  </div>
                </div>

                {/* Floating Architectural Annotation: Bottom Left */}
                <div
                  className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-[#00142E]/90 backdrop-blur-md text-white p-3.5 rounded-xl shadow-2xl border border-[#143B66] max-w-[260px] pointer-events-none transition-transform duration-300"
                  style={{
                    transform: `translateZ(45px)`,
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E6C687]">
                      {activeMaterial.label} SPECIFICATION
                    </span>
                    <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-slate-300 font-mono">
                      SWAP-3D
                    </span>
                  </div>
                  <div className="text-xs font-heading font-bold text-white line-clamp-1">
                    {activeMaterial.category}
                  </div>
                  <div className="text-[10px] text-slate-300 mt-1 flex items-center justify-between">
                    <span>{activeMaterial.specs.glazing}</span>
                    <span className="text-[#C59A45] font-semibold">{activeMaterial.specs.standard}</span>
                  </div>
                </div>

                {/* Top Badge (Special highlight) */}
                {activeMaterial.badge && (
                  <div className="absolute top-5 left-5 bg-gradient-to-r from-[#00142E] to-[#0A3668] text-[#E6C687] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow border border-[#143B66]/80">
                    {activeMaterial.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Mouse movement guidance hint */}
            <div className="flex items-center justify-between mt-2 px-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3 h-3 text-[#C59A45]" />
                Move cursor over window stage for 3D perspective and dynamic glass reflection
              </span>
              <button
                onClick={() => onNavigate('products', { category: activeMaterial.id })}
                className="font-bold text-[#001F43] hover:text-[#C59A45] transition-colors flex items-center gap-1"
              >
                <span>View Full {activeMaterial.label} Specs</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* 7. BOTTOM ARCHITECTURAL MATERIAL STRIP */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Four Core Material Families:
            </div>

            {/* Architectural Material Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 flex-1 max-w-3xl">
              {Object.keys(HERO_MATERIALS).map((key) => {
                const item = HERO_MATERIALS[key];
                const isCurrent = selectedMaterialKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedMaterialKey(key)}
                    className={`group text-left p-3 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-white border-[#001F43] shadow-md ring-1 ring-[#001F43]/10'
                        : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-heading font-extrabold tracking-wider ${
                          isCurrent ? 'text-[#001F43]' : 'text-slate-700 group-hover:text-slate-900'
                        }`}
                      >
                        {item.label}
                      </span>
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59A45]" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">
                      {item.specs.profile}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="shrink-0 text-right">
              <button
                onClick={() => onNavigate('products')}
                className="text-xs font-bold uppercase tracking-wider text-[#001F43] hover:text-[#C59A45] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Complete Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
