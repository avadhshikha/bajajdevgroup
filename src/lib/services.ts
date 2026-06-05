import type { Metadata } from "next";
import { serviceAreas, siteConfig } from "@/lib/site";

export type ServiceSlug =
  | "civil-contractor-khargone"
  | "house-construction-khargone"
  | "building-construction-khargone"
  | "road-construction-khargone"
  | "renovation-khargone"
  | "construction-materials-khargone";

export type ServiceIcon =
  | "BadgeCheck"
  | "Building2"
  | "CheckCircle2"
  | "ClipboardCheck"
  | "FileText"
  | "HardHat"
  | "HomeIcon"
  | "MapPinned"
  | "MessageCircle"
  | "PackageCheck"
  | "Paintbrush"
  | "Phone"
  | "Route"
  | "ShieldCheck"
  | "Shovel"
  | "Truck";

type ServiceContentItem = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

type ServiceStep = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: ServiceSlug;
  menuTitle: string;
  pageTitle: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  overviewContent: string[];
  includedItems: ServiceContentItem[];
  benefits: ServiceContentItem[];
  whyChooseItems: ServiceContentItem[];
  processSteps: ServiceStep[];
  serviceAreas: string[];
  faqs: ServiceFaq[];
  relatedServices: ServiceSlug[];
  ctaHeadline: string;
  ctaDescription: string;
};

const allServiceSlugs: ServiceSlug[] = [
  "civil-contractor-khargone",
  "house-construction-khargone",
  "building-construction-khargone",
  "road-construction-khargone",
  "renovation-khargone",
  "construction-materials-khargone",
];

function canonicalUrl(slug: ServiceSlug) {
  return `${siteConfig.baseUrl}/${slug}/`;
}

function relatedServices(current: ServiceSlug): ServiceSlug[] {
  return allServiceSlugs.filter((slug) => slug !== current);
}

function createProcessSteps(serviceName: string): ServiceStep[] {
  return [
    {
      title: "Requirement Discussion",
      description:
        `We understand your ${serviceName.toLowerCase()} requirement, project location, budget, timeline, and expected outcome.`,
      icon: "MessageCircle",
    },
    {
      title: "Site Visit or Project Review",
      description:
        "Our team reviews the site or project requirement to understand practical execution needs.",
      icon: "MapPinned",
    },
    {
      title: "Planning and Estimate",
      description:
        "We prepare a clear work scope, material requirement, estimated cost, and execution approach.",
      icon: "FileText",
    },
    {
      title: "Work Execution",
      description:
        "The service work is carried out with coordination, supervision, material focus, and planned execution.",
      icon: "Shovel",
    },
    {
      title: "Final Review and Handover",
      description:
        "The completed work is checked and handed over with clear communication.",
      icon: "BadgeCheck",
    },
  ];
}

export const services: ServicePageData[] = [
  {
    slug: "civil-contractor-khargone",
    menuTitle: "Civil Work",
    pageTitle: "Civil Work",
    h1: "Civil Contractor in Khargone",
    primaryKeyword: "Civil Contractor in Khargone",
    secondaryKeywords: [
      "civil work in Khargone",
      "civil construction contractor Khargone",
      "RCC work contractor in Khargone",
      "civil repair work Khargone",
    ],
    metaTitle: "Civil Contractor in Khargone | Bajaj Developers",
    metaDescription:
      "Bajaj Developers and Group of Industries is a trusted civil contractor in Khargone offering civil work, house construction, building construction, road work, renovation, and construction material support.",
    canonicalUrl: canonicalUrl("civil-contractor-khargone"),
    heroDescription:
      "Bajaj Developers and Group of Industries provides reliable civil contractor services in Khargone, Madhya Pradesh for residential, commercial, private, and project-based construction requirements.",
    heroImage: "/images/03/building7.jpeg",
    heroImageAlt:
      "Bajaj Developers civil work in Khargone Madhya Pradesh",
    overviewContent: [
      "A civil contractor in Khargone helps plan and execute the core construction work that makes a project strong, practical, and ready for future use. Bajaj Developers and Group of Industries supports civil work for homes, commercial buildings, private properties, and project sites.",
      "Civil work in Khargone often needs local knowledge of site conditions, material availability, labour coordination, drainage needs, and practical execution challenges. Customers looking for RCC work, brickwork, plastering, foundation work, flooring support, or civil repair need a contractor who can communicate clearly and work with a planned approach.",
      "Bajaj Developers helps customers by reviewing the requirement, understanding the site, guiding material choices, and coordinating the execution steps. Good civil construction depends on planning, suitable materials, supervision, and honest communication from the first discussion to the final review.",
    ],
    includedItems: [
      {
        title: "Site preparation",
        description:
          "Basic site readiness support for civil work, including practical review of access, levels, and work conditions.",
        icon: "MapPinned",
      },
      {
        title: "Foundation work",
        description:
          "Foundation-related execution support based on project design, soil condition, and site requirement.",
        icon: "ShieldCheck",
      },
      {
        title: "RCC and structural work",
        description:
          "RCC and structural civil work coordination with focus on strength, sequence, and material quality.",
        icon: "Building2",
      },
      {
        title: "Brickwork and plastering",
        description:
          "Wall construction, masonry, plastering, and related finishing preparation for residential and commercial needs.",
        icon: "Shovel",
      },
      {
        title: "Flooring and finishing support",
        description:
          "Civil finishing support that helps prepare the property for practical use and long-term maintenance.",
        icon: "Paintbrush",
      },
      {
        title: "Civil repair and maintenance",
        description:
          "Repair-based civil work for existing homes, shops, buildings, and project structures.",
        icon: "ClipboardCheck",
      },
    ],
    whyChooseItems: [
      {
        title: "Local Khargone Knowledge",
        description:
          "We understand local site conditions, construction requirements, and practical civil work needs in Khargone.",
        icon: "MapPinned",
      },
      {
        title: "Clear Project Planning",
        description:
          "Civil work is discussed with clear scope, sequence, material requirement, and expected execution approach.",
        icon: "ClipboardCheck",
      },
      {
        title: "Quality Material Focus",
        description:
          "We guide customers toward suitable material choices for stronger and more durable civil construction.",
        icon: "PackageCheck",
      },
      {
        title: "Practical Site Execution",
        description:
          "Our process focuses on coordination, supervision, and steady site progress based on the work scope.",
        icon: "HardHat",
      },
      {
        title: "Residential and Commercial Support",
        description:
          "We support civil requirements for homes, buildings, commercial properties, and project-based work.",
        icon: "Building2",
      },
      {
        title: "Easy Call and WhatsApp Communication",
        description:
          "Customers can discuss civil work needs quickly through call or WhatsApp before the next step.",
        icon: "Phone",
      },
    ],
    processSteps: createProcessSteps("Civil Work"),
    serviceAreas,
    benefits: [
      {
        title: "Better project planning",
        description:
          "A planned civil work scope helps reduce confusion around sequence, materials, labour, and site readiness.",
        icon: "ClipboardCheck",
      },
      {
        title: "Better material selection",
        description:
          "Civil work benefits from suitable cement, steel, aggregates, bricks, and finishing materials.",
        icon: "PackageCheck",
      },
      {
        title: "Improved durability",
        description:
          "Proper foundation, RCC, masonry, and finishing decisions help improve long-term structure performance.",
        icon: "ShieldCheck",
      },
      {
        title: "Clear communication",
        description:
          "Regular communication helps customers understand work progress, site needs, and practical next steps.",
        icon: "MessageCircle",
      },
      {
        title: "Better long-term value",
        description:
          "Reliable civil work improves usability, maintenance value, and confidence in the finished property.",
        icon: "BadgeCheck",
      },
    ],
    faqs: [
      {
        question: "Who is a reliable civil contractor in Khargone?",
        answer:
          "Bajaj Developers and Group of Industries provides civil contractor services in Khargone for residential, commercial, private, and project-based construction requirements.",
      },
      {
        question: "What civil work services do you provide?",
        answer:
          "We support foundation work, RCC work, brickwork, plastering, flooring support, civil repair, and construction-related civil execution based on project needs.",
      },
      {
        question: "Do you provide civil work for houses and commercial buildings?",
        answer:
          "Yes, Bajaj Developers supports civil work for house construction, building construction, commercial projects, renovation, and related construction requirements.",
      },
      {
        question: "Do you provide site visits in Khargone?",
        answer:
          "Customers can contact us by phone, WhatsApp, or inquiry to discuss their requirement and next steps for site review.",
      },
      {
        question: "Which areas do you serve?",
        answer:
          "We serve Khargone and nearby areas including Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani, and nearby Madhya Pradesh regions.",
      },
      {
        question: "How can I contact Bajaj Developers for civil work?",
        answer:
          "You can call or WhatsApp Bajaj Developers to discuss your civil work requirement and request the next steps.",
      },
    ],
    relatedServices: relatedServices("civil-contractor-khargone"),
    ctaHeadline: "Looking for Civil Work in Khargone?",
    ctaDescription:
      "Talk to Bajaj Developers and Group of Industries for reliable civil work services in Khargone and nearby Madhya Pradesh regions.",
  },
  {
    slug: "house-construction-khargone",
    menuTitle: "House Construction",
    pageTitle: "House Construction",
    h1: "House Construction in Khargone",
    primaryKeyword: "House Construction in Khargone",
    secondaryKeywords: [
      "home construction in Khargone",
      "new house construction Khargone",
      "residential construction contractor Khargone",
      "house construction planning Khargone",
    ],
    metaTitle: "House Construction in Khargone | Bajaj Developers",
    metaDescription:
      "Looking for house construction in Khargone? Bajaj Developers provides reliable home construction services with planning, civil work, material guidance, and site execution.",
    canonicalUrl: canonicalUrl("house-construction-khargone"),
    heroDescription:
      "Bajaj Developers and Group of Industries provides house construction in Khargone, Madhya Pradesh with planning support, civil work execution, material guidance, and practical site coordination.",
    heroImage: "/images/03/building1.jpeg",
    heroImageAlt:
      "Bajaj Developers house construction in Khargone Madhya Pradesh",
    overviewContent: [
      "House construction in Khargone requires careful planning before site work begins. Bajaj Developers and Group of Industries helps homeowners move from requirement discussion to practical site execution with a focus on structure, materials, budget clarity, and communication.",
      "A new home construction project needs decisions around layout, foundation, RCC structure, masonry, plastering, finishing, and material choices. Local homeowners need a contractor who understands Khargone site conditions, nearby material availability, and the importance of dependable coordination.",
      "Bajaj Developers supports residential construction customers with planning guidance, civil work execution, material discussion, and site-level coordination. The aim is to help customers build homes that are practical, durable, and aligned with their scope and expectations.",
    ],
    includedItems: [
      {
        title: "New home construction",
        description:
          "Construction support for new homes based on site condition, layout needs, and customer scope.",
        icon: "HomeIcon",
      },
      {
        title: "Layout and planning support",
        description:
          "Practical planning discussion for room layout, work sequence, material needs, and site readiness.",
        icon: "FileText",
      },
      {
        title: "Foundation and structure",
        description:
          "Foundation and structure-related execution with attention to durability and construction sequence.",
        icon: "ShieldCheck",
      },
      {
        title: "Brickwork, plastering, and finishing",
        description:
          "Residential masonry, plastering, and finishing support for a complete home construction scope.",
        icon: "Paintbrush",
      },
      {
        title: "Material guidance",
        description:
          "Material discussion for cement, steel, bricks, aggregates, flooring, and other home construction needs.",
        icon: "PackageCheck",
      },
      {
        title: "Site coordination",
        description:
          "Site-level coordination to keep the house construction work moving with clear communication.",
        icon: "ClipboardCheck",
      },
    ],
    whyChooseItems: [
      {
        title: "Local Khargone Knowledge",
        description:
          "We understand local home construction requirements, site conditions, and customer expectations in Khargone.",
        icon: "MapPinned",
      },
      {
        title: "Clear Project Planning",
        description:
          "House construction begins with scope discussion, material planning, budget clarity, and practical timelines.",
        icon: "ClipboardCheck",
      },
      {
        title: "Quality Material Focus",
        description:
          "We guide homeowners toward suitable material choices for strength, finishing, and long-term home value.",
        icon: "PackageCheck",
      },
      {
        title: "Practical Site Execution",
        description:
          "Residential construction work is coordinated step by step so customers understand progress and needs.",
        icon: "HardHat",
      },
      {
        title: "Residential and Commercial Support",
        description:
          "Our broader construction experience supports both individual homes and related building requirements.",
        icon: "HomeIcon",
      },
      {
        title: "Easy Call and WhatsApp Communication",
        description:
          "Homeowners can quickly share site details and requirements through phone or WhatsApp.",
        icon: "Phone",
      },
    ],
    processSteps: createProcessSteps("House Construction"),
    serviceAreas,
    benefits: [
      {
        title: "Better project planning",
        description:
          "Clear planning helps homeowners understand work scope, budget needs, material flow, and execution stages.",
        icon: "ClipboardCheck",
      },
      {
        title: "Better material selection",
        description:
          "Suitable materials improve foundation strength, wall quality, finishing, and future maintenance.",
        icon: "PackageCheck",
      },
      {
        title: "Improved durability",
        description:
          "Good residential construction decisions support a stronger and more comfortable home over time.",
        icon: "ShieldCheck",
      },
      {
        title: "Clear communication",
        description:
          "Regular updates make it easier for homeowners to manage decisions and understand next steps.",
        icon: "MessageCircle",
      },
      {
        title: "Better long-term value",
        description:
          "A well-planned home can improve usability, resale value, and day-to-day satisfaction.",
        icon: "BadgeCheck",
      },
    ],
    faqs: [
      {
        question: "Do you provide house construction in Khargone?",
        answer:
          "Yes, Bajaj Developers provides house construction services in Khargone with support for planning, civil work, material guidance, and site execution.",
      },
      {
        question: "Can you help with complete home construction?",
        answer:
          "Yes, we support end-to-end house construction work based on project scope, budget, site conditions, and customer requirements.",
      },
      {
        question: "What is important before starting house construction?",
        answer:
          "Proper planning, budget clarity, site review, material selection, foundation quality, and reliable execution are important before starting house construction.",
      },
      {
        question: "Do you help with material selection?",
        answer:
          "Yes, we guide customers toward suitable construction materials based on the project requirement and expected durability.",
      },
      {
        question: "Which areas do you serve for house construction?",
        answer:
          "We serve Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani, and nearby areas.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "You can call or WhatsApp Bajaj Developers to discuss your house construction requirement and request the next steps.",
      },
    ],
    relatedServices: relatedServices("house-construction-khargone"),
    ctaHeadline: "Looking for House Construction in Khargone?",
    ctaDescription:
      "Talk to Bajaj Developers and Group of Industries for reliable house construction services in Khargone and nearby Madhya Pradesh regions.",
  },
  {
    slug: "building-construction-khargone",
    menuTitle: "Building Construction",
    pageTitle: "Building Construction",
    h1: "Building Construction in Khargone",
    primaryKeyword: "Building Construction in Khargone",
    secondaryKeywords: [
      "commercial building construction Khargone",
      "residential building contractor Khargone",
      "shop construction in Khargone",
      "office construction Khargone",
    ],
    metaTitle: "Building Construction in Khargone | Bajaj Developers",
    metaDescription:
      "Bajaj Developers offers building construction in Khargone for residential, commercial, and project-based requirements with planned execution and quality material focus.",
    canonicalUrl: canonicalUrl("building-construction-khargone"),
    heroDescription:
      "Bajaj Developers and Group of Industries provides building construction in Khargone, Madhya Pradesh for residential, commercial, shop, office, and project-based requirements.",
    heroImage: "/images/03/building10.jpeg",
    heroImageAlt:
      "Bajaj Developers building construction in Khargone Madhya Pradesh",
    overviewContent: [
      "Building construction in Khargone covers residential buildings, commercial buildings, shops, offices, and project-based structures. Bajaj Developers and Group of Industries supports customers who need a clear construction plan, reliable civil execution, and practical site coordination.",
      "Commercial and residential building work requires careful planning around foundation, RCC structure, brickwork, plastering, finishing, access, and material use. Local customers in Khargone benefit from a contractor who understands site conditions, local material availability, and communication needs.",
      "Bajaj Developers helps property owners, business owners, homeowners, and project clients with building construction support that focuses on planning, material suitability, quality execution, and clear handover expectations.",
    ],
    includedItems: [
      {
        title: "Residential building construction",
        description:
          "Construction support for residential buildings based on family needs, site scope, and practical planning.",
        icon: "HomeIcon",
      },
      {
        title: "Commercial building construction",
        description:
          "Commercial building work for business properties, rental spaces, and project-based requirements.",
        icon: "Building2",
      },
      {
        title: "Shop and office construction",
        description:
          "Construction support for shops, offices, and functional business spaces in Khargone.",
        icon: "ClipboardCheck",
      },
      {
        title: "RCC structure work",
        description:
          "RCC and structural construction support with focus on sequence, strength, and material quality.",
        icon: "ShieldCheck",
      },
      {
        title: "Finishing and handover support",
        description:
          "Finishing support that helps prepare the building for practical use and final review.",
        icon: "Paintbrush",
      },
      {
        title: "Project-based execution",
        description:
          "Building construction coordination for larger or staged requirements based on project scope.",
        icon: "FileText",
      },
    ],
    whyChooseItems: [
      {
        title: "Local Khargone Knowledge",
        description:
          "We understand local building needs, plot conditions, market expectations, and material availability.",
        icon: "MapPinned",
      },
      {
        title: "Clear Project Planning",
        description:
          "Building construction is scoped with practical stages, material planning, and work sequence clarity.",
        icon: "ClipboardCheck",
      },
      {
        title: "Quality Material Focus",
        description:
          "Material decisions are guided around strength, finishing quality, durability, and long-term use.",
        icon: "PackageCheck",
      },
      {
        title: "Practical Site Execution",
        description:
          "Our approach keeps building construction work coordinated from foundation to finishing support.",
        icon: "HardHat",
      },
      {
        title: "Residential and Commercial Support",
        description:
          "We support buildings for homes, shops, offices, commercial properties, and project needs.",
        icon: "Building2",
      },
      {
        title: "Easy Call and WhatsApp Communication",
        description:
          "Customers can discuss building requirements, scope, and next steps directly by phone or WhatsApp.",
        icon: "Phone",
      },
    ],
    processSteps: createProcessSteps("Building Construction"),
    serviceAreas,
    benefits: [
      {
        title: "Better project planning",
        description:
          "Planned building work helps align structure, budget, timeline, and final use of the property.",
        icon: "ClipboardCheck",
      },
      {
        title: "Better material selection",
        description:
          "Suitable materials help commercial and residential buildings perform better over time.",
        icon: "PackageCheck",
      },
      {
        title: "Improved durability",
        description:
          "Careful structure, masonry, finishing, and supervision improve building durability.",
        icon: "ShieldCheck",
      },
      {
        title: "Clear communication",
        description:
          "Property owners receive practical guidance around scope, work progress, and project needs.",
        icon: "MessageCircle",
      },
      {
        title: "Better long-term value",
        description:
          "Reliable building construction improves usability for residential, rental, and commercial purposes.",
        icon: "BadgeCheck",
      },
    ],
    faqs: [
      {
        question: "Do you provide building construction in Khargone?",
        answer:
          "Yes, Bajaj Developers provides building construction services in Khargone for residential, commercial, and project-based requirements.",
      },
      {
        question: "Do you handle commercial building construction?",
        answer:
          "Yes, we support commercial building construction for shops, offices, business properties, and other project needs.",
      },
      {
        question: "What types of building projects do you handle?",
        answer:
          "We support residential buildings, commercial buildings, shops, offices, renovation-related building work, and civil construction requirements.",
      },
      {
        question: "Why choose a local building contractor in Khargone?",
        answer:
          "A local contractor understands local material availability, site conditions, communication needs, and practical execution challenges.",
      },
      {
        question: "Can I contact you for project planning?",
        answer:
          "Yes, customers can contact Bajaj Developers by call or WhatsApp to discuss project planning and next steps.",
      },
      {
        question: "Which nearby areas do you serve?",
        answer:
          "We serve Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani, and surrounding regions.",
      },
    ],
    relatedServices: relatedServices("building-construction-khargone"),
    ctaHeadline: "Looking for Building Construction in Khargone?",
    ctaDescription:
      "Talk to Bajaj Developers and Group of Industries for reliable building construction services in Khargone and nearby Madhya Pradesh regions.",
  },
  {
    slug: "road-construction-khargone",
    menuTitle: "Road Work",
    pageTitle: "Road Construction",
    h1: "Road Construction in Khargone",
    primaryKeyword: "Road Construction in Khargone",
    secondaryKeywords: [
      "road work contractor Khargone",
      "internal road work Khargone",
      "civil infrastructure work Khargone",
      "road repair work Khargone",
    ],
    metaTitle: "Road Construction Contractor in Khargone | Bajaj Developers",
    metaDescription:
      "Bajaj Developers provides road construction and civil infrastructure work in Khargone with focus on planning, durability, material quality, and practical site execution.",
    canonicalUrl: canonicalUrl("road-construction-khargone"),
    heroDescription:
      "Bajaj Developers and Group of Industries provides road construction and road work support in Khargone, Madhya Pradesh with planned execution, material focus, and civil infrastructure understanding.",
    heroImage: "/images/03/road1.jpeg",
    heroImageAlt:
      "Bajaj Developers road construction in Khargone Madhya Pradesh",
    overviewContent: [
      "Road construction in Khargone requires planning around surface preparation, base strength, material selection, drainage, and practical site movement. Bajaj Developers and Group of Industries supports road work and civil infrastructure-related requirements based on project scope.",
      "Customers may need internal road work, road repair, patch work, drainage-related civil work, or surface preparation for private properties, project areas, commercial premises, or local infrastructure needs. A reliable local contractor helps review the site and plan execution before work starts.",
      "Bajaj Developers helps customers understand road work requirements, material needs, site constraints, and execution steps. Planned road construction can improve durability, drainage, movement, and long-term usability of the site.",
    ],
    includedItems: [
      {
        title: "Internal road work",
        description:
          "Road work support for internal property roads, project movement areas, and site access needs.",
        icon: "Route",
      },
      {
        title: "Road construction support",
        description:
          "Construction support for road-related civil requirements based on site and project scope.",
        icon: "Truck",
      },
      {
        title: "Road repair and patch work",
        description:
          "Repair and patch work support for damaged surfaces and practical improvement needs.",
        icon: "ClipboardCheck",
      },
      {
        title: "Drainage-related civil work",
        description:
          "Civil work support where road performance depends on drainage planning and water movement.",
        icon: "MapPinned",
      },
      {
        title: "Surface preparation",
        description:
          "Base and surface preparation support for better road finish and long-term usability.",
        icon: "Shovel",
      },
      {
        title: "Civil infrastructure support",
        description:
          "Project-based civil infrastructure work connected to roads, access, and site development.",
        icon: "Building2",
      },
    ],
    whyChooseItems: [
      {
        title: "Local Khargone Knowledge",
        description:
          "We understand local road work conditions, access needs, material movement, and practical site challenges.",
        icon: "MapPinned",
      },
      {
        title: "Clear Project Planning",
        description:
          "Road work is planned around surface needs, drainage, materials, access, and expected use.",
        icon: "ClipboardCheck",
      },
      {
        title: "Quality Material Focus",
        description:
          "Suitable material planning supports better surface performance, strength, and long-term usability.",
        icon: "PackageCheck",
      },
      {
        title: "Practical Site Execution",
        description:
          "Road construction needs steady execution with surface preparation, coordination, and supervision.",
        icon: "HardHat",
      },
      {
        title: "Residential and Commercial Support",
        description:
          "We support private, commercial, project-based, and infrastructure-related road work requirements.",
        icon: "Truck",
      },
      {
        title: "Easy Call and WhatsApp Communication",
        description:
          "Customers can share road work details, location, and site needs through call or WhatsApp.",
        icon: "Phone",
      },
    ],
    processSteps: createProcessSteps("Road Construction"),
    serviceAreas,
    benefits: [
      {
        title: "Better project planning",
        description:
          "Road work planning helps clarify drainage, base preparation, movement needs, and execution sequence.",
        icon: "ClipboardCheck",
      },
      {
        title: "Better material selection",
        description:
          "Suitable road materials and base preparation choices improve strength and usability.",
        icon: "PackageCheck",
      },
      {
        title: "Improved durability",
        description:
          "Planned road construction supports better surface quality, drainage, and long-term performance.",
        icon: "ShieldCheck",
      },
      {
        title: "Clear communication",
        description:
          "Project owners receive practical updates around site work, material needs, and execution progress.",
        icon: "MessageCircle",
      },
      {
        title: "Better long-term value",
        description:
          "Reliable road work can improve access, movement, safety, and property usability.",
        icon: "BadgeCheck",
      },
    ],
    faqs: [
      {
        question: "Do you provide road construction work in Khargone?",
        answer:
          "Yes, Bajaj Developers provides road work and civil infrastructure-related services in Khargone based on project requirements.",
      },
      {
        question: "What types of road work do you support?",
        answer:
          "We support internal road work, road repair, patch work, drainage-related civil work, surface preparation, and infrastructure-related civil execution.",
      },
      {
        question: "Do you work on private and project-based road work?",
        answer:
          "Yes, road work can be discussed based on project type, site conditions, required scope, and execution needs.",
      },
      {
        question: "Why is planning important in road construction?",
        answer:
          "Proper planning helps improve durability, drainage, surface quality, material usage, and long-term performance of road work.",
      },
      {
        question: "Do you serve areas outside Khargone?",
        answer:
          "Yes, we serve nearby areas including Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani, and nearby Madhya Pradesh regions.",
      },
      {
        question: "How can I request road work support?",
        answer:
          "You can call or WhatsApp Bajaj Developers to discuss your road work requirement and request the next steps.",
      },
    ],
    relatedServices: relatedServices("road-construction-khargone"),
    ctaHeadline: "Looking for Road Construction in Khargone?",
    ctaDescription:
      "Talk to Bajaj Developers and Group of Industries for reliable road construction services in Khargone and nearby Madhya Pradesh regions.",
  },
  {
    slug: "renovation-khargone",
    menuTitle: "Renovation",
    pageTitle: "Building Renovation",
    h1: "Building Renovation in Khargone",
    primaryKeyword: "Building Renovation in Khargone",
    secondaryKeywords: [
      "home renovation in Khargone",
      "commercial renovation Khargone",
      "old building renovation Khargone",
      "structural repair support Khargone",
    ],
    metaTitle: "Building Renovation in Khargone | Bajaj Developers",
    metaDescription:
      "Bajaj Developers provides building renovation in Khargone for homes, offices, commercial spaces, old structures, repairs, upgrades, and property improvement work.",
    canonicalUrl: canonicalUrl("renovation-khargone"),
    heroDescription:
      "Bajaj Developers and Group of Industries provides building renovation in Khargone, Madhya Pradesh for homes, offices, commercial spaces, old structures, repairs, and upgrade requirements.",
    heroImage: "/images/03/renovation6.jpeg",
    heroImageAlt:
      "Bajaj Developers building renovation in Khargone Madhya Pradesh",
    overviewContent: [
      "Building renovation in Khargone helps improve old homes, offices, shops, commercial spaces, and structures that need repair, upgrade, or better finishing. Bajaj Developers and Group of Industries supports renovation work based on condition, scope, budget, and expected use.",
      "Renovation requires careful site review because existing structures can have hidden repair needs, plastering issues, flooring damage, layout limitations, or structural concerns. Local customers need a renovation contractor who understands practical repair work and material choices in Khargone.",
      "Bajaj Developers helps property owners plan renovation work with clear discussion, site review, material guidance, and step-by-step execution. Good renovation improves usability, safety, finishing quality, and long-term property value.",
    ],
    includedItems: [
      {
        title: "Old building renovation",
        description:
          "Renovation support for old structures that need repair, improvement, or updated finishing.",
        icon: "Building2",
      },
      {
        title: "Home renovation",
        description:
          "Home renovation work for rooms, walls, floors, repairs, and practical family use upgrades.",
        icon: "HomeIcon",
      },
      {
        title: "Commercial renovation",
        description:
          "Renovation support for offices, shops, business spaces, and commercial properties.",
        icon: "ClipboardCheck",
      },
      {
        title: "Structural repair support",
        description:
          "Repair-related support based on structure condition, project scope, and practical site needs.",
        icon: "ShieldCheck",
      },
      {
        title: "Interior upgrade support",
        description:
          "Interior improvement support for more usable, clean, and functional spaces.",
        icon: "Paintbrush",
      },
      {
        title: "Plastering, flooring, and finishing",
        description:
          "Finishing work support including plastering, flooring, repair, and final surface improvements.",
        icon: "Shovel",
      },
    ],
    whyChooseItems: [
      {
        title: "Local Khargone Knowledge",
        description:
          "We understand local renovation needs, older property conditions, and available material options.",
        icon: "MapPinned",
      },
      {
        title: "Clear Project Planning",
        description:
          "Renovation scope is discussed carefully so repair, upgrade, budget, and timeline expectations are clear.",
        icon: "ClipboardCheck",
      },
      {
        title: "Quality Material Focus",
        description:
          "Suitable materials help improve finish, durability, repair quality, and maintenance value.",
        icon: "PackageCheck",
      },
      {
        title: "Practical Site Execution",
        description:
          "Renovation work is handled with attention to existing structure conditions and usable site flow.",
        icon: "HardHat",
      },
      {
        title: "Residential and Commercial Support",
        description:
          "We support renovation for homes, offices, shops, commercial spaces, and older properties.",
        icon: "Building2",
      },
      {
        title: "Easy Call and WhatsApp Communication",
        description:
          "Customers can share photos, location, and renovation needs through WhatsApp before review.",
        icon: "Phone",
      },
    ],
    processSteps: createProcessSteps("Building Renovation"),
    serviceAreas,
    benefits: [
      {
        title: "Better project planning",
        description:
          "Renovation planning helps separate repair needs, upgrade wishes, budget limits, and work sequence.",
        icon: "ClipboardCheck",
      },
      {
        title: "Better material selection",
        description:
          "Material choices affect finishing quality, repair strength, and future maintenance needs.",
        icon: "PackageCheck",
      },
      {
        title: "Improved durability",
        description:
          "Proper repair and finishing decisions help renovated properties last longer and function better.",
        icon: "ShieldCheck",
      },
      {
        title: "Clear communication",
        description:
          "Renovation often changes as site conditions are reviewed, so clear communication matters.",
        icon: "MessageCircle",
      },
      {
        title: "Better long-term value",
        description:
          "A practical renovation can improve comfort, appearance, usability, and property value.",
        icon: "BadgeCheck",
      },
    ],
    faqs: [
      {
        question: "Do you provide building renovation in Khargone?",
        answer:
          "Yes, Bajaj Developers provides renovation services in Khargone for homes, offices, commercial properties, old structures, and repair-based requirements.",
      },
      {
        question: "What renovation work do you handle?",
        answer:
          "We support old building renovation, home renovation, commercial renovation, structural repair support, plastering, flooring, finishing, and upgrade work.",
      },
      {
        question: "Can you renovate old houses?",
        answer:
          "Yes, old house renovation can be discussed based on structure condition, repair needs, budget, and required improvements.",
      },
      {
        question: "Why should I choose a local renovation contractor?",
        answer:
          "A local renovation contractor can understand site conditions, local material availability, customer expectations, and practical repair needs.",
      },
      {
        question: "Do you provide renovation for commercial properties?",
        answer:
          "Yes, we support renovation work for offices, shops, commercial spaces, and other property types.",
      },
      {
        question: "How can I get a renovation quote?",
        answer:
          "You can contact Bajaj Developers by call or WhatsApp to discuss your renovation requirement and request the next steps.",
      },
    ],
    relatedServices: relatedServices("renovation-khargone"),
    ctaHeadline: "Looking for Building Renovation in Khargone?",
    ctaDescription:
      "Talk to Bajaj Developers and Group of Industries for reliable building renovation services in Khargone and nearby Madhya Pradesh regions.",
  },
  {
    slug: "construction-materials-khargone",
    menuTitle: "Materials",
    pageTitle: "Construction Materials",
    h1: "Construction Materials in Khargone",
    primaryKeyword: "Construction Materials in Khargone",
    secondaryKeywords: [
      "construction material support Khargone",
      "cement steel bricks Khargone",
      "building material planning Khargone",
      "construction material coordination Khargone",
    ],
    metaTitle: "Construction Materials in Khargone | Bajaj Developers",
    metaDescription:
      "Bajaj Developers supports construction material requirements in Khargone for civil work, house construction, building projects, road work, and renovation needs.",
    canonicalUrl: canonicalUrl("construction-materials-khargone"),
    heroDescription:
      "Bajaj Developers and Group of Industries supports construction materials in Khargone, Madhya Pradesh for civil work, house construction, building projects, road work, and renovation needs.",
    heroImage: "/images/03/construction-material8.jpeg",
    heroImageAlt:
      "Bajaj Developers construction materials in Khargone Madhya Pradesh",
    overviewContent: [
      "Construction materials in Khargone are important for every civil work, house construction, building construction, road work, and renovation requirement. Bajaj Developers and Group of Industries supports customers with practical material planning and coordination based on project needs.",
      "Material requirements can include cement, sand, aggregates, steel, bricks, and other project-related construction items. Local customers need guidance because material choice, quantity planning, availability, and site timing can directly affect project quality and cost control.",
      "Bajaj Developers helps homeowners, contractors, business owners, property owners, and project clients understand material needs for their construction work. Suitable materials and planned coordination support better strength, finishing quality, durability, and long-term value.",
    ],
    includedItems: [
      {
        title: "Cement support",
        description:
          "Cement requirement support based on civil work, building construction, and renovation needs.",
        icon: "PackageCheck",
      },
      {
        title: "Sand and aggregate support",
        description:
          "Material planning support for sand, aggregate, and related site requirements.",
        icon: "Shovel",
      },
      {
        title: "Steel and brick support",
        description:
          "Steel, brick, and masonry material guidance for construction and repair work.",
        icon: "Building2",
      },
      {
        title: "Site material planning",
        description:
          "Planning support for material quantity, sequence, and practical site movement needs.",
        icon: "ClipboardCheck",
      },
      {
        title: "Material supply coordination",
        description:
          "Coordination support so materials can be discussed based on project scope and availability.",
        icon: "Truck",
      },
      {
        title: "Construction project material support",
        description:
          "Material support for civil work, homes, buildings, road work, and renovation projects.",
        icon: "HardHat",
      },
    ],
    whyChooseItems: [
      {
        title: "Local Khargone Knowledge",
        description:
          "We understand local construction material requirements, availability, and site coordination needs.",
        icon: "MapPinned",
      },
      {
        title: "Clear Project Planning",
        description:
          "Material needs are discussed with project scope, work stage, budget, and timing in mind.",
        icon: "ClipboardCheck",
      },
      {
        title: "Quality Material Focus",
        description:
          "We focus on suitable material choices that support strength, durability, and finishing quality.",
        icon: "PackageCheck",
      },
      {
        title: "Practical Site Execution",
        description:
          "Good material coordination helps reduce site delays and supports smooth construction progress.",
        icon: "HardHat",
      },
      {
        title: "Residential and Commercial Support",
        description:
          "We support material requirements for homes, commercial buildings, roads, civil work, and renovation.",
        icon: "Building2",
      },
      {
        title: "Easy Call and WhatsApp Communication",
        description:
          "Customers can discuss material needs, project type, and site location quickly by phone or WhatsApp.",
        icon: "Phone",
      },
    ],
    processSteps: createProcessSteps("Construction Materials"),
    serviceAreas,
    benefits: [
      {
        title: "Better project planning",
        description:
          "Material planning helps clarify quantity, timing, budget, and site storage needs before work begins.",
        icon: "ClipboardCheck",
      },
      {
        title: "Better material selection",
        description:
          "Suitable cement, steel, sand, aggregate, and brick choices support stronger construction work.",
        icon: "PackageCheck",
      },
      {
        title: "Improved durability",
        description:
          "Construction quality depends heavily on materials that match the project need and expected use.",
        icon: "ShieldCheck",
      },
      {
        title: "Clear communication",
        description:
          "Material coordination becomes easier when requirements, availability, and site timing are discussed clearly.",
        icon: "MessageCircle",
      },
      {
        title: "Better long-term value",
        description:
          "Right material decisions can reduce avoidable repair needs and improve overall project value.",
        icon: "BadgeCheck",
      },
    ],
    faqs: [
      {
        question: "Do you provide construction materials in Khargone?",
        answer:
          "Yes, Bajaj Developers supports construction material requirements in Khargone for civil work, house construction, building projects, road work, and renovation needs.",
      },
      {
        question: "What types of construction materials do you support?",
        answer:
          "We support material requirements such as cement, sand, aggregate, steel, bricks, and other project-related construction materials based on availability and requirement.",
      },
      {
        question: "Can you help with material planning for a house?",
        answer:
          "Yes, we can help customers understand material requirements for house construction, civil work, building projects, and renovation work.",
      },
      {
        question: "Why is material quality important?",
        answer:
          "Suitable material selection helps improve strength, durability, finishing quality, and long-term value of construction work.",
      },
      {
        question: "Do you supply materials for commercial projects?",
        answer:
          "Material support can be discussed for residential, commercial, civil, road work, and project-based construction needs.",
      },
      {
        question: "How can I contact Bajaj Developers for materials?",
        answer:
          "You can call or WhatsApp Bajaj Developers to discuss your construction material requirement and request the next steps.",
      },
    ],
    relatedServices: relatedServices("construction-materials-khargone"),
    ctaHeadline: "Looking for Construction Materials in Khargone?",
    ctaDescription:
      "Talk to Bajaj Developers and Group of Industries for reliable construction material support in Khargone and nearby Madhya Pradesh regions.",
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServicePageData>;

export function buildServiceMetadata(service: ServicePageData): Metadata {
  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    alternates: {
      canonical: service.canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: service.canonicalUrl,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}
