import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema, serviceSchema } from "@/lib/seo";
import { serviceLinks, siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Construction Services in Khargone | Bajaj Developers",
  },
  description:
    "Explore civil work, house construction, building construction, road work, renovation, and construction material services by Bajaj Developers in Khargone.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Construction Services in Khargone | Bajaj Developers",
    description:
      "Civil work, house construction, building construction, road work, renovation, and materials in Khargone.",
    url: "/services/",
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <StructuredData data={[organizationSchema, localBusinessSchema, serviceSchema]} />

      <section className="relative isolate overflow-hidden bg-[#0b2a45] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(245,130,32,0.2),transparent_36%),linear-gradient(135deg,#0b2a45_0%,#0d3a5d_56%,#082036_100%)]" />
        <div className="blueprint-grid absolute inset-0 -z-10 opacity-15" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-white/65">
            <Link href="/" className="transition hover:text-[#f58220]">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black text-white">
            <Building2 aria-hidden="true" className="size-4 text-[#f58220]" />
            Construction Services
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
            Construction Services in Khargone
          </h1>
          <p className="mt-6 max-w-3xl text-base font-medium leading-[1.75] text-white/78">
            Bajaj Developers and Group of Industries provides civil work, house
            construction, building construction, road work, renovation, and
            construction material support in Khargone and nearby Madhya Pradesh
            regions.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Main Services
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
              Choose the Service You Need
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f58220] hover:shadow-[0_16px_42px_rgba(11,42,69,0.12)]">
                <CheckCircle2 aria-hidden="true" className="size-11 text-[#f58220]" />
                <h3 className="mt-5 text-lg font-black text-[#0b2a45]">{service.title}</h3>
                <p className="mt-2.5 text-sm font-medium leading-[1.65] text-slate-600">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#d95f05] transition group-hover:text-[#0b2a45]">
                  View Service
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Local Construction Support
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
              Planned Work, Quality Material Focus, Clear Communication
            </h2>
          </div>
          <div className="space-y-5 text-sm font-medium leading-[1.75] text-slate-600">
            <p>
              Every construction service needs proper planning before work
              starts. Bajaj Developers focuses on requirement discussion, site
              review, material guidance, practical execution, and clear call or
              WhatsApp communication.
            </p>
            <p>
              Customers can discuss residential, commercial, private, and
              project-based requirements in Khargone, Barwaha, Kasrawad,
              Maheshwar, Sanawad, Bhikangaon, Barwani, and nearby regions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-md bg-[#0b2a45] p-8 text-white sm:p-10 lg:p-12">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Need Help Choosing the Right Service?
            </h2>
            <p className="mt-5 max-w-3xl text-sm font-medium leading-[1.75] text-white/75">
              Share your project type, location, and expected scope with Bajaj
              Developers and Group of Industries.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${siteConfig.phone}`} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white">
                <Phone aria-hidden="true" className="size-4" />
                Call Now
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#20ad43] px-5 text-sm font-black text-white">
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
