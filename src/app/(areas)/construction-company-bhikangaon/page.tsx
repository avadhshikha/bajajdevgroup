import { ServiceAreaPageTemplate } from "@/components/areas/ServiceAreaPageTemplate";
import { buildAreaMetadata, getServiceAreaPage } from "@/lib/website-content";

const area = getServiceAreaPage("construction-company-bhikangaon")!;

export const metadata = buildAreaMetadata(area);

export default function ConstructionCompanyBhikangaonPage() {
  return <ServiceAreaPageTemplate area={area} />;
}
