'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import PageHero from '@/components/ui/PageHero';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial',
    material: 'Aluminum',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [errors, setErrors] = useState({});
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Valid phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || !validate()) return;

    const publicKey = "rWWHLzNsyDThId7TW";
    if (!publicKey) {
      console.error('EmailJS is not configured: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is missing.');
      setSubmissionError('The contact form is temporarily unavailable. Please contact us directly by email or phone.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError('');

    try {
      await emailjs.send(
        'service_dp4k7xw',
        'template_lxzbun6',
        {
          ...formData,
          project_type: formData.projectType,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
        },
        publicKey
      );
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error);
      setSubmissionError('We could not send your inquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA]">
      <PageHero
        eyebrow="Trade Communications & Estimating"
        title="Contact Us & Submit Takeoffs."
        align="center"
      />

      {/* Main Contact & Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Official Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C59A45]">
                    Official Headquarters
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#0A2540]">
                    SWAP Windows Corp.
                  </h3>
                  <p className="text-sm text-slate-500">
                    A Partnership Built for the Window Trade
                  </p>
                </div>

                <div className="space-y-5 pt-4 border-t border-slate-100 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#C59A45]" />
                    </div>
                    <div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="text-base font-bold text-[#0A2540] hover:text-[#C59A45] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#C59A45]" />
                    </div>
                    <div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-base font-bold text-[#0A2540] hover:text-[#C59A45] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Right: Takeoff & Quote Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
                <div className="space-y-1 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C59A45]">
                    Estimating Form
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#0A2540]">
                    Submit Drawings for Project-Specific Pricing
                  </h3>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <p className="text-base text-slate-600">
                      <span className="text-2xl text-[#0A2540] font-bold">Thank you for contacting us! </span><br /> We’ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {submissionError && (
                      <p role="alert" className="text-sm text-red-600">
                        {submissionError}
                      </p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. David Richardson"
                          className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                            errors.name ? 'border-red-500' : 'border-slate-300'
                          } focus:outline-none focus:border-[#0A2540]`}
                        />
                        {errors.name && <p className="text-[11px] text-red-500 mt-0.5">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Modern Glass & Mirror LLC"
                          className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                            errors.company ? 'border-red-500' : 'border-slate-300'
                          } focus:outline-none focus:border-[#0A2540]`}
                        />
                        {errors.company && <p className="text-[11px] text-red-500 mt-0.5">{errors.company}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="david@modernglass.com"
                          className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                            errors.email ? 'border-red-500' : 'border-slate-300'
                          } focus:outline-none focus:border-[#0A2540]`}
                        />
                        {errors.email && <p className="text-[11px] text-red-500 mt-0.5">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g.  877 212 Swap (7927)"
                          className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                            errors.phone ? 'border-red-500' : 'border-slate-300'
                          } focus:outline-none focus:border-[#0A2540]`}
                        />
                        {errors.phone && <p className="text-[11px] text-red-500 mt-0.5">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Material Discipline
                        </label>
                        <select
                          value={formData.material}
                          onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#0A2540] bg-white"
                        >
                          <option value="Aluminum">Aluminum Windows & Systems</option>
                          <option value="Steel">Steel Windows & Doors (Forster/Swiss)</option>
                          <option value="Wood">Wood Windows & Doors (Engineered Timber)</option>
                          <option value="PVC">PVC Windows & Doors (Multi-Chamber)</option>
                          <option value="Glass-Only">Glass-Only Supply (Without Frames)</option>
                          <option value="Full Glazing Package">Full Architectural Glazing Package</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Project Typology
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#0A2540] bg-white"
                        >
                          <option value="Commercial">Commercial / Mixed-Use</option>
                          <option value="Multi-Family">Multi-Family Residential</option>
                          <option value="Luxury Residential">Custom Luxury Residential</option>
                          <option value="Storefront / Retail">Retail Storefront & Entrance</option>
                          <option value="Institutional">Hospitality / Institutional</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Scope Notes & Specifications
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail target U-values, glass types, profile series (e.g. Reynaers SL38 discount pricing inquiry), job-site location, and delivery schedule..."
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                      />
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 border border-[#1A4B82]/50"
                      >
                        <span>{isSubmitting ? 'Sending Inquiry...' : 'Submit Project Inquiry'}</span>
                        <ArrowRight className="w-4 h-4 text-[#E6C687]" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
