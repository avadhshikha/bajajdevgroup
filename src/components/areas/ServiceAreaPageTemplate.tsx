import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  MapPinned,
  MessageCircle,
  Phone,
} from "lucide-react";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";
import { mapsUrl, serviceLinks, siteConfig, whatsappUrl } from "@/lib/site";
import {
  getAreaCanonical,
  type ServiceAreaPage,
} from "@/lib/website-content";

function areaSchemas(area: ServiceAreaPage) {
  const canonical = getAreaCanonical(area);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: area.h1,
      description: area.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        address: siteConfig.address,
      },
      areaServed: {
        "@type": "Place",
        name: area.area,
      },
      serviceType: serviceLinks.map((service) => service.label),
      url: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.baseUrl },
        { "@type": "ListItem", position: 2, name: area.h1, item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: area.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}

export function ServiceAreaPageTemplate({ area }: { area: ServiceAreaPage }) {
  const quoteMessage = `Hello Bajaj Developers, I want to discuss construction services in ${area.area}.`;

  return (
    <>
      <StructuredData data={[organizationSchema, localBusinessSchema, ...areaSchemas(area)]} />

      <section className="relative isolate overflow-hidden bg-[#0b2a45] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(245,130,32,0.2),transparent_36%),linear-gradient(135deg,#0b2a45_0%,#0d3a5d_56%,#082036_100%)]" />
        <div className="blueprint-grid absolute inset-0 -z-10 opacity-15" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-white/65">
              <Link href="/" className="transition hover:text-[#f58220]">Home</Link>
              <span>/</span>
              <span className="text-white">{area.area}</span>
            </nav>
            <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black text-white">
              <MapPinned aria-hidden="true" className="size-4 text-[#f58220]" />
              Local Construction Service Area
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
              {area.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-[1.75] text-white/78">
              {area.intro}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappUrl(quoteMessage)} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f58220] px-6 text-sm font-black text-white">
                <ClipboardCheck aria-hidden="true" className="size-4" />
                Get Free Quote
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#20ad43] px-6 text-sm font-black text-white">
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp Us
              </a>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-black text-white">
                <Phone aria-hidden="true" className="size-4" />
                Call Now
              </a>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-md border border-white/10 bg-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <Image src={area.image} alt={`${area.h1} by Bajaj Developers`} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,42,69,0.72),rgba(11,42,69,0)_58%)]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Services Available
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
              Construction Services in {area.area}
            </h2>
            <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
              Customers in {area.area} can discuss these construction-related
              requirements with Bajaj Developers and Group of Industries.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((service) => (
              <Link key={service.href} href={service.href} className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f58220]">
                <Building2 aria-hidden="true" className="size-11 text-[#f58220]" />
                <h3 className="mt-5 text-lg font-black text-[#0b2a45]">{service.title}</h3>
                <p className="mt-2.5 text-sm font-medium leading-[1.65] text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Why Choose Us
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
              Why Choose Bajaj Developers in {area.area}
            </h2>
            <div className="mt-7 space-y-5 text-sm font-medium leading-[1.75] text-slate-600">
              <p>
                A local construction company should understand the area, site
                condition, material movement, communication needs, and practical
                execution challenges. Bajaj Developers focuses on planning,
                material guidance, and clear project discussion.
              </p>
              <p>
                We avoid fake claims and focus on helpful construction support
                for homeowners, business owners, property owners, developers,
                and project clients in {area.area} and nearby regions.
              </p>
            </div>
          </div>
          <div className="rounded-md border border-[#0b2a45]/10 bg-[#0b2a45] p-6 text-white shadow-[0_20px_58px_rgba(11,42,69,0.18)]">
            <div className="concrete-band grid min-h-80 place-items-center rounded-md border border-white/10 bg-white/5 p-6 text-center">
              <MapPinned aria-hidden="true" className="mx-auto size-14 text-[#f58220]" />
              <h3 className="mt-5 text-2xl font-black">{area.area}, Madhya Pradesh</h3>
              <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-[1.75] text-white/75">
                Google Maps placeholder for local construction service coverage.
              </p>
              <a href={mapsUrl()} target="_blank" rel="noreferrer" className="mt-7 inline-flex h-11 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-black text-white transition hover:border-[#f58220]">
                View Maps Area
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-black text-[#0b2a45] sm:text-3xl">
            {area.area} Construction FAQs
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {area.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-md border border-[#0b2a45]/10 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-[#0b2a45] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-[#f58220] transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 text-sm font-medium leading-[1.75] text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-md bg-[#0b2a45] p-8 text-white sm:p-10 lg:p-12">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Looking for Construction Services in {area.area}?
            </h2>
            <p className="mt-5 max-w-3xl text-sm font-medium leading-[1.75] text-white/75">
              Talk to Bajaj Developers and Group of Industries for civil work,
              house construction, building construction, road work, renovation,
              and construction material support.
            </p>
            <a href={whatsappUrl(quoteMessage)} target="_blank" rel="noreferrer" className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white">
              Request Quote
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
