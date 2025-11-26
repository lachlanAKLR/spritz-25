import {
  FRAGRANCE_QUERYResult,
  FRAGRANCES_QUERYResult,
} from "../../../sanity.types";

import Image from "next/image";
import toOrdinal from "../utils/toOrdinal";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder({ projectId, dataset });

export default function FragranceNext({
  fragrance,
  prevFragrance,
  nextFragrance,
  prevIndex,
  nextIndex,
}: {
  fragrance: FRAGRANCE_QUERYResult;
  prevFragrance: FRAGRANCES_QUERYResult[number] | null;
  nextFragrance: FRAGRANCES_QUERYResult[number] | null;
  prevIndex: number;
  nextIndex: number;
}) {
  const prevOrdinal = prevIndex !== null ? toOrdinal(prevIndex + 1) : null;
  const nextOrdinal = nextIndex !== null ? toOrdinal(nextIndex + 1) : null;

  return (
    <section>
      <h4 className="font-alpina-italic px-5 pb-7 text-center text-lg md:pb-14 md:text-xl">
        {fragrance?.bottomText}
      </h4>
      <div className="md:site-grid flex w-full flex-col gap-5 px-3 pb-16 md:px-0 md:pb-36">
        <div className="col-start-2 col-end-7">
          <Link
            href={`/fragrance/${prevFragrance?.slug?.current}`}
            className="relative block"
          >
            <Image
              src="/Button_Box_002.svg"
              alt="Background Box"
              width={500}
              height={80}
              className="w-full"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="font-egyptian hidden text-center text-sm uppercase md:block md:text-base">
                {prevOrdinal}
              </p>
              <p className="font-egyptian block pb-1 text-center text-sm uppercase md:hidden md:text-base">
                Previous Course
              </p>
              <p className="font-egyptian text-center text-base uppercase md:text-lg">
                {prevFragrance?.course}
              </p>
            </div>

            {prevFragrance?.mainImage ? (
              <div
                className="group-hover absolute top-0 left-0 z-20 h-full w-full opacity-0 duration-500 ease-in-out hover:opacity-100"
                style={{
                  WebkitMaskImage: "url('/Button_Box_003.svg')",
                  maskImage: "url('/Button_Box_003.svg')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                }}
              >
                <Image
                  src={builder
                    .image(prevFragrance.mainImage.asset as SanityImageSource)
                    .width(3000)
                    .fit("max")
                    .auto("format")
                    .url()}
                  width={3000}
                  height={3000}
                  alt={prevFragrance.mainImage.alt ?? ""}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : null}
          </Link>
        </div>

        <div className="col-start-7 col-end-12">
          <Link
            href={`/fragrance/${nextFragrance?.slug?.current}`}
            className="relative block"
          >
            <Image
              src="/Button_Box_002.svg"
              alt="Background Box"
              width={500}
              height={80}
              className="w-full"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="font-egyptian hidden text-center text-sm uppercase md:block md:text-base">
                {nextOrdinal}
              </p>
              <p className="font-egyptian block pb-1 text-center text-sm uppercase md:hidden md:text-base">
                Next Course
              </p>
              <p className="font-egyptian text-center text-base uppercase md:text-lg">
                {nextFragrance?.course}
              </p>
            </div>

            {nextFragrance?.mainImage ? (
              <div
                className="group-hover absolute top-0 left-0 z-20 hidden h-full w-full opacity-0 duration-500 ease-in-out hover:opacity-100 md:block"
                style={{
                  WebkitMaskImage: "url('/Button_Box_003.svg')",
                  maskImage: "url('/Button_Box_003.svg')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                }}
              >
                <Image
                  src={builder
                    .image(nextFragrance.mainImage.asset as SanityImageSource)
                    .width(3000)
                    .fit("max")
                    .auto("format")
                    .url()}
                  width={3000}
                  height={3000}
                  alt={nextFragrance.mainImage.alt ?? ""}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : null}
          </Link>
        </div>
      </div>
    </section>
  );
}
