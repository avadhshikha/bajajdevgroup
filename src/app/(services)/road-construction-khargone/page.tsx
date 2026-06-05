import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildServiceMetadata, serviceBySlug } from "@/lib/services";

const service = serviceBySlug["road-construction-khargone"];

export const metadata = buildServiceMetadata(service);

export default function RoadConstructionKhargonePage() {
  return <ServicePageTemplate service={service} />;
}
