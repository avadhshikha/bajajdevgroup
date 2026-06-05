import {
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import {
  mapsUrl,
  primaryNav,
  serviceLinks,
  siteConfig,
  whatsappUrl,
} from "@/lib/site";

function FooterLogo() {
  return (
    <div className="flex items-center gap-3">
      <span className="relative grid size-12 shrink-0 place-items-end rounded-md border border-white/10 bg-white/5 px-1.5 pb-1.5">
        <span className="flex h-8 items-end gap-0.5 text-[#f58220]">
          <span className="block h-4 w-1.5 rounded-t-sm bg-current" />
          <span className="block h-7 w-1.5 rounded-t-sm bg-current" />
          <span className="block h-9 w-1.5 rounded-t-sm bg-current" />
          <span className="block h-6 w-1.5 rounded-t-sm bg-current" />
        </span>
        <Building2
          aria-hidden="true"
          className="absolute bottom-1.5 left-1.5 size-5 text-white"
        />
      </span>
      <div className="leading-none">
        <p className="text-xl font-black uppercase tracking-[0.08em]">
          Bajaj
        </p>
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/80">
          Developers
        </p>
        <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#f58220]">
          And Group of Industries
        </p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0b2a45] pb-24 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-12 pt-16 sm:px-6 lg:grid-cols-[1.35fr_0.7fr_0.95fr_1.05fr] lg:px-8">
        <div>
          <FooterLogo />
          <p className="mt-5 max-w-sm text-sm leading-[1.75] text-white/70">
            Reliable construction company and civil contractor in Khargone,
            Madhya Pradesh, offering house construction, road work, renovation,
            materials, and project execution support.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-[#20ad43] px-3 text-sm font-black text-white transition hover:bg-[#18852d]"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-[#f58220] px-3 text-sm font-black text-white transition hover:bg-[#f58220]"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call Now
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#f58220]">
            Quick Links
          </h2>
          <ul className="mt-5 grid gap-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-white/70 transition hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#f58220]">
            Services
          </h2>
          <ul className="mt-5 grid gap-3">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-white/70 transition hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#f58220]">
            Contact
          </h2>
          <ul className="mt-5 grid gap-4 text-sm text-white/70">
            <li className="flex gap-3">
              <Phone
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-[#f58220]"
              />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-[#f58220]"
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-[#f58220]"
              />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
          <a
            href={mapsUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-md border border-white/15 px-4 text-sm font-black text-white transition hover:border-[#f58220] hover:text-[#f58220]"
          >
            View Maps Area
          </a>
          <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-white/60">
            <Link href="/privacy-policy/" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/" className="hover:text-white">
              Terms
            </Link>
            <Link href="/sitemap/" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
