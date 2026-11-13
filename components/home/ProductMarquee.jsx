'use client';

import React from 'react';
import Link from 'next/link';

const PROJECT_CATEGORIES = [
  { id: 'steel', label: 'S (STEEL)' },
  { id: 'wood', label: 'W (WOOD)' },
  { id: 'aluminum', label: 'A (ALUMINUM)' },
  { id: 'pvc', label: 'P (PVC)' },
  { id: 'windows', label: 'WINDOWS' },
  { id: 'curtain-walls', label: 'CURTAIN WALLS' },
  { id: 'doors', label: 'DOORS' },
  { id: 'wall-to-wall', label: 'WALL TO WALL' },
  { id: 'aluprof', label: 'ALUPROF' },
  { id: 'reynaers', label: 'REYNAERS' },
  { id: 'aliplast', label: 'ALIPLAST' },
  { id: 'asas', label: 'ASAS' },
  { id: 'hansen', label: 'HANSEN - SLIM AS STEEL' },
];

export default function ProductMarquee() {
  return (
    <nav className="overflow-hidden border-y border-[#163659] bg-[#061426] py-5 text-white sm:py-6" aria-label="Project categories">
      <div className="product-marquee-track flex w-max items-center">
        {[false, true].map((isDuplicate) => (
          <div
            key={isDuplicate ? 'duplicate' : 'original'}
            className="flex shrink-0 items-center"
            aria-hidden={isDuplicate || undefined}
          >
            {PROJECT_CATEGORIES.map((category) => (
              <React.Fragment key={category.id}>
                <Link
                  href={`/projects?category=${category.id}`}
                  tabIndex={isDuplicate ? -1 : undefined}
                  className="whitespace-nowrap px-5 text-lg font-heading font-semibold tracking-wide text-[#F4F5F6] transition-colors hover:text-[#C59A45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59A45] sm:px-8 sm:text-xl"
                >
                  {category.label}
                </Link>
                <span className="text-xl text-[#C59A45]" aria-hidden="true">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
