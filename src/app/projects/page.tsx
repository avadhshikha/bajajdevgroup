import type { Metadata } from "next";
import { ProjectsListingPage } from "@/components/projects/ProjectPages";

export const metadata: Metadata = {
  title: {
    absolute: "Construction Projects in Khargone | Bajaj Developers",
  },
  description:
    "View construction project case studies by Bajaj Developers and Group of Industries, including residential, commercial, road work, renovation, and civil work projects in Khargone and nearby areas.",
  alternates: {
    canonical: "/projects/",
  },
  openGraph: {
    title: "Construction Projects in Khargone | Bajaj Developers",
    description:
      "Editable construction project case studies for residential, commercial, road work, renovation, and civil work projects in Khargone and nearby areas.",
    url: "/projects/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Projects in Khargone | Bajaj Developers",
    description:
      "View construction project case studies by Bajaj Developers and Group of Industries.",
  },
};

export default function ProjectsPage() {
  return <ProjectsListingPage />;
}
