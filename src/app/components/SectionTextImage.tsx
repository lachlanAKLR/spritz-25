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
      className={`${block.imageLeft ? "flex-row-reverse" : "flex-row"} flex gap-5 p-5`}
    >
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
              <PortableText
                value={block.heading}
                components={portableTextComponents}
              />
              {block?.ctaBlock ? (
                <div className="flex flex-col items-center justify-center gap-5 pt-5">
                  {block?.ctaBlock.map(
                    //@ts-expect-error: error
                    (item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="relative block w-fit"
                      >
                        <Image
                          src="/Button_Box.svg"
                          alt="Button Box"
                          width={500}
                          height={80}
                          className="w-[300px]"
                        />

                        <span className="font-egyptian absolute inset-0 flex items-center justify-center text-sm uppercase">
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
      <div className="w-1/2">
        {block.image ? (
          <FadeInImage
            src={builder
              .image(block?.image?.asset as SanityImageSource)
              .width(3000)
              .fit("max")
              .auto("format")
              .url()}
            width={1000}
            height={2000}
            alt={block?.image?.alt ?? ""}
            className="w-full"
          />
        ) : null}
      </div>
    </div>
  );
}
