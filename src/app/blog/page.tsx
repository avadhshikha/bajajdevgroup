import type { Metadata } from "next";
import { BlogListingPage } from "@/components/blog/BlogPages";

export const metadata: Metadata = {
  title: {
    absolute: "Construction Blog in Khargone | Bajaj Developers",
  },
  description:
    "Read practical Hinglish construction guides by Bajaj Developers on house construction cost, civil work, renovation, building materials, road work, and contractor selection in Khargone.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Construction Blog in Khargone | Bajaj Developers",
    description:
      "Practical Hinglish construction guides for house construction, civil work, renovation, materials, road work, and contractor selection in Khargone.",
    url: "/blog/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Blog in Khargone | Bajaj Developers",
    description:
      "Read practical Hinglish construction guides by Bajaj Developers for Khargone and nearby areas.",
  },
};

export default function BlogPage() {
  return <BlogListingPage />;
}
