import { HOME_QUERY } from "@/sanity/lib/queries";
import { HOME_QUERYResult } from "../../sanity.types";
import { sanityFetch } from "@/sanity/lib/live";
import PageBuilder from "./components/PageBuilder";

export default async function Page() {
  const { data }: { data: HOME_QUERYResult } = await sanityFetch({
    query: HOME_QUERY,
    params: {},
  });

  const pageBuilder = data?.pageBuilder ?? [];

  return (
    <main>
      <PageBuilder pageBuilder={pageBuilder} />
    </main>
  );
}
