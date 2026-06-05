import { ServiceAreaPageTemplate } from "@/components/areas/ServiceAreaPageTemplate";
import { buildAreaMetadata, getServiceAreaPage } from "@/lib/website-content";

const area = getServiceAreaPage("construction-company-barwaha")!;

export const metadata = buildAreaMetadata(area);

export default function ConstructionCompanyBarwahaPage() {
  return <ServiceAreaPageTemplate area={area} />;
}
