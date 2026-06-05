import { FileText, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="grid size-14 place-items-center rounded-full bg-[#20ad43] text-white shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#18852d]"
          aria-label="WhatsApp Bajaj Developers"
        >
          <MessageCircle aria-hidden="true" className="size-7" />
        </a>

        <a
          href={`tel:${siteConfig.phone}`}
          className="grid size-16 place-items-center rounded-full bg-[#f58220] text-white shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#dc6d0c]"
          aria-label="Call Bajaj Developers"
        >
          <Phone aria-hidden="true" className="size-7" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-2 shadow-[0_-12px_34px_rgba(11,42,69,0.16)] md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex h-12 items-center justify-center gap-1 rounded-md bg-[#0b2a45] text-xs font-black text-white"
          >
            <Phone aria-hidden="true" className="size-4" />
            Call
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-1 rounded-md bg-[#20ad43] text-xs font-black text-white"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </a>
          <Link
            href="/contact/"
            className="inline-flex h-12 items-center justify-center gap-1 rounded-md bg-[#f58220] text-xs font-black text-white"
          >
            <FileText aria-hidden="true" className="size-4" />
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
