import { serviceAreas, serviceLinks, siteConfig } from "@/lib/site";

const absoluteHeroImage = `${siteConfig.baseUrl}${siteConfig.heroImage}`;
const postalAddressSchema = {
  "@type": "PostalAddress",
  addressLocality: siteConfig.city,
  addressRegion: siteConfig.state,
  postalCode: "451001",
  addressCountry: siteConfig.country,
};

export const homeFaqs = [
  {
    question: "Which is the best civil contractor in Khargone?",
    answer:
      "The best civil contractor depends on project scope, planning, material quality, and site execution. Bajaj Developers provides local civil contractor services in Khargone with a focus on clear estimates, quality work, and timely communication.",
  },
  {
    question: "Do you provide house construction services in Khargone?",
    answer:
      "Yes. Bajaj Developers provides house construction services in Khargone, including site visit, planning support, material selection, construction execution, and final handover.",
  },
  {
    question: "Do you handle road construction work?",
    answer:
      "Yes. The company handles road work and civil infrastructure requirements for private, commercial, and public project needs in and around Khargone.",
  },
  {
    question: "Do you provide construction material supply?",
    answer:
      "Yes. Bajaj Developers supports construction material supply for project needs, including cement, steel, aggregates, bricks, and related material coordination.",
  },
  {
    question: "Do you offer site visits?",
    answer:
      "Yes. You can request a site visit by phone, WhatsApp, or the quote form on the website.",
  },
  {
    question: "How can I get a construction estimate?",
    answer:
      "Share your project type, location, plot details, and expected work scope by phone or WhatsApp. The team can then guide you with the next steps for a site visit and estimate.",
  },
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.baseUrl}/#organization`,
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  logo: absoluteHeroImage,
  image: absoluteHeroImage,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: postalAddressSchema,
  sameAs: ["https://share.google/Peau4fIsDciy15ix4"],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": `${siteConfig.baseUrl}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.baseUrl,
  logo: absoluteHeroImage,
  image: absoluteHeroImage,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "Contact for estimate",
  address: postalAddressSchema,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.8234,
    longitude: 75.6118,
  },
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services",
    itemListElement: serviceLinks.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${siteConfig.baseUrl}${service.href}`,
      },
    })),
  },
  sameAs: ["https://share.google/Peau4fIsDciy15ix4"],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Construction and Civil Contractor Services in Khargone",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: postalAddressSchema,
  },
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  serviceType: serviceLinks.map((service) => service.label),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.baseUrl}/#website`,
  url: siteConfig.baseUrl,
  name: siteConfig.shortName,
  publisher: {
    "@id": `${siteConfig.baseUrl}/#business`,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.baseUrl,
    },
  ],
};
