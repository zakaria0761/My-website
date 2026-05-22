import type { Metadata } from "next";
import ReflectionGallery from "@/src/components/portfolio/ReflectionGallery";

export const metadata: Metadata = {
  title: "Reflections on Lessons Taught",
};

export default function Page() {
  return <ReflectionGallery />;
}