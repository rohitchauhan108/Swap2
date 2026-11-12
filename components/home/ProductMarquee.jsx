'use client';

import React from 'react';

const PRODUCT_DETAILS = [
  'Steel Windows & Doors',
  'Wood Windows & Doors',
  'Aluminum Windows & Architectural Systems',
  'PVC Windows & Doors',
  'Storefronts',
  'Curtain Walls',
  'Office Partitions',
  'Balcony Glazing & Railings',
  'Shower Enclosures',
  'Commercial Entrances',
  'Specialty Sliding Systems',
  'Glass-Only Supply',
];

export default function ProductMarquee() {
  return (
    <section className="overflow-hidden border-y border-[#163659] bg-[#061426] py-5 text-white sm:py-6" aria-label="SWAP products and systems">
      <div className="product-marquee-track flex w-max items-center">
        {[...PRODUCT_DETAILS, ...PRODUCT_DETAILS].map((product, index) => (
          <React.Fragment key={`${product}-${index}`}>
            <span className="whitespace-nowrap px-5 text-lg font-heading font-semibold tracking-wide text-[#F4F5F6] sm:px-8 sm:text-xl">
              {product}
            </span>
            <span className="text-xl text-[#C59A45]" aria-hidden="true">✦</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
