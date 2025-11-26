import { PortableText } from "next-sanity";
import { FRAGRANCE_QUERYResult } from "../../../sanity.types";
import { portableTextComponents } from "./PortableTextComponents";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import FadeInImage from "../utils/FadeInImage";

const builder = imageUrlBuilder({ projectId, dataset });

const productLayouts: Record<number, Record<number, string>> = {
  1: {
    0: "col-start-5 col-end-9",
  },
  2: {
    0: "col-start-3 col-end-7",
    1: "col-start-7 col-end-11",
  },
  3: {
    0: "col-start-1 col-end-5",
    1: "col-start-5 col-end-9",
    2: "col-start-9 col-end-13",
  },
};

export default function FragranceProduct({
  fragrance,
}: {
  fragrance: FRAGRANCE_QUERYResult;
}) {
  return (
    <section>
      <div className="px-3 pt-20 pb-20 md:px-5 md:pt-48 md:pb-40">
        <div className="pb-10 text-center">
          {fragrance?.productText && (
            <PortableText
              value={fragrance?.productText}
              components={portableTextComponents}
            />
          )}
        </div>
        {fragrance?.products ? (
          <div className="md:site-grid flex flex-col gap-5">
            {fragrance?.products?.map((product, index) => {
              const count = fragrance?.products?.length;

              const layoutClass =
                //@ts-expect-error: error
                productLayouts[count]?.[index] || "col-start-1 col-end-13";

              return (
                <div key={index} className={`${layoutClass}`}>
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
                      className="border-bronze-1 w-full border-2"
                    />
                  ) : null}
                  <div className="flex">
                    <div className="border-bronze-1 w-2/3 border-r-2 border-b-2 border-l-2 p-3 pl-4">
                      <p className="font-egyptian text-base uppercase md:text-lg">
                        {product.size}
                      </p>
                    </div>
                    <div className="border-bronze-1 hover:bg-bronze-1 hover:text-brown-1 text-bronze-1 flex w-1/3 cursor-pointer flex-col items-center justify-center border-r-2 border-b-2 p-2 text-center transition-all duration-500 ease-in-out">
                      <Link //@ts-expect-error: error
                        href={product?.link}
                        target="_blank"
                      >
                        <p className="font-egyptian text-sm uppercase md:text-base">
                          Buy Now
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
