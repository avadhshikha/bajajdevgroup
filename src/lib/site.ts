export const siteConfig = {
  name: "Bajaj Developers and Group of Industries",
  shortName: "Bajaj Developers",
  tagline: "Trusted Civil Contractor & Construction Company in Khargone",
  description:
    "Bajaj Developers and Group of Industries provides civil work, house construction, building construction, road work, renovation, and construction material services in Khargone, Madhya Pradesh.",
  baseUrl: "https://bajajdevgroup.com",
  phone: "+919826410006",
  phoneDisplay: "+91 98264 10006",
  email: "info@bajajdevelopersgroup.com",
  address: "Khargone, Madhya Pradesh, India",
  city: "Khargone",
  state: "Madhya Pradesh",
  country: "India",
  heroImage: "/images/bajaj-developers-construction-company-khargone-hero.webp",
};

export const serviceLinks = [
  {
    title: "Civil Work",
    label: "Civil Contractor in Khargone",
    href: "/civil-contractor-khargone/",
    description:
      "Reliable site development, RCC work, masonry, plastering, flooring, and other civil contractor services.",
  },
  {
    title: "House Construction",
    label: "House Construction in Khargone",
    href: "/house-construction-khargone/",
    description:
      "End-to-end home construction support from site visit and estimate to execution and handover.",
  },
  {
    title: "Building Construction",
    label: "Building Construction in Khargone",
    href: "/building-construction-khargone/",
    description:
      "Residential and commercial building construction with structured planning and quality material selection.",
  },
  {
    title: "Road Work",
    label: "Road Construction in Khargone",
    href: "/road-construction-khargone/",
    description:
      "Road construction and civil infrastructure work for private, commercial, and public project needs.",
  },
  {
    title: "Renovation",
    label: "Building Renovation in Khargone",
    href: "/renovation-khargone/",
    description:
      "Practical renovation support for homes, offices, old buildings, repairs, upgrades, and finishing work.",
  },
  {
    title: "Materials",
    label: "Construction Materials in Khargone",
    href: "/construction-materials-khargone/",
    description:
      "Construction material supply support for cement, steel, aggregates, bricks, and project site needs.",
  },
];

export const primaryNav = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about/" },
  { title: "Services", href: "/services/" },
  { title: "Projects", href: "/projects/" },
  { title: "Blog", href: "/blog/" },
  { title: "Contact", href: "/contact/" },
];

export const serviceAreas = [
  "Khargone",
  "Barwaha",
  "Kasrawad",
  "Maheshwar",
  "Sanawad",
  "Bhikangaon",
  "Barwani",
  "Nearby Madhya Pradesh regions",
];

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hello Bajaj Developers, I want to discuss a construction project in Khargone.";

  return `https://wa.me/919826410006?text=${encodeURIComponent(text)}`;
}

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address,
  )}`;
}
