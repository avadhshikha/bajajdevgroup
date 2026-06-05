import { ServiceAreaPageTemplate } from "@/components/areas/ServiceAreaPageTemplate";
import { buildAreaMetadata, getServiceAreaPage } from "@/lib/website-content";

const area = getServiceAreaPage("construction-company-kasrawad")!;

export const metadata = buildAreaMetadata(area);

export default function ConstructionCompanyKasrawadPage() {
  return <ServiceAreaPageTemplate area={area} />;
}
