'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Building, MapPin, Layers, ShieldCheck, X } from 'lucide-react';
import { PROJECTS_GALLERY, COMPANY_INFO } from '@/data/companyData';

export default function ProjectsPage({ onNavigate, onOpenQuote }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = PROJECTS_GALLERY.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'commercial') return p.type.toLowerCase().includes('commercial');
    if (filter === 'residential') return p.type.toLowerCase().includes('residential');
    return true;
  });

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Editorial Header */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Portfolio & Reference Installations
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#0A2540] tracking-tight">
              Swap Projects & Glazing Studies.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Examine selected architectural installations executed with our wholesale systems across commercial facades, steel fenestration, and custom glass supply.
            </p>
          </div>

          {/* Filter Tabs — Architectural Segmented Dock */}
          <div className="mt-12 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/90 inline-flex flex-wrap items-center gap-1.5 shadow-inner">
            {[
              { id: 'all', label: 'All Installations', count: PROJECTS_GALLERY.length },
              { id: 'commercial', label: 'Commercial & Institutional', count: PROJECTS_GALLERY.filter((p) => p.category === 'commercial').length },
              { id: 'residential', label: 'Luxury Residential', count: PROJECTS_GALLERY.filter((p) => p.category === 'residential').length },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00142E] via-[#002148] to-[#0A3668] text-white shadow-md border border-[#17467B] -translate-y-0.5'
                      : 'text-slate-600 hover:text-[#0A2540] hover:bg-white/80'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium transition-colors ${
                      isActive
                        ? 'bg-[#12365C] text-[#E6C687] border border-[#1E4D80]'
                        : 'bg-slate-200/90 text-slate-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A2540] text-white text-[11px] font-bold px-3 py-1 rounded shadow">
                    {proj.material}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-slate-800 flex items-center gap-1.5 shadow">
                    <MapPin className="w-3 h-3 text-[#C59A45]" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="uppercase tracking-wider font-semibold text-[#C59A45]">
                      {proj.type}
                    </span>
                    <span>{proj.specs.split('·')[0]}</span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#0A2540] group-hover:text-[#C59A45] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800">System:</span>
                      <span>{proj.system}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800">Glass:</span>
                      <span>{proj.glass}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] group-hover:text-[#C59A45] transition-colors flex items-center gap-1">
                      <span>Study System Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
            <div className="relative aspect-[16/9] bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-1">
                <div className="text-xs uppercase font-bold tracking-wider text-[#C59A45]">
                  {selectedProject.type} · {selectedProject.location}
                </div>
                <h3 className="text-3xl font-heading font-bold text-[#0A2540]">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div>
                  <div className="text-slate-400 uppercase font-semibold text-[10px]">Fenestration System</div>
                  <div className="font-bold text-slate-800 mt-0.5">{selectedProject.system}</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase font-semibold text-[10px]">Architectural Glass</div>
                  <div className="font-bold text-slate-800 mt-0.5">{selectedProject.glass}</div>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-slate-200">
                  <div className="text-slate-400 uppercase font-semibold text-[10px]">Project Scope & Specifications</div>
                  <div className="font-bold text-slate-800 mt-0.5">{selectedProject.specs}</div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <div className="text-xs text-slate-500">
                  Have a similar project? SWAP prepares takeoffs directly from your architectural plans.
                </div>
                <button
                  onClick={() => {
                    const name = selectedProject.title;
                    setSelectedProject(null);
                    onOpenQuote(`Inquiry regarding ${name}`);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md border border-[#1A4B82]/50"
                >
                  Request Similar Project Takeoff
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
