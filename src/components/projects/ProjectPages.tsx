import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ImageIcon,
  MapPinned,
  MessageCircle,
  Phone,
} from "lucide-react";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";
import { serviceLinks, siteConfig, whatsappUrl } from "@/lib/site";
import {
  getProjectCanonical,
  getRelatedProjects,
  projectCaseStudies,
  projectCategories,
  type ProjectCaseStudy,
} from "@/lib/website-content";

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
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

function ProjectCard({
  project,
  featured = false,
}: {
  project: ProjectCaseStudy;
  featured?: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-md border border-[#0b2a45]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#f58220] hover:shadow-[0_16px_42px_rgba(11,42,69,0.12)] ${
        featured ? "grid lg:grid-cols-[1.05fr_0.95fr]" : ""
      }`}
    >
      <div className={`relative bg-slate-100 ${featured ? "min-h-[320px]" : "aspect-[4/3]"}`}>
        <Image
          src={project.image}
          alt={`${project.title} by Bajaj Developers`}
          fill
          sizes={featured ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          className="object-cover"
        />
      </div>
      <div className="p-6 sm:p-8">
        <p className="inline-flex rounded-full bg-[#fff3e8] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#d95f05]">
          {project.projectType}
        </p>
        <h3 className="mt-5 text-xl font-black leading-tight text-[#0b2a45]">
          {project.title}
        </h3>
        <p className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-slate-500">
          <MapPinned aria-hidden="true" className="size-4 text-[#f58220]" />
          {project.location}
        </p>
        <p className="mt-4 text-sm font-medium leading-[1.75] text-slate-600">
          {project.summary}
        </p>
        <Link
          href={project.relatedService.href}
          className="mt-4 inline-flex text-sm font-black text-[#d95f05] transition hover:text-[#0b2a45]"
        >
          Related service: {project.relatedService.title}
        </Link>
        <Link
          href={`/projects/${project.slug}/`}
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white transition hover:bg-[#dc6d0c]"
        >
          View Project
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </article>
  );
}

function buildProjectSchemas(project: ProjectCaseStudy) {
  const canonical = getProjectCanonical(project);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: canonical,
      image: `${siteConfig.baseUrl}${project.image}`,
      about: project.projectType,
      locationCreated: project.location,
      creator: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.baseUrl },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.baseUrl}/projects/` },
        { "@type": "ListItem", position: 3, name: project.title, item: canonical },
      ],
    },
  ];
}

export function ProjectsListingPage() {
  const [featured, second, third] = projectCaseStudies;

  return (
    <>
      <StructuredData
        data={[
          organizationSchema,
          localBusinessSchema,
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Construction Projects in Khargone",
            url: `${siteConfig.baseUrl}/projects/`,
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
            <span className="text-white">Projects</span>
          </nav>
          <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black text-white">
            <Building2 aria-hidden="true" className="size-4 text-[#f58220]" />
            Editable Case Studies
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
            Construction Projects in Khargone
          </h1>
          <p className="mt-6 max-w-3xl text-base font-medium leading-[1.75] text-white/78">
            View construction project case studies by Bajaj Developers and
            Group of Industries, including residential, commercial, road work,
            renovation, and civil work projects in Khargone and nearby areas.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Project Categories" title="Browse Work by Service Type" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <span key={category} className="rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] px-4 py-2 text-xs font-black text-[#0b2a45]">
                {category}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectCaseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Editable Project Stories for Local Trust"
            text="These pages are built as realistic case-study templates and can be updated with real project details, photos, and approved scope later."
          />
          <div className="mt-12 grid gap-8">
            <ProjectCard project={featured} featured />
            <div className="grid gap-8 md:grid-cols-2">
              <ProjectCard project={second} />
              <ProjectCard project={third} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Service-Based Categories" title="Projects Connected to Services" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((service) => (
              <Link key={service.href} href={service.href} className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:border-[#f58220]">
                <h3 className="text-lg font-black text-[#0b2a45]">{service.title}</h3>
                <p className="mt-3 text-sm font-medium leading-[1.65] text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Planning Matters
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
              Why Project Planning Matters Before Site Work
            </h2>
          </div>
          <div className="grid gap-5 text-sm font-medium leading-[1.75] text-slate-600">
            <p>
              Construction projects need clear scope, site understanding,
              material planning, budget discussion, and communication before
              execution starts. Good planning reduces avoidable confusion and
              helps customers understand what work is included.
            </p>
            <p>
              These project pages are structured to support SEO, local trust,
              and future editing. Once real details are available, each case
              study can be updated with customer-approved photos, measurements,
              challenges, and actual work notes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-md bg-[#0b2a45] p-8 text-white sm:p-10 lg:p-12">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Want to Discuss a Similar Project?
            </h2>
            <p className="mt-5 max-w-3xl text-sm font-medium leading-[1.75] text-white/75">
              Talk to Bajaj Developers and Group of Industries for construction
              project planning in Khargone and nearby Madhya Pradesh regions.
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

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="FAQ" title="Project Case Study FAQs" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              ["Are these pages final project records?", "These are editable case-study pages prepared for structure, SEO, and future real project data."],
              ["Can real project images be added later?", "Yes, approved real images and project details can replace placeholders later."],
              ["Do project pages link to services?", "Yes, every project links to its related service page for internal SEO and user clarity."],
              ["Can I request a similar project discussion?", "Yes, you can call or WhatsApp Bajaj Developers to discuss a similar construction requirement."],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-md border border-[#0b2a45]/10 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-[#0b2a45] [&::-webkit-details-marker]:hidden">
                  {question}
                  <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-[#f58220] transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 text-sm font-medium leading-[1.75] text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjectDetailPage({ project }: { project: ProjectCaseStudy }) {
  const relatedProjects = getRelatedProjects(project);

  return (
    <>
      <StructuredData data={[organizationSchema, localBusinessSchema, ...buildProjectSchemas(project)]} />

      <section className="relative isolate overflow-hidden bg-[#0b2a45] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(245,130,32,0.2),transparent_36%),linear-gradient(135deg,#0b2a45_0%,#0d3a5d_56%,#082036_100%)]" />
        <div className="blueprint-grid absolute inset-0 -z-10 opacity-15" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/65">
              <Link href="/" className="transition hover:text-[#f58220]">Home</Link>
              <span>/</span>
              <Link href="/projects/" className="transition hover:text-[#f58220]">Projects</Link>
              <span>/</span>
              <span className="text-white">{project.projectType}</span>
            </nav>
            <p className="mt-9 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">
              {project.projectType}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/72">
              <MapPinned aria-hidden="true" className="size-4 text-[#f58220]" />
              {project.location}
            </p>
            <p className="mt-6 max-w-3xl text-base font-medium leading-[1.75] text-white/78">
              {project.summary}
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-md border border-white/10 bg-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <Image src={project.image} alt={`${project.title} in ${project.location}`} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,42,69,0.72),rgba(11,42,69,0)_58%)]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.7fr_0.3fr] lg:px-8">
          <div className="space-y-10">
            {[
              ["Project Overview", project.overview],
              ["Challenge", project.challenge],
              ["Solution", project.solution],
            ].map(([heading, text]) => (
              <section key={heading}>
                <h2 className="text-2xl font-black text-[#0b2a45]">{heading}</h2>
                <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">{text}</p>
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-black text-[#0b2a45]">Work Included</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.workIncluded.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] p-4">
                    <BadgeCheck aria-hidden="true" className="size-5 shrink-0 text-[#f58220]" />
                    <h3 className="text-sm font-black text-[#0b2a45]">{item}</h3>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <aside className="rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] p-6 shadow-sm lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#f58220]">Project Details</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div><dt className="font-black text-[#0b2a45]">Type</dt><dd className="mt-1 text-slate-600">{project.projectType}</dd></div>
              <div><dt className="font-black text-[#0b2a45]">Location</dt><dd className="mt-1 text-slate-600">{project.location}</dd></div>
              <div><dt className="font-black text-[#0b2a45]">Related Service</dt><dd className="mt-1"><Link href={project.relatedService.href} className="font-black text-[#d95f05]">{project.relatedService.title}</Link></dd></div>
              <div><dt className="font-black text-[#0b2a45]">Data Status</dt><dd className="mt-1 text-slate-600">Editable placeholder case study</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Gallery" title="Project Image Gallery Placeholder" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-md border border-[#0b2a45]/10 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={image} alt={`${project.title} gallery image ${index + 1}`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="flex items-center gap-3 p-4 text-sm font-black text-[#0b2a45]">
                  <ImageIcon aria-hidden="true" className="size-4 text-[#f58220]" />
                  Editable project image {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-md bg-[#0b2a45] p-8 text-white sm:p-10 lg:p-12">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Need Help With a Similar Project?
            </h2>
            <p className="mt-5 max-w-3xl text-sm font-medium leading-[1.75] text-white/75">
              Discuss your {project.projectType.toLowerCase()} requirement
              with Bajaj Developers and Group of Industries.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${siteConfig.phone}`} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white">
                <Phone aria-hidden="true" className="size-4" />
                Call Now
              </a>
              <a href={whatsappUrl(`Hello Bajaj Developers, I want to discuss a project similar to ${project.title}.`)} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#20ad43] px-5 text-sm font-black text-white">
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Related Projects" title="Explore Similar Case Studies" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.slug} project={related} />
            ))}
          </div>
          <section className="mt-12">
            <h2 className="text-2xl font-black text-[#0b2a45]">Project FAQs</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-md border border-[#0b2a45]/10 bg-white p-6 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-[#0b2a45] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-[#f58220] transition group-open:rotate-45" />
                  </summary>
                  <p className="mt-4 text-sm font-medium leading-[1.75] text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
