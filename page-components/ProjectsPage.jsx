'use client';

import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const imageGroups = [
  {
    folder: 'aluminimum',
    label: 'Aluminum collection',
    tabs: ['aluminum', 'aluprof', 'reynaers', 'aliplast'],
    files: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg'],
  },
  {
    folder: 'windows',
    label: 'Window collection',
    tabs: ['windows', 'aluminum', 'reynaers'],
    files: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpeg', '12.jpeg'],
  },
  {
    folder: 'doors',
    label: 'Door collection',
    tabs: ['doors', 'aluminum'],
    files: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpeg', '8.jpg'],
  },
  {
    folder: 'alurof',
    label: 'Aluprof collection',
    tabs: ['aluprof', 'aluminum', 'windows', 'doors'],
    files: ['1.jpeg', '1.jpg', '2.jpeg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  },
  {
    folder: 'curtain-walls',
    label: 'Curtain wall collection',
    tabs: ['curtain-walls', 'aluminum'],
    files: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpeg'],
  },
  {
    folder: 'hansen-slim-as-steel',
    label: 'Hansen Slim AS Steel',
    tabs: ['hansen', 'steel', 'doors', 'windows'],
    files: ['1.jpg', '2.jpg', '3.jpeg'],
  },
  {
    folder: 'wall-to-wall',
    label: 'Wall to wall collection',
    tabs: ['wall-to-wall', 'wood', 'windows'],
    files: ['1.jpg', '2.jpg', '3.jpeg'],
  },
  {
    folder: 'alipast',
    label: 'Aliplast collection',
    tabs: ['aliplast', 'aluminum', 'windows'],
    files: ['1.jpg', '2.jpg'],
  },
  {
    folder: 'asas',
    label: 'ASAS collection',
    tabs: ['asas', 'aluminum', 'windows'],
    files: ['1.jpg', '2.jpeg'],
  },
  {
    folder: 'pvc',
    label: 'PVC collection',
    tabs: ['pvc', 'windows'],
    files: ['1.jpg'],
  },
];

const tabs = [
  { id: 'all', label: 'ALL PROJECTS' },
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

const gallery = imageGroups.flatMap((group) =>
  group.files.map((file, index) => ({
    id: `${group.folder}-${file}`,
    src: `/projects/${group.folder}/${file}`,
    title: `${group.label} ${String(index + 1).padStart(2, '0')}`,
    label: group.label,
    tabs: group.tabs,
  }))
);

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(16);

  const visibleProjects = useMemo(
    () => (activeTab === 'all' ? gallery : gallery.filter((project) => project.tabs.includes(activeTab))),
    [activeTab]
  );
  const displayedProjects = visibleProjects.slice(0, visibleCount);
  const selectedProject = selectedIndex === null ? null : displayedProjects[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((current) => (current === 0 ? visibleProjects.length - 1 : current - 1));
  };

  const showNext = () => {
    setSelectedIndex((current) => (current === displayedProjects.length - 1 ? 0 : current + 1));
  };

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-10 sm:pb-12 sm:pt-16 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c59a45]">
              Selected installations
            </p>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl md:text-5xl">
              Our Latest Projects
            </h1>
            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-px w-20 bg-slate-300" />
              <span className="h-1 w-20 bg-[#e00000]" />
              <span className="h-px w-20 bg-slate-300" />
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600">
              Explore our window, door, curtain wall, and architectural glazing references. Filter the gallery by system or application to find the right inspiration for your next project.
            </p>
          </div>

          <div className="tabs-scroll mx-auto mt-10 flex max-w-6xl gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setVisibleCount(16);
                    setSelectedIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={`shrink-0 border px-4 py-2.5 text-[10px] font-bold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'border-[#c59a45] bg-[#c59a45] text-white shadow-md shadow-[#c59a45]/20'
                      : 'border-slate-200 bg-[#f8fafc] text-slate-700 hover:border-[#0a2540] hover:text-[#0a2540]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-10 sm:px-10 md:py-14 lg:px-14">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c59a45]">
              {tabs.find((tab) => tab.id === activeTab)?.label}
            </p>
            <p className="mt-2 text-sm text-slate-500">{visibleProjects.length} project references</p>
          </div>
          <span className="hidden text-xs uppercase tracking-widest text-slate-400 sm:block">
            Click any image to enlarge
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {displayedProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[1.14] overflow-hidden bg-slate-100 text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59a45] focus-visible:ring-offset-2"
            >
              <img
                src={project.src}
                alt={project.title}
                loading={index < 8 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#00142e]/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#e6c687]">{project.label}</span>
                <span className="mt-1 flex items-center justify-between gap-2 text-xs font-medium">
                  View project <Maximize2 className="h-3.5 w-3.5" />
                </span>
              </span>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-white/90 text-[#0a2540] opacity-0 transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>

        {visibleCount < visibleProjects.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 20)}
              className="border border-[#c59a45] bg-[#c59a45] px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm transition hover:bg-[#a97829]"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#00142e]/95 p-4 backdrop-blur-sm sm:p-8">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute inset-0 cursor-default"
            aria-label="Close project viewer"
          />
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-6xl items-center justify-center overflow-hidden bg-[#071b32] shadow-2xl">
            <img src={selectedProject.src} alt={selectedProject.title} className="max-h-[92vh] w-full object-contain" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#00142e]/90 to-transparent px-5 pb-5 pt-16 sm:px-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6c687]">{selectedProject.label}</p>
                <p className="mt-1 text-sm font-medium text-white">{selectedProject.title}</p>
              </div>
              <span className="text-xs text-slate-300">{selectedIndex + 1} / {displayedProjects.length}</span>
            </div>
            <button type="button" onClick={showPrevious} className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#e6c687]/40 bg-[#00142e]/80 text-[#e6c687] transition hover:bg-[#c59a45] hover:text-white" aria-label="Previous image">
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={showNext} className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#e6c687]/40 bg-[#00142e]/80 text-[#e6c687] transition hover:bg-[#c59a45] hover:text-white" aria-label="Next image">
                <ChevronRight className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => setSelectedIndex(null)} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#00142e]/80 text-white transition hover:bg-[#c59a45]" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
