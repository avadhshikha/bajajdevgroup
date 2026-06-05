import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/projects/ProjectPages";
import {
  buildProjectMetadata,
  getProject,
  projectCaseStudies,
} from "@/lib/website-content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return buildProjectMetadata(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
