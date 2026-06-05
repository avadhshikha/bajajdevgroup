"use client";

import {
  Building2,
  ChevronDown,
  HardHat,
  HomeIcon,
  Menu,
  MessageCircle,
  PackageCheck,
  Paintbrush,
  Phone,
  Shovel,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, serviceLinks, siteConfig, whatsappUrl } from "@/lib/site";

const serviceIcons = {
  "Civil Work": Shovel,
  "House Construction": HomeIcon,
  "Building Construction": Building2,
  "Road Work": Truck,
  Renovation: Paintbrush,
  Materials: PackageCheck,
};

function BrandLogo() {
  return (
    <span className="flex items-center gap-3">
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
      <span className="leading-none">
        <span className="block text-xl font-black uppercase tracking-[0.08em] text-white">
          Bajaj
        </span>
        <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-white/80">
          Developers
        </span>
        <span className="block text-[8px] font-bold uppercase tracking-[0.22em] text-[#f58220]">
          And Group of Industries
        </span>
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const normalizedPath =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const normalizeHref = (href: string) =>
    href !== "/" && href.endsWith("/") ? href.slice(0, -1) : href;
  const isServicePage = serviceLinks.some(
    (service) => normalizeHref(service.href) === normalizedPath,
  );
  const isServicesNavActive =
    normalizedPath === "/services" || isServicePage;
  const isActiveItem = (item: (typeof primaryNav)[number]) => {
    if (item.href === "/") {
      return pathname === "/";
    }

    if (item.title === "Services") {
      return isServicesNavActive;
    }

    if (item.href.startsWith("/#")) {
      return false;
    }

    const href = normalizeHref(item.href);

    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b2a45] text-white shadow-[0_14px_32px_rgba(11,42,69,0.18)]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[82px] lg:px-8">
        <Link href="/" className="min-w-0" aria-label="Bajaj Developers home">
          <BrandLogo />
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) =>
              item.title === "Services" ? (
                <li key={item.title} className="relative">
                  <details className="group">
                    <summary
                      className={`flex cursor-pointer list-none items-center gap-1 rounded-md px-4 py-3 text-sm font-bold outline-none transition hover:text-[#f58220] focus-visible:ring-2 focus-visible:ring-[#f58220] [&::-webkit-details-marker]:hidden ${
                        isServicesNavActive ? "text-[#f58220]" : "text-white/80"
                      }`}
                    >
                      Services
                      <ChevronDown
                        aria-hidden="true"
                        className="size-4 transition group-open:rotate-180"
                      />
                    </summary>
                    <div className="absolute left-0 top-12 w-64 rounded-md border border-black/10 bg-white p-2 text-[#0b2a45] shadow-2xl shadow-black/20">
                      <Link
                        href="/services/"
                        className="mb-1 flex items-center gap-3 rounded-md border-b border-black/10 px-3 py-2.5 text-sm font-black transition hover:bg-[#fff3e8] hover:text-[#d95f05]"
                      >
                        <HardHat
                          aria-hidden="true"
                          className="size-4 shrink-0 text-[#0b2a45]/70"
                        />
                        All Services
                      </Link>
                      {serviceLinks.map((service) => {
                        const Icon =
                          serviceIcons[
                            service.title as keyof typeof serviceIcons
                          ] ?? HardHat;

                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-bold transition hover:bg-[#fff3e8] hover:text-[#d95f05]"
                          >
                            <Icon
                              aria-hidden="true"
                              className="size-4 shrink-0 text-[#0b2a45]/70"
                            />
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                </li>
              ) : (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`relative rounded-md px-4 py-3 text-sm font-bold transition hover:text-[#f58220] ${
                      isActiveItem(item)
                        ? "text-white"
                        : "text-white/80"
                    }`}
                  >
                    {item.title}
                    {isActiveItem(item) ? (
                      <span className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-[#f58220]" />
                    ) : null}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#f58220] px-5 text-sm font-black text-white transition hover:bg-[#f58220] hover:text-[#0b2a45]"
          >
            <Phone aria-hidden="true" className="size-4 text-[#f58220]" />
            Call Now
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#229e38] px-5 text-sm font-black text-white transition hover:bg-[#18852d]"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-md border border-white/15 text-white outline-none transition hover:border-[#f58220] focus-visible:ring-2 focus-visible:ring-[#f58220] [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" className="size-6" />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,360px)] rounded-md border border-black/10 bg-white p-3 text-[#0b2a45] shadow-2xl shadow-black/20">
            <nav aria-label="Mobile navigation">
              <ul className="grid gap-1">
                {primaryNav.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2.5 text-sm font-black hover:bg-[#fff3e8] hover:text-[#d95f05] ${
                        isActiveItem(item)
                          ? "bg-[#fff3e8] text-[#d95f05]"
                          : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-black/10 pt-3">
                <p className="px-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#d95f05]">
                  Services
                </p>
                <div className="mt-2 grid gap-1">
                  <Link
                    href="/services/"
                    className="rounded-md px-3 py-2 text-sm font-black text-[#0b2a45] hover:bg-[#fff3e8] hover:text-[#d95f05]"
                  >
                    All Services
                  </Link>
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-md px-3 py-2 text-sm font-bold text-[#0b2a45]/80 hover:bg-[#fff3e8] hover:text-[#d95f05]"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] text-sm font-black text-white"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  Call
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#229e38] text-sm font-black text-white"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
