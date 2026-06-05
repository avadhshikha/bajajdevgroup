import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Terms and Conditions | Bajaj Developers",
  },
  description:
    "Terms and Conditions for using the Bajaj Developers website, including information-only content, quote discussion, contact, and website usage.",
  alternates: {
    canonical: "/terms-and-conditions/",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-black text-[#d95f05]">Home</Link>
        <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#0b2a45]/10 bg-[#fbfbf8] px-3 py-2 text-xs font-black text-[#0b2a45]">
          <FileText aria-hidden="true" className="size-4 text-[#f58220]" />
          Website Terms
        </p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-[#0b2a45] sm:text-5xl">
          Terms and Conditions
        </h1>
        <div className="mt-10 space-y-8 text-sm font-medium leading-[1.75] text-slate-600">
          <section>
            <h2 className="mb-5 text-2xl font-black text-[#0b2a45]">Website Information</h2>
            <p>
              This website provides general information about construction
              services offered by {siteConfig.name}. Content is for planning
              and understanding only and should not be treated as a final quote,
              contract, or technical approval.
            </p>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-black text-[#0b2a45]">Quote Discussion</h2>
            <p>
              Construction estimates depend on site condition, project scope,
              materials, labour, location, and timeline. Final discussion should
              happen through direct contact, site review, and agreed work scope.
            </p>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-black text-[#0b2a45]">Website Usage</h2>
            <p>
              Users should use this website responsibly and avoid copying,
              misusing, or misrepresenting its content. Service availability may
              vary based on project scope and practical execution needs.
            </p>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-black text-[#0b2a45]">Contact</h2>
            <p>
              For questions about these terms, contact {siteConfig.name} at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-black text-[#d95f05]">{siteConfig.email}</a>{" "}
              or <a href={`tel:${siteConfig.phone}`} className="font-black text-[#d95f05]">{siteConfig.phoneDisplay}</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
