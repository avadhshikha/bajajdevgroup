import type { Metadata } from "next";
import { serviceAreas, serviceLinks, siteConfig } from "@/lib/site";

export type LinkItem = {
  title: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  primaryKeyword: string;
  category: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  internalLinks: LinkItem[];
  relatedServices: LinkItem[];
  faqs: FaqItem[];
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  projectType: string;
  location: string;
  summary: string;
  image: string;
  gallery: string[];
  relatedService: LinkItem;
  overview: string;
  challenge: string;
  solution: string;
  workIncluded: string[];
  faqs: FaqItem[];
};

export type ServiceAreaPage = {
  slug: string;
  area: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  intro: string;
  faqs: FaqItem[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "house-construction-cost-khargone",
    title: "House Construction Cost in Khargone: Complete Guide",
    primaryKeyword: "house construction cost in Khargone",
    category: "House Construction",
    excerpt:
      "Khargone me ghar banwane ka cost samajhne ke liye plot, design, material, labour, finishing aur contractor planning ko clearly compare karna zaruri hota hai.",
    metaTitle: "House Construction Cost in Khargone | Bajaj Developers",
    metaDescription:
      "Hinglish guide on house construction cost in Khargone with planning, material, labour, finishing, civil work, and local contractor selection tips.",
    image: "/images/03/building1.jpeg",
    imageAlt: "House construction cost planning in Khargone",
    date: "2026-01-08",
    readTime: "10 min read",
    internalLinks: [
      { title: "House Construction", href: "/house-construction-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
    ],
    relatedServices: [
      { title: "House Construction", href: "/house-construction-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
    ],
    faqs: [
      {
        question: "Khargone me house construction cost kaise estimate hota hai?",
        answer:
          "Estimate plot size, structure type, material quality, labour scope, finishing level, and site condition dekhkar banaya jata hai.",
      },
      {
        question: "Cost badhne ka common reason kya hota hai?",
        answer:
          "Planning change, material upgrade, unclear scope, delay, and finishing decisions cost ko increase kar sakte hain.",
      },
      {
        question: "Quote ke liye kya details share karni chahiye?",
        answer:
          "Plot location, approximate size, floors, room requirement, budget range, and expected timeline share karna useful hota hai.",
      },
    ],
  },
  {
    slug: "civil-contractor-khargone-kaise-choose-kare",
    title: "Civil Contractor in Khargone Kaise Choose Kare",
    primaryKeyword: "civil contractor in Khargone",
    category: "Civil Work",
    excerpt:
      "Civil contractor select karte waqt local experience, scope clarity, material guidance, communication aur site execution approach ko practical tarike se check kare.",
    metaTitle: "Civil Contractor in Khargone Kaise Choose Kare",
    metaDescription:
      "Learn how to choose a civil contractor in Khargone with practical Hinglish tips on planning, estimates, materials, site visits, and communication.",
    image: "/images/03/building7.jpeg",
    imageAlt: "Civil contractor selection in Khargone",
    date: "2026-01-10",
    readTime: "9 min read",
    internalLinks: [
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "About", href: "/about/" },
      { title: "Contact", href: "/contact/" },
    ],
    relatedServices: [
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "Building Construction", href: "/building-construction-khargone/" },
      { title: "Renovation", href: "/renovation-khargone/" },
    ],
    faqs: [
      {
        question: "Civil contractor choose karte waqt sabse pehle kya check kare?",
        answer:
          "Project scope samajhne ki ability, local site knowledge, material guidance, and communication style pehle check kare.",
      },
      {
        question: "Local contractor choose karna useful hai kya?",
        answer:
          "Local contractor ko Khargone ki material availability, site condition, and communication needs ka better idea hota hai.",
      },
      {
        question: "Bajaj Developers se civil work ke liye kaise contact kare?",
        answer:
          "Aap call, WhatsApp, ya contact page se civil work requirement discuss kar sakte hain.",
      },
    ],
  },
  {
    slug: "building-construction-cost-per-square-feet-khargone",
    title: "Building Construction Cost Per Square Feet in Khargone",
    primaryKeyword: "building construction cost per square feet in Khargone",
    category: "Building Construction",
    excerpt:
      "Per square feet cost ko samajhne ke liye structure, floor count, RCC, brickwork, finishing, material quality aur commercial requirement ko alag-alag evaluate kare.",
    metaTitle: "Building Construction Cost Per Square Feet in Khargone",
    metaDescription:
      "Hinglish guide to building construction cost per square feet in Khargone with structure, materials, finishing, and local planning factors.",
    image: "/images/03/building10.jpeg",
    imageAlt: "Building construction cost per square feet in Khargone",
    date: "2026-01-12",
    readTime: "10 min read",
    internalLinks: [
      { title: "Building Construction", href: "/building-construction-khargone/" },
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
    ],
    relatedServices: [
      { title: "Building Construction", href: "/building-construction-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
    ],
    faqs: [
      {
        question: "Per square feet cost fixed hota hai kya?",
        answer:
          "Nahi, cost design, material grade, finishing level, site condition, and project scope ke hisab se change hota hai.",
      },
      {
        question: "Commercial building ka cost residential se alag kyu hota hai?",
        answer:
          "Commercial spaces me load, access, finishing, utilities, and usage requirement alag ho sakti hai.",
      },
      {
        question: "Accurate estimate ke liye kya chahiye?",
        answer:
          "Basic drawing, site location, floor requirement, material preference, and finishing expectation useful hoti hai.",
      },
    ],
  },
  {
    slug: "new-ghar-banwane-se-pehle-planning-points",
    title: "New Ghar Banwane Se Pehle Yeh 10 Planning Points Jarur Dekhe",
    primaryKeyword: "new house construction planning Khargone",
    category: "Planning",
    excerpt:
      "New ghar start karne se pehle budget, plot condition, room planning, material, contractor, approvals, timeline aur future expansion ko clearly decide kare.",
    metaTitle: "New House Construction Planning in Khargone",
    metaDescription:
      "10 practical Hinglish planning points before starting new house construction in Khargone, covering budget, materials, site, timeline, and contractor selection.",
    image: "/images/03/building2.jpeg",
    imageAlt: "New house construction planning in Khargone",
    date: "2026-01-14",
    readTime: "9 min read",
    internalLinks: [
      { title: "House Construction", href: "/house-construction-khargone/" },
      { title: "Contact", href: "/contact/" },
    ],
    relatedServices: [
      { title: "House Construction", href: "/house-construction-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
    ],
    faqs: [
      {
        question: "New ghar planning me sabse important point kya hai?",
        answer:
          "Budget clarity, layout requirement, material choice, and reliable contractor selection sabse important points hain.",
      },
      {
        question: "Planning kab start karni chahiye?",
        answer:
          "Construction start karne se pehle hi plot, room requirement, material, and budget discussion complete karni chahiye.",
      },
      {
        question: "Site visit zaruri hai kya?",
        answer:
          "Haan, site visit se access, level, soil condition, and execution needs better samajh aate hain.",
      },
    ],
  },
  {
    slug: "best-construction-company-khargone-guide",
    title: "Khargone Me Best Construction Company Select Karne Ka Practical Guide",
    primaryKeyword: "construction company in Khargone",
    category: "Contractor Selection",
    excerpt:
      "Construction company select karne ke liye sirf price nahi, planning, communication, service coverage, material focus aur local understanding bhi compare kare.",
    metaTitle: "Construction Company in Khargone Selection Guide",
    metaDescription:
      "Practical Hinglish guide to selecting a construction company in Khargone for civil work, house construction, renovation, road work, and material support.",
    image: "/images/bajaj-developers-construction-company-khargone-hero.webp",
    imageAlt: "Construction company in Khargone selection guide",
    date: "2026-01-16",
    readTime: "9 min read",
    internalLinks: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about/" },
      { title: "Services", href: "/services/" },
    ],
    relatedServices: serviceLinks.slice(0, 3),
    faqs: [
      {
        question: "Construction company choose karte waqt kya compare kare?",
        answer:
          "Scope clarity, local work understanding, communication, material guidance, and practical site execution compare kare.",
      },
      {
        question: "Lowest quote hamesha best hota hai kya?",
        answer:
          "Nahi, quote ke saath material, work scope, finishing, and hidden exclusions bhi samajhna zaruri hai.",
      },
      {
        question: "Bajaj Developers kin services me support karta hai?",
        answer:
          "Civil work, house construction, building construction, road work, renovation, and construction materials me support karta hai.",
      },
    ],
  },
  {
    slug: "road-construction-quality-khargone",
    title: "Road Construction Work Me Quality Kyu Important Hai",
    primaryKeyword: "road construction in Khargone",
    category: "Road Work",
    excerpt:
      "Road work me surface preparation, drainage, base strength, material quality aur planned execution long-term durability ke liye bahut important hote hain.",
    metaTitle: "Road Construction Quality in Khargone | Bajaj Developers",
    metaDescription:
      "Understand why quality matters in road construction in Khargone, including drainage, base preparation, material selection, and practical execution.",
    image: "/images/03/road1.jpeg",
    imageAlt: "Road construction quality in Khargone",
    date: "2026-01-18",
    readTime: "8 min read",
    internalLinks: [
      { title: "Road Work", href: "/road-construction-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
    ],
    relatedServices: [
      { title: "Road Work", href: "/road-construction-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
    ],
    faqs: [
      {
        question: "Road construction me drainage important kyu hai?",
        answer:
          "Poor drainage se water collection, surface damage, and long-term maintenance issues ho sakte hain.",
      },
      {
        question: "Internal road work me kya check hota hai?",
        answer:
          "Access, surface level, base preparation, drainage path, and expected vehicle movement check hota hai.",
      },
      {
        question: "Road work ke liye Bajaj Developers se kaise baat kare?",
        answer:
          "Aap project location and work scope call ya WhatsApp par share kar sakte hain.",
      },
    ],
  },
  {
    slug: "building-renovation-khargone-cost-planning-process",
    title: "Building Renovation in Khargone: Cost, Planning Aur Process",
    primaryKeyword: "building renovation in Khargone",
    category: "Renovation",
    excerpt:
      "Renovation start karne se pehle old structure condition, repair need, finishing scope, material choice aur budget priority ko clearly samjhe.",
    metaTitle: "Building Renovation in Khargone | Cost Planning Process",
    metaDescription:
      "Hinglish guide to building renovation in Khargone with cost factors, planning steps, repair checks, material choices, and renovation process.",
    image: "/images/03/renovation6.jpeg",
    imageAlt: "Building renovation planning in Khargone",
    date: "2026-01-20",
    readTime: "9 min read",
    internalLinks: [
      { title: "Renovation", href: "/renovation-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
    ],
    relatedServices: [
      { title: "Renovation", href: "/renovation-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
    ],
    faqs: [
      {
        question: "Renovation cost kaise decide hota hai?",
        answer:
          "Repair scope, material choice, flooring, plastering, structure condition, and finishing level se renovation cost decide hota hai.",
      },
      {
        question: "Old building renovate karne se pehle kya check kare?",
        answer:
          "Structure condition, seepage, cracks, flooring, plaster, electrical/plumbing needs, and layout limitations check kare.",
      },
      {
        question: "Commercial renovation bhi hota hai kya?",
        answer:
          "Haan, offices, shops, and business spaces ke renovation requirements discuss kiye ja sakte hain.",
      },
    ],
  },
  {
    slug: "construction-materials-guide-khargone",
    title: "Construction Materials Kaise Choose Kare: Cement, Sand, Steel Aur Bricks Guide",
    primaryKeyword: "construction materials in Khargone",
    category: "Materials",
    excerpt:
      "Cement, sand, steel, bricks aur aggregate choose karte waqt quality, availability, project use aur site planning ko dhyan me rakhe.",
    metaTitle: "Construction Materials in Khargone Guide",
    metaDescription:
      "Hinglish guide for choosing construction materials in Khargone including cement, sand, steel, bricks, aggregates, and site material planning.",
    image: "/images/03/construction-material8.jpeg",
    imageAlt: "Construction materials guide in Khargone",
    date: "2026-01-22",
    readTime: "10 min read",
    internalLinks: [
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
      { title: "House Construction", href: "/house-construction-khargone/" },
    ],
    relatedServices: [
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
      { title: "House Construction", href: "/house-construction-khargone/" },
    ],
    faqs: [
      {
        question: "Material quality ka project par kya impact hota hai?",
        answer:
          "Material quality strength, finishing, durability, and maintenance value ko directly impact karti hai.",
      },
      {
        question: "Material planning kab karni chahiye?",
        answer:
          "Construction stage start hone se pehle quantity, timing, storage, and delivery needs plan karni chahiye.",
      },
      {
        question: "Bajaj Developers material support karta hai?",
        answer:
          "Haan, project requirement ke hisab se construction material support and coordination discuss kiya ja sakta hai.",
      },
    ],
  },
  {
    slug: "ghar-foundation-strong-kaise-banaye",
    title: "Ghar Ki Foundation Strong Kaise Banaye",
    primaryKeyword: "foundation work in Khargone",
    category: "Civil Work",
    excerpt:
      "Strong foundation ke liye soil condition, layout, excavation, RCC, material quality, curing aur supervision par proper attention dena zaruri hai.",
    metaTitle: "Foundation Work in Khargone | Strong Ghar Guide",
    metaDescription:
      "Learn how to plan strong foundation work in Khargone with practical Hinglish advice on soil, excavation, RCC, material quality, and supervision.",
    image: "/images/03/building3.jpeg",
    imageAlt: "Foundation work for house construction in Khargone",
    date: "2026-01-24",
    readTime: "9 min read",
    internalLinks: [
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "House Construction", href: "/house-construction-khargone/" },
    ],
    relatedServices: [
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "House Construction", href: "/house-construction-khargone/" },
    ],
    faqs: [
      {
        question: "Foundation strong banane ke liye kya zaruri hai?",
        answer:
          "Soil understanding, proper excavation, RCC quality, material selection, curing, and supervision zaruri hai.",
      },
      {
        question: "Foundation me material compromise karna sahi hai kya?",
        answer:
          "Foundation core structural part hota hai, isliye material and execution quality par compromise nahi karna chahiye.",
      },
      {
        question: "Foundation work ke liye site review useful hai kya?",
        answer:
          "Haan, site review se level, access, and practical construction needs samajh aati hain.",
      },
    ],
  },
  {
    slug: "residential-vs-commercial-construction-khargone",
    title: "Residential Construction Aur Commercial Construction Me Difference",
    primaryKeyword: "commercial construction company in Khargone",
    category: "Building Construction",
    excerpt:
      "Residential aur commercial construction me planning, usage, load, layout, finishing, access aur compliance needs alag hoti hain.",
    metaTitle: "Residential vs Commercial Construction in Khargone",
    metaDescription:
      "Understand the difference between residential and commercial construction in Khargone with practical Hinglish planning advice.",
    image: "/images/03/building4.jpeg",
    imageAlt: "Residential and commercial construction in Khargone",
    date: "2026-01-26",
    readTime: "8 min read",
    internalLinks: [
      { title: "Building Construction", href: "/building-construction-khargone/" },
      { title: "House Construction", href: "/house-construction-khargone/" },
    ],
    relatedServices: [
      { title: "Building Construction", href: "/building-construction-khargone/" },
      { title: "House Construction", href: "/house-construction-khargone/" },
    ],
    faqs: [
      {
        question: "Commercial construction residential se different kyu hota hai?",
        answer:
          "Commercial project me usage, access, floor load, services, and finishing expectations alag ho sakti hain.",
      },
      {
        question: "Residential construction me focus kya hota hai?",
        answer:
          "Comfort, family needs, budget, room planning, material quality, and long-term maintenance par focus hota hai.",
      },
      {
        question: "Dono project ke liye same contractor kaam kar sakta hai?",
        answer:
          "Agar contractor residential and commercial scope samajhta hai to dono type projects discuss kiye ja sakte hain.",
      },
    ],
  },
  {
    slug: "civil-work-rcc-brickwork-plastering-importance",
    title: "Civil Work Me RCC, Brickwork Aur Plastering Ka Importance",
    primaryKeyword: "civil work contractor in Khargone",
    category: "Civil Work",
    excerpt:
      "RCC, brickwork aur plastering construction ki strength, wall quality, finishing aur durability me important role play karte hain.",
    metaTitle: "Civil Work Contractor in Khargone | RCC Brickwork Plastering",
    metaDescription:
      "Hinglish guide on RCC, brickwork, and plastering importance in civil work by a civil work contractor in Khargone.",
    image: "/images/03/building5.jpeg",
    imageAlt: "RCC brickwork and plastering civil work in Khargone",
    date: "2026-01-28",
    readTime: "8 min read",
    internalLinks: [{ title: "Civil Work", href: "/civil-contractor-khargone/" }],
    relatedServices: [{ title: "Civil Work", href: "/civil-contractor-khargone/" }],
    faqs: [
      {
        question: "RCC civil work me important kyu hai?",
        answer:
          "RCC structure strength and load-bearing performance me important role play karta hai.",
      },
      {
        question: "Brickwork quality ka impact kya hota hai?",
        answer:
          "Good brickwork wall alignment, durability, plaster finish, and long-term maintenance ko improve karta hai.",
      },
      {
        question: "Plastering me kya dhyan rakhe?",
        answer:
          "Surface preparation, material mix, thickness, curing, and finishing quality par dhyan dena chahiye.",
      },
    ],
  },
  {
    slug: "home-renovation-checklist-khargone",
    title: "Khargone Me Home Renovation Start Karne Se Pehle Kya Check Kare",
    primaryKeyword: "home renovation services Khargone",
    category: "Renovation",
    excerpt:
      "Home renovation start karne se pehle structure, leakage, flooring, wall condition, budget, material aur priority list check kare.",
    metaTitle: "Home Renovation Services Khargone Checklist",
    metaDescription:
      "Practical Hinglish checklist before starting home renovation services in Khargone, covering repairs, budget, materials, and planning.",
    image: "/images/03/renovation2.jpeg",
    imageAlt: "Home renovation checklist in Khargone",
    date: "2026-01-30",
    readTime: "8 min read",
    internalLinks: [{ title: "Renovation", href: "/renovation-khargone/" }],
    relatedServices: [{ title: "Renovation", href: "/renovation-khargone/" }],
    faqs: [
      {
        question: "Home renovation checklist me kya include kare?",
        answer:
          "Structure, seepage, cracks, flooring, plaster, electrical/plumbing needs, budget, and priority areas include kare.",
      },
      {
        question: "Renovation me pehle repair kare ya finishing?",
        answer:
          "Pehle repair and structural needs handle kare, fir finishing and interior upgrade plan kare.",
      },
      {
        question: "Renovation quote ke liye photos useful hain kya?",
        answer:
          "Haan, photos initial discussion me useful hote hain, lekin site review better clarity deta hai.",
      },
    ],
  },
  {
    slug: "construction-project-delay-se-kaise-bache",
    title: "Construction Project Delay Se Kaise Bache",
    primaryKeyword: "construction project planning Khargone",
    category: "Planning",
    excerpt:
      "Project delay se bachne ke liye scope clarity, material planning, contractor coordination, weather buffer aur timely decisions important hote hain.",
    metaTitle: "Construction Project Planning Khargone | Avoid Delays",
    metaDescription:
      "Hinglish guide to avoid construction project delays in Khargone with planning, material coordination, scope clarity, and contractor communication tips.",
    image: "/images/03/building6.jpeg",
    imageAlt: "Construction project planning in Khargone",
    date: "2026-02-01",
    readTime: "9 min read",
    internalLinks: [
      { title: "Services", href: "/services/" },
      { title: "Contact", href: "/contact/" },
    ],
    relatedServices: serviceLinks.slice(0, 4),
    faqs: [
      {
        question: "Construction delay ke common reasons kya hote hain?",
        answer:
          "Unclear scope, late material, design changes, weather, labour coordination, and delayed customer decisions common reasons hote hain.",
      },
      {
        question: "Delay avoid karne ke liye kya plan kare?",
        answer:
          "Work scope, materials, budget, timeline, and decision checkpoints pehle se plan kare.",
      },
      {
        question: "Contractor communication important hai kya?",
        answer:
          "Haan, clear communication se site needs and next steps timely manage hote hain.",
      },
    ],
  },
  {
    slug: "local-contractor-choose-karne-ke-fayde",
    title: "Local Contractor Choose Karne Ke Fayde",
    primaryKeyword: "local building contractor in Khargone",
    category: "Contractor Selection",
    excerpt:
      "Local contractor site condition, material availability, service area, communication aur practical execution challenges ko better samajh sakta hai.",
    metaTitle: "Local Building Contractor in Khargone Benefits",
    metaDescription:
      "Learn the benefits of choosing a local building contractor in Khargone for civil work, house construction, renovation, and project coordination.",
    image: "/images/03/building8.jpeg",
    imageAlt: "Local building contractor in Khargone",
    date: "2026-02-03",
    readTime: "8 min read",
    internalLinks: [
      { title: "About", href: "/about/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
    ],
    relatedServices: [
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
      { title: "Building Construction", href: "/building-construction-khargone/" },
    ],
    faqs: [
      {
        question: "Local contractor ka main benefit kya hai?",
        answer:
          "Local contractor ko area, material, labour coordination, and site access ka practical understanding hota hai.",
      },
      {
        question: "Local contractor communication me helpful hota hai kya?",
        answer:
          "Haan, local availability and direct communication project coordination ko easier bana sakte hain.",
      },
      {
        question: "Bajaj Developers nearby areas serve karta hai?",
        answer:
          "Haan, Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani and nearby regions serve kiye jate hain.",
      },
    ],
  },
  {
    slug: "commercial-building-construction-planning-guide",
    title: "Commercial Building Construction Ke Liye Planning Guide",
    primaryKeyword: "commercial building construction in Khargone",
    category: "Building Construction",
    excerpt:
      "Commercial building planning me business use, access, structure, utilities, finishing, parking, material and maintenance ko dhyan me rakhe.",
    metaTitle: "Commercial Building Construction in Khargone Guide",
    metaDescription:
      "Practical Hinglish planning guide for commercial building construction in Khargone with layout, structure, material, access, and execution tips.",
    image: "/images/03/building9.jpeg",
    imageAlt: "Commercial building construction planning in Khargone",
    date: "2026-02-05",
    readTime: "9 min read",
    internalLinks: [{ title: "Building Construction", href: "/building-construction-khargone/" }],
    relatedServices: [{ title: "Building Construction", href: "/building-construction-khargone/" }],
    faqs: [
      {
        question: "Commercial building planning me kya important hai?",
        answer:
          "Business use, access, structure, utilities, customer movement, finishing, and durability important hote hain.",
      },
      {
        question: "Commercial building ka estimate kaise discuss kare?",
        answer:
          "Location, plot size, floors, intended use, material preference, and finishing requirement share kare.",
      },
      {
        question: "Shop aur office construction support mil sakta hai?",
        answer:
          "Haan, shop, office, and business space construction requirements discuss kiye ja sakte hain.",
      },
    ],
  },
  {
    slug: "road-repair-internal-road-work-contractor",
    title: "Road Repair Aur Internal Road Work Ke Liye Contractor Kaise Choose Kare",
    primaryKeyword: "road work contractor in Khargone",
    category: "Road Work",
    excerpt:
      "Road repair aur internal road work contractor choose karte waqt drainage, surface preparation, material, access aur usage needs ko clearly discuss kare.",
    metaTitle: "Road Work Contractor in Khargone Selection Guide",
    metaDescription:
      "Hinglish guide for choosing a road work contractor in Khargone for road repair, internal road work, drainage, and surface preparation.",
    image: "/images/03/road5.jpeg",
    imageAlt: "Road work contractor in Khargone",
    date: "2026-02-07",
    readTime: "8 min read",
    internalLinks: [{ title: "Road Work", href: "/road-construction-khargone/" }],
    relatedServices: [{ title: "Road Work", href: "/road-construction-khargone/" }],
    faqs: [
      {
        question: "Road repair contractor choose karte waqt kya check kare?",
        answer:
          "Surface damage, drainage, base condition, material choice, and execution approach discuss kare.",
      },
      {
        question: "Internal road work me site visit useful hai kya?",
        answer:
          "Haan, site visit se level, access, movement, and repair scope clear hota hai.",
      },
      {
        question: "Road repair quote kaise request kare?",
        answer:
          "Location, road length, damage photos, and expected use share karke initial discussion start kar sakte hain.",
      },
    ],
  },
  {
    slug: "old-house-renovation-vs-new-construction",
    title: "Old House Renovation vs New Construction: Kya Better Hai",
    primaryKeyword: "old house renovation Khargone",
    category: "Renovation",
    excerpt:
      "Old house renovation aur new construction me decision structure condition, budget, family needs, future use aur repair scope par depend karta hai.",
    metaTitle: "Old House Renovation Khargone vs New Construction",
    metaDescription:
      "Hinglish comparison of old house renovation vs new construction in Khargone with planning, budget, structure, and long-term value factors.",
    image: "/images/03/renovation4.jpeg",
    imageAlt: "Old house renovation vs new construction in Khargone",
    date: "2026-02-09",
    readTime: "9 min read",
    internalLinks: [
      { title: "Renovation", href: "/renovation-khargone/" },
      { title: "House Construction", href: "/house-construction-khargone/" },
    ],
    relatedServices: [
      { title: "Renovation", href: "/renovation-khargone/" },
      { title: "House Construction", href: "/house-construction-khargone/" },
    ],
    faqs: [
      {
        question: "Old house renovate karna better hai ya naya banana?",
        answer:
          "Decision structure condition, repair cost, layout needs, and long-term use ke hisab se lena chahiye.",
      },
      {
        question: "Renovation me hidden issues aa sakte hain kya?",
        answer:
          "Haan, old structures me seepage, cracks, wiring, plumbing, and plaster issues mil sakte hain.",
      },
      {
        question: "New construction kab better hota hai?",
        answer:
          "Jab structure weak ho, layout completely change karna ho, ya repair cost high ho, new construction better ho sakta hai.",
      },
    ],
  },
  {
    slug: "construction-material-supply-quality-check",
    title: "Construction Material Supply Me Quality Check Kaise Kare",
    primaryKeyword: "construction material supplier in Khargone",
    category: "Materials",
    excerpt:
      "Construction material supply me cement, steel, sand, aggregate, bricks aur delivery timing ko project requirement ke hisab se quality check kare.",
    metaTitle: "Construction Material Supplier in Khargone Quality Check",
    metaDescription:
      "Hinglish guide to quality checking construction material supply in Khargone for cement, steel, sand, aggregate, bricks, and project needs.",
    image: "/images/03/construction-material6.jpeg",
    imageAlt: "Construction material supplier quality check in Khargone",
    date: "2026-02-11",
    readTime: "8 min read",
    internalLinks: [
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
    ],
    relatedServices: [
      { title: "Construction Materials", href: "/construction-materials-khargone/" },
    ],
    faqs: [
      {
        question: "Material supply quality kaise check kare?",
        answer:
          "Material source, grade, condition, quantity, delivery timing, and project suitability discuss kare.",
      },
      {
        question: "Material timing important kyu hai?",
        answer:
          "Late or early material site storage, wastage, and work delay create kar sakta hai.",
      },
      {
        question: "Material support ke liye kya share kare?",
        answer:
          "Project type, material list, approximate quantity, site location, and timing requirement share kare.",
      },
    ],
  },
  {
    slug: "ghar-banwane-ka-step-by-step-process",
    title: "Ghar Banwane Ke Liye Step-by-Step Construction Process",
    primaryKeyword: "house construction process Khargone",
    category: "House Construction",
    excerpt:
      "Ghar banwane ka process requirement discussion, site review, planning, foundation, structure, finishing aur handover steps me clearly manage hota hai.",
    metaTitle: "House Construction Process in Khargone Step by Step",
    metaDescription:
      "Step-by-step Hinglish guide to the house construction process in Khargone from planning and foundation to finishing and handover.",
    image: "/images/03/building2.jpeg",
    imageAlt: "House construction process in Khargone",
    date: "2026-02-13",
    readTime: "10 min read",
    internalLinks: [
      { title: "House Construction", href: "/house-construction-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
    ],
    relatedServices: [
      { title: "House Construction", href: "/house-construction-khargone/" },
      { title: "Civil Work", href: "/civil-contractor-khargone/" },
    ],
    faqs: [
      {
        question: "House construction process ka first step kya hai?",
        answer:
          "Requirement discussion, plot details, budget, and layout needs samajhna first step hota hai.",
      },
      {
        question: "Foundation ke baad next step kya hota hai?",
        answer:
          "Foundation ke baad plinth, RCC structure, brickwork, plastering, flooring, and finishing stages aate hain.",
      },
      {
        question: "Process ko smooth kaise rakhe?",
        answer:
          "Clear planning, material timing, contractor communication, and timely decisions process ko smooth rakhte hain.",
      },
    ],
  },
  {
    slug: "construction-services-khargone-nearby-areas-guide",
    title: "Khargone Aur Nearby Areas Me Construction Services Ka Complete Guide",
    primaryKeyword: "construction services in Khargone Madhya Pradesh",
    category: "Local Guide",
    excerpt:
      "Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani aur nearby regions me construction services plan karne ka practical guide.",
    metaTitle: "Construction Services in Khargone Madhya Pradesh Guide",
    metaDescription:
      "Complete Hinglish guide to construction services in Khargone Madhya Pradesh and nearby areas, covering civil work, house construction, materials, renovation, and road work.",
    image: "/images/bajaj-developers-construction-company-khargone-hero.webp",
    imageAlt: "Construction services in Khargone Madhya Pradesh",
    date: "2026-02-15",
    readTime: "10 min read",
    internalLinks: [
      { title: "Services", href: "/services/" },
      { title: "Service Areas", href: "/construction-company-khargone/" },
      { title: "Contact", href: "/contact/" },
    ],
    relatedServices: serviceLinks,
    faqs: [
      {
        question: "Bajaj Developers kin areas me construction services deta hai?",
        answer:
          "Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani and nearby Madhya Pradesh regions me services discuss ki ja sakti hain.",
      },
      {
        question: "Kaun si construction services available hain?",
        answer:
          "Civil work, house construction, building construction, road work, renovation, and construction materials available service categories hain.",
      },
      {
        question: "Service area page ka use kya hai?",
        answer:
          "Service area page local customers ko batata hai ki unke area me kaun si construction services discuss ki ja sakti hain.",
      },
    ],
  },
];

const blogSlugSet = new Set(blogPosts.map((post) => post.slug));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(post: BlogPost) {
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .filter((candidate) => candidate.category === post.category || candidate.relatedServices.some((service) => post.relatedServices.some((item) => item.href === service.href)))
    .slice(0, 3);
}

export function getBlogCanonical(post: BlogPost) {
  return `${siteConfig.baseUrl}/blog/${post.slug}/`;
}

export function buildBlogMetadata(post: BlogPost): Metadata {
  return {
    title: {
      absolute: post.metaTitle,
    },
    description: post.metaDescription,
    alternates: {
      canonical: getBlogCanonical(post),
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: getBlogCanonical(post),
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "residential-house-construction-khargone",
    title: "Residential House Construction Project in Khargone",
    projectType: "House Construction",
    location: "Khargone, Madhya Pradesh",
    summary:
      "Editable case study for a residential house construction requirement with planning, civil work, material guidance, and site coordination.",
    image: "/images/03/building1.jpeg",
    gallery: ["/images/03/building1.jpeg", "/images/03/building2.jpeg", "/images/03/building3.jpeg"],
    relatedService: { title: "House Construction", href: "/house-construction-khargone/" },
    overview:
      "This editable project case study represents a residential house construction requirement in Khargone. The work scope can be updated later with real site details, customer-approved photos, final measurements, and actual execution notes.",
    challenge:
      "Residential construction needs clear planning around layout, foundation, material movement, budget, and site coordination so the work can move in a practical sequence.",
    solution:
      "The planned approach focuses on requirement discussion, site review, material guidance, civil execution, finishing support, and clear communication during the construction process.",
    workIncluded: ["Requirement discussion", "Site planning", "Foundation and structure", "Brickwork and plastering", "Material guidance", "Finishing support"],
    faqs: [
      { question: "Is this a real project detail page?", answer: "This is an editable case-study page prepared for SEO and structure. Real project specifics can be added later." },
      { question: "Can Bajaj Developers discuss house construction in Khargone?", answer: "Yes, house construction requirements in Khargone can be discussed by phone or WhatsApp." },
    ],
  },
  {
    slug: "commercial-building-construction-khargone",
    title: "Commercial Building Construction Project in Khargone",
    projectType: "Building Construction",
    location: "Khargone, Madhya Pradesh",
    summary:
      "Editable commercial building case study for shop, office, and business property construction requirements in Khargone.",
    image: "/images/03/building10.jpeg",
    gallery: ["/images/03/building10.jpeg", "/images/03/building4.jpeg", "/images/03/building5.jpeg"],
    relatedService: { title: "Building Construction", href: "/building-construction-khargone/" },
    overview:
      "This case-study page is prepared for a commercial building construction requirement in Khargone. It can later be edited with approved project photos, actual work scope, and site details.",
    challenge:
      "Commercial construction requires planning for business use, access, structure, material quality, finishing, and practical handover needs.",
    solution:
      "The project approach focuses on building planning, RCC and civil work, material guidance, site coordination, and finishing support for commercial usability.",
    workIncluded: ["Commercial planning", "RCC structure", "Masonry work", "Plastering", "Finishing support", "Project review"],
    faqs: [
      { question: "Do you handle commercial building construction?", answer: "Yes, commercial building construction can be discussed based on scope, site, and requirements." },
      { question: "Can this page be updated with real project data?", answer: "Yes, the placeholder case study is editable for real project details." },
    ],
  },
  {
    slug: "internal-road-work-khargone",
    title: "Internal Road Work Project in Khargone",
    projectType: "Road Work",
    location: "Khargone, Madhya Pradesh",
    summary:
      "Editable internal road work case study for access roads, project roads, surface preparation, and road-related civil work.",
    image: "/images/03/road1.jpeg",
    gallery: ["/images/03/road1.jpeg", "/images/03/road2.jpeg", "/images/03/road3.jpeg"],
    relatedService: { title: "Road Work", href: "/road-construction-khargone/" },
    overview:
      "This editable case study represents internal road work in Khargone where surface preparation, drainage needs, and material planning matter for long-term usability.",
    challenge:
      "Road work needs proper base preparation, drainage thinking, access planning, and material selection to reduce early damage.",
    solution:
      "The solution approach includes site review, surface preparation planning, road work execution, repair support where needed, and practical final review.",
    workIncluded: ["Surface review", "Road base planning", "Drainage-related civil support", "Material coordination", "Road work execution", "Final review"],
    faqs: [
      { question: "Do you support internal road work?", answer: "Yes, internal road work and road-related civil requirements can be discussed based on site scope." },
      { question: "Why is drainage important in road work?", answer: "Drainage helps reduce water damage and supports better road durability." },
    ],
  },
  {
    slug: "building-renovation-khargone",
    title: "Building Renovation Project in Khargone",
    projectType: "Renovation",
    location: "Khargone, Madhya Pradesh",
    summary:
      "Editable renovation case study for old structures, homes, offices, commercial spaces, repairs, and finishing upgrades.",
    image: "/images/03/renovation6.jpeg",
    gallery: ["/images/03/renovation6.jpeg", "/images/03/renovation2.jpeg", "/images/03/renovation4.jpeg"],
    relatedService: { title: "Renovation", href: "/renovation-khargone/" },
    overview:
      "This case-study page represents a building renovation requirement in Khargone and can be updated later with real repair scope, before-after images, and final finishing notes.",
    challenge:
      "Renovation often includes hidden repair needs, old plaster, flooring issues, seepage, and layout limitations that must be reviewed carefully.",
    solution:
      "The renovation approach focuses on site condition review, repair prioritization, material discussion, finishing support, and clear communication.",
    workIncluded: ["Site condition review", "Repair scope", "Plastering support", "Flooring support", "Finishing upgrades", "Final inspection"],
    faqs: [
      { question: "Do you provide renovation in Khargone?", answer: "Yes, building renovation, home renovation, and commercial renovation requirements can be discussed." },
      { question: "Can old building renovation be planned in stages?", answer: "Yes, renovation work can be planned by priority and practical site scope." },
    ],
  },
  {
    slug: "civil-foundation-work-khargone",
    title: "Civil Foundation Work Project in Khargone",
    projectType: "Civil Work",
    location: "Khargone, Madhya Pradesh",
    summary:
      "Editable civil foundation work case study for site preparation, excavation, foundation, RCC, and structure readiness.",
    image: "/images/03/building7.jpeg",
    gallery: ["/images/03/building7.jpeg", "/images/03/building3.jpeg", "/images/03/building5.jpeg"],
    relatedService: { title: "Civil Work", href: "/civil-contractor-khargone/" },
    overview:
      "This case-study page represents civil foundation work in Khargone. It is structured for future real data such as foundation type, site notes, and approved construction images.",
    challenge:
      "Foundation work requires careful planning around soil condition, excavation, structural needs, material quality, and supervision.",
    solution:
      "The approach includes site preparation, foundation planning, RCC coordination, material focus, and sequence-based civil execution.",
    workIncluded: ["Site preparation", "Excavation support", "Foundation work", "RCC coordination", "Material guidance", "Review"],
    faqs: [
      { question: "Is foundation work part of civil contracting?", answer: "Yes, foundation work is a key part of civil construction and structural readiness." },
      { question: "Can Bajaj Developers support foundation-related civil work?", answer: "Yes, project requirements can be discussed by call or WhatsApp." },
    ],
  },
  {
    slug: "construction-material-supply-khargone",
    title: "Construction Material Supply Project in Khargone",
    projectType: "Construction Materials",
    location: "Khargone, Madhya Pradesh",
    summary:
      "Editable material support case study for cement, sand, aggregate, steel, bricks, and construction project material planning.",
    image: "/images/03/construction-material8.jpeg",
    gallery: ["/images/03/construction-material8.jpeg", "/images/03/construction-material6.jpeg", "/images/03/construction-material3.jpeg"],
    relatedService: { title: "Construction Materials", href: "/construction-materials-khargone/" },
    overview:
      "This editable case study represents construction material support in Khargone for civil work, house construction, building projects, road work, and renovation needs.",
    challenge:
      "Material requirements need quantity planning, quality focus, site timing, storage understanding, and coordination with work stages.",
    solution:
      "The material support approach includes requirement discussion, quantity planning, material guidance, and practical supply coordination.",
    workIncluded: ["Material requirement review", "Cement support", "Sand and aggregate support", "Steel and brick support", "Site material planning", "Coordination"],
    faqs: [
      { question: "Do you support construction materials in Khargone?", answer: "Yes, construction material requirements can be discussed based on project needs." },
      { question: "Can material planning help avoid delays?", answer: "Yes, timely material planning can reduce site delays and confusion." },
    ],
  },
  {
    slug: "residential-building-work-barwaha",
    title: "Residential Building Work Project in Barwaha",
    projectType: "Building Construction",
    location: "Barwaha, Madhya Pradesh",
    summary:
      "Editable residential building work case study for Barwaha and nearby service-area construction requirements.",
    image: "/images/03/building2.jpeg",
    gallery: ["/images/03/building2.jpeg", "/images/03/building6.jpeg", "/images/03/building8.jpeg"],
    relatedService: { title: "Building Construction", href: "/building-construction-khargone/" },
    overview:
      "This case-study page represents residential building work in Barwaha. It can later include real site details, customer-approved photos, and actual scope.",
    challenge:
      "Residential building work outside the main city needs local coordination, material movement, clear planning, and reliable communication.",
    solution:
      "The approach includes local service-area planning, site review, structure work, material guidance, and execution coordination.",
    workIncluded: ["Site review", "Building planning", "Civil work", "Material coordination", "Finishing support", "Handover discussion"],
    faqs: [
      { question: "Do you serve Barwaha?", answer: "Yes, construction requirements in Barwaha can be discussed based on project scope." },
      { question: "Is this page editable?", answer: "Yes, this case study can be updated with real project details later." },
    ],
  },
  {
    slug: "house-renovation-kasrawad",
    title: "House Renovation Project in Kasrawad",
    projectType: "Renovation",
    location: "Kasrawad, Madhya Pradesh",
    summary:
      "Editable house renovation case study for Kasrawad, covering repairs, plastering, flooring, and finishing improvements.",
    image: "/images/03/renovation8.jpeg",
    gallery: ["/images/03/renovation8.jpeg", "/images/03/renovation9.jpeg", "/images/03/renovation11.jpeg"],
    relatedService: { title: "Renovation", href: "/renovation-khargone/" },
    overview:
      "This case-study page represents a house renovation requirement in Kasrawad and can be updated with real repair details and approved photos.",
    challenge:
      "House renovation needs careful review of old structure condition, repair scope, material needs, and family use during work.",
    solution:
      "The renovation approach includes condition review, repair planning, finishing support, material discussion, and clear execution sequence.",
    workIncluded: ["Condition review", "Repair planning", "Plastering", "Flooring", "Finishing", "Final review"],
    faqs: [
      { question: "Do you provide house renovation in Kasrawad?", answer: "Renovation requirements in Kasrawad can be discussed based on site and project scope." },
      { question: "Can renovation be planned with budget priority?", answer: "Yes, repair and upgrade work can be prioritized based on budget and condition." },
    ],
  },
  {
    slug: "road-repair-work-sanawad",
    title: "Road Repair Work Project in Sanawad",
    projectType: "Road Work",
    location: "Sanawad, Madhya Pradesh",
    summary:
      "Editable road repair work case study for Sanawad, covering patch work, surface preparation, and drainage-related civil support.",
    image: "/images/03/road5.jpeg",
    gallery: ["/images/03/road5.jpeg", "/images/03/road8.jpeg", "/images/03/road10.jpeg"],
    relatedService: { title: "Road Work", href: "/road-construction-khargone/" },
    overview:
      "This page represents an editable road repair work case study in Sanawad and can be updated with real road length, materials, and project photos.",
    challenge:
      "Road repair needs surface damage review, drainage understanding, base preparation, and practical traffic/access planning.",
    solution:
      "The approach includes site review, repair planning, surface preparation, material coordination, and road work execution.",
    workIncluded: ["Damage review", "Patch work planning", "Surface preparation", "Drainage support", "Material coordination", "Final review"],
    faqs: [
      { question: "Do you support road repair work in Sanawad?", answer: "Road repair requirements in Sanawad can be discussed based on site scope and access needs." },
      { question: "What details help road repair planning?", answer: "Location, photos, approximate length, damage type, and expected usage help planning." },
    ],
  },
  {
    slug: "commercial-civil-work-barwani",
    title: "Commercial Civil Work Project in Barwani",
    projectType: "Civil Work",
    location: "Barwani, Madhya Pradesh",
    summary:
      "Editable commercial civil work case study for Barwani, covering site work, RCC, masonry, plastering, and finishing preparation.",
    image: "/images/03/building4.jpeg",
    gallery: ["/images/03/building4.jpeg", "/images/03/building7.jpeg", "/images/03/building9.jpeg"],
    relatedService: { title: "Civil Work", href: "/civil-contractor-khargone/" },
    overview:
      "This editable project page represents commercial civil work in Barwani and can later include actual scope, site notes, and approved images.",
    challenge:
      "Commercial civil work needs planned execution, clear material scope, business-use understanding, and practical coordination.",
    solution:
      "The civil work approach includes site review, structural planning, RCC and masonry support, material guidance, and final work review.",
    workIncluded: ["Site review", "Civil planning", "RCC support", "Brickwork", "Plastering", "Finishing preparation"],
    faqs: [
      { question: "Do you support civil work in Barwani?", answer: "Civil work requirements in Barwani can be discussed based on project scope and location." },
      { question: "Can commercial civil work include RCC and plastering?", answer: "Yes, RCC, masonry, plastering, repair, and finishing preparation can be part of civil work scope." },
    ],
  },
];

export function getProject(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: ProjectCaseStudy) {
  return projectCaseStudies
    .filter((candidate) => candidate.slug !== project.slug)
    .filter((candidate) => candidate.projectType === project.projectType || candidate.relatedService.href === project.relatedService.href)
    .slice(0, 3);
}

export function getProjectCanonical(project: ProjectCaseStudy) {
  return `${siteConfig.baseUrl}/projects/${project.slug}/`;
}

export function buildProjectMetadata(project: ProjectCaseStudy): Metadata {
  return {
    title: {
      absolute: `${project.title} | Bajaj Developers`,
    },
    description: project.summary,
    alternates: {
      canonical: getProjectCanonical(project),
    },
    openGraph: {
      title: `${project.title} | Bajaj Developers`,
      description: project.summary,
      url: getProjectCanonical(project),
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Bajaj Developers`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export const serviceAreaPages: ServiceAreaPage[] = [
  "Khargone",
  "Barwaha",
  "Kasrawad",
  "Maheshwar",
  "Sanawad",
  "Bhikangaon",
  "Barwani",
].map((area, index) => ({
  slug: `construction-company-${area.toLowerCase()}`,
  area,
  h1: `Construction Company in ${area}`,
  metaTitle: `Construction Company in ${area} | Bajaj Developers`,
  metaDescription: `Bajaj Developers and Group of Industries provides civil work, house construction, building construction, road work, renovation, and construction material support in ${area} and nearby Madhya Pradesh regions.`,
  image:
    [
      siteConfig.heroImage,
      "/images/03/building2.jpeg",
      "/images/03/building7.jpeg",
      "/images/03/building10.jpeg",
      "/images/03/road1.jpeg",
      "/images/03/renovation6.jpeg",
      "/images/03/building4.jpeg",
    ][index] ?? siteConfig.heroImage,
  intro: `Bajaj Developers and Group of Industries supports construction requirements in ${area}, Madhya Pradesh with civil work, house construction, building construction, road work, renovation, and construction material guidance. Local customers can discuss project scope, site condition, material needs, and next steps by call or WhatsApp.`,
  faqs: [
    {
      question: `Do you provide construction services in ${area}?`,
      answer: `Yes, construction service requirements in ${area} can be discussed for civil work, house construction, building construction, road work, renovation, and material support.`,
    },
    {
      question: `Which services are available in ${area}?`,
      answer:
        "Available service categories include civil work, house construction, building construction, road work, renovation, and construction materials.",
    },
    {
      question: `How can I contact Bajaj Developers for work in ${area}?`,
      answer:
        "You can call, WhatsApp, or use the contact page to share your project requirement, location, and expected scope.",
    },
  ],
}));

export function getServiceAreaPage(slug: string) {
  return serviceAreaPages.find((area) => area.slug === slug);
}

export function getAreaCanonical(area: ServiceAreaPage) {
  return `${siteConfig.baseUrl}/${area.slug}/`;
}

export function buildAreaMetadata(area: ServiceAreaPage): Metadata {
  return {
    title: {
      absolute: area.metaTitle,
    },
    description: area.metaDescription,
    alternates: {
      canonical: getAreaCanonical(area),
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: getAreaCanonical(area),
      images: [{ url: area.image, width: 1200, height: 630, alt: area.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: [area.image],
    },
  };
}

export const importantPages: LinkItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about/" },
  { title: "Services", href: "/services/" },
  ...serviceLinks,
  { title: "Projects", href: "/projects/" },
  { title: "Blog", href: "/blog/" },
  { title: "Contact", href: "/contact/" },
  { title: "Privacy Policy", href: "/privacy-policy/" },
  { title: "Terms and Conditions", href: "/terms-and-conditions/" },
  { title: "Sitemap", href: "/sitemap/" },
];

export const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category)));
export const projectCategories = Array.from(new Set(projectCaseStudies.map((project) => project.projectType)));
export const serviceAreaNames = serviceAreas.filter((area) => area !== "Nearby Madhya Pradesh regions");
export const hasBlogSlug = (slug: string) => blogSlugSet.has(slug);
