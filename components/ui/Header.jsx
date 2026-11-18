'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
export default function Header({ currentRoute, onNavigate, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Swap Partnership' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar with SWAP Logo Blue Gradient */}
      <div className="bg-gradient-to-r from-[#00132B] via-[#001F43] to-[#0A3366] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-[#143E6D]/50">
        <div className="max-w-7xl mx-auto flex justify-end gap-3 font-medium lg:pr-10">
          {/* <div className="flex items-center gap-4 text-[11px] sm:text-xs tracking-wider">
            <span className="flex items-center gap-1.5 text-[#E6C687]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E6C687]" />
              USA TESTED · EUROPEAN TESTED
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300 tracking-wider">
              STEEL · WOOD · ALUMINUM · PVC
            </span>
          </div> */}
          <div className="hidden items-center gap-5 text-[15px] tracking-wide md:flex">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-white transition-colors hover:text-[#E6C687]"
            >
              <Phone className="h-3.5 w-3.5 text-[#E6C687]" aria-hidden="true" />
              {COMPANY_INFO.phone}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 text-white transition-colors hover:text-[#E6C687]"
            >
              <Mail className="h-3.5 w-3.5 text-[#E6C687]" aria-hidden="true" />
              {COMPANY_INFO.email}
            </a>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {/* Brand Logo */}
          <div className="flex items-center shrink-0 lg:col-start-2 lg:row-start-1">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
              aria-label="SWAP Windows Corp. Homepage"
            >
              <img
                src="/new-logo.webp"
                alt="SWAP Windows Corp."
                className=" md:w-[350px] w-[200px]   transition-transform group-hover:scale-[1.02]"
              />
            </button>
          </div>

          {/* Primary Navigation (Desktop) */}
          <nav className="hidden lg:flex lg:col-start-1 lg:row-start-1 items-center justify-self-start gap-6 text-base font-medium text-slate-700">
            {navItems.slice(0, 3).map((item) => {
              const isActive = currentRoute === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
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

          {/* Secondary Navigation and Primary Action (Desktop) */}
          <div className="hidden lg:flex lg:col-start-3 lg:row-start-1 items-center justify-self-end gap-5 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              aria-current={currentRoute === 'contact' ? 'page' : undefined}
              className={`relative py-2.5 text-base font-medium transition-colors whitespace-nowrap ${
                currentRoute === 'contact'
                  ? 'text-[#0A2540] font-semibold'
                  : 'text-slate-600 hover:text-[#0A2540]'
              }`}
            >
              Contact
              {currentRoute === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59A45]" />
              )}
            </button>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-swap-gold-btn rounded-lg shadow-sm whitespace-nowrap shrink-0 flex items-center gap-2 border border-[#D4A143]/50"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden col-start-2 row-start-1 items-center justify-self-end gap-3">
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
        <div className="lg:hidden fixed inset-x-0 top-[120px] bottom-0 bg-white z-40 border-t border-slate-200 overflow-y-auto px-6 py-8 flex flex-col justify-between animate-in slide-in-from-top-4 duration-200">
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
                    aria-current={currentRoute === item.id ? 'page' : undefined}
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

          </div>

          <div className="pt-8 border-t border-slate-200 mt-8 space-y-4">
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center gap-3 text-sm font-medium text-[#0A2540]"
              >
                <Phone className="h-4 w-4 text-[#C59A45]" aria-hidden="true" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-sm font-medium text-[#0A2540]"
              >
                <Mail className="h-4 w-4 text-[#C59A45]" aria-hidden="true" />
                {COMPANY_INFO.email}
              </a>
            </div>
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
