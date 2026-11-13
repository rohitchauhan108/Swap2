"use client";

import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const imageGroups = [
  {
    folder: "aluminimum",
    label: "Aluminum collection",
    tabs: ["aluminum"],
    files: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpeg",
    ],
    names: {
      "1.jpg": "834 Pacific Brooklyn NY",
      "2.jpg": "5 Garfield Brooklyn NY",
      "3.jpg": "42 Church Monsey Airmont NY",
      "4.jpg": "COX CRO Lakewood School NJ",
      "5.jpg": "",
      "6.jpg": "Chester Coomunity Chester NY",
      "7.jpg": "554 Prospect ST.Brooklyn NY",
      "8.jpg": "210 North 10th Brooklyn NY",
      "9.jpg": "184 Nostrand AVE Brooklyn NY",
      "10.jpg": "6015-Riverdale Bronx NY",
      "11.jpeg": "BR School 5 Kahan DR Monroe NY",
    },
  },
  {
    folder: "windows",
    label: "Window collection",
    tabs: ["windows"],
    files: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpeg",
      "12.jpeg",
    ],
     names: {
      "1.jpg": "834 Pacific Brooklyn NY",
      "2.jpg": "5 Garfield Brooklyn NY",
      "3.jpg": "42 Church Monsey Airmont NY",
      "4.jpg": "COX CRO Lakewood School NJ",
      "5.jpg": "834 Pacific",
      "6.jpg": "Chester Coomunity Chester NY",
      "7.jpg": "554 Prospect ST.Brooklyn NY",
      "8.jpg": "210 North 10th Brooklyn NY",
      "9.jpg": "184 Nostrand AVE Brooklyn NY",
      "10.jpg": "6015-Riverdale Bronx NY",
      "11.jpeg": "BR School 5 Kahan DR Monroe NY",
      "12.jpeg": "77 Gerry Brooklyn NY",
    },
  },
  {
    folder: "doors",
    label: "Door collection",
    tabs: ["doors"],
    files: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpeg",
      "8.jpg",
    ],
    names: {
      "1.jpg": "5 Garfield Brooklyn NY",
      "2.jpg": "42 Church Monsey Airmont NY",
      "3.jpg": "206 Ditmas Brooklyn NY",
      "4.jpg": "Chester Coomunity Chester NY",
      "5.jpg": "184 Nostrand AVE Brooklyn NY",
      "6.jpg": "120 Grove Monsey NY",
      "7.jpeg": "77 Gerry Brooklyn NY",
      "8.jpg": "BR School Monroe NY",
    },
  },
  {
    folder: "aluprof",
    label: "Aluprof collection",
    tabs: ["aluprof"],
    files: ["1.jpeg", "2.jpeg",],
    names: {
      "1.jpeg": "BR School 5 Kahan DR Monroe NY",
      "2.jpeg": "BR School Egress Windows Buying Guide – The Home Depot",
    },
  },
  {
    folder: "reynaers",
    label: "Reynaers collection",
    tabs: ["reynaers"],
    files: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
     names: {
      "1.jpg": "834 Pacific Brooklyn NY",
      "2.jpg": "834 Pacific",
      "3.jpg": "554 Prospect ST.Brooklyn NY",
      "4.jpg": "184 Nostrand AVE Brooklyn NY",
      "5.jpg": "6015-Riverdale Bronx NY",
    },
  },
  {
    folder: "curtain-walls",
    label: "Curtain wall collection",
    tabs: ["curtain-walls"],
    files: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg"],
    names: {
      "1.jpg": "COX CRO Lakewood School NJ",
      "2.jpg": "554 Prospect ST.Brooklyn NY",
      "3.jpg": "210 North 10th Brooklyn NY",
      "4.jpg": "184 Nostrand AVE Brooklyn NY",
      "5.jpeg": "BR School 5 Kahan DR Monroe NY",
    },
  },
  {
    folder: "hansen-slim-as-steel",
    label: "Hansen Slim AS Steel",
    tabs: ["hansen"],
    files: ["1.jpg", "2.jpg", "3.jpeg"],
    // locations: [
    //   "206 Ditmas Brooklyn NY",
    //   "120 Grove Monsey NY",
    //   "77 Gerry Brooklyn NY",
    // ],
    names: {
      "1.jpg": "206 Ditmas Brooklyn NY",
      "2.jpg": "120 Grove Monsey NY",
      "3.jpeg": "77 Gerry Brooklyn NY",
    },
  },
  {
    folder: "wall-to-wall",
    label: "Wall to wall collection",
    tabs: ["wall-to-wall"],
    files: ["1.jpg", "2.jpg", "3.jpeg"],
    names: {
      "1.jpg": "206 Ditmas Brooklyn NY",
      "2.jpg": "120 Grove Monsey NY",
      "3.jpeg": "77 Gerry Brooklyn NY",
    },
  },
  {
    folder: "aliplast",
    label: "Aliplast collection",
    tabs: ["aliplast"],
    files: ["1.jpg", "2.jpg"],
    names: {
      "1.jpg": "5 Garfield Brooklyn NY",
      "2.jpg": "COX CRO Lakewood School NJ",
    },
  },
  {
    folder: "asas",
    label: "ASAS collection",
    tabs: ["asas"],
    files: ["1.jpg", "2.jpeg"],
    names: {
      "1.jpg": "5 Garfield Brooklyn NY",
      "2.jpeg": "BR School 5 Kahan DR Monroe NY",
    },
  },
  {
    folder: "pvc",
    label: "PVC collection",
    tabs: ["pvc"],
    files: ["1.jpg"],
    names: {
      "1.jpg": "West 139 Street NYC",
    },
  },
  {
    folder: "steel",
    label: "Steel collection",
    tabs: ["steel"],
    files: [],
  },
  {
    folder: "wood",
    label: "Wood collection",
    tabs: ["wood"],
    files: [],
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
    return imageGroups.flatMap((group) =>
      group.files
        .filter((file) => imageFiles[group.folder]?.includes(file))
        .map((file, index) => ({
          id: `${group.folder}-${file}`,
          src: `/projects/${group.folder}/${file}`,
          title: `${group.label} ${String(index + 1).padStart(2, "0")}`,
          name: group.names?.[file]?.trim(),
          label: group.label,
          location: group.locations?.[index],
          tabs: group.tabs,
        })),
    );
  }, [imageFiles]);
  const visibleProjects = useMemo(
    () => {
      if (activeTab !== "all") {
        return gallery.filter((project) => project.tabs.includes(activeTab));
      }

      const seenNames = new Set();
      return gallery.filter((project) => {
        if (!project.name) return true;

        const normalizedName = project.name.toLocaleLowerCase();
        if (seenNames.has(normalizedName)) return false;

        seenNames.add(normalizedName);
        return true;
      });
    },
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
                      ? "border-[#c59a45] bg-[#bd0002] text-white shadow-md shadow-[#c59a45]/20"
                      : "border-slate-200 bg-gray-200 text-black hover:border-[#0a2540] hover:text-[#0a2540]"
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
              className="group overflow-hidden bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59a45] focus-visible:ring-offset-2"
            >
              <img
                src={project.src}
                alt={project.name || project.title}
                loading={index < 8 ? "eager" : "lazy"}
                className="mb-2 aspect-[1.14] h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              {project.name && (
                <span className="block w-full bg-[#bd0002] px-3 py-3 text-center text-xs font-bold tracking-wide text-white sm:text-base">
                  {project.name}
                </span>
              )}
              {/* {project.location && (
                <span className="block bg-[#d40000] px-2 py-2 text-center text-xs font-bold text-white">
                  {project.location}
                </span>
              )} */}
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
