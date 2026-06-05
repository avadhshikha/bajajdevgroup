import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HardHat,
  HomeIcon,
  MapPinned,
  MessageCircle,
  PackageCheck,
  Paintbrush,
  Phone,
  ShieldCheck,
  Shovel,
  Truck,
} from "lucide-react";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  breadcrumbSchema,
  faqSchema,
  homeFaqs,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from "@/lib/seo";
import { GoogleReviewsSlider } from "@/components/home/GoogleReviewsSlider";
import {
  serviceAreas,
  serviceLinks,
  siteConfig,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Civil Contractor & Construction Company in Khargone",
  description:
    "Bajaj Developers provides house construction, building construction, road work, renovation, civil work, and construction material services in Khargone and nearby Madhya Pradesh areas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Civil Contractor & Construction Company in Khargone",
    description:
      "Reliable civil contractor services for house construction, building construction, road work, renovation, and construction materials in Khargone.",
    url: "/",
  },
};

const heroHighlights = [
  {
    title: "Local Khargone",
    text: "Construction team",
    icon: HardHat,
  },
  {
    title: "Residential &",
    text: "Commercial projects",
    icon: HomeIcon,
  },
  {
    title: "Civil Work & Road",
    text: "Construction",
    icon: Truck,
  },
  {
    title: "Quality Materials &",
    text: "Planned execution",
    icon: PackageCheck,
  },
];

const quickServices = [
  {
    title: "Civil Construction Experts",
    icon: Shovel,
  },
  {
    title: "Local Khargone Contractor",
    icon: HardHat,
  },
  {
    title: "House & Building Construction",
    icon: HomeIcon,
  },
  {
    title: "Road Work Services",
    icon: Truck,
  },
  {
    title: "Renovation Support",
    icon: Paintbrush,
  },
  {
    title: "Construction Material Supply",
    icon: PackageCheck,
  },
];

const serviceDetails = {
  "Civil Work": {
    id: "civil-work",
    icon: Shovel,
    summary:
      "Professional civil contracting services for residential, commercial, private, and project-based construction requirements.",
  },
  "House Construction": {
    id: "house-construction",
    icon: HomeIcon,
    summary:
      "End-to-end house construction services in Khargone with proper planning, material selection, and site execution.",
  },
  "Building Construction": {
    id: "building-construction",
    icon: Building2,
    summary:
      "Reliable building construction services for homes, shops, offices, and commercial spaces.",
  },
  "Road Work": {
    id: "road-work",
    icon: Truck,
    summary:
      "Road construction and civil infrastructure work with focus on durability, materials, and planned execution.",
  },
  Renovation: {
    id: "renovation",
    icon: Paintbrush,
    summary:
      "Building renovation and repair services for homes, offices, old structures, and commercial properties.",
  },
  Materials: {
    id: "materials",
    icon: PackageCheck,
    summary:
      "Construction material supply support for civil work, house construction, building projects, and site requirements.",
  },
};

const whyChoose = [
  {
    title: "Local Khargone Expertise",
    text: "We understand local construction needs, material availability, road conditions, contractor coordination, and customer expectations in Khargone and nearby areas.",
    icon: HardHat,
  },
  {
    title: "Planned Work Execution",
    text: "Every project is handled with proper site planning, clear communication, and step-by-step execution.",
    icon: ClipboardCheck,
  },
  {
    title: "Quality Material Focus",
    text: "We focus on using suitable construction materials to improve project strength, durability, and finish.",
    icon: PackageCheck,
  },
  {
    title: "Residential & Commercial Work",
    text: "Our services cover house construction, building work, renovation, civil contracting, and road-related projects.",
    icon: Building2,
  },
  {
    title: "Easy Contact & Site Visit",
    text: "Customers can quickly connect through call, WhatsApp, or inquiry form to discuss their project requirements.",
    icon: Phone,
  },
];

const projectCards = [
  {
    title: "Residential Construction",
    location: "Khargone, Madhya Pradesh",
    image: "/images/03/building1.jpeg",
    summary: "Modern house construction with quality materials and strong structure.",
  },
  {
    title: "Commercial Building Work",
    location: "Khargone, Madhya Pradesh",
    image: "/images/03/building10.jpeg",
    summary: "Commercial building construction for shops, offices, and businesses.",
  },
  {
    title: "Road Construction Work",
    location: "Khargone, Madhya Pradesh",
    image: "/images/03/road1.jpeg",
    summary: "Road construction with proper base, materials, and finishing.",
  },
  {
    title: "Renovation Project",
    location: "Khargone, Madhya Pradesh",
    image: "/images/03/renovation6.jpeg",
    summary: "Renovation and repair work for homes, offices, and old structures.",
  },
  {
    title: "Construction Material Supply",
    location: "Khargone, Madhya Pradesh",
    image: "/images/03/construction-material8.jpeg",
    summary: "Supply of cement, steel, bricks, aggregates, and other material.",
  },
  {
    title: "Civil Site Work",
    location: "Khargone, Madhya Pradesh",
    image: "/images/03/e1.jpeg",
    summary: "Site leveling, foundation, plinth, and other civil work services.",
  },
];

const processSteps = [
  {
    title: "Consultation",
    text: "We understand your construction requirement, budget, location, and expected timeline.",
    icon: MessageCircle,
  },
  {
    title: "Site Visit",
    text: "Our team reviews the site condition and discusses practical construction possibilities.",
    icon: MapPinned,
  },
  {
    title: "Planning & Estimate",
    text: "We prepare a project plan, work scope, material requirement, and estimated cost.",
    icon: FileText,
  },
  {
    title: "Execution",
    text: "Construction work starts with proper coordination, supervision, and quality focus.",
    icon: Shovel,
  },
  {
    title: "Handover",
    text: "Final work is checked and handed over with clear communication.",
    icon: BadgeCheck,
  },
];

const blogCards = [
  {
    title: "How to plan a house construction budget in Khargone",
    text: "Start with plot details, work scope, material choices, labor planning, and a practical site visit.",
  },
  {
    title: "What to check before hiring a civil contractor",
    text: "Look for local experience, clear estimates, material guidance, supervision, and communication.",
  },
  {
    title: "Why material selection matters in construction",
    text: "Good materials improve strength, finishing quality, maintenance life, and overall project reliability.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
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
      <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
        {title}
      </h2>
      {text ? (
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-[1.75] text-slate-600">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <StructuredData
        data={[
          organizationSchema,
          localBusinessSchema,
          serviceSchema,
          websiteSchema,
          faqSchema,
          breadcrumbSchema,
        ]}
      />

      <section
        id="home"
        className="relative isolate overflow-hidden bg-white py-20 text-[#0b2a45] lg:py-28"
      >
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_43%,rgba(255,255,255,0.78)_55%,rgba(255,255,255,0)_72%)]" />
        <div className="blueprint-grid absolute inset-0 -z-10 opacity-50" />
        <div className="mx-auto grid max-w-7xl items-stretch px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm">
              <ShieldCheck
                aria-hidden="true"
                className="size-4 text-[#f58220]"
              />
              Trusted Civil Contractor in Khargone
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-black leading-[1.06] text-[#0b2a45] sm:text-5xl lg:text-6xl">
              Civil Contractor & Construction Company in Khargone
            </h1>
            <p className="mt-5 max-w-xl text-base font-medium leading-[1.75] text-slate-600">
              Bajaj Developers and Group of Industries delivers reliable house
              construction, building construction, road work, renovation, civil
              work, and construction material services across Khargone and
              nearby Madhya Pradesh regions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f58220] px-6 text-sm font-black text-white shadow-[0_12px_28px_rgba(245,130,32,0.24)] transition hover:bg-[#dc6d0c]"
              >
                <FileText aria-hidden="true" className="size-4" />
                Get Free Quote
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#20ad43] bg-white px-6 text-sm font-black text-[#18852d] transition hover:bg-[#f2fff5]"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp Us
              </a>
            </div>

            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0b2a45]"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call {siteConfig.phoneDisplay}
            </a>

            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8 py-8 sm:grid-cols-4">
              {heroHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="text-center sm:text-left">
                    <Icon
                      aria-hidden="true"
                      className="mx-auto size-9 text-[#f58220] sm:mx-0"
                    />
                    <p className="mt-4 text-sm font-black leading-5">
                      {item.title}
                    </p>
                    <p className="mt-2 text-xs font-bold leading-[1.65] text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative -mx-4 min-h-[340px] overflow-hidden sm:-mx-6 lg:mx-0 lg:min-h-[680px]">
            <Image
              src={siteConfig.heroImage}
              alt="Building construction site with civil engineers and workers in Khargone"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[58%_center]"
            />
            <div className="absolute inset-y-0 left-0 hidden w-44 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.78)_48%,rgba(255,255,255,0)_100%)] lg:block" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,#ffffff_0%,rgba(255,255,255,0)_100%)]" />
          </div>
        </div>
      </section>

      <div className="relative z-20 bg-transparent px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_18px_48px_rgba(11,42,69,0.12)] sm:grid-cols-3 lg:grid-cols-6">
          {quickServices.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex min-h-20 items-center gap-4 border-black/10 px-4 py-4 ${
                  index < quickServices.length - 1 ? "lg:border-r" : ""
                } ${index % 2 === 0 ? "border-r sm:border-r-0" : ""}`}
              >
                <Icon
                  aria-hidden="true"
                  className="size-7 shrink-0 text-[#0b2a45]"
                />
                <p className="text-xs font-black leading-5 text-[#0b2a45]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Services"
            title="Complete Construction Services in Khargone"
            text="From planning to final execution, Bajaj Developers provides reliable civil work, residential construction, commercial building work, road projects, renovation, and construction material services in Khargone."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((service) => {
              const details =
                serviceDetails[service.title as keyof typeof serviceDetails];
              const Icon = details?.icon ?? HardHat;

              return (
                <article
                  id={details?.id}
                  key={service.title}
                  className="group rounded-md border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f58220] hover:shadow-[0_16px_42px_rgba(11,42,69,0.12)]"
                >
                  <div className="flex items-start gap-5">
                    <Icon
                      aria-hidden="true"
                      className="size-11 shrink-0 text-[#f58220]"
                    />
                    <div>
                      <h3 className="text-lg font-black text-[#0b2a45]">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 min-h-16 text-sm font-medium leading-[1.65] text-slate-600">
                        {details?.summary ?? service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="mt-6 inline-flex h-9 items-center justify-center rounded-md bg-[#f58220] px-4 text-xs font-black text-white transition hover:bg-[#dc6d0c]"
                      >
                        View Service
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Why Choose Bajaj Developers
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
              A Local Construction Partner You Can Trust
            </h2>
            <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
              Choosing the right civil contractor is important for durability,
              cost control, and timely delivery. Bajaj Developers
              understands local construction needs and provides practical
              support for civil, residential, commercial, and material-related
              projects.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="min-w-0">
                  <Icon
                    aria-hidden="true"
                    className="size-10 text-[#f58220]"
                  />
                  <h3 className="mt-4 text-sm font-black leading-5 text-[#0b2a45]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs font-medium leading-[1.65] text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Work"
            title="Recent Construction & Site Work"
            text="Showcase completed and ongoing work to build trust with local customers. Use real project images whenever available."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {projectCards.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-md border border-black/10 bg-white shadow-sm lg:col-span-1"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} by Bajaj Developers`}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 p-5 pt-0">
                  <h3 className="text-sm font-black leading-5 text-[#0b2a45]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs font-bold text-slate-500">
                    Location: {project.location}
                  </p>
                  <p className="mt-3 min-h-16 text-xs font-medium leading-[1.65] text-slate-600">
                    {project.summary}
                  </p>
                  <a
                    href="#quote"
                    className="mt-6 inline-flex h-9 items-center justify-center rounded-md bg-[#f58220] px-4 text-xs font-black text-white transition hover:bg-[#dc6d0c]"
                  >
                    View Projects
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewsSlider />

      <section className="border-y border-black/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Process"
            title="How We Handle Your Construction Project"
          />

          <div className="relative mt-12 grid gap-8 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-8 hidden border-t border-dashed border-[#0b2a45]/30 md:block" />
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="relative text-center">
                  <div className="relative mx-auto grid size-16 place-items-center rounded-full border-4 border-white bg-[#0b2a45] text-white shadow-[0_8px_22px_rgba(11,42,69,0.18)]">
                    <Icon aria-hidden="true" className="size-7" />
                    <span className="absolute -right-2 -top-2 grid size-8 place-items-center rounded-full border-2 border-white bg-[#f58220] text-xs font-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-black text-[#0b2a45]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs font-medium leading-[1.65] text-slate-600">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="mb-5 text-2xl font-black leading-tight text-[#0b2a45]">
              Construction Services in Khargone and Nearby Areas
            </h2>
            <p className="text-sm font-medium leading-[1.75] text-slate-600">
              Bajaj Developers and Group of Industries provides civil contractor
              and construction services in Khargone, Madhya Pradesh. Our team
              supports house construction, building construction, road work,
              renovation, and material requirements for local residential,
              commercial, and project-based needs.
            </p>
            <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
              We serve customers in Khargone and nearby areas including Barwaha,
              Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani, and
              surrounding Madhya Pradesh regions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-black/10 bg-[#fbfbf8] px-3 py-2 text-xs font-black text-[#0b2a45]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div id="quote" className="overflow-hidden rounded-md bg-[#0b2a45] text-white">
            <div className="relative min-h-80 p-8 sm:p-10">
              <Image
                src="/images/03/building1.jpeg"
                alt="Construction project planning in Khargone"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-[#0b2a45]/70" />
              <div className="relative z-10 max-w-md">
                <h3 className="mb-5 text-2xl font-black leading-tight">
                  Planning a Construction Project in Khargone?
                </h3>
                <p className="text-sm font-medium leading-[1.75] text-white/75">
                  Talk to Bajaj Developers for civil work, house construction,
                  building construction, road work, renovation, and material
                  requirements.
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
                    href="#quote"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-white/25 px-5 text-sm font-black text-white transition hover:border-[#f58220]"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="border-y border-black/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Blog"
            title="Construction Notes for Local Project Planning"
            text="Useful planning topics for customers comparing contractors, material choices, budgets, and site work in Khargone."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {blogCards.map((post) => (
              <article
                key={post.title}
                className="rounded-md border border-black/10 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-black leading-6 text-[#0b2a45]">
                  {post.title}
                </h3>
                <p className="text-sm font-medium leading-[1.65] text-slate-600">
                  {post.text}
                </p>
                <a
                  href="#quote"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#d95f05] transition hover:text-[#0b2a45]"
                >
                  Discuss Project
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Frequently Asked Questions"
            title="Frequently Asked Questions"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {homeFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-md border border-black/10 bg-white p-6 shadow-sm"
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
    </>
  );
}
