import Link from "next/link";
import { ArrowRight, HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-white px-4 py-20 text-center">
      <div className="max-w-2xl">
        <HomeIcon aria-hidden="true" className="mx-auto size-14 text-[#f58220]" />
        <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
          Page Not Found
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-[#0b2a45] sm:text-5xl">
          This construction page is not available.
        </h1>
        <p className="mt-5 text-sm font-medium leading-[1.75] text-slate-600">
          The page may have moved, or the link may be incorrect. Use the main
          pages below to continue browsing Bajaj Developers.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 text-sm font-black text-white">
            Home
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link href="/services/" className="inline-flex h-11 items-center justify-center rounded-md border border-[#0b2a45]/15 px-5 text-sm font-black text-[#0b2a45]">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
