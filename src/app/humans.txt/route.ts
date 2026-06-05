import { siteConfig } from "@/lib/site";

export function GET() {
  const content = `Site: ${siteConfig.name}
Location: ${siteConfig.address}
Business: Civil contractor and construction company
Contact: ${siteConfig.phoneDisplay}
Email: ${siteConfig.email}
Website: ${siteConfig.baseUrl}

Built for local construction service discovery in Khargone, Madhya Pradesh.
`;

  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
