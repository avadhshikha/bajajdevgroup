import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildServiceMetadata, serviceBySlug } from "@/lib/services";

const service = serviceBySlug["renovation-khargone"];

export const metadata = buildServiceMetadata(service);

export default function RenovationKhargonePage() {
  return <ServicePageTemplate service={service} />;
}
