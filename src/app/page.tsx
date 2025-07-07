import { api, HydrateClient } from "@/trpc/server";
import Portfolio from "@/app/portfolio/page";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <Portfolio />
    </HydrateClient>
  );
}
