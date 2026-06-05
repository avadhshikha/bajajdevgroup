import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
} from "lucide-react";
import { QuickQuoteForm } from "@/components/contact/QuickQuoteForm";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";
import {
  mapsUrl,
  serviceAreas,
  serviceLinks,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Bajaj Developers | Civil Contractor in Khargone",
  },
  description:
    "Contact Bajaj Developers and Group of Industries for civil work, house construction, building construction, road work, renovation, and construction materials in Khargone.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Bajaj Developers | Civil Contractor in Khargone",
    description:
      "Contact Bajaj Developers for construction services in Khargone and nearby Madhya Pradesh regions.",
    url: "/contact/",
  },
};

const contactFaqs = [
  {
    question: "How can I contact Bajaj Developers?",
    answer:
      "You can call, WhatsApp, email, or submit the inquiry form on this page to discuss your construction requirement.",
  },
  {
    question: "Which services can I inquire about?",
    answer:
      "You can inquire about civil work, house construction, building construction, road work, renovation, construction materials, or other construction-related needs.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Bajaj Developers serves Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani, and nearby Madhya Pradesh regions.",
  },
  {
    question: "What details should I share for a quote?",
    answer:
      "Share your name, phone number, service required, project location, approximate scope, and any important site details.",
  },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={[
          organizationSchema,
          localBusinessSchema,
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Bajaj Developers",
            url: `${siteConfig.baseUrl}/contact/`,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: contactFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />

      <section className="relative isolate overflow-hidden bg-[#0b2a45] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(245,130,32,0.2),transparent_36%),linear-gradient(135deg,#0b2a45_0%,#0d3a5d_56%,#082036_100%)]" />
        <div className="blueprint-grid absolute inset-0 -z-10 opacity-15" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-white/65">
            <Link href="/" className="transition hover:text-[#f58220]">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black text-white">
            <MessageCircle aria-hidden="true" className="size-4 text-[#f58220]" />
            Talk to Bajaj Developers
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
            Contact Bajaj Developers
          </h1>
          <p className="mt-6 max-w-3xl text-base font-medium leading-[1.75] text-white/78">
            Contact Bajaj Developers and Group of Industries for civil work,
            house construction, building construction, road work, renovation,
            and construction materials in Khargone.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { title: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}`, icon: Phone },
            { title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
            { title: "Location", value: siteConfig.address, href: mapsUrl(), icon: MapPinned },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.title} href={item.href} target={item.title === "Location" ? "_blank" : undefined} rel={item.title === "Location" ? "noreferrer" : undefined} className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f58220]">
                <Icon aria-hidden="true" className="size-11 text-[#f58220]" />
                <h2 className="mt-5 text-lg font-black text-[#0b2a45]">{item.title}</h2>
                <p className="mt-2.5 text-sm font-medium leading-[1.65] text-slate-600">{item.value}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Inquiry Form
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
              Share Your Project Requirement
            </h2>
            <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
              Fill the form with your name, phone number, service required,
              project location, and message. The form opens WhatsApp with your
              details so the conversation can start quickly.
            </p>
            <div className="mt-8 grid gap-3">
              {serviceLinks.map((service) => (
                <Link key={service.href} href={service.href} className="text-sm font-black text-[#d95f05] transition hover:text-[#0b2a45]">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <QuickQuoteForm />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="rounded-md border border-[#0b2a45]/10 bg-[#0b2a45] p-6 text-white shadow-[0_20px_58px_rgba(11,42,69,0.18)]">
            <div className="concrete-band grid min-h-80 place-items-center rounded-md border border-white/10 bg-white/5 p-6 text-center">
              <MapPinned aria-hidden="true" className="mx-auto size-14 text-[#f58220]" />
              <h2 className="mt-5 text-2xl font-black">Google Maps Placeholder</h2>
              <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-[1.75] text-white/75">
                Local construction service coverage for Khargone and nearby
                Madhya Pradesh regions.
              </p>
              <a href={mapsUrl()} target="_blank" rel="noreferrer" className="mt-7 inline-flex h-11 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-black text-white transition hover:border-[#f58220]">
                View Maps Area
              </a>
            </div>
          </div>
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Service Areas
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
              Areas We Serve
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] px-3 py-2 text-xs font-black text-[#0b2a45]">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-black text-[#0b2a45] sm:text-3xl">
            Contact FAQs
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {contactFaqs.map((faq) => (
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
    </>
  );
}
