import Link from "next/link";
import { FRAGRANCES_QUERYResult } from "../../../sanity.types";
import Image from "next/image";
import toOrdinalJSX from "../utils/toOrdinal";
import toOrdinal from "../utils/toOrdinal";

export default function SectionLinks({
  linkData,
}: {
  linkData: FRAGRANCES_QUERYResult;
}) {
  return (
    <section>
      <div className="site-grid pt-24 pb-36">
        <div className="col-start-2 col-end-12 flex w-full flex-wrap justify-center gap-5">
          {linkData?.map((item, index) => (
            <Link
              key={`nav ${index}`}
              href={`/fragrance/${item.slug?.current}`}
              className="relative block w-[48%]"
            >
              <Image
                src="/Button_Box_002.svg"
                alt="Button Box"
                width={500}
                height={80}
                className="w-full"
              />
              <div className="font-egyptian absolute inset-0 flex flex-col items-center justify-center uppercase">
                <p className="text-base">{toOrdinal(index + 1)}</p>
                <p className="text-lg">{item.course}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
