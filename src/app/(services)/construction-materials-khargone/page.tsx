import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildServiceMetadata, serviceBySlug } from "@/lib/services";

const service = serviceBySlug["construction-materials-khargone"];

export const metadata = buildServiceMetadata(service);

export default function ConstructionMaterialsKhargonePage() {
  return <ServicePageTemplate service={service} />;
}
