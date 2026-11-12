'use client';

import React from 'react';
import TradePartnershipSection from '@/components/home/TradePartnershipSection';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="relative overflow-hidden bg-[#07182B] py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-100" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            About SWAP Windows Corp.
          </h1>
        </div>
      </section>

      <TradePartnershipSection />
    </div>
  );
}
