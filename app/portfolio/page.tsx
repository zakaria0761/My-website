import type { Metadata } from "next";
import { PortfolioClient } from "@/src/components/portfolio/PortfolioClient";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: `Portfolio — ${portfolio.name}`,
  description: `Explore my portfolio and projects built by ${portfolio.name}, ${portfolio.role}.`,
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
