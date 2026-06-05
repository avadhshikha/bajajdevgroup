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
  Route,
  ShieldCheck,
  Shovel,
  Truck,
} from "lucide-react";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";
import { mapsUrl, siteConfig, whatsappUrl } from "@/lib/site";
import {
  serviceBySlug,
  type ServiceIcon,
  type ServicePageData,
} from "@/lib/services";

const trustPoints = [
  { title: "Local Khargone Service", icon: "MapPinned" },
  { title: "Planned Work Execution", icon: "ClipboardCheck" },
  { title: "Quality Material Focus", icon: "PackageCheck" },
  { title: "Residential & Commercial Support", icon: "Building2" },
] satisfies { title: string; icon: ServiceIcon }[];

function IconGlyph({
  name,
  className,
}: {
  name: ServiceIcon;
  className: string;
}) {
  switch (name) {
    case "BadgeCheck":
      return <BadgeCheck aria-hidden="true" className={className} />;
    case "Building2":
      return <Building2 aria-hidden="true" className={className} />;
    case "CheckCircle2":
      return <CheckCircle2 aria-hidden="true" className={className} />;
    case "ClipboardCheck":
      return <ClipboardCheck aria-hidden="true" className={className} />;
    case "FileText":
      return <FileText aria-hidden="true" className={className} />;
    case "HomeIcon":
      return <HomeIcon aria-hidden="true" className={className} />;
    case "MapPinned":
      return <MapPinned aria-hidden="true" className={className} />;
    case "MessageCircle":
      return <MessageCircle aria-hidden="true" className={className} />;
    case "PackageCheck":
      return <PackageCheck aria-hidden="true" className={className} />;
    case "Paintbrush":
      return <Paintbrush aria-hidden="true" className={className} />;
    case "Phone":
      return <Phone aria-hidden="true" className={className} />;
    case "Route":
      return <Route aria-hidden="true" className={className} />;
    case "ShieldCheck":
      return <ShieldCheck aria-hidden="true" className={className} />;
    case "Shovel":
      return <Shovel aria-hidden="true" className={className} />;
    case "Truck":
      return <Truck aria-hidden="true" className={className} />;
    case "HardHat":
    default:
      return <HardHat aria-hidden="true" className={className} />;
  }
}

function CheckIcon({ className }: { className: string }) {
  return <CheckCircle2 aria-hidden="true" className={className} />;
}

const secondaryIconFallback: ServiceIcon = "HardHat";

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
        <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function IconCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ServiceIcon;
}) {
  return (
    <article className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f58220] hover:shadow-[0_16px_42px_rgba(11,42,69,0.12)]">
      <IconGlyph name={icon} className="size-11 text-[#f58220]" />
      <h3 className="mt-5 text-lg font-black leading-6 text-[#0b2a45]">
        {title}
      </h3>
      <p className="mt-2.5 text-sm font-medium leading-[1.65] text-slate-600">
        {description}
      </p>
    </article>
  );
}

function buildServiceSchema(service: ServicePageData) {
  const absoluteImage = `${siteConfig.baseUrl}${service.heroImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    serviceType: service.primaryKeyword,
    description: service.metaDescription,
    url: service.canonicalUrl,
    image: absoluteImage,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      address: siteConfig.address,
      url: siteConfig.baseUrl,
    },
    areaServed: service.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.pageTitle} service inclusions`,
      itemListElement: service.includedItems.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
        },
      })),
    },
  };
}

function buildBreadcrumbSchema(service: ServicePageData) {
  return {
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
        name: "Services",
        item: `${siteConfig.baseUrl}/services/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.pageTitle,
        item: service.canonicalUrl,
      },
    ],
  };
}

function buildFaqSchema(service: ServicePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function ServicePageTemplate({ service }: { service: ServicePageData }) {
  const quoteMessage = `Hello Bajaj Developers, I want to discuss a ${service.pageTitle.toLowerCase()} project in Khargone.`;
  const relatedServices = service.relatedServices.map(
    (slug) => serviceBySlug[slug],
  );

  return (
    <>
      <StructuredData
        data={[
          organizationSchema,
          localBusinessSchema,
          buildServiceSchema(service),
          buildBreadcrumbSchema(service),
          buildFaqSchema(service),
        ]}
      />

      <section className="relative isolate overflow-hidden bg-[#0b2a45] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(245,130,32,0.2),transparent_36%),linear-gradient(135deg,#0b2a45_0%,#0d3a5d_56%,#082036_100%)]" />
        <div className="blueprint-grid absolute inset-0 -z-10 opacity-15" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/65"
            >
              <Link href="/" className="transition hover:text-[#f58220]">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/services/"
                className="transition hover:text-[#f58220]"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-white">{service.pageTitle}</span>
            </nav>

            <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black text-white shadow-sm">
              <ShieldCheck
                aria-hidden="true"
                className="size-4 text-[#f58220]"
              />
              Trusted Service in Khargone
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-[1.75] text-white/78">
              {service.heroDescription}
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((item) => {
                return (
                  <div key={item.title} className="flex items-center gap-4">
                    <IconGlyph
                      name={item.icon}
                      className="size-7 shrink-0 text-[#f58220]"
                    />
                    <p className="text-sm font-black leading-5 text-white">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-md border border-white/10 bg-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <Image
              src={service.heroImage}
              alt={service.heroImageAlt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,42,69,0.76),rgba(11,42,69,0)_58%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="rounded-md border border-white/15 bg-[#0b2a45]/82 p-4 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f58220]">
                  {siteConfig.city}, {siteConfig.state}
                </p>
                <p className="mt-2 text-sm font-bold leading-[1.65] text-white/88">
                  Local service support for homeowners, business owners,
                  property owners, developers, and project clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <SectionTitle
            eyebrow="Service Overview"
            title={`Reliable ${service.pageTitle} Services in Khargone`}
            align="left"
          />
          <div className="space-y-5 text-sm font-medium leading-[1.75] text-slate-600">
            {service.overviewContent.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              {service.secondaryKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] px-3 py-2 text-xs font-black text-[#0b2a45]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="What We Provide"
            title={`What Is Included in Our ${service.pageTitle} Service`}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.includedItems.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Choose Us"
            title={`Why Choose Bajaj Developers for ${service.pageTitle} in Khargone`}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.whyChooseItems.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Process"
            title={`How We Handle Your ${service.pageTitle} Project`}
          />
          <div className="relative mt-12 grid gap-8 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-8 hidden border-t border-dashed border-[#0b2a45]/30 md:block" />
            {service.processSteps.map((step, index) => {
              return (
                <article key={step.title} className="relative text-center">
                  <div className="relative mx-auto grid size-16 place-items-center rounded-full border-4 border-white bg-[#0b2a45] text-white shadow-[0_8px_22px_rgba(11,42,69,0.18)]">
                    <IconGlyph name={step.icon} className="size-7" />
                    <span className="absolute -right-2 -top-2 grid size-8 place-items-center rounded-full border-2 border-white bg-[#f58220] text-xs font-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-black text-[#0b2a45]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs font-medium leading-[1.65] text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionTitle
              eyebrow="Local Service Area"
              title={`${service.pageTitle} Services in Khargone and Nearby Areas`}
              align="left"
            />
            <div className="mt-7 space-y-5 text-sm font-medium leading-[1.75] text-slate-600">
              <p>
                {siteConfig.name} provides {service.pageTitle.toLowerCase()}{" "}
                services in Khargone, Madhya Pradesh. The company supports
                local customers, homeowners, business owners, property owners,
                developers, and project clients with reliable
                construction-related services.
              </p>
              <p>
                Service coverage includes Khargone, Barwaha, Kasrawad,
                Maheshwar, Sanawad, Bhikangaon, Barwani, and nearby Madhya
                Pradesh regions.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {service.serviceAreas.slice(0, 7).map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] px-3 py-3 text-center text-xs font-black text-[#0b2a45]"
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
                  Google Maps Service Area
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-[1.75] text-white/75">
                  Khargone and nearby Madhya Pradesh regions for{" "}
                  {service.pageTitle.toLowerCase()} requirements.
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
          <SectionTitle
            eyebrow="Service Benefits"
            title={`Benefits of Choosing a Reliable ${service.pageTitle} Contractor in Khargone`}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {service.benefits.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Related Services"
            title="Explore More Construction Services"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => {
              const firstIcon =
                related.includedItems[0]?.icon ?? secondaryIconFallback;

              return (
                <Link
                  key={related.slug}
                  href={`/${related.slug}/`}
                  className="group rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f58220] hover:shadow-[0_16px_42px_rgba(11,42,69,0.12)]"
                >
                  <IconGlyph name={firstIcon} className="size-11 text-[#f58220]" />
                  <h3 className="mt-5 text-lg font-black leading-6 text-[#0b2a45]">
                    {related.menuTitle === "Materials"
                      ? "Construction Materials"
                      : related.menuTitle}
                  </h3>
                  <p className="mt-2.5 text-sm font-medium leading-[1.65] text-slate-600">
                    {related.metaDescription}
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

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-md bg-[#0b2a45] text-white shadow-[0_20px_58px_rgba(11,42,69,0.18)]">
            <div className="relative p-8 sm:p-10 lg:p-12">
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt}
                fill
                sizes="100vw"
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-[#0b2a45]/78" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                    Need Help With Your {service.pageTitle} Project?
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm font-medium leading-[1.75] text-white/75">
                    Talk to Bajaj Developers and Group of Industries for
                    reliable {service.pageTitle.toLowerCase()} services in
                    Khargone and nearby Madhya Pradesh regions.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
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
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Frequently Asked Questions"
            title={`${service.pageTitle} in Khargone - Frequently Asked Questions`}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {service.faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-md border border-[#0b2a45]/10 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black leading-6 text-[#0b2a45] [&::-webkit-details-marker]:hidden">
                  <span>
                    {index + 1}. {faq.question}
                  </span>
                  <CheckIcon
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
          <div className="rounded-md bg-[#0b2a45] p-8 text-white shadow-[0_20px_58px_rgba(11,42,69,0.18)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                  {service.ctaHeadline}
                </h2>
                <p className="mt-5 max-w-2xl text-sm font-medium leading-[1.75] text-white/75">
                  {service.ctaDescription}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
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
    </>
  );
}
