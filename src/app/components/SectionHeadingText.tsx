import { PortableText } from "next-sanity";
import { PageBuilderProps } from "./PageBuilder";
import { portableTextComponents } from "./PortableTextComponents";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import FadeInImage from "../utils/FadeInImage";

const builder = imageUrlBuilder({ projectId, dataset });

export default function SectionHeadingText({
  block,
}: {
  //@ts-expect-error: error
  block: PageBuilderProps["pageBuilder"][number];
}) {
  return (
    <div className={`${block.image ? "h-screen" : "h-fit"} relative w-screen`}>
      {block.image ? (
        <FadeInImage
          src={builder
            .image(block?.image?.asset as SanityImageSource)
            .width(2000)
            .fit("max")
            .auto("format")
            .url()}
          width={1000}
          height={2000}
          alt={block?.image?.alt ?? ""}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      <div
        className={`${block.image ? "absolute inset-0" : "relative"} flex flex-col px-3 pt-20 text-center md:px-20 md:pt-40`}
      >
        <PortableText
          value={block.heading}
          components={portableTextComponents}
        />
      </div>
    </div>
  );
}
