import { PageBuilderProps } from "./PageBuilder";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "./PortableTextComponents";
import FadeInImage from "../utils/FadeInImage";
import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder({ projectId, dataset });

export default function SectionTextImage({
  block,
}: {
  //@ts-expect-error: error
  block: PageBuilderProps["pageBuilder"][number];
}) {
  return (
    <div
      className={`${block.imageLeft ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse md:flex-row"} flex gap-5 p-2.5`}
    >
      <div className="flex w-full flex-col items-center justify-center md:w-1/2">
        <div className="relative w-full">
          <Image
            src="/Background_Item_001.svg"
            alt="Background Box"
            width={500}
            height={80}
            className="w-full"
          />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="px-5 py-10 sm:px-10 md:px-12 lg:px-16 xl:px-32">
              <PortableText
                value={block.heading}
                components={portableTextComponents}
              />
              {block?.ctaBlock ? (
                <div className="flex flex-col items-center justify-center gap-3 pt-5 md:gap-5">
                  {block?.ctaBlock.map(
                    //@ts-expect-error: error
                    (item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="group relative block w-fit"
                      >
                        <Image
                          src="/Button_Box.svg"
                          alt="Button Box"
                          width={500}
                          height={80}
                          className="w-[300px]"
                        />
                        <Image
                          src="/Button_Box_Fill.svg"
                          alt="Button Box"
                          width={500}
                          height={80}
                          className="absolute top-0 left-0 hidden w-[300px] opacity-0 duration-500 ease-in-out group-hover:opacity-100 md:block"
                        />

                        <span className="text-bronze-1 group-hover:text-brown-1 font-egyptian absolute inset-0 flex items-center justify-center text-sm uppercase duration-500 ease-in-out">
                          {item.text}
                        </span>
                      </Link>
                    ),
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {block?.image && (
          <div
            className="w-full"
            style={{
              WebkitMaskImage: "url('/Background_Item_002.svg')",
              maskImage: "url('/Background_Item_002.svg')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          >
            <FadeInImage
              src={builder
                .image(block.image.asset as SanityImageSource)
                .width(3000)
                .fit("max")
                .auto("format")
                .url()}
              width={2000}
              height={2000}
              alt={block.image.alt ?? ""}
              className="aspect-[1/1.249] w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
