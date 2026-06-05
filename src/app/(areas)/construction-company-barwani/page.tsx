import { ServiceAreaPageTemplate } from "@/components/areas/ServiceAreaPageTemplate";
import { buildAreaMetadata, getServiceAreaPage } from "@/lib/website-content";

const area = getServiceAreaPage("construction-company-barwani")!;

export const metadata = buildAreaMetadata(area);

export default function ConstructionCompanyBarwaniPage() {
  return <ServiceAreaPageTemplate area={area} />;
}
