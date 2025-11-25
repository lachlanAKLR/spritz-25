import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import FadeInImage from "../utils/FadeInImage";
import Image from "next/image";
import Link from "next/link";
import { FRAGRANCE_QUERYResult } from "../../../sanity.types";
import toOrdinal from "../utils/toOrdinal";

const builder = imageUrlBuilder({ projectId, dataset });

export default function FragranceHeader({
  fragrance,
  index,
}: {
  fragrance: FRAGRANCE_QUERYResult;
  index: number;
}) {
  const ordinal = toOrdinal(index + 1);

  return (
    <section>
      <div className="flex w-full gap-4 p-4">
        <div className="flex w-1/2 flex-col items-center justify-center">
          <div className="relative w-full">
            <Image
              src="/Background_Item_001.svg"
              alt="Background Box"
              width={500}
              height={80}
              className="w-full"
            />

            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="p-40">
                <p className="font-egyptian pb-2.5 text-base uppercase">
                  {ordinal}
                </p>
                <h2 className="font-egyptian pb-2.5 text-lg uppercase">
                  {fragrance?.course}
                </h2>
                <h1 className="font-alpina-italic pb-2.5 text-xl">
                  {fragrance?.title}
                </h1>
                <h3 className="font-egyptian text-base uppercase">
                  {fragrance?.brand}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          {fragrance?.mainImage ? (
            <FadeInImage
              src={builder
                .image(fragrance?.mainImage?.asset as SanityImageSource)
                .width(3000)
                .fit("max")
                .auto("format")
                .url()}
              width={1000}
              height={2000}
              alt={fragrance?.mainImage?.alt ?? ""}
              className="w-full"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
