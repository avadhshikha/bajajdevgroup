import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, importantPages, projectCaseStudies, serviceAreaPages } from "@/lib/website-content";

export const metadata: Metadata = {
  title: {
    absolute: "Sitemap | Bajaj Developers",
  },
  description:
    "HTML sitemap for Bajaj Developers and Group of Industries with links to services, projects, blog posts, service area pages, contact, and legal pages.",
  alternates: {
    canonical: "/sitemap/",
  },
};

export default function HtmlSitemapPage() {
  const sections = [
    { title: "Important Pages", links: importantPages },
    {
      title: "Blog Posts",
      links: blogPosts.map((post) => ({ title: post.title, href: `/blog/${post.slug}/` })),
    },
    {
      title: "Project Pages",
      links: projectCaseStudies.map((project) => ({ title: project.title, href: `/projects/${project.slug}/` })),
    },
    {
      title: "Service Area Pages",
      links: serviceAreaPages.map((area) => ({ title: area.h1, href: `/${area.slug}/` })),
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
          Website Links
        </p>
        <h1 className="text-4xl font-black leading-tight text-[#0b2a45] sm:text-5xl">
          Sitemap
        </h1>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-black text-[#0b2a45]">{section.title}</h2>
              <ul className="mt-5 grid gap-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-bold leading-5 text-slate-600 transition hover:text-[#d95f05]">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
