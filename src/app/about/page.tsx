import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  Handshake,
  HomeIcon,
  Mail,
  MapPinned,
  MessageCircle,
  PackageCheck,
  Paintbrush,
  Phone,
  Route,
  ShieldCheck,
  Shovel,
  Target,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo";
import {
  mapsUrl,
  serviceAreas,
  siteConfig,
  whatsappUrl,
} from "@/lib/site";

const aboutHeroImage = siteConfig.heroImage;
const leadershipImage = "/images/03/structure1.jpeg";
const quoteMessage =
  "Hello Bajaj Developers, I want to request a construction quote in Khargone.";
const aboutDescription =
  "Learn about Bajaj Developers and Group of Industries, a trusted civil contractor and construction company in Khargone offering house construction, building construction, road work, renovation, and construction material services.";

export const metadata: Metadata = {
  title: {
    absolute: "About Bajaj Developers | Civil Contractor in Khargone",
  },
  description: aboutDescription,
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Bajaj Developers | Civil Contractor in Khargone",
    description:
      "Bajaj Developers and Group of Industries is a trusted construction company in Khargone, Madhya Pradesh, providing civil work, house construction, building construction, road work, renovation, and material supply services.",
    url: "/about/",
    images: [
      {
        url: aboutHeroImage,
        width: 1200,
        height: 630,
        alt: "Bajaj Developers civil contractor and construction team in Khargone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bajaj Developers | Civil Contractor in Khargone",
    description:
      "Learn about Bajaj Developers and Group of Industries, a civil contractor and construction company serving Khargone and nearby Madhya Pradesh regions.",
    images: [aboutHeroImage],
  },
};

const aboutFaqs = [
  {
    question: "Who is Bajaj Developers and Group of Industries?",
    answer:
      "Bajaj Developers and Group of Industries is a civil contractor and construction company based in Khargone, Madhya Pradesh. The company provides civil work, house construction, building construction, road work, renovation, and construction material services.",
  },
  {
    question: "Where is Bajaj Developers located?",
    answer:
      "Bajaj Developers and Group of Industries is located in Khargone, Madhya Pradesh, India, and serves customers in Khargone and nearby areas.",
  },
  {
    question: "What services does Bajaj Developers provide?",
    answer:
      "The company provides civil work, house construction, building construction, road construction, building renovation, and construction material supply support.",
  },
  {
    question: "Does Bajaj Developers provide house construction in Khargone?",
    answer:
      "Yes, Bajaj Developers provides house construction services in Khargone with support for planning, civil work, material guidance, and site execution.",
  },
  {
    question: "Does Bajaj Developers handle commercial building construction?",
    answer:
      "Yes, the company supports building construction work for residential, commercial, and project-based requirements.",
  },
  {
    question: "Does Bajaj Developers provide road construction work?",
    answer:
      "Yes, Bajaj Developers provides road work and civil infrastructure-related services based on project requirements.",
  },
  {
    question: "Which areas does Bajaj Developers serve?",
    answer:
      "Bajaj Developers serves Khargone and nearby Madhya Pradesh regions including Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani, and surrounding areas.",
  },
  {
    question: "How can I contact Bajaj Developers?",
    answer:
      "You can contact Bajaj Developers through phone, WhatsApp, or the contact details on the website to discuss your construction requirement.",
  },
];

const serviceCards = [
  {
    title: "Civil Work",
    href: "/civil-contractor-khargone/",
    icon: Shovel,
    text: "Professional civil contracting services for residential, commercial, private, and project-based construction requirements in Khargone.",
  },
  {
    title: "House Construction",
    href: "/house-construction-khargone/",
    icon: HomeIcon,
    text: "End-to-end house construction support, including planning, site execution, material guidance, and construction coordination.",
  },
  {
    title: "Building Construction",
    href: "/building-construction-khargone/",
    icon: Building2,
    text: "Building construction services for homes, shops, offices, commercial spaces, and local development projects.",
  },
  {
    title: "Road Work",
    href: "/road-construction-khargone/",
    icon: Truck,
    text: "Road construction and civil infrastructure-related work with focus on planning, durability, and practical site execution.",
  },
  {
    title: "Renovation",
    href: "/renovation-khargone/",
    icon: Paintbrush,
    text: "Building renovation and repair services for homes, offices, commercial properties, and old structures.",
  },
  {
    title: "Construction Materials",
    href: "/construction-materials-khargone/",
    icon: PackageCheck,
    text: "Construction material supply support for civil work, house construction, building projects, and site requirements.",
  },
];

const trustCards = [
  {
    title: "Local Khargone Knowledge",
    icon: MapPinned,
    text: "We understand local construction needs, site conditions, material availability, and customer expectations in Khargone and nearby areas.",
  },
  {
    title: "Clear Project Planning",
    icon: ClipboardCheck,
    text: "Before starting work, we focus on understanding the requirement, budget, timeline, site condition, and practical execution needs.",
  },
  {
    title: "Quality Material Focus",
    icon: PackageCheck,
    text: "We guide customers toward suitable construction materials for better strength, durability, and long-term value.",
  },
  {
    title: "Residential and Commercial Work",
    icon: Building2,
    text: "Our team supports house construction, commercial building work, renovation, road-related work, and civil project requirements.",
  },
  {
    title: "Easy Communication",
    icon: MessageCircle,
    text: "Customers can connect through call or WhatsApp to discuss construction requirements and next steps.",
  },
  {
    title: "Service Area Coverage",
    icon: Route,
    text: "We serve Khargone and nearby Madhya Pradesh regions including Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, and Barwani.",
  },
];

const values = [
  {
    title: "Trust",
    icon: Handshake,
    text: "We aim to build long-term trust through clear communication and dependable work.",
  },
  {
    title: "Planning",
    icon: ClipboardCheck,
    text: "Good construction starts with proper planning, site understanding, and realistic execution.",
  },
  {
    title: "Quality",
    icon: BadgeCheck,
    text: "We focus on quality materials, practical methods, and durable construction results.",
  },
  {
    title: "Responsibility",
    icon: ShieldCheck,
    text: "Every construction project needs responsible coordination, supervision, and care.",
  },
  {
    title: "Local Commitment",
    icon: MapPinned,
    text: "As a Khargone-based construction company, we focus on serving local customers with practical and reliable support.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Bajaj Developers and Group of Industries",
  url: `${siteConfig.baseUrl}/about/`,
  description: aboutDescription,
  primaryImageOfPage: `${siteConfig.baseUrl}${aboutHeroImage}`,
  about: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: siteConfig.address,
  },
};

const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${siteConfig.baseUrl}/about/`,
    },
  ],
};

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aboutFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function SectionTitle({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow ? (
        <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function IconCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <article className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f58220] hover:shadow-[0_16px_42px_rgba(11,42,69,0.12)]">
      <Icon aria-hidden="true" className="size-11 text-[#f58220]" />
      <h3 className="mt-5 text-lg font-black leading-6 text-[#0b2a45]">
        {title}
      </h3>
      <p className="mt-2.5 text-sm font-medium leading-[1.65] text-slate-600">
        {text}
      </p>
    </article>
  );
}

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={[
          aboutSchema,
          organizationSchema,
          localBusinessSchema,
          serviceSchema,
          aboutBreadcrumbSchema,
          aboutFaqSchema,
        ]}
      />

      <section className="relative isolate overflow-hidden bg-[#0b2a45] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(245,130,32,0.2),transparent_36%),linear-gradient(135deg,#0b2a45_0%,#0d3a5d_56%,#082036_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-15 blueprint-grid" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-bold text-white/65"
            >
              <Link href="/" className="transition hover:text-[#f58220]">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About</span>
            </nav>

            <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black text-white shadow-sm">
              <ShieldCheck
                aria-hidden="true"
                className="size-4 text-[#f58220]"
              />
              About Bajaj Developers
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
              About Bajaj Developers and Group of Industries
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-[1.75] text-white/78">
              Bajaj Developers and Group of Industries is a trusted civil
              contractor and construction company in Khargone, Madhya Pradesh,
              providing reliable construction services for residential,
              commercial, civil, road work, renovation, and construction
              material requirements.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl(quoteMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f58220] px-6 text-sm font-black text-white shadow-[0_12px_28px_rgba(245,130,32,0.28)] transition hover:bg-[#dc6d0c]"
              >
                <FileText aria-hidden="true" className="size-4" />
                Get Free Quote
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#20ad43] px-6 text-sm font-black text-white transition hover:bg-[#18852d]"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-black text-white transition hover:border-[#f58220]"
              >
                <Phone aria-hidden="true" className="size-4" />
                Call Now
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-md border border-white/10 bg-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <Image
              src={aboutHeroImage}
              alt="Bajaj Developers civil contractor and construction team in Khargone"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,42,69,0.78),rgba(11,42,69,0)_58%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="grid gap-3 rounded-md border border-white/15 bg-[#0b2a45]/82 p-4 backdrop-blur sm:grid-cols-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f58220]">
                    Business Type
                  </p>
                  <p className="mt-1 text-sm font-bold">Civil Contractor</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f58220]">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-bold">Khargone, MP</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f58220]">
                    Services
                  </p>
                  <p className="mt-1 text-sm font-bold">Construction Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <SectionTitle
            eyebrow="Who We Are"
            title="A Local Construction Company Built on Trust, Planning, and Quality Work"
            align="left"
          />
          <div className="space-y-5 text-sm font-medium leading-[1.75] text-slate-600">
            <p>
              Bajaj Developers and Group of Industries is a construction company
              and civil contractor based in Khargone, Madhya Pradesh. We work
              with homeowners, business owners, property developers, and project
              clients who need dependable construction support with clear
              communication and planned execution.
            </p>
            <p>
              Our services cover civil work, house construction, building
              construction, road work, renovation, and construction material
              supply. Whether someone is planning a new home, a commercial
              building, a renovation project, or civil infrastructure work, our
              goal is to provide practical guidance, quality-focused execution,
              and reliable service.
            </p>
            <p>
              We understand that construction is not just about bricks, cement,
              steel, and labour. It is about trust, budget control, durability,
              planning, and long-term value. That is why Bajaj Developers
              focuses on proper project understanding, site-level planning,
              suitable material selection, and step-by-step execution.
            </p>
            <Link
              href="/services/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white transition hover:bg-[#dc6d0c]"
            >
              Know Our Services
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm">
            <Target aria-hidden="true" className="size-12 text-[#f58220]" />
            <h2 className="mt-5 text-2xl font-black text-[#0b2a45]">
              Our Mission
            </h2>
            <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
              Our mission is to provide reliable construction and civil
              contractor services in Khargone with a focus on quality work,
              transparent communication, suitable materials, and planned project
              execution.
            </p>
          </article>
          <article className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm">
            <Eye aria-hidden="true" className="size-12 text-[#f58220]" />
            <h2 className="mt-5 text-2xl font-black text-[#0b2a45]">
              Our Vision
            </h2>
            <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
              Our vision is to become one of the most trusted construction
              companies in Khargone and nearby Madhya Pradesh regions by
              delivering dependable civil work, house construction, building
              construction, road work, renovation, and material support.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Expertise"
            title="Construction and Civil Work Services in Khargone"
            text="Bajaj Developers provides construction services in Khargone Madhya Pradesh for residential customers, commercial clients, property owners, developers, and project-based clients."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f58220] hover:shadow-[0_16px_42px_rgba(11,42,69,0.12)]"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-11 text-[#f58220]"
                  />
                  <h3 className="mt-5 text-lg font-black text-[#0b2a45]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-medium leading-[1.65] text-slate-600">
                    {service.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#d95f05] transition group-hover:text-[#0b2a45]">
                    View Service
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Why Bajaj Developers Is a Trusted Construction Partner in Khargone"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trustCards.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionTitle
              eyebrow="Local Construction Experts"
              title="Serving Khargone and Nearby Madhya Pradesh Regions"
              align="left"
            />
            <div className="mt-7 space-y-5 text-sm font-medium leading-[1.75] text-slate-600">
              <p>
                Bajaj Developers and Group of Industries provides construction
                services in Khargone and nearby areas. Our local service
                coverage helps customers looking for a civil contractor near
                them, a construction company in Khargone, house construction
                services, building construction work, road construction support,
                renovation services, and construction material supply.
              </p>
              <p>
                We support local customers across Khargone, Barwaha, Kasrawad,
                Maheshwar, Sanawad, Bhikangaon, Barwani, and nearby Madhya
                Pradesh regions.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] px-3 py-2 text-xs font-black text-[#0b2a45]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-[#0b2a45]/10 bg-[#0b2a45] p-6 text-white shadow-[0_20px_58px_rgba(11,42,69,0.18)]">
            <div className="concrete-band grid min-h-80 place-items-center rounded-md border border-white/10 bg-white/5 p-6 text-center">
              <div>
                <MapPinned
                  aria-hidden="true"
                  className="mx-auto size-14 text-[#f58220]"
                />
                <h3 className="mt-5 text-2xl font-black">
                  Khargone, Madhya Pradesh
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-[1.75] text-white/75">
                  Local service coverage for construction projects, renovation,
                  road work, civil work, and material coordination.
                </p>
                <a
                  href={mapsUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex h-11 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-black text-white transition hover:border-[#f58220] hover:text-[#f58220]"
                >
                  View Maps Area
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Working Values" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-md border border-[#0b2a45]/10 bg-white p-6 shadow-sm"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-10 text-[#f58220]"
                  />
                  <h3 className="mt-5 text-base font-black text-[#0b2a45]">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-xs font-medium leading-[1.65] text-slate-600">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div className="relative min-h-[360px] overflow-hidden rounded-md bg-[#0b2a45]">
            <Image
              src={leadershipImage}
              alt="Bajaj Developers construction leadership and civil work planning"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,42,69,0.82),rgba(11,42,69,0.18))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f58220]">
                Leadership
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Founder / Director Name
              </h3>
              <p className="mt-2 text-sm font-semibold text-white/75">
                Designation
              </p>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Leadership"
              title="People Behind Bajaj Developers"
              align="left"
            />
            <p className="mt-7 text-sm font-medium leading-[1.75] text-slate-600">
              Bajaj Developers and Group of Industries is led by a team focused
              on construction planning, civil work execution, customer
              communication, and reliable project support. The leadership
              approach is simple: understand the customer requirement clearly,
              plan the work properly, and deliver construction services with
              responsibility.
            </p>
            <div className="mt-8 rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] p-6">
              <h3 className="text-lg font-black text-[#0b2a45]">
                Short bio placeholder
              </h3>
              <p className="mt-3 text-sm font-medium leading-[1.75] text-slate-600">
                Add verified founder, director, or leadership details here when
                the final approved name and designation are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
            Bajaj Developers: Civil Contractor and Construction Company in
            Khargone
          </h2>
          <div className="mt-7 space-y-5 text-sm font-medium leading-[1.75] text-slate-600">
            <p>
              Bajaj Developers and Group of Industries is a civil contractor and
              construction company in Khargone, Madhya Pradesh. The company
              provides house construction, building construction, road
              construction, building renovation, civil work, and construction
              material supply services.
            </p>
            <p>
              For people searching for a civil contractor in Khargone,
              construction company in Khargone, building contractor in Khargone,
              house construction in Khargone, road construction contractor in
              Khargone, or construction material supplier in Khargone, Bajaj
              Developers offers local construction support with a focus on
              planning, quality, and practical execution.
            </p>
            <p>
              The company serves residential customers, commercial clients,
              property owners, developers, and project-based clients across
              Khargone and nearby areas. You can also review our{" "}
              <Link
                href="/projects/"
                className="font-black text-[#d95f05] transition hover:text-[#0b2a45]"
              >
                construction projects
              </Link>{" "}
              and{" "}
              <Link
                href="/services/"
                className="font-black text-[#d95f05] transition hover:text-[#0b2a45]"
              >
                construction services
              </Link>{" "}
              on the homepage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-md bg-[#0b2a45] p-8 text-white sm:p-10 lg:p-12">
            <Image
              src="/images/03/building1.jpeg"
              alt="Construction project planning in Khargone"
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[#0b2a45]/78" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-black leading-tight">
                Looking for a Civil Contractor in Khargone?
              </h2>
              <p className="mt-5 text-sm font-medium leading-[1.75] text-white/75">
                Talk to Bajaj Developers and Group of Industries for house
                construction, building construction, road work, renovation,
                civil work, and construction material requirements.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white transition hover:bg-[#dc6d0c]"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  Call Now
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#20ad43] px-5 text-sm font-black text-white transition hover:bg-[#18852d]"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  WhatsApp Us
                </a>
                <a
                  href={whatsappUrl(quoteMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-white/25 px-5 text-sm font-black text-white transition hover:border-[#f58220]"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="About Bajaj Developers - Frequently Asked Questions" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {aboutFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-md border border-[#0b2a45]/10 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black leading-6 text-[#0b2a45] [&::-webkit-details-marker]:hidden">
                  <span>
                    {index + 1}. {faq.question}
                  </span>
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-5 shrink-0 text-[#f58220] transition group-open:rotate-45"
                  />
                </summary>
                <p className="mt-4 text-sm font-medium leading-[1.75] text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-black text-[#0b2a45]">
                Ready to discuss your construction project?
              </h2>
              <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 transition hover:text-[#d95f05]"
                >
                  <Phone aria-hidden="true" className="size-4 text-[#f58220]" />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 break-all transition hover:text-[#d95f05]"
                >
                  <Mail aria-hidden="true" className="size-4 text-[#f58220]" />
                  {siteConfig.email}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPinned
                    aria-hidden="true"
                    className="size-4 text-[#f58220]"
                  />
                  Khargone, Madhya Pradesh
                </span>
              </div>
            </div>
            <a
              href={whatsappUrl(quoteMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f58220] px-6 text-sm font-black text-white transition hover:bg-[#dc6d0c]"
            >
              Request Quote
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
