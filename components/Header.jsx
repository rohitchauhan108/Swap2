'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { MATERIAL_CATEGORIES } from '@/data/companyData';

export default function Header({ currentRoute, onNavigate, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'projects', label: 'Projects' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar with SWAP Logo Blue Gradient */}
      <div className="bg-gradient-to-r from-[#00132B] via-[#001F43] to-[#0A3366] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-[#143E6D]/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-medium">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs tracking-wider">
            <span className="flex items-center gap-1.5 text-[#E6C687]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E6C687]" />
              USA TESTED · EUROPEAN TESTED
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300 tracking-wider">
              STEEL · WOOD · ALUMINUM · PVC
            </span>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-4'
            : 'bg-white border-b border-slate-100 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
              aria-label="SWAP Windows Corp. Homepage"
            >
              <img
                src="/swap-logo-transparent.png"
                alt="SWAP Windows Corp."
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-lg font-medium text-slate-700">
            {navItems.map((item) => {
              const isActive = currentRoute === item.id;
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('products')}
                      className={`flex items-center gap-1.5 py-2.5 transition-colors whitespace-nowrap shrink-0 ${
                        isActive
                            ? 'text-[#0A2540] font-semibold'
                            : 'text-slate-600 hover:text-[#0A2540]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180 text-[#0A2540]' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Compact product menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 rounded-xl bg-white p-2 shadow-xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                        {MATERIAL_CATEGORIES.map((material) => (
                          <button
                            key={material.id}
                            onClick={() => {
                              setProductsDropdownOpen(false);
                              onNavigate('products', { category: material.id });
                            }}
                            className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0A2540]"
                          >
                            {material.shortName} windows & doors
                          </button>
                        ))}
                        <button
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            onNavigate('products', { category: 'glass' });
                          }}
                          className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0A2540]"
                        >
                          Glass-only supply
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`py-2.5 transition-colors whitespace-nowrap shrink-0 relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0A2540] font-semibold'
                      : 'text-slate-600 hover:text-[#0A2540]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59A45]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-swap-gold-btn rounded-lg shadow-sm whitespace-nowrap shrink-0 flex items-center gap-2 border border-[#D4A143]/50"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-swap-gold-btn rounded-lg whitespace-nowrap"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0A2540] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-white z-40 border-t border-slate-200 overflow-y-auto px-6 py-8 flex flex-col justify-between animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                return (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate(item.id);
                  }}
                  className={`text-left text-lg font-heading py-2 border-b border-slate-100 flex items-center justify-between ${
                    currentRoute === item.id
                      ? 'text-[#0A2540] font-bold'
                      : 'text-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </button>
                );
              })}
            </nav>

            {/* Quick materials list in mobile drawer */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Materials & Systems
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {MATERIAL_CATEGORIES.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('products', { category: m.id });
                    }}
                    className="p-3 text-left bg-slate-50 rounded-lg hover:bg-slate-100 text-slate-800 font-medium"
                  >
                    {m.shortName} Windows
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('products', { category: 'glass' });
                  }}
                  className="col-span-2 p-3 text-left bg-slate-50 rounded-lg hover:bg-slate-100 text-slate-800 font-medium"
                >
                  Glass-Only Supply (Without Frames)
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 mt-8 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white bg-swap-gold-btn rounded-lg shadow border border-[#D4A143]/50"
            >
              Request Project Takeoff
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
