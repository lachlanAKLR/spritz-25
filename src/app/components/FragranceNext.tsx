import {
  FRAGRANCE_QUERYResult,
  FRAGRANCES_QUERYResult,
} from "../../../sanity.types";

import Image from "next/image";
import toOrdinal from "../utils/toOrdinal";
import Link from "next/link";

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
      <h4 className="font-alpina-italic pb-14 text-center text-xl">
        {fragrance?.bottomText}
      </h4>
      <div className="site-grid w-full pb-36">
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
              <p className="font-egyptian text-center text-base uppercase">
                {prevOrdinal}
              </p>
              <p className="font-egyptian text-center text-lg uppercase">
                {prevFragrance?.course}
              </p>
            </div>
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
              <p className="font-egyptian text-center text-base uppercase">
                {nextOrdinal}
              </p>
              <p className="font-egyptian text-center text-lg uppercase">
                {nextFragrance?.course}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
