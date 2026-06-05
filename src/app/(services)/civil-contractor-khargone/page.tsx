import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildServiceMetadata, serviceBySlug } from "@/lib/services";

const service = serviceBySlug["civil-contractor-khargone"];

export const metadata = buildServiceMetadata(service);

export default function CivilContractorKhargonePage() {
  return <ServicePageTemplate service={service} />;
}
