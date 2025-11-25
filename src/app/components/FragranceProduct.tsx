import { PortableText } from "next-sanity";
import { FRAGRANCE_QUERYResult } from "../../../sanity.types";
import { portableTextComponents } from "./PortableTextComponents";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import FadeInImage from "../utils/FadeInImage";

const builder = imageUrlBuilder({ projectId, dataset });

export default function FragranceProduct({
  fragrance,
}: {
  fragrance: FRAGRANCE_QUERYResult;
}) {
  return (
    <section>
      <div className="px-5 pt-48">
        <div className="text-center">
          {fragrance?.productText && (
            <PortableText
              value={fragrance?.productText}
              components={portableTextComponents}
            />
          )}
        </div>
        {fragrance?.products ? (
          <div className="site-grid">
            {fragrance?.products?.map((product, index) => {
              return (
                <div key={index} className="border-bronze-1 border-2">
                  {product?.image ? (
                    <FadeInImage
                      src={builder
                        .image(product?.image?.asset as SanityImageSource)
                        .width(3000)
                        .fit("max")
                        .auto("format")
                        .url()}
                      width={1000}
                      height={2000}
                      alt={product?.image?.alt ?? ""}
                      className="w-full"
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
