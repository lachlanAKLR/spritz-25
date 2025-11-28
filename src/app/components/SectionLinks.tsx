import Link from "next/link";
import { FRAGRANCES_QUERYResult } from "../../../sanity.types";
import Image from "next/image";
import toOrdinal from "../utils/toOrdinal";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder({ projectId, dataset });

export default function SectionLinks({
  linkData,
}: {
  linkData: FRAGRANCES_QUERYResult;
}) {
  return (
    <section>
      <div className="site-grid pt-12 pb-20 md:pt-24 md:pb-36">
        <div className="col-start-2 col-end-12 flex w-full flex-wrap justify-center gap-5">
          {linkData?.map((item, index) => {
            const isLastItem = index === linkData.length - 1;

            return (
              <Link
                key={`nav ${index}`}
                href={`/fragrance/${item.slug?.current}`}
                className={`${isLastItem ? "w-full" : "md:w-[48%]"} group relative block w-full`}
              >
                <Image
                  src="/Button_Box_002.svg"
                  alt="Button Box"
                  width={500}
                  height={80}
                  className={`${!isLastItem ? "block" : "block md:hidden"} w-full`}
                />
                <Image
                  src="/Button_Box_Long_002.svg"
                  alt="Button Box"
                  width={500}
                  height={80}
                  className={`${isLastItem ? "hidden md:block" : "hidden"} z-100 w-full`}
                />
                <div className="font-egyptian absolute inset-0 flex flex-col items-center justify-center uppercase">
                  <p className="text-sm md:text-base">{toOrdinal(index + 1)}</p>
                  <p className="text-base md:text-lg">{item.course}</p>
                </div>

                {item.linkImage ? (
                  <div
                    className="group-hover absolute top-0 left-0 z-20 hidden h-full w-full opacity-0 duration-500 ease-in-out hover:opacity-100 md:block"
                    style={{
                      WebkitMaskImage: `url('${
                        isLastItem
                          ? "/Button_Box_Long_Fill_002.svg"
                          : "/Button_Box_003.svg"
                      }')`,
                      maskImage: `url('${
                        isLastItem
                          ? "/Button_Box_Long_Fill_002.svg"
                          : "/Button_Box_003.svg"
                      }')`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "100% 100%",
                      maskSize: "100% 100%",
                    }}
                  >
                    <Image
                      src={builder
                        .image(item.linkImage.asset as SanityImageSource)
                        .width(3000)
                        .fit("max")
                        .auto("format")
                        .url()}
                      width={3000}
                      height={3000}
                      alt={item.linkImage.alt ?? ""}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
