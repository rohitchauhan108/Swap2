'use client';

import React, { useState } from 'react';
import { X, Upload, CheckCircle2, FileText, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO, MATERIAL_CATEGORIES } from '@/data/companyData';

export default function QuoteModal({ isOpen, onClose, initialSystem = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial',
    material: 'Aluminum',
    systemInterest: initialSystem || 'Reynaers SL38 Slim-Profile System',
    message: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

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

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: 'Commercial',
      material: 'Aluminum',
      systemInterest: '',
      message: '',
    });
    setUploadedFiles([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header with SWAP Logo Gradient */}
        <div className="bg-gradient-to-r from-[#00132B] via-[#001F43] to-[#0B3566] text-white p-6 sm:p-8 flex items-start justify-between relative border-b border-[#143B66]">
          <div className="space-y-1 max-w-lg">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E6C687]">
              Wholesale Estimating & Takeoff Services
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Request Project Takeoff & Pricing
            </h3>
            <p className="text-xs text-slate-300">
              Send your architectural drawings and schedules. SWAP reviews the scope and follows up promptly with wholesale pricing.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-heading font-bold text-slate-900">
                  Takeoff Request Received
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span> from{' '}
                  <span className="font-semibold text-slate-800">{formData.company}</span>. Our estimating team has logged your scope and will review your project drawings.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Selected Material:</span>
                  <span className="font-semibold text-slate-800">{formData.material}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Project Type:</span>
                  <span className="font-semibold text-slate-800">{formData.projectType}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Attached Drawings:</span>
                  <span className="font-semibold text-slate-800">{uploadedFiles.length} file(s) attached</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Direct Inquiries:</span>
                  <span className="font-semibold text-[#0A2540]">{COMPANY_INFO.phone}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-swap-blue-btn text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow border border-[#1A4B82]/50"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Michael Miller"
                    className={`w-full px-3.5 py-2 text-sm rounded border ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    } focus:outline-none focus:border-[#0A2540]`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-0.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Company Name (Glazing / Dealer) *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Glazing Contractors"
                    className={`w-full px-3.5 py-2 text-sm rounded border ${
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
                    placeholder="michael@apexglazing.com"
                    className={`w-full px-3.5 py-2 text-sm rounded border ${
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
                    placeholder="e.g. 555-019-2831"
                    className={`w-full px-3.5 py-2 text-sm rounded border ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    } focus:outline-none focus:border-[#0A2540]`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Primary Material / Scope
                  </label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#0A2540] bg-white"
                  >
                    <option value="Aluminum">Aluminum Windows & Architectural Systems</option>
                    <option value="Steel">Steel Windows & Doors (Forster/Swiss)</option>
                    <option value="Wood">Wood Windows & Doors (Engineered Timber)</option>
                    <option value="PVC">PVC Windows & Doors (Multi-Chamber)</option>
                    <option value="Glass-Only">Glass-Only Supply (Without Frames)</option>
                    <option value="Full Package">Complete Architectural Glazing Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Project Typology
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#0A2540] bg-white"
                  >
                    <option value="Commercial">Commercial / Mixed-Use</option>
                    <option value="Multi-Family">Multi-Family Residential</option>
                    <option value="Luxury Residential">Custom Luxury Residential</option>
                    <option value="Storefront / Retail">Retail Storefront & Entrance</option>
                    <option value="Institutional">Hospitality / Civic / Institutional</option>
                  </select>
                </div>
              </div>

              {/* Upload CAD / Drawings simulator */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Upload Architectural Drawings / Window Schedules
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    title="Upload drawings"
                  />
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <div className="text-xs font-medium text-slate-700">
                    Drag and drop your PDF, CAD (.dwg), or Excel schedules here, or browse
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Accepted: PDF, DWG, DXF, XLSX, ZIP (Up to 50MB)
                  </div>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-3 space-y-1.5">
                    {uploadedFiles.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs bg-slate-50 border border-slate-200 px-3 py-1.5 rounded"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-3.5 h-3.5 text-[#0A2540] shrink-0" />
                          <span className="truncate font-medium text-slate-700">{f.name}</span>
                          <span className="text-[11px] text-slate-400">({f.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-slate-400 hover:text-red-500 ml-2"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Scope Details / Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention target U-values, glass types, profile series (e.g. Reynaers SL38 discount pricing inquiry), job-site location, and delivery schedule..."
                  className="w-full px-3.5 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#C59A45]" />
                  <span>Confidential trade pricing · Rapid takeoff turnaround</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow border border-[#1A4B82]/50"
                >
                  <span>Submit Takeoff Request</span>
                  <ArrowRight className="w-4 h-4 text-[#E6C687]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
