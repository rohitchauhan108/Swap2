import React from 'react';

export default function PageHero({ eyebrow, title, description, align = 'left' }) {
  const isCentered = align === 'center';

  return (
    <section className="relative overflow-hidden bg-[#07182B] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-100" />
      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-8 ${
          isCentered ? 'text-center' : 'text-left'
        }`}
      >
        {eyebrow && (
          <div
            className={`mb-4 flex text-[#E6C687] ${
              isCentered ? 'justify-center text-center' : 'justify-start'
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em]">
              {eyebrow}
            </p>
          </div>
        )}
        <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p
            className={`mt-5 text-base leading-relaxed text-slate-200 sm:text-lg ${
              isCentered ? 'mx-auto max-w-4xl' : 'max-w-2xl'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
