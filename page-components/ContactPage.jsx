'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Upload,
  CheckCircle2,
  FileText,
  X,
  ArrowRight,
  ShieldCheck,
  Truck,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

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

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: (f.size / (1024 * 1024)).toFixed(2) + ' MB',
      }));
      setUploadedFiles((prev) => [...prev, ...files]);
    }
  };

  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: 'What format should architectural drawings and schedules be submitted in?',
      a: 'We accept PDF schedules, CAD files (.dwg, .dxf), BIM models, and Excel window takeoff schedules. Our estimating team will review the scope and follow up promptly.',
    },
    {
      q: 'Do you supply glass separately without frames?',
      a: 'Yes. We supply glass separately for storefronts, curtain walls, windows, doors, balconies, and showers manufactured strictly to your project drawings and specifications.',
    },
    {
      q: 'How does job-site delivery work?',
      a: 'Regardless of order size, we coordinate logistics to your exact project schedule and arrange prompt, protected crated delivery directly to the job site nationwide.',
    },
    {
      q: 'Can SWAP assist with installation teams?',
      a: 'SWAP can help locate qualified installation teams, including experienced glazing contractors able to provide the insurance required for your project.',
    },
    {
      q: 'Are your systems tested for US commercial building codes?',
      a: 'Yes. All systems we supply are USA Tested and European Tested to satisfy wind-load, thermal (NFRC/U-factor), air infiltration, and water penetration criteria.',
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Editorial Header with Blueprint Grid */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-24 bg-white border-b border-slate-200 bg-architectural-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Trade Communications & Estimating
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#0A2540] tracking-tight">
              Contact Us & Submit Takeoffs.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Connect directly with our estimating and engineering department. Send your schedules for project-specific pricing across the USA, Canada, and Europe.
            </p>
          </div>
        </div>
      </section>

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
                  <p className="text-xs text-slate-500">
                    A Partnership Built for the Window Trade
                  </p>
                </div>

                <div className="space-y-5 pt-4 border-t border-slate-100 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#C59A45]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        Toll-Free Phone
                      </div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="text-base font-bold text-[#0A2540] hover:text-[#C59A45] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Mon – Fri: 8:00 AM – 6:00 PM EST
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#C59A45]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        Plans & Direct Inquiries
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-base font-bold text-[#0A2540] hover:text-[#C59A45] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Direct delivery for architectural schedules & takeoffs
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C59A45]" />
                    <span>USA Tested · European Tested Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#C59A45]" />
                    <span>Prompt Crated Delivery Directly to Job Sites</span>
                  </div>
                </div>
              </div>

              {/* Reynaers Special Promo with SWAP Logo Blue Gradient */}
              <div className="bg-gradient-to-br from-[#00142E] via-[#00224A] to-[#0D3B73] text-white p-6 rounded-2xl border border-[#17487F]/70 space-y-2 relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#185396]/20 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6C687] relative z-10">
                  Special Pricing Opportunity
                </span>
                <h4 className="text-lg font-heading font-bold text-white relative z-10">
                  Reynaers SL38 Slim-Profile
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed relative z-10">
                  Ask about our special trade discount pricing on Reynaers SL38 systems. Send us your plans today for project-specific pricing.
                </p>
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
                  <p className="text-xs text-slate-500">
                    Send us your architectural drawings and schedules. SWAP will prepare takeoffs, review the scope, and follow up promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-heading font-bold text-slate-900">
                        Inquiry & Takeoff Received
                      </h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. We have logged your takeoff request for{' '}
                        <span className="font-semibold text-slate-800">{formData.company}</span>. Our estimating team will follow up promptly with scope review and trade pricing.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 max-w-md mx-auto text-left text-xs space-y-2">
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-500">Material Interest:</span>
                        <span className="font-semibold text-slate-800">{formData.material}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-500">Project Type:</span>
                        <span className="font-semibold text-slate-800">{formData.projectType}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-500">Drawings Attached:</span>
                        <span className="font-semibold text-slate-800">{uploadedFiles.length} file(s)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Direct Contact:</span>
                        <span className="font-semibold text-[#0A2540]">{COMPANY_INFO.phone}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setUploadedFiles([]);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          projectType: 'Commercial',
                          material: 'Aluminum',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 bg-swap-blue-btn text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow border border-[#1A4B82]/50"
                    >
                      Submit Another Takeoff
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                          placeholder="e.g. 877-212-7927"
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

                    {/* File Upload Zone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Upload Drawings & Schedules (CAD, PDF, Excel)
                      </label>
                      <div className="border-2 border-dashed border-slate-300 rounded-xl p-5 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          title="Upload architectural files"
                        />
                        <Upload className="w-7 h-7 text-slate-400 mx-auto mb-1.5" />
                        <div className="text-xs font-semibold text-slate-700">
                          Click to select or drag and drop your drawings
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Supports PDF architectural sheets, DWG/DXF files, Excel schedules, ZIP
                        </div>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-3 space-y-1.5">
                          {uploadedFiles.map((file, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between text-xs bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <FileText className="w-4 h-4 text-[#0A2540] shrink-0" />
                                <span className="truncate font-semibold text-slate-800">{file.name}</span>
                                <span className="text-slate-400">({file.size})</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-slate-400 hover:text-red-500"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
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
                      <div className="text-xs text-slate-500">
                        Protected trade pricing · Quick takeoff turnaround
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 border border-[#1A4B82]/50"
                      >
                        <span>Submit Project Inquiry</span>
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

      {/* Trade FAQs */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Trade Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0A2540]">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm text-slate-600 font-light">
              Clarifications for glazing contractors and window dealers partnering with SWAP Windows Corp.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#FAFAFA] p-6 rounded-xl border border-slate-200 space-y-2"
              >
                <h4 className="text-base font-heading font-bold text-[#0A2540] flex items-start gap-2">
                  <span className="text-[#C59A45]">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 pl-5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
