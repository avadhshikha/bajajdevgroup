import { ServiceAreaPageTemplate } from "@/components/areas/ServiceAreaPageTemplate";
import { buildAreaMetadata, getServiceAreaPage } from "@/lib/website-content";

const area = getServiceAreaPage("construction-company-sanawad")!;

export const metadata = buildAreaMetadata(area);

export default function ConstructionCompanySanawadPage() {
  return <ServiceAreaPageTemplate area={area} />;
}
