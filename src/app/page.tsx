import { HydrateClient } from "@/trpc/server";
import PortfolioClient from "@/app/_components/portfolio-client";

export default async function Home() {
  return (
    <HydrateClient>
      <PortfolioClient />
    </HydrateClient>
  );
}
