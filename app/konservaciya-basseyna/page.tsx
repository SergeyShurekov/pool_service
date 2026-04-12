import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { servicePages } from "@/lib/data";

const service = servicePages["konservaciya-basseyna"];

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.description,
};

export default function KonservaciyaBasseynaPage() {
  return <ServicePage slug="konservaciya-basseyna" />;
}
