import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Bajaj Developers",
  },
  description:
    "Privacy Policy for Bajaj Developers and Group of Industries covering contact form, phone, WhatsApp, email, analytics, cookies, and website usage.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-black text-[#d95f05]">Home</Link>
        <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#0b2a45]/10 bg-[#fbfbf8] px-3 py-2 text-xs font-black text-[#0b2a45]">
          <ShieldCheck aria-hidden="true" className="size-4 text-[#f58220]" />
          Website Privacy
        </p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-[#0b2a45] sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-8 text-sm font-medium leading-[1.75] text-slate-600">
          <section>
            <h2 className="mb-5 text-2xl font-black text-[#0b2a45]">Information We Collect</h2>
            <p>
              {siteConfig.name} may collect details you voluntarily share
              through the contact form, phone, WhatsApp, or email. This can
              include your name, phone number, service requirement, project
              location, and message.
            </p>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-black text-[#0b2a45]">How We Use Information</h2>
            <p>
              We use submitted information only to respond to construction
              inquiries, discuss project requirements, share next steps, and
              communicate through phone, WhatsApp, or email.
            </p>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-black text-[#0b2a45]">Analytics and Cookies</h2>
            <p>
              The website may use basic analytics or cookies to understand
              website usage and improve performance. These tools do not replace
              direct project discussion or official quotation review.
            </p>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-black text-[#0b2a45]">Contact</h2>
            <p>
              For privacy-related questions, contact {siteConfig.name} at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-black text-[#d95f05]">{siteConfig.email}</a>{" "}
              or <a href={`tel:${siteConfig.phone}`} className="font-black text-[#d95f05]">{siteConfig.phoneDisplay}</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
