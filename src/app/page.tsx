import type { Metadata } from "next";
import { HydrateClient } from "@/trpc/server";
import PortfolioClient from "@/app/_components/portfolio-client";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default async function Home() {
  return (
    <HydrateClient>
      <PortfolioClient />
    </HydrateClient>
  );
}
