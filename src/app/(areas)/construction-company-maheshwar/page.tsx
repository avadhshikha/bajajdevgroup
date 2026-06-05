import { ServiceAreaPageTemplate } from "@/components/areas/ServiceAreaPageTemplate";
import { buildAreaMetadata, getServiceAreaPage } from "@/lib/website-content";

const area = getServiceAreaPage("construction-company-maheshwar")!;

export const metadata = buildAreaMetadata(area);

export default function ConstructionCompanyMaheshwarPage() {
  return <ServiceAreaPageTemplate area={area} />;
}
