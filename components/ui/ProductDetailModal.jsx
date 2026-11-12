'use client';

import React from 'react';
import { X, ArrowRight, ShieldCheck, Check, Layers, Sparkles, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export default function ProductDetailModal({ product, isOpen, onClose, onOpenQuote }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header Bar with SWAP Logo Gradient */}
        <div className="bg-gradient-to-r from-[#00132B] via-[#001F43] to-[#0B3566] text-white p-6 sm:p-8 flex items-start justify-between relative border-b border-[#143B66]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E6C687] uppercase tracking-wider mb-1">
              <span>{product.material}</span>
              <span>·</span>
              <span>{product.systemType}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              {product.name}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-lg">
              {product.tagline}
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

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Visual */}
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#0A2540] text-[#E6C687] text-xs font-semibold px-3 py-1 rounded shadow">
                {product.badge}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              System Overview & Architecture
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              System Characteristics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded border border-slate-100">
                  <Check className="w-4 h-4 text-[#C59A45] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          {product.specs && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0A2540]/5 p-4 rounded-lg border border-slate-200">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key}>
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                    <div className="text-xs font-semibold text-slate-900 mt-0.5">
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Availability Notice from PDF */}
          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">Important Trade Availability Notice:</span>
              <span>{product.availabilityNote || "Product availability is determined by the selected system and project requirements."}</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Have plans for this system? Call <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-semibold text-slate-900">{COMPANY_INFO.phone}</a> or send your schedules.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(product.name);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow border border-[#1A4B82]/50"
            >
              <span>Request System Takeoff</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6C687]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
