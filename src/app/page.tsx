import { FRAGRANCES_QUERY, HOME_QUERY } from "@/sanity/lib/queries";
import { HOME_QUERYResult } from "../../sanity.types";
import { sanityFetch } from "@/sanity/lib/live";
import PageBuilder from "./components/PageBuilder";
import { client } from "@/sanity/lib/client";
import SectionLinks from "./components/SectionLinks";
import { Reveal } from "./components/Reveal";

export default async function Page() {
  const { data }: { data: HOME_QUERYResult } = await sanityFetch({
    query: HOME_QUERY,
    params: {},
  });

  const linkData = await client.fetch(FRAGRANCES_QUERY);

  const pageBuilder = data?.pageBuilder ?? [];

  return (
    <main>
      <PageBuilder pageBuilder={pageBuilder} />
      <Reveal>
        <SectionLinks linkData={linkData} />
      </Reveal>
    </main>
  );
}
