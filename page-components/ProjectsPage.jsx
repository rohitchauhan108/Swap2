"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const imageGroups = [
  {
    folder: "aluminimum",
    label: "Aluminum collection",
    tabs: ["aluminum"],
    files: [
      "1.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpeg",
    ],
    names: {
      "1.jpg": "834 Pacific Brooklyn NY",
      "3.jpg": "42 Church Monsey Airmont NY",
      "4.jpg": "COX CRO Lakewood School NJ",
      "5.jpg": "BR School Y Goldberger Monroe NY",
      "6.jpg": "Chester Coomunity Chester NY",
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
      "3.jpg",
      "4.jpg",
      "6.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpeg",
      "12.jpg",
    ],
     names: {
      "1.jpg": "834 Pacific Brooklyn NY",
      "3.jpg": "42 Church Monsey Airmont NY",
      "4.jpg": "COX CRO Lakewood School NJ",
      "6.jpg": "Chester Coomunity Chester NY",
      "9.jpg": "184 Nostrand AVE Brooklyn NY",
      "10.jpg": "6015-Riverdale Bronx NY",
      "11.jpeg": "BR School 5 Kahan DR Monroe NY",
      "12.jpg": "77 Gerry Brooklyn NY",
    },
  },
  {
    folder: "doors",
    label: "Door collection",
    tabs: ["doors"],
    files: [
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpeg",
    ],
    names: {
      "2.jpg": "42 Church Monsey Airmont NY",
      "3.jpg": "206 Ditmas Brooklyn NY",
      "4.jpg": "Chester Coomunity Chester NY",
      "5.jpg": "184 Nostrand AVE Brooklyn NY",
      "6.jpg": "120 Grove Monsey NY",
      "7.jpeg": "77 Gerry Brooklyn NY",
    },
  },
  {
    folder: "aluprof",
    label: "Aluprof collection",
    tabs: ["aluprof"],
    files: ["1.jpeg"],
    names: {
      "1.jpeg": "BR School 5 Kahan DR Monroe NY",
    },
  },
  {
    folder: "aluminimum",
    label: "Aluprof collection",
    tabs: ["aluprof"],
    files: ["5.jpg"],
    names: {
      "5.jpg": "BR School Y Goldberger Monroe NY",
    },
  },
  {
    folder: "reynaers",
    label: "Reynaers collection",
    tabs: ["reynaers"],
    files: ["1.jpg", "3.jpg", "4.jpg", "5.jpg", "6.webp", "7.jpg"],
     names: {
      "1.jpg": "834 Pacific Brooklyn NY",
      "3.jpg": "554 Prospect ST.Brooklyn NY",
      "4.jpg": "184 Nostrand AVE Brooklyn NY",
      "5.jpg": "6015-Riverdale Bronx NY",
      "6.webp": "402 Union Ave Brooklyn NY",
      "7.jpg": "210 North 10th Brooklyn NY",
    },
  },
  {
    folder: "curtain-walls",
    label: "Curtain wall collection",
    tabs: ["curtain-walls"],
    files: ["1.jpg", "4.jpg", "5.jpeg"],
    names: {
      "1.jpg": "COX CRO Lakewood School NJ",
      "4.jpg": "184 Nostrand AVE Brooklyn NY",
      "5.jpeg": "BR School 5 Kahan DR Monroe NY",
    },
  },
  {
    folder: "hansen-slim-as-steel",
    label: "Hansen Slim AS Steel",
    tabs: ["hansen", "steel"],
    files: ["1.jpg", "2.jpg", "3.jpg"],
    names: {
      "1.jpg": "206 Ditmas Brooklyn NY",
      "2.jpg": "120 Grove Monsey NY",
      "3.jpg": "77 Gerry Brooklyn NY",
    },
  },
  {
    folder: "wall-to-wall",
    label: "Wall to wall collection",
    tabs: ["wall-to-wall"],
    files: ["1.jpg", "2.jpg", "3.jpg"],
    names: {
      "1.jpg": "206 Ditmas Brooklyn NY",
      "2.jpg": "120 Grove Monsey NY",
      "3.jpg": "77 Gerry Brooklyn NY",
    },
  },
  {
    folder: "aliplast",
    label: "Aliplast collection",
    tabs: ["aliplast"],
    files: ["1.jpg", "2.jpg", "3.jpeg"],
    names: {
      "1.jpg": "5 Garfield Brooklyn NY",
      "2.jpg": "COX CRO Lakewood School NJ",
      "3.jpeg": "4350 Van Cortlandt Bronx NY",
    },
  },
  {
    folder: "asas",
    label: "ASAS collection",
    tabs: ["asas"],
    files: ["2.jpeg"],
    names: {
      "2.jpeg": "BR School 5 Kahan DR Monroe NY",
    },
  },
  {
    folder: "pvc",
    label: "PVC collection",
    tabs: ["pvc", "veratec"],
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
  {
    folder: "veratec",
    label: "VERATEC",
    tabs: ["veratec", "pvc"],
    files: ["2.jpeg"],
    names: {
      "2.jpeg": "3006 Williams Bridge BRONX NY",
    },
  },
  {
    folder: "aluplast",
    label: "ALUPLAST",
    tabs: ["aluplast", "pvc"],
    files: ["1.jpeg"],
    names: {
      "1.jpeg": "4350 Van Cortlandt Bronx NY",
    },
  },
];

const tabs = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "steel", label: "S (STEEL)" },
  { id: "wood", label: "W (WOOD)" },
  { id: "aluminum", label: "A (ALUMINUM)" },
  { id: "pvc", label: "P (PVC)" },
  { id: "aluprof", label: "ALUPROF" },
  { id: "reynaers", label: "REYNAERS" },
  { id: "aliplast", label: "ALIPLAST" },
  { id: "aluplast", label: "ALUPLAST" },
  { id: "asas", label: "ASAS" },
  { id: "hansen", label: "HANSEN - SLIM AS STEEL" },
  { id: "veratec", label: "VERATEC" },
];

export default function ProjectsPage({ imageFiles = {}, initialCategory }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(() =>
    tabs.some((tab) => tab.id === initialCategory) ? initialCategory : "all",
  );
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(16);

  useEffect(() => {
    if (tabs.some((tab) => tab.id === initialCategory)) {
      setActiveTab(initialCategory);
      setVisibleCount(16);
      setSelectedIndex(null);
    } else {
      setActiveTab("all");
      setVisibleCount(16);
      setSelectedIndex(null);
    }
  }, [initialCategory]);

  const gallery = useMemo(() => {
    return imageGroups.flatMap((group) =>
      group.files
        .filter((file) => imageFiles[group.folder]?.includes(file))
        .map((file, index) => ({
          id: `${group.folder}-${file}-${group.tabs.join("-")}`,
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
      const allProjects = (() => {
        const seenNames = new Set();
        return gallery.filter((project) => {
          if (!project.name) return true;

          const normalizedName = project.name.toLocaleLowerCase();
          const deduplicationKey =
            normalizedName === "834 pacific"
              ? "834 pacific brooklyn ny"
              : normalizedName;
          if (seenNames.has(deduplicationKey)) return false;

          seenNames.add(deduplicationKey);
          return true;
        });
      })();

      if (activeTab === "aluminum") {
        const pvcProjectNames = new Set([
          "4350 Van Cortlandt Bronx NY",
          "3006 Williams Bridge BRONX NY",
          "West 139 Street NYC",
        ]);
        return gallery.filter((project) => !pvcProjectNames.has(project.name));
      }

      if (["steel", "wood"].includes(activeTab)) {
        return allProjects;
      }

      if (activeTab !== "all") {
        return gallery.filter((project) => project.tabs.includes(activeTab));
      }

      return allProjects;
    },
    [activeTab, gallery],
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
        align="center"
      />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-10 sm:pb-12 sm:pt-16 lg:px-14">
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center">
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
                    router.replace(`/projects?category=${tab.id}`, { scroll: false });
                  }}
                  aria-pressed={isActive}
                  className={`w-full border px-2 py-2.5 text-[9px] font-bold tracking-wide transition-all duration-200 sm:w-auto sm:px-4 md:px-5 md:py-3 md:text-xs ${
                    isActive
                      ? "border-[#c59a45] bg-[#002b5a] text-white shadow-md shadow-[#c59a45]/20"
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
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col items-center justify-center overflow-hidden bg-[#071b32] shadow-2xl">
            <img
              src={selectedProject.src}
              alt={selectedProject.name || selectedProject.title}
              className="max-h-[82vh] w-full object-contain"
            />
            {selectedProject.name && (
              <span className="w-fit bg-[#bd0002] px-4 py-3 text-center text-sm font-bold text-white">
                {selectedProject.name}
              </span>
            )}
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
