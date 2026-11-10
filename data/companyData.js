/**
 * Official data from "SP- Swap Partnership.pdf" and SWAP Windows Corp.
 * Client PDF is the primary source of truth.
 */

const architecturalGlassDetail = "/images/architectural_glass_detail_1793359235644.jpg";
const heroArchitecturalFacade = "/images/hero_architectural_facade_1793359234348.jpg";
const materialsAluminumCurtainwall = "/images/materials_aluminum_curtainwall_1793359235401.jpg";
const materialsSteelMinimal = "/images/materials_steel_minimal_1793359234398.jpg";
const materialsWoodGlazing = "/images/materials_wood_glazing_1793359235420.jpg";
const swapBuildingFacade = "/images/swap_building_facade_1793362746018.jpg";

export const COMPANY_INFO = {
  name: "SWAP Windows Corp.",
  tagline: "A Partnership Built for the Window Trade",
  phone: "877-212-7927",
  phoneClean: "8772127927",
  email: "SWAP@swapwindows.com",
  website: "https://swapwindows.com/",
  serviceRegions: "USA, Canada & European Projects",
  date: "October 28, 2026",
  testingStandards: ["USA Tested", "European Tested"],
  summary:
    "SWAP Windows Corp. provides wholesale windows, doors, architectural aluminum glazing systems, and glass for commercial and residential projects across the USA, Canada, and Europe. We partner directly with glazing contractors, window dealers, builders, and architects.",
  coreValues: [
    "TAKEOFFS",
    "ENGINEERING",
    "FABRICATION",
    "GLASS SUPPLY",
    "JOB-SITE DELIVERY",
  ],
};

export const MATERIAL_CATEGORIES = [
  {
    id: "steel",
    name: "Steel Windows & Doors",
    shortName: "Steel",
    headline: "Ultra-Slim Sightlines & Monumental Strength",
    description:
      "Engineered for luxury residential and distinctive commercial spaces, steel windows and doors offer incomparable structural strength, minimal profile depths, and historic divided-lite configurations.",
    features: [
      "Ultra-slim structural sightlines",
      "Thermally broken and non-thermal Swiss steel profiles",
      "Monumental French door and pivot configurations",
      "Exceptional wind-load resistance and durability",
    ],
    availabilityNote:
      "Product availability is determined by the selected system and project requirements.",
    image: materialsSteelMinimal,
    applications: [
      "Luxury Custom Residences",
      "Historic Preservations",
      "Bespoke Commercial Entrances",
      "High-Traffic Public Spaces",
    ],
  },
  {
    id: "aluminum",
    name: "Aluminum Windows & Architectural Systems",
    shortName: "Aluminum",
    headline: "Precision Engineered Modern Performance",
    description:
      "High-performance aluminum profiles for versatile fenestration, from ultra-slim residential casements to monumental commercial curtain walls and storefronts.",
    features: [
      "Reynaers SL38 slim-profile aluminum systems available",
      "Multi-chamber thermal barrier technology",
      "Storefronts, curtain walls, and specialty sliding systems",
      "Superior acoustic and thermal insulation",
    ],
    availabilityNote:
      "Product availability is determined by the selected system and project requirements.",
    image: materialsAluminumCurtainwall,
    applications: [
      "Commercial Curtain Walls",
      "Storefronts & Entrances",
      "Multi-Family Developments",
      "Contemporary Residences",
    ],
  },
  {
    id: "wood",
    name: "Wood Windows & Doors",
    shortName: "Wood",
    headline: "Natural Warmth & Master European Craftsmanship",
    description:
      "Crafted from premium timber selections with engineered multi-layer lamination to resist warping while delivering extraordinary natural aesthetics and thermal insulation.",
    features: [
      "Engineered FSC-certified timber (Oak, Pine, Larch, Meranti)",
      "Traditional mortise-and-tenon European joinery",
      "High thermal efficiency and natural acoustic dampening",
      "Architectural wood-aluminum hybrid options",
    ],
    availabilityNote:
      "Product availability is determined by the selected system and project requirements.",
    image: materialsWoodGlazing,
    applications: [
      "Mountain & Waterfront Estates",
      "Historic Restoration Projects",
      "Passive House & High-Performance Builds",
      "Bespoke Architectural Interiors",
    ],
  },
  {
    id: "pvc",
    name: "PVC Windows & Doors",
    shortName: "PVC",
    headline: "Engineered Efficiency & Cost-Effective Longevity",
    description:
      "Advanced multi-chamber uPVC window and door profiles engineered to achieve outstanding U-values, low maintenance, and high structural reliability for commercial and residential developments.",
    features: [
      "Multi-chamber internal chambers for maximum thermal retention",
      "Steel-reinforced internal core for wind resistance",
      "Zero-rot, UV-stabilized weather-resistant surfaces",
      "Excellent value-to-performance ratio for large projects",
    ],
    availabilityNote:
      "Product availability is determined by the selected system and project requirements.",
    image: heroArchitecturalFacade,
    applications: [
      "Multi-Family Residential",
      "Commercial Office Complexes",
      "Energy-Efficient Renovations",
      "Mixed-Use Developments",
    ],
  },
];

export const ALUMINUM_SYSTEMS = [
  {
    title: "Storefronts",
    tagline: "Commercial Ground-Level Glazing",
    description:
      "Flush-glazed, thermally broken aluminum storefront systems engineered for commercial retail, multi-tenant entrances, and streetscape facades.",
    highlights: ["Integrated entrance doors", "Custom mullion depths", "High-velocity wind tested"],
  },
  {
    title: "Curtain Walls",
    tagline: "Multi-Story Façade Engineering",
    description:
      "Stick and unitized structural aluminum curtain wall systems providing continuous thermal envelope performance for monumental spans.",
    highlights: ["Pressure-equalized rain-screen", "Integrated operable vents", "Thermal strut isolation"],
  },
  {
    title: "Office Partitions",
    tagline: "Acoustic Glass Wall Dividers",
    description:
      "Minimal profile interior aluminum framing designed for contemporary corporate suites, meeting rooms, and acoustic office separations.",
    highlights: ["Single or double glazing", "Drop-seal acoustic doors", "Minimalist perimeter tracks"],
  },
  {
    title: "Balcony Glazing & Railings",
    tagline: "Structural Balustrades & Enclosures",
    description:
      "Engineered aluminum railing and glass balustrade systems for residential balconies, roof decks, and exterior terraces.",
    highlights: ["Top-mount or fascia-mount shoes", "Laminated tempered safety glass", "Architectural anodized finishes"],
  },
  {
    title: "Shower Enclosures",
    tagline: "Precision Heavy-Glass Hardware",
    description:
      "Custom architectural aluminum channels, hinges, and headers for frameless and semi-frameless heavy-glass shower systems.",
    highlights: ["Heavy-duty architectural hinges", "Low-profile floor tracks", "Corrosion-resistant marine finishes"],
  },
  {
    title: "Commercial Entrances",
    tagline: "High-Traffic Pivot & Swing Doors",
    description:
      "Heavy-duty commercial entrance doors configured with panic hardware, access control compatibility, and robust aluminum stiles.",
    highlights: ["Narrow, medium & wide stile options", "Heavy-duty concealed pivots", "Thermal break thresholds"],
  },
  {
    title: "Specialty Sliding Systems",
    tagline: "Large-Format Pocket & Multi-Slide",
    description:
      "Monolithic multi-panel lift-and-slide and minimalist sliding glass walls engineered for oversized floor-to-ceiling glass expanses.",
    highlights: ["Ultra-low flush threshold tracks", "Oversized panels up to 12ft height", "Reynaers SL38 slim-profile options"],
  },
];

export const GLASS_ONLY_SUPPLY = {
  headline: "Need Glass Without Frames?",
  subhead: "Architectural Glass Manufactured to Drawings & Schedules",
  description:
    "We supply glass separately for storefronts, curtain walls, windows, doors, balconies, and showers — manufactured strictly to your project drawings and specifications.",
  capabilities: [
    "Laminated Architectural Glass",
    "Double & Triple Insulated Glass Units (IGUs)",
    "High-Performance Low-E Coatings (SunGuard, Saint-Gobain)",
    "Low-Iron Ultra-Clear (Starphire-Grade) Glass",
    "Acoustic Laminated Interlayers",
    "Tempered Structural Glass Panels",
    "Ceramic Frit & Silk-Screen Patterns",
    "Custom Cutouts, Notches & Polished Edges",
  ],
  image: architecturalGlassDetail,
};

export const SERVICES = [
  {
    number: "01",
    name: "Estimating & Takeoffs",
    description:
      "Send us your architectural drawings and schedules. SWAP prepares accurate project takeoffs, reviews the scope thoroughly, and follows up promptly with transparent wholesale pricing.",
  },
  {
    number: "02",
    name: "System Design & Consulting",
    description:
      "Guiding glazing contractors on profile selection, opening tolerances, drainage requirements, and hardware suitability across Steel, Aluminum, Wood, and PVC.",
  },
  {
    number: "03",
    name: "Structural Engineering",
    description:
      "Engineering coordination ensuring wind-load compliance, deflection criteria, thermal calculations, and compliance with USA & European testing standards.",
  },
  {
    number: "04",
    name: "Shop Drawings",
    description:
      "Comprehensive, detailed architectural shop drawings detailing anchor points, mullion sections, perimeter flashing details, and glass callouts for contractor approval.",
  },
  {
    number: "05",
    name: "Factory Fabrication",
    description:
      "Precision CNC machining, corner welding or mechanical crimping, and high-performance powder coating or anodizing adhering to stringent factory tolerances.",
  },
  {
    number: "06",
    name: "Shop Glazing",
    description:
      "Pre-glazed assemblies under controlled factory conditions to accelerate job-site installation timelines and maintain strict quality seals.",
  },
  {
    number: "07",
    name: "Customs & Freight Coordination",
    description:
      "Seamless import clearance, harbor handling, and duty documentation handled completely by SWAP for European profile and glass imports.",
  },
  {
    number: "08",
    name: "Job-Site Logistics & Delivery",
    description:
      "Regardless of order size, we coordinate logistics to your exact scheduling needs and arrange prompt, crated delivery directly to the job site.",
  },
];

export const WHY_WORK_WITH_SWAP = [
  {
    title: "Four Material Disciplines",
    description:
      "Single-source partner for Steel, Wood, Aluminum, and PVC, allowing you to fulfill varied architectural specifications through one trusted supplier.",
  },
  {
    title: "Project-Specific Takeoffs",
    description:
      "Fast turnaround on comprehensive bill of materials and schedules directly from your CAD or PDF architectural drawings.",
  },
  {
    title: "Engineering & Fabrication",
    description:
      "Direct coordination between structural engineers, profile manufacturers, and fabrication floors for error-free assembly.",
  },
  {
    title: "Glass-Only Supply Option",
    description:
      "Flexibility to order high-performance monolithic, tempered, and insulated glass independently for existing or third-party frames.",
  },
  {
    title: "Installation Team Assistance",
    description:
      "SWAP can help locate qualified installation teams, including experienced glazing contractors able to provide insurance required for the project.",
  },
  {
    title: "Direct Job-Site Delivery",
    description:
      "Crated, protected, and staged delivery dispatched directly to the active construction site with coordinated off-loading logistics.",
  },
];

export const BRANDS = {
  profiles: [
    {
      name: "Reynaers Aluminium",
      logoDomain: "reynaers.com",
      websiteUrl: "https://www.reynaers.com/",
      country: "Belgium",
      featured: true,
      description:
        "Leading European provider of sustainable architectural aluminium solutions. Featuring special discount pricing on Reynaers SL38 slim-profile aluminum systems.",
      specialNote: "Ask about special discount pricing on Reynaers SL38 slim-profile systems.",
    },
    {
      name: "Forster",
      logoDomain: "forster-profile.ch",
      websiteUrl: "https://www.forster-profile.ch/",
      country: "Switzerland",
      featured: true,
      description:
        "High-performance Swiss steel and stainless steel profile systems for ultra-slim, fire-rated, and secure architectural fenestration.",
      specialNote: "Thermally broken and non-thermal Swiss steel profiles.",
    },
    {
      name: "Aluprof",
      logoDomain: "aluprof.com",
      websiteUrl: "https://aluprof.com/en",
      country: "Poland / EU",
      featured: true,
      description:
        "One of Europe's largest manufacturers of architectural aluminum systems, offering robust curtain walls, facades, and high-energy-rated window lines.",
      specialNote: "USA & European tested commercial systems.",
    },
    {
      name: "Cortizo",
      logoDomain: "cortizo.com",
      websiteUrl: "https://www.cortizo.com/en",
      country: "Spain",
      featured: true,
      description:
        "Spanish design innovation with minimalist sliding systems, concealed sashes, and architectural aluminum systems with micro-sightlines.",
      specialNote: "Minimalist sliding systems and architectural fenestration.",
    },
    {
      name: "Hansen",
      logoDomain: "hansensystems.com",
      websiteUrl: "https://hansensystems.com/",
      country: "Europe",
      featured: false,
      description: "Precision engineered structural glazing and commercial window systems.",
      specialNote: "Engineered for high architectural standards.",
    },
    {
      name: "Aliplast",
      logoDomain: "aliplast.com",
      websiteUrl: "https://www.aliplast.com/",
      country: "Belgium",
      featured: false,
      description: "Advanced thermal insulation systems for commercial facades, doors, and roof glazing.",
      specialNote: "High thermal acoustic European certified systems.",
    },
    {
      name: "ASAS",
      logoDomain: "asasalu.com",
      websiteUrl: "https://www.asasalu.com/",
      country: "Europe",
      featured: false,
      description: "Extensive architectural aluminum extrusions, industrial profiles, and storefront assemblies.",
      specialNote: "High-grade architectural alloys.",
    },
    {
      name: "Aluron",
      logoDomain: "aluron.pl",
      websiteUrl: "https://aluron.pl/",
      country: "Poland / EU",
      featured: false,
      description: "Specialized aluminum systems for wood-aluminum windows, PVC-aluminum cladding, and curtain walls.",
      specialNote: "Hybrid wood-aluminum and facade systems.",
    },
    {
      name: "Schüco",
      logoDomain: "schueco.com",
      websiteUrl: "https://www.schueco.com/",
      country: "Germany / Europe",
      featured: false,
      description: "European aluminum, steel, and PVC systems for energy-efficient windows, doors, and facades.",
      specialNote: "High-performance architectural systems.",
    },
  ],
  glass: [
    {
      name: "Guardian Glass",
      logoDomain: "guardianglass.com",
      websiteUrl: "https://www.guardianglass.com/",
      category: "Glass Manufacturer",
      description:
        "Global leader in float glass, SunGuard® advanced solar control coatings, and low-iron architectural glass.",
    },
    {
      name: "Saint-Gobain",
      logoDomain: "saint-gobain.com",
      websiteUrl: "https://www.saint-gobain.com/",
      category: "Glass Manufacturer",
      description:
        "World leader in high-performance coated glass, acoustic interlayers, and fire-resistant safety glazing.",
    },
    {
      name: "Sisecam",
      logoDomain: "sisecam.com",
      websiteUrl: "https://www.sisecam.com/en",
      category: "Glass Manufacturer",
      description:
        "Major European glass manufacturer delivering flat glass, automotive glass, and energy-saving architectural insulated units.",
    },
    {
      name: "Press Glass",
      logoDomain: "pressglass.com",
      websiteUrl: "https://www.pressglass.com/",
      category: "Glass Manufacturer",
      description:
        "Architectural glass processor supplying insulated, laminated, tempered, and specialty glazing solutions.",
    },
    {
      name: "AGC",
      logoDomain: "agc.com",
      websiteUrl: "https://www.agc.com/",
      category: "Glass Manufacturer",
      description:
        "Global glass manufacturer offering high-performance architectural glazing and specialty glass products.",
    },
  ],
  note: "Additional profile and glass manufacturers available upon request.",
};

export const PRODUCTS_CATALOG = [
  {
    id: "reynaers-sl38",
    name: "Reynaers SL38 Slim-Profile System",
    category: "aluminum",
    systemType: "Slim Aluminum Windows & Doors",
    material: "Aluminum",
    badge: "Special Discount Pricing",
    tagline: "Steel-look minimalist aesthetic with modern thermal performance",
    description:
      "A highly insulated system for inward and outward opening windows and doors that combines elegant design and minimalist sightlines with superior energy efficiency. Ask about our special discount pricing on Reynaers SL38.",
    features: [
      "Ultra-slim 38mm visible exterior face",
      "Triple glazing compatible up to 55mm",
      "Available in Classic, Cubic, and Ferro architectural variants",
      "Exceptional air, wind, and water tightness ratings",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: materialsAluminumCurtainwall,
    specs: {
      profileDepth: "76 mm frame / 86 mm vent",
      maxGlazing: "55 mm triple glazed",
      uValue: "Down to 1.1 W/m²K",
      acoustic: "Up to 45 dB",
    },
  },
  {
    id: "forster-steel",
    name: "Forster Swiss Steel Windows & Doors",
    category: "steel",
    systemType: "Precision Steel Fenestration",
    material: "Steel",
    badge: "Swiss Precision",
    tagline: "Architectural strength with historically slender profiles",
    description:
      "Forster steel and stainless steel systems engineered for monumental openings, slender mullions, and high security. Ideal for historic restorations and luxury modern architecture requiring ultra-narrow frames.",
    features: [
      "100% recyclable, sustainable steel construction",
      "Thermally broken and non-thermal Swiss steel profiles",
      "High static load capability for monumental glass spans",
      "Narrowest face widths for historic divided lite configurations",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: materialsSteelMinimal,
    specs: {
      profileDepth: "50 mm - 70 mm",
      maxHeight: "Up to 14 ft openings",
      finish: "Architectural powder coat / Raw black steel patina",
      hardware: "Concealed heavy-duty 3D adjustable hinges",
    },
  },
  {
    id: "architectural-curtain-wall",
    name: "Architectural Aluminum Curtain Walls & Facades",
    category: "aluminum",
    systemType: "Structural Aluminum Facade",
    material: "Aluminum",
    badge: "Commercial Façade",
    tagline: "Continuous thermal envelope for multi-story buildings",
    description:
      "High-performance stick and unitized curtain wall systems engineered for commercial headquarters, residential towers, and civic institutions with strict wind and seismic standards.",
    features: [
      "Pressure-equalized rain-screen barrier design",
      "Thermally broken structural mullions",
      "Seamless integration of operable vents and entrance doors",
      "Accommodates oversized insulated double and triple glass units",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: heroArchitecturalFacade,
    specs: {
      sightline: "50 mm / 60 mm visible mullion width",
      glazingThickness: "28 mm - 64 mm",
      airTightness: "Class AE1200",
      waterTightness: "Class RE1200",
    },
  },
  {
    id: "wood-architectural",
    name: "Architectural Wood Windows & Doors",
    category: "wood",
    systemType: "Engineered Timber Fenestration",
    material: "Wood",
    badge: "Master European Craftsmanship",
    tagline: "Natural warmth, superior acoustics, and heritage elegance",
    description:
      "Crafted from 3-layer and 4-layer laminated solid timber (European Oak, Nordic Pine, Larch, Meranti) with micro-porous ecological finishes. Provides unrivaled natural warmth and acoustic isolation.",
    features: [
      "Laminated multi-layer timber prevents warping and twisting",
      "Concealed multi-point perimeter locking hardware",
      "Available with external aluminum cladding (Wood-Alu hybrid)",
      "Historic simulated divided lites and custom arch geometries",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: materialsWoodGlazing,
    specs: {
      timberOptions: "White Oak, Pine, Meranti, Larch",
      profileDepth: "68 mm, 78 mm, 92 mm",
      thermalRating: "Passive House certified options available",
      acoustic: "Up to 48 dB",
    },
  },
  {
    id: "glass-only-custom",
    name: "Glass-Only Supply (Frameless Glazing)",
    category: "glass",
    systemType: "Custom Architectural Glass",
    material: "Architectural Glass",
    badge: "Supply Without Frames",
    tagline: "Manufactured directly to your architectural schedules",
    description:
      "Need glass without frames? We supply glass separately for storefronts, curtain walls, windows, doors, balconies, and showers manufactured to your project drawings and specifications.",
    features: [
      "Guardian SunGuard & Saint-Gobain Low-E performance coatings",
      "Laminated safety glass with acoustic sound-damping interlayers",
      "Low-iron ultra-clear Starphire-grade architectural glass",
      "CNC polished edges, precision hinge cutouts, and corner notches",
    ],
    availabilityNote: "Manufactured to contractor schedules and project specifications.",
    image: architecturalGlassDetail,
    specs: {
      types: "Monolithic Tempered, Laminated, Double/Triple IGU",
      coatings: "Solar Control Low-E, Reflective, Ceramic Frit",
      spacers: "Warm-edge Swissspacer, stainless steel",
      certifications: "ANSI Z97.1, ASTM C1048, EN 12150",
    },
  },
  {
    id: "commercial-storefronts",
    name: "Commercial Storefronts & Entrances",
    category: "aluminum",
    systemType: "Commercial Glazing",
    material: "Aluminum",
    badge: "Retail & Commercial",
    tagline: "Durable ground-floor framing with heavy-duty entrance doors",
    description:
      "Flush glazed aluminum storefront assemblies built for street-level retail, corporate entrances, and public facilities. Accommodates balanced doors, automatic sliders, and access control hardware.",
    features: [
      "Front-glazed and center-glazed configurations",
      "Heavy-duty commercial entrance doors with concealed closers",
      "Thermally broken sill flashings and sub-frames",
      "Engineered for high pedestrian cycle durability",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: materialsAluminumCurtainwall,
    specs: {
      depth: "1-3/4\" x 4-1/2\" or 2\" x 4-1/2\"",
      doorStiles: "Narrow (2\"), Medium (3-1/2\"), Wide (5\")",
      glassCompatibility: "1/4\" monolithic to 1\" insulated",
      finish: "Class I Anodized / AAMA 2605 70% PVDF",
    },
  },
  {
    id: "balcony-glazing-railings",
    name: "Balcony Glazing & Architectural Railings",
    category: "aluminum",
    systemType: "Structural Glass Balustrade",
    material: "Aluminum & Glass",
    badge: "Structural Railing",
    tagline: "Unobstructed panoramic views with tested perimeter safety",
    description:
      "Continuous base-shoe aluminum railing channels engineered for laminated tempered structural glass balustrades. Available in top-mount and fascia-mount installations.",
    features: [
      "Continuous extruded architectural aluminum shoe with drainage",
      "Dry-glaze wedge alignment system for rapid installation",
      "Heavy laminated safety glass with SentryGlas or PVB interlayers",
      "Optional minimalist slim-profile top cap railings",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: heroArchitecturalFacade,
    specs: {
      loadRating: "Meets 200 lb concentrated load & 50 plf uniform load",
      glassThickness: "1/2\" to 13/16\" laminated tempered",
      mountOptions: "Fascia mount, base mount, embedded shoe",
    },
  },
  {
    id: "office-glass-partitions",
    name: "Office Partitions & Acoustic Glazing",
    category: "aluminum",
    systemType: "Interior Demountable Glazing",
    material: "Aluminum & Glass",
    badge: "Corporate Interior",
    tagline: "Sound isolation and light transmission for modern workspaces",
    description:
      "Minimalist interior aluminum profiles for corporate conference suites and private executive offices. Delivers visual transparency while meeting rigorous speech privacy acoustics.",
    features: [
      "Ultra-low profile perimeter channels (under 1\" visible face)",
      "Single and double glazed acoustic systems up to STC 48",
      "Frameless glass pivot doors with hydraulic floor closers",
      "Integrated electrical switchable smart glass capability",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: architecturalGlassDetail,
    specs: {
      profileHeight: "25 mm - 35 mm perimeter channel",
      acousticRating: "STC 38 (single) / STC 48 (double)",
      doorTypes: "Frameless glass, slim aluminum framed, wood flush",
    },
  },
  {
    id: "pvc-multi-chamber",
    name: "High-Performance PVC Windows & Doors",
    category: "pvc",
    systemType: "Multi-Chamber uPVC",
    material: "PVC",
    badge: "Cost-Effective Longevity",
    tagline: "Maximum thermal insulation for multi-unit developments",
    description:
      "Multi-chamber PVC profile technology reinforced with galvanized steel inserts. Delivers exceptional acoustic damping and thermal efficiency at a competitive wholesale price point.",
    features: [
      "6-chamber and 7-chamber profile architecture",
      "Internal galvanized steel reinforcement cores",
      "Dual and triple EPDM compression weather-stripping",
      "Available in dual-color architectural foils and wood grain finishes",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: materialsSteelMinimal,
    specs: {
      chambers: "6 to 7 thermal chambers",
      frameDepth: "70 mm - 85 mm",
      thermalPerformance: "U-value down to 0.76 W/m²K",
      hardware: "Roto / Siegenia German multi-point hardware",
    },
  },
  {
    id: "specialty-sliding-systems",
    name: "Specialty Large-Format Sliding Systems",
    category: "aluminum",
    systemType: "Lift-and-Slide & Pocket Glazing",
    material: "Aluminum",
    badge: "Monumental Spans",
    tagline: "Effortless operation of oversized architectural panels",
    description:
      "Engineered aluminum sliding systems capable of carrying panels up to 900 lbs with feather-light operation. Available with zero-threshold flush floor transitions and pocket wall integration.",
    features: [
      "Recessed flush track design with hidden drainage channels",
      "Oversized panel sizes up to 12 feet in height",
      "Motorized automation and smart home interface available",
      "Superior wind and driving rain resistance",
    ],
    availabilityNote: "Supplied as aluminum systems. Standard sliding windows and doors may also be available in other materials.",
    image: materialsWoodGlazing,
    specs: {
      panelWeight: "Up to 400 kg (880 lbs) per panel",
      interlockSightline: "Narrow 20 mm - 30 mm interlock",
      thresholdHeight: "0 mm flush track option",
      glazing: "Up to 52 mm triple glass",
    },
  },
  {
    id: "punch-windows",
    name: "Architectural Punch Windows",
    category: "aluminum",
    systemType: "Individual Punched Openings",
    material: "Aluminum & Steel Options",
    badge: "Commercial & Residential",
    tagline: "Individual framed openings with structural perimeter flashings",
    description:
      "Individual standalone punched window openings engineered to frame designated views while maintaining solid high-performance exterior wall envelopes. Available in casement, tilt-and-turn, and fixed configurations.",
    features: [
      "Rigid perimeter receptor and sub-frame integration",
      "High wind-load resistance and water penetration ratings",
      "Custom anodized, powder-coated, or steel-patina finishes",
      "Dual and triple compression weather seals",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: materialsSteelMinimal,
    specs: {
      operation: "Tilt & Turn, Casement, Awning, Fixed",
      airTightness: "Class 4 (EN 12207)",
      waterTightness: "Class E1200",
      thermal: "U-values down to 0.85 W/m²K",
    },
  },
  {
    id: "wall-to-wall-windows",
    name: "Wall-to-Wall Ribbon Glazing",
    category: "aluminum",
    systemType: "Continuous Horizontal Glazing",
    material: "Aluminum & Wood Options",
    badge: "Expansive Spans",
    tagline: "Seamless horizontal ribbon windows spanning full room widths",
    description:
      "Expansive horizontal window arrays spanning the entire width of a space, maximizing natural illumination and dissolving boundaries between interior rooms and exterior landscapes.",
    features: [
      "Continuous horizontal mullion profiles with concealed expansion joints",
      "Integrated operable vents without disrupting ribbon sightlines",
      "Acoustic laminated glass packages for streetscape isolation",
      "Compatible with structural corner glass without corner posts",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: heroArchitecturalFacade,
    specs: {
      span: "Continuous spans up to 60+ feet",
      cornerGlazing: "All-glass silicone stepped corners",
      glazingOptions: "Low-iron Starphire, Low-E, Acoustic",
    },
  },
  {
    id: "arch-windows",
    name: "Arch & Radius Architectural Windows",
    category: "wood",
    systemType: "Custom Geometric Fenestration",
    material: "Wood, Steel & Aluminum",
    badge: "Custom Geometry",
    tagline: "Curved, gothic, and radius-topped architectural masterpieces",
    description:
      "Bespoke curved and radius-topped windows including half-circles, eyebrow arches, and gothic vaulted curves. Expertly crafted in solid laminated timber, bent Swiss steel, or radius aluminum extrusions.",
    features: [
      "True radius bending with uniform profile wall thickness",
      "Handcrafted European mortise-and-tenon timber arches",
      "Curved simulated divided lites aligned to radius radiants",
      "Custom bent insulated glass units with warm-edge spacers",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: materialsWoodGlazing,
    specs: {
      archTypes: "Half-Round, Segmental, Eyebrow, Gothic, Elliptical",
      materials: "Laminated White Oak, Pine, Steel, Aluminum",
      thermalRating: "Full dual/triple insulated thermal envelope",
    },
  },
  {
    id: "historical-simulated-windows",
    name: "Historical Windows & Simulated Divided Lites (SDLs)",
    category: "steel",
    systemType: "Landmark Heritage Replicas",
    material: "Steel, Wood & Aluminum",
    badge: "Historic Preservation",
    tagline: "Authentic multi-pane divided aesthetics with modern thermal integrity",
    description:
      "Replicating landmark multi-pane windows using permanently adhered exterior and interior SDL grilles with shadow spacer bars between the glass, achieving historic preservation compliance with modern energy codes.",
    features: [
      "Historically authentic putty-profile or beveled exterior bars",
      "Internal shadow spacer bars create the depth of true divided lites",
      "Approved for historic district and landmark preservation commissions",
      "Superior thermal insulation without individual small leaky glass panes",
    ],
    availabilityNote: "Product availability is determined by the selected system and project requirements.",
    image: materialsSteelMinimal,
    specs: {
      grilleWidths: "5/8\", 7/8\", 1-1/8\", or custom profile",
      muntinProfiles: "Ogee, Putty, Square, Trapezoidal",
      compliance: "Historic Preservation & Landmark standards",
    },
  },
];

export const PROJECTS_GALLERY = [
  {
    id: "project-1",
    title: "The Pavilion at Highland Ridge",
    type: "Commercial & Event Architecture",
    location: "Highland Valley, CA",
    system: "Architectural Aluminum Curtain Wall & Specialty Sliders",
    material: "Aluminum",
    glass: "Guardian SunGuard High Performance Low-E Triple Glazed",
    description:
      "Floor-to-ceiling panoramic glass pavilion with razor-thin structural profiles and custom sliding corner units. Wholesale supplied and delivered on-site with complete shop drawings.",
    image: heroArchitecturalFacade,
    specs: "3,400 sq.ft Glazing Area · 12ft Panel Heights · USA & European Tested",
  },
  {
    id: "project-2",
    title: "Mid-Century Modernist Residence",
    type: "Luxury Residential",
    location: "Greenwich, CT",
    system: "Ultra-Slim Swiss Steel French Doors & Divided Lites",
    material: "Steel",
    glass: "Saint-Gobain Low-Iron Double Insulated Glass",
    description:
      "Custom Swiss steel fenestration with ultra-narrow sightlines, bespoke hardware, and thermal-break engineering for cold-climate performance.",
    image: materialsSteelMinimal,
    specs: "Forster Steel Profiles · Simulated Divided Lites · Multi-Point Locking",
  },
  {
    id: "project-3",
    title: "125 Adelaide Commercial Headquarters",
    type: "Commercial Façade & Storefront",
    location: "Metropolitan District",
    system: "Reynaers Aluminum Storefront & Commercial Entrance",
    material: "Aluminum",
    glass: "Saint-Gobain Acoustic Laminated IGU",
    description:
      "Multi-story ground floor entrance with integrated balanced doors, structural corner glazing, and heavy-duty commercial mullions.",
    image: materialsAluminumCurtainwall,
    specs: "Reynaers SL38 & Curtain Wall · AAMA 2605 Finish · Job-Site Delivery",
  },
  {
    id: "project-4",
    title: "Cascade Mountain Alpine Retreat",
    type: "High-Performance Residential",
    location: "Sun Valley, ID",
    system: "Custom Laminated European Oak Pivot Windows",
    material: "Wood",
    glass: "Triple Pane Krypton-Filled Low-E Glass",
    description:
      "Monumental timber pivot windows framing expansive mountain views, engineered with multi-layer oak joinery and high thermal retention.",
    image: materialsWoodGlazing,
    specs: "European White Oak · Passive House Thermal Standard · Custom Hardware",
  },
  {
    id: "project-5",
    title: "Atrium Corporate Gallery",
    type: "Interior Commercial Glazing",
    location: "Chicago, IL",
    system: "Glass-Only Frameless Structural Partitions & Balustrades",
    material: "Architectural Glass",
    glass: "13/16\" Low-Iron Laminated Structural Glass Panels",
    description:
      "Precision cut glass-only supply without frames for museum-quality interior partitions, polished edge balustrades, and conference enclosures.",
    image: architecturalGlassDetail,
    specs: "Glass-Only Supply · Polished CNC Edges · SentryGlas Structural Interlayer",
  },
];
