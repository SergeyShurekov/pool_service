import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { servicePages } from "@/lib/data";

const service = servicePages["chistka-basseyna"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.description,
};

export default function ChistkaBasseynaPage() {
  return <ServicePage slug="chistka-basseyna" />;
}
