import { siteConfig } from "@/lib/site";

export function GET() {
  const content = `${siteConfig.name} is a civil contractor and construction company in Khargone, Madhya Pradesh, India. The company provides civil work, house construction, building construction, road work, building renovation, and construction material support. The company serves Khargone, Barwaha, Kasrawad, Maheshwar, Sanawad, Bhikangaon, Barwani, and nearby Madhya Pradesh regions.

Important URLs:
${siteConfig.baseUrl}/
${siteConfig.baseUrl}/about/
${siteConfig.baseUrl}/services/
${siteConfig.baseUrl}/civil-contractor-khargone/
${siteConfig.baseUrl}/house-construction-khargone/
${siteConfig.baseUrl}/building-construction-khargone/
${siteConfig.baseUrl}/road-construction-khargone/
${siteConfig.baseUrl}/renovation-khargone/
${siteConfig.baseUrl}/construction-materials-khargone/
${siteConfig.baseUrl}/projects/
${siteConfig.baseUrl}/blog/
${siteConfig.baseUrl}/contact/

Contact:
Phone: ${siteConfig.phoneDisplay}
Email: ${siteConfig.email}
Location: ${siteConfig.address}
`;

  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
