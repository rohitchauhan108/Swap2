"use client";

import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const imageGroups = [
  {
    folder: "aluminimum",
    label: "Aluminum collection",
    tabs: ["aluminum", "aluprof", "reynaers", "aliplast"],
    aluminumImageCount: 11,
  },
  {
    folder: "windows",
    label: "Window collection",
    tabs: ["windows", "reynaers"],
  },
  {
    folder: "doors",
    label: "Door collection",
    tabs: ["doors"],
  },
  {
    folder: "aluprof",
    label: "Aluprof collection",
    tabs: ["aluprof", "windows", "doors"],
  },
  {
    folder: "curtain-walls",
    label: "Curtain wall collection",
    tabs: ["curtain-walls"],
  },
  {
    folder: "hansen-slim-as-steel",
    label: "Hansen Slim AS Steel",
    tabs: ["hansen", "doors", "windows"],
    locations: [
      "206 Ditmas Brooklyn NY",
      "120 Grove Monsey NY",
      "77 Gerry Brooklyn NY",
    ],
  },
  {
    folder: "wall-to-wall",
    label: "Wall to wall collection",
    tabs: ["wall-to-wall", "windows"],
  },
  {
    folder: "aliplast",
    label: "Aliplast collection",
    tabs: ["aliplast", "windows"],
  },
  {
    folder: "asas",
    label: "ASAS collection",
    tabs: ["asas", "windows"],
  },
  {
    folder: "pvc",
    label: "PVC collection",
    tabs: ["pvc", "windows"],
  },
];

const tabs = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "steel", label: "S (STEEL)" },
  { id: "wood", label: "W (WOOD)" },
  { id: "aluminum", label: "A (ALUMINUM)" },
  { id: "pvc", label: "P (PVC)" },
  { id: "windows", label: "WINDOWS" },
  { id: "curtain-walls", label: "CURTAIN WALLS" },
  { id: "doors", label: "DOORS" },
  { id: "wall-to-wall", label: "WALL TO WALL" },
  { id: "aluprof", label: "ALUPROF" },
  { id: "reynaers", label: "REYNAERS" },
  { id: "aliplast", label: "ALIPLAST" },
  { id: "asas", label: "ASAS" },
  { id: "hansen", label: "HANSEN - SLIM AS STEEL" },
];

export default function ProjectsPage({ imageFiles = {} }) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(16);

  const gallery = useMemo(() => {
    const configuredFolders = new Set(imageGroups.map((group) => group.folder));
    const additionalGroups = Object.keys(imageFiles)
      .filter((folder) => !configuredFolders.has(folder))
      .map((folder) => ({
        folder,
        label: `${folder.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())} collection`,
        tabs: tabs.some((tab) => tab.id === folder) ? [folder] : [],
      }));

    return [...imageGroups, ...additionalGroups].flatMap((group) =>
      (imageFiles[group.folder] ?? []).map((file, index) => ({
        id: `${group.folder}-${file}`,
        src: `/projects/${group.folder}/${file}`,
        title: `${group.label} ${String(index + 1).padStart(2, "0")}`,
        label: group.label,
        location: group.locations?.[index],
        tabs:
          group.aluminumImageCount !== undefined &&
          index >= group.aluminumImageCount
            ? group.tabs.filter((tab) => tab !== "aluminum")
            : group.tabs,
      })),
    );
  }, [imageFiles]);
  const visibleProjects = useMemo(
    () =>
      activeTab === "all"
        ? gallery
        : gallery.filter((project) => project.tabs.includes(activeTab)),
    [activeTab],
  );
  const displayedProjects = visibleProjects.slice(0, visibleCount);
  const selectedProject =
    selectedIndex === null ? null : displayedProjects[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? visibleProjects.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === displayedProjects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Selected installations"
        title="Our Latest Projects"
        description="Explore our window, door, curtain wall, and architectural glazing references."
      />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-10 sm:pb-12 sm:pt-16 lg:px-14">
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
                  className={`shrink-0 border px-4 py-2.5 text-[10px] font-bold tracking-wide transition-all duration-200 md:px-5 md:py-3 md:text-xs ${
                    isActive
                      ? "border-[#c59a45] bg-[#c59a45] text-white shadow-md shadow-[#c59a45]/20"
                      : "border-slate-200 bg-[#f8fafc] text-slate-700 hover:border-[#0a2540] hover:text-[#0a2540]"
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
        <div className="mb-7 flex justify-end">
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
              className="group overflow-hidden bg-slate-100 text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59a45] focus-visible:ring-offset-2"
            >
              <img
                src={project.src}
                alt={project.title}
                loading={index < 8 ? "eager" : "lazy"}
                className="aspect-[1.14] h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              {project.location && (
                <span className="block bg-[#d40000] px-2 py-2 text-center text-xs font-bold text-white">
                  {project.location}
                </span>
              )}
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
            <img
              src={selectedProject.src}
              alt={selectedProject.title}
              className="max-h-[92vh] w-full object-contain"
            />
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#e6c687]/40 bg-[#00142e]/80 text-[#e6c687] transition hover:bg-[#c59a45] hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#e6c687]/40 bg-[#00142e]/80 text-[#e6c687] transition hover:bg-[#c59a45] hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#00142e]/80 text-white transition hover:bg-[#c59a45]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
