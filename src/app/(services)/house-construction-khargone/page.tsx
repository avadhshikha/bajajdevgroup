import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildServiceMetadata, serviceBySlug } from "@/lib/services";

const service = serviceBySlug["house-construction-khargone"];

export const metadata = buildServiceMetadata(service);

export default function HouseConstructionKhargonePage() {
  return <ServicePageTemplate service={service} />;
}
