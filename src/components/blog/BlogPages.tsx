import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site";
import {
  blogCategories,
  blogPosts,
  getBlogCanonical,
  getRelatedBlogPosts,
  type BlogPost,
} from "@/lib/website-content";

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

function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={`group overflow-hidden rounded-md border border-[#0b2a45]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#f58220] hover:shadow-[0_16px_42px_rgba(11,42,69,0.12)] ${
        featured ? "grid lg:grid-cols-[1.05fr_0.95fr]" : ""
      }`}
    >
      <div className={`relative bg-slate-100 ${featured ? "min-h-[320px]" : "aspect-[4/3]"}`}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          className="object-cover"
        />
      </div>
      <div className="p-6 sm:p-8">
        <p className="inline-flex rounded-full bg-[#fff3e8] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#d95f05]">
          {post.category}
        </p>
        <h3 className="mt-5 text-xl font-black leading-tight text-[#0b2a45]">
          {post.title}
        </h3>
        <p className="mt-4 text-sm font-medium leading-[1.75] text-slate-600">
          {post.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold text-slate-500">
          <span className="inline-flex items-center gap-2">
            <UserRound aria-hidden="true" className="size-4 text-[#f58220]" />
            Bajaj Developers Team
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="size-4 text-[#f58220]" />
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock aria-hidden="true" className="size-4 text-[#f58220]" />
            {post.readTime}
          </span>
        </div>
        <Link
          href={`/blog/${post.slug}/`}
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white transition hover:bg-[#dc6d0c]"
        >
          Read Guide
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </article>
  );
}

function buildBlogSections(post: BlogPost) {
  const linkText = post.internalLinks.map((link) => link.title).join(", ");

  return [
    {
      id: "overview",
      title: `${post.primaryKeyword} ko simple language me samjhe`,
      paragraphs: [
        `${post.title} topic par sabse important baat yeh hai ki construction me decision jaldi nahi lena chahiye. Ghar, building, road work ya renovation jaise project me paisa, time aur material dono involved hote hain. Isliye ${post.primaryKeyword} ko samajhne ke liye practical planning, site condition, local material availability, labour coordination aur contractor communication ko ek saath dekhna padta hai.`,
        `Khargone aur nearby Madhya Pradesh regions me construction requirement local condition ke hisab se change ho sakti hai. Kisi plot par access easy hota hai, kisi site par material unloading difficult hoti hai, aur kisi project me finishing expectation high hoti hai. Bajaj Developers and Group of Industries ka focus isi tarah ke real project points ko clear discussion ke through samajhne par hota hai.`,
      ],
    },
    {
      id: "planning",
      title: "Planning stage me kya clear karna chahiye",
      paragraphs: [
        `Construction start karne se pehle customer ko apna purpose clear karna chahiye. Agar ghar banwana hai to family requirement, future expansion, room size, parking, ventilation aur budget priority clear honi chahiye. Agar commercial work hai to business use, access, floor load, customer movement aur maintenance needs ko discuss karna chahiye. Yeh clarity estimate aur work scope dono ko better banati hai.`,
        `Planning me ek aur important point hai documentation of requirement. Rough notes, site photos, plot size, expected timeline, material preference aur design reference contractor ke saath share karne se confusion kam hota hai. Is guide ke internal links me ${linkText} jaise pages diye gaye hain jahan se related service details samajh sakte hain.`,
      ],
    },
    {
      id: "budget",
      title: "Budget aur estimate ko kaise samjhe",
      paragraphs: [
        `Budget sirf ek number nahi hota. Isme civil work, foundation, RCC, brickwork, plastering, flooring, finishing, material movement, labour, repair needs aur site condition ke factors include ho sakte hain. Jab customer sirf lowest price compare karta hai to kabhi-kabhi scope difference miss ho jata hai. Practical estimate tab useful hota hai jab scope, material, quantity aur exclusions clear hon.`,
        `Khargone me project estimate discuss karte waqt location, site access, required service, expected quality level aur timeline clearly batana chahiye. Agar requirement renovation ka hai to existing structure condition bhi cost ko impact kar sakti hai. Agar material support chahiye to cement, sand, aggregate, steel, bricks aur timing ko separate plan karna better hota hai.`,
      ],
    },
    {
      id: "materials",
      title: "Material quality aur local availability",
      paragraphs: [
        `Construction material quality long-term durability ko directly affect karti hai. Cement, steel, sand, aggregate, bricks aur finishing material project ke use ke hisab se select karne chahiye. Strong structure ke liye material choice ke saath execution method, curing, supervision aur work sequence bhi important hota hai. Sirf material ka naam dekhna enough nahi hota; uska project suitability bhi samajhna zaruri hai.`,
        `Local availability ka bhi role hota hai. Agar material time par site par nahi aata to labour idle ho sakti hai aur project delay ho sakta hai. Agar material bahut jaldi aa jaye aur storage proper na ho to wastage ya quality issue aa sakta hai. Isliye site material planning ko work stage ke saath align karna practical approach hota hai.`,
      ],
    },
    {
      id: "contractor",
      title: "Contractor selection me practical checks",
      paragraphs: [
        `Contractor select karte waqt sirf quote compare na kare. Dekhe ki contractor requirement dhyan se sun raha hai ya nahi, site condition samajhne ke liye practical questions puch raha hai ya nahi, material quality par guidance de raha hai ya nahi, aur communication easy hai ya nahi. Local contractor ko Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon aur Barwani jaise areas ki practical conditions ka better idea ho sakta hai.`,
        `Acha contractor customer ko unrealistic promises dene ke bajay project scope aur next steps clearly explain karta hai. Bajaj Developers and Group of Industries fake awards, fake claims ya confusing promises par depend nahi karta. Focus simple hai: requirement samjho, site needs discuss karo, material aur execution planning clear rakho, aur customer ko call/WhatsApp ke through easy communication do.`,
      ],
    },
    {
      id: "process",
      title: "Typical construction process ka flow",
      paragraphs: [
        `Most construction-related work requirement discussion se start hota hai. Uske baad site visit ya project review, planning and estimate, material discussion, work execution, final review aur handover jaise steps aate hain. Project type ke hisab se steps change ho sakte hain, lekin process ka goal same rehta hai: scope clear rahe, material timely rahe, aur work practical sequence me complete ho.`,
        `Customer ke liye best approach yeh hota hai ki har major stage par questions puchhe. Foundation, RCC, brickwork, plastering, finishing, renovation repair, road base ya material delivery jaisi cheezein samajhna project confidence badhata hai. Clear communication se avoidable delay, misunderstanding aur last-minute cost confusion kam hota hai.`,
      ],
    },
    {
      id: "local",
      title: "Khargone aur nearby areas ke local points",
      paragraphs: [
        `Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani aur nearby Madhya Pradesh regions me construction planning local access, material movement, site condition aur customer availability ke hisab se karni chahiye. Har area me project requirement same nahi hoti, isliye local discussion important hota hai.`,
        `Agar aap ${post.primaryKeyword} ke liye planning kar rahe hain, to project location, expected work, budget range aur photos WhatsApp par share karke initial discussion start kar sakte hain. Uske baad requirement ke hisab se next step, site review ya estimate discussion decide kiya ja sakta hai.`,
      ],
    },
    {
      id: "summary",
      title: "Final practical advice",
      paragraphs: [
        `Construction project me best result tab milta hai jab customer aur contractor dono clear communication rakhte hain. Requirement realistic ho, budget practical ho, material quality suitable ho, aur work sequence planned ho. Jaldi decision lene se better hai ki pehle scope samjha jaye aur phir execution start ho.`,
        `${siteConfig.name} civil work, house construction, building construction, road work, renovation aur construction material support ke liye Khargone and nearby areas me local customers se project requirements discuss karta hai. Aap apni requirement call, WhatsApp ya contact page ke through share kar sakte hain.`,
      ],
    },
  ];
}

function buildBlogSchema(post: BlogPost) {
  const canonical = getBlogCanonical(post);
  const image = `${siteConfig.baseUrl}${post.image}`;
  const base = {
    headline: post.title,
    description: post.metaDescription,
    image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Bajaj Developers Team",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.baseUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: canonical,
  };

  return [
    { "@context": "https://schema.org", "@type": "BlogPosting", ...base },
    { "@context": "https://schema.org", "@type": "Article", ...base },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.baseUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.baseUrl}/blog/` },
        { "@type": "ListItem", position: 3, name: post.title, item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}

export function BlogListingPage() {
  const [featured, ...rest] = blogPosts;
  const popular = blogPosts.slice(0, 6);

  return (
    <>
      <StructuredData
        data={[
          organizationSchema,
          localBusinessSchema,
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Construction Blog in Khargone",
            url: `${siteConfig.baseUrl}/blog/`,
            description:
              "Practical Hinglish construction guides by Bajaj Developers for Khargone and nearby Madhya Pradesh regions.",
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
            <span className="text-white">Blog</span>
          </nav>
          <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black text-white">
            <BookOpen aria-hidden="true" className="size-4 text-[#f58220]" />
            Practical Construction Guides
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
            Construction Blog in Khargone
          </h1>
          <p className="mt-6 max-w-3xl text-base font-medium leading-[1.75] text-white/78">
            Read practical Hinglish construction guides by Bajaj Developers on
            house construction cost, civil work, renovation, building materials,
            road work, and contractor selection in Khargone.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Featured Guide" title="Start With the Most Useful Planning Guide" />
          <div className="mt-12">
            <BlogCard post={featured} featured />
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Blog Categories"
            title="Construction Topics for Local Planning"
            text="Use these category labels to quickly scan house construction, civil work, road work, renovation, material, and planning guides."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <span key={category} className="rounded-md border border-[#0b2a45]/10 bg-white px-4 py-2 text-xs font-black text-[#0b2a45] shadow-sm">
                {category}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Popular Guides" title="Useful Construction Notes" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {popular.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="rounded-md border border-[#0b2a45]/10 bg-white p-8 shadow-sm transition hover:border-[#f58220]">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#f58220]">{post.category}</p>
                <h3 className="mt-4 text-lg font-black leading-6 text-[#0b2a45]">{post.title}</h3>
                <p className="mt-3 text-sm font-medium leading-[1.65] text-slate-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2a45]/10 bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-md bg-[#0b2a45] p-8 text-white shadow-[0_20px_58px_rgba(11,42,69,0.18)] sm:p-10 lg:p-12">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Need Construction Tips for Your Site?
            </h2>
            <p className="mt-5 max-w-3xl text-sm font-medium leading-[1.75] text-white/75">
              Share your project location, service requirement, and planning
              question with Bajaj Developers. We can guide the next practical
              step for civil work, house construction, renovation, road work, or
              materials.
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

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="FAQ" title="Construction Blog FAQs" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              ["Are these guides written for Khargone customers?", "Yes, the guides are written for local customers planning construction work in Khargone and nearby Madhya Pradesh regions."],
              ["Can I use these blogs for final cost decisions?", "Blogs are for practical planning. Final cost should be discussed after project details, site condition, material scope, and service requirement are reviewed."],
              ["Can I contact Bajaj Developers after reading a guide?", "Yes, you can call, WhatsApp, or use the contact page to discuss your project requirement."],
              ["Do the guides cover all main services?", "Yes, topics include house construction, civil work, building construction, road work, renovation, materials, and local contractor selection."],
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

export function BlogDetailPage({ post }: { post: BlogPost }) {
  const sections = buildBlogSections(post);
  const relatedPosts = getRelatedBlogPosts(post);

  return (
    <>
      <StructuredData
        data={[
          organizationSchema,
          localBusinessSchema,
          ...buildBlogSchema(post),
        ]}
      />

      <section className="relative isolate overflow-hidden bg-[#0b2a45] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(245,130,32,0.2),transparent_36%),linear-gradient(135deg,#0b2a45_0%,#0d3a5d_56%,#082036_100%)]" />
        <div className="blueprint-grid absolute inset-0 -z-10 opacity-15" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/65">
              <Link href="/" className="transition hover:text-[#f58220]">Home</Link>
              <span>/</span>
              <Link href="/blog/" className="transition hover:text-[#f58220]">Blog</Link>
              <span>/</span>
              <span className="text-white">{post.category}</span>
            </nav>
            <p className="mt-9 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">
              {post.category}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-[1.75] text-white/78">
              {post.excerpt}
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold text-white/72">
              <span className="inline-flex items-center gap-2"><UserRound aria-hidden="true" className="size-4 text-[#f58220]" />Bajaj Developers Team</span>
              <span className="inline-flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-4 text-[#f58220]" />{new Date(post.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-2"><Clock aria-hidden="true" className="size-4 text-[#f58220]" />{post.readTime}</span>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-md border border-white/10 bg-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <Image src={post.image} alt={post.imageAlt} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,42,69,0.72),rgba(11,42,69,0)_58%)]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.32fr_0.68fr] lg:px-8">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] p-6">
              <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#f58220]">
                Table of Contents
              </h2>
              <ol className="mt-5 grid gap-3">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-sm font-bold leading-5 text-[#0b2a45] transition hover:text-[#d95f05]">
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="prose-none space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-black leading-tight text-[#0b2a45] sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-base font-medium leading-[1.75] text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-md border border-[#f58220]/30 bg-[#fff7ed] p-6 sm:p-8">
              <h2 className="text-2xl font-black text-[#0b2a45]">
                Need help with this topic?
              </h2>
              <p className="mt-4 text-sm font-medium leading-[1.75] text-slate-600">
                Share your project details with Bajaj Developers and Group of
                Industries. We can discuss civil work, house construction,
                building construction, renovation, road work, or material
                requirements in Khargone.
              </p>
              <a href={whatsappUrl(`Hello Bajaj Developers, I read ${post.title} and want to discuss my project.`)} target="_blank" rel="noreferrer" className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white">
                <MessageCircle aria-hidden="true" className="size-4" />
                Ask on WhatsApp
              </a>
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-black text-[#0b2a45]">Related Services</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {post.relatedServices.map((service) => (
                  <Link key={service.href} href={service.href} className="rounded-md border border-[#0b2a45]/10 bg-white p-5 text-sm font-black text-[#0b2a45] shadow-sm transition hover:border-[#f58220]">
                    {service.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-black text-[#0b2a45]">Helpful Internal Links</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {post.internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-md border border-[#0b2a45]/10 bg-[#fbfbf8] p-5 text-sm font-black text-[#0b2a45] shadow-sm transition hover:border-[#f58220] hover:bg-white">
                    {link.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-black text-[#0b2a45]">Frequently Asked Questions</h2>
              <div className="mt-6 grid gap-4">
                {post.faqs.map((faq) => (
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

            <section className="mt-12">
              <h2 className="text-2xl font-black text-[#0b2a45]">Related Blog Posts</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}/`} className="rounded-md border border-[#0b2a45]/10 bg-white p-5 shadow-sm transition hover:border-[#f58220]">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#f58220]">{related.category}</p>
                    <h3 className="mt-3 text-sm font-black leading-5 text-[#0b2a45]">{related.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>

      <section className="bg-[#fbfbf8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-md bg-[#0b2a45] p-8 text-white sm:p-10 lg:p-12">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Planning a Construction Project in Khargone?
            </h2>
            <p className="mt-5 max-w-3xl text-sm font-medium leading-[1.75] text-white/75">
              Talk to Bajaj Developers and Group of Industries for reliable
              construction services in Khargone and nearby Madhya Pradesh
              regions.
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
