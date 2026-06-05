import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import {
  blogPosts,
  projectCaseStudies,
  serviceAreaPages,
} from "@/lib/website-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/about/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.baseUrl}/services/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    ...services.map((service) => ({
      url: service.canonicalUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    {
      url: `${siteConfig.baseUrl}/projects/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    ...projectCaseStudies.map((project) => ({
      url: `${siteConfig.baseUrl}/projects/${project.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteConfig.baseUrl}/blog/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    ...blogPosts.map((post) => ({
      url: `${siteConfig.baseUrl}/blog/${post.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.68,
    })),
    ...serviceAreaPages.map((area) => ({
      url: `${siteConfig.baseUrl}/${area.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.74,
    })),
    {
      url: `${siteConfig.baseUrl}/contact/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.baseUrl}/privacy-policy/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.baseUrl}/terms-and-conditions/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.baseUrl}/sitemap/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
