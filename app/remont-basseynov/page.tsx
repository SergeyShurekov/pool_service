import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { servicePages } from "@/lib/data";

const service = servicePages["remont-basseynov"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.description,
};

export default function RemontBasseynovPage() {
  return <ServicePage slug="remont-basseynov" />;
}
