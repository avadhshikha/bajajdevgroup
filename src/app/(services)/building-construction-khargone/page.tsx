import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildServiceMetadata, serviceBySlug } from "@/lib/services";

const service = serviceBySlug["building-construction-khargone"];

export const metadata = buildServiceMetadata(service);

export default function BuildingConstructionKhargonePage() {
  return <ServicePageTemplate service={service} />;
}
