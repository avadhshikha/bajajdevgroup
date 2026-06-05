import { ServiceAreaPageTemplate } from "@/components/areas/ServiceAreaPageTemplate";
import { buildAreaMetadata, getServiceAreaPage } from "@/lib/website-content";

const area = getServiceAreaPage("construction-company-khargone")!;

export const metadata = buildAreaMetadata(area);

export default function ConstructionCompanyKhargonePage() {
  return <ServiceAreaPageTemplate area={area} />;
}
