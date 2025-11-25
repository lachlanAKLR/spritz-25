import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { FRAGRANCE_QUERY, FRAGRANCES_QUERY } from "@/sanity/lib/queries";
import FragranceHeader from "@/app/components/FragranceHeader";
import FragranceIntro from "@/app/components/FragranceIntro";
import FragranceContent from "@/app/components/FragranceContent";
import FragranceProduct from "@/app/components/FragranceProduct";

export async function generateStaticParams() {
  const fragrances = await client.fetch(FRAGRANCES_QUERY);
  return fragrances.map((fragrance) => ({
    slug: fragrance?.slug?.current,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const allFragrances = await client.fetch(FRAGRANCES_QUERY);

  const currentIndex = allFragrances.findIndex(
    (item) => item?.slug?.current === slug,
  );

  const { data: fragrance } = await sanityFetch({
    query: FRAGRANCE_QUERY,
    params: { slug },
  });

  if (!fragrance) {
    return notFound();
  }

  console.log(fragrance);

  return (
    <main>
      <FragranceHeader fragrance={fragrance} index={currentIndex} />
      <FragranceIntro fragrance={fragrance} />
      <FragranceContent fragrance={fragrance} />
      <FragranceProduct fragrance={fragrance} />
    </main>
  );
}
