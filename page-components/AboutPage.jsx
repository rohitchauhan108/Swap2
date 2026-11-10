'use client';

import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  DoorOpen,
  GlassWater,
  Mail,
  PanelsTopLeft,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

const OFFERINGS = [
  {
    icon: PanelsTopLeft,
    title: 'Windows',
    description:
      'Tilt & turn, outward casement, inward casement, picture windows, sliding windows, hopper windows, and architectural systems.',
  },
  {
    icon: DoorOpen,
    title: 'Doors',
    description:
      'Frameless doors, interior doors, balcony doors, sliding doors, exterior doors, commercial doors, and custom entrances.',
  },
  {
    icon: GlassWater,
    title: 'Specialized Glass Products',
    description:
      'Wall-to-wall windows, curtain wall windows, storefront windows, interior glass partitions, shower glass, and glass-only supply.',
  },
];

const PRODUCT_LINES = [
  {
    title: 'PVC Windows',
    text: 'Energy-efficient, low-maintenance systems designed for long-term performance and a clean modern look.',
  },
  {
    title: 'European Windows',
    text: 'Elegant steel, wood, aluminum, and PVC systems with high insulation, security, and architectural flexibility.',
  },
  {
    title: 'Doors & Glass',
    text: 'Sliding, patio, custom entry, balcony, shower, and specialty glass solutions supplied to project specifications.',
  },
];

export default function AboutPage({ onNavigate, onOpenQuote }) {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="relative overflow-hidden bg-[#07182B] py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-architectural-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6C687]">
              About SWAP Windows Corp.
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              High-end architectural windows, delivered at scale.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              We partner with premium fabricators in Europe and North America to supply high-performance windows, doors, architectural systems, and glass for the trade.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59A45]">
              Built for the window trade
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-[#0A2540] sm:text-4xl">
              One reliable partner for every opening.
            </h2>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              SWAP Windows Corp. supplies steel, wood, aluminum, and PVC systems along with architectural glass packages. We provide frames with glass, frames only, glass only, and related services to glazing contractors, dealers, builders, architects, and general contractors.
            </p>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              From architectural schedules and takeoffs to fabrication coordination and job-site delivery, our team helps keep every project moving with clear communication and dependable support.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['USA Tested', 'European Tested', 'Wholesale Supply'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E6C687]/60 bg-[#FFF9EC] px-4 py-2 text-sm font-semibold text-[#0A2540]"
                >
                  <CheckCircle className="h-4 w-4 text-[#C59A45]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 shadow-sm lg:col-span-4">
            <h3 className="font-heading text-xl font-bold text-[#0A2540]">Talk with our trade desk</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Send your drawings, schedules, or project questions directly to SWAP.
            </p>
            <div className="mt-6 space-y-4 border-t border-slate-200 pt-5 text-sm">
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center gap-3 font-semibold text-[#0A2540] hover:text-[#C59A45]">
                <Phone className="h-4 w-4 text-[#C59A45]" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 font-semibold text-[#0A2540] hover:text-[#C59A45]">
                <Mail className="h-4 w-4 text-[#C59A45]" />
                {COMPANY_INFO.email}
              </a>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0A2540] hover:text-[#C59A45]"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#FAFAFA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59A45]">
              Our expertise and offerings
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#0A2540] sm:text-4xl">
              Precision products for demanding projects.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We work with trusted fabricators to provide products designed for quality, performance, and architectural intent.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {OFFERINGS.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF9EC] text-[#C59A45]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#0A2540]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59A45]">
                Why work with SWAP
              </span>
              <h2 className="font-heading text-3xl font-bold leading-tight text-[#0A2540] sm:text-4xl">
                More than a supplier. A partner who understands the details.
              </h2>
              <p className="text-base leading-8 text-slate-600">
                The right window and door supplier brings together product knowledge, dependable engineering, and service that continues from the first schedule review through delivery. Our solutions combine European craftsmanship with practical project support.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  'Project-specific takeoffs and pricing',
                  'Four material options from one trade partner',
                  'Engineering and fabrication coordination',
                  'Protected crated delivery to the job site',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#C59A45]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0A2540] p-8 text-white sm:p-10">
              <h3 className="font-heading text-2xl font-bold">Explore our premium product line</h3>
              <div className="mt-7 space-y-6">
                {PRODUCT_LINES.map((line, index) => (
                  <div key={line.title} className="border-b border-white/15 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#E6C687]">0{index + 1}</span>
                      <h4 className="font-heading text-lg font-bold">{line.title}</h4>
                    </div>
                    <p className="mt-2 pl-8 text-sm leading-7 text-slate-300">{line.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-8 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <ShieldCheck className="h-8 w-8 text-[#C59A45]" />
            <h2 className="mt-5 font-heading text-2xl font-bold text-[#0A2540]">A commitment you can count on.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Every project deserves dependable support, whether it is a single custom home or a large commercial development. We make the process clearer with responsive communication, accurate recommendations, and practical coordination.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Our goal is simple: help your team choose the right systems, meet the project requirements, and move confidently from design to delivery.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <Truck className="h-8 w-8 text-[#C59A45]" />
            <h2 className="mt-5 font-heading text-2xl font-bold text-[#0A2540]">What our clients value.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Clients return to SWAP for products that improve comfort, performance, and curb appeal, backed by service that respects their schedule. We coordinate protected delivery directly to job sites and help keep the handoff organized.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              That combination of quality, responsiveness, and long-term value is what makes SWAP a trusted partner for the window trade.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#0A2540] py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6C687]">Start your next project</span>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
              See the difference a dedicated trade partner can make.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
              Send us your architectural drawings and schedules for project-specific pricing.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#C59A45] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#D4AF37]"
          >
            Get a quote <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
