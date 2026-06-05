"use client";

import { Send } from "lucide-react";
import { FormEvent } from "react";
import { serviceLinks, whatsappUrl } from "@/lib/site";

export function QuickQuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    const message = [
      "Hello Bajaj Developers, I want a construction estimate.",
      name ? `Name: ${name}` : "",
      phone ? `Phone: ${phone}` : "",
      service ? `Service: ${service}` : "",
      location ? `Location: ${location}` : "",
      details ? `Project details: ${details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "h-11 rounded-md border border-[#d9dee8] bg-white px-3 text-sm font-semibold text-[#0b2a45] outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-2 focus:ring-[#f58220]/25";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-black/10 bg-white p-4 shadow-[0_16px_45px_rgba(11,42,69,0.12)] sm:p-5"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="quote-name">
          Name
        </label>
        <input
          id="quote-name"
          name="name"
          required
          autoComplete="name"
          className={inputClass}
          placeholder="Name"
        />

        <label className="sr-only" htmlFor="quote-phone">
          Phone Number
        </label>
        <input
          id="quote-phone"
          name="phone"
          required
          autoComplete="tel"
          inputMode="tel"
          className={inputClass}
          placeholder="Phone Number"
        />

        <label className="sr-only" htmlFor="quote-service">
          Service Required
        </label>
        <select
          id="quote-service"
          name="service"
          required
          className={inputClass}
        >
          <option value="">Service Required</option>
          {serviceLinks.map((service) => (
            <option key={service.href} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>

        <label className="sr-only" htmlFor="quote-location">
          Project Location
        </label>
        <input
          id="quote-location"
          name="location"
          className={inputClass}
          placeholder="Project Location"
        />

        <label className="sr-only" htmlFor="quote-details">
          Message
        </label>
        <textarea
          id="quote-details"
          name="details"
          rows={4}
          className="rounded-md border border-[#d9dee8] bg-white px-3 py-3 text-sm font-semibold text-[#0b2a45] outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-2 focus:ring-[#f58220]/25 sm:col-span-2"
          placeholder="Message"
        />
      </div>
      <button
        type="submit"
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#f58220] px-6 text-sm font-black text-white transition hover:bg-[#dc6d0c] sm:w-auto"
      >
        <Send aria-hidden="true" className="size-4" />
        Request Quote
      </button>
    </form>
  );
}
