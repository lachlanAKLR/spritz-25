import FadeInImage from "../utils/FadeInImage";
import { PageBuilderProps } from "./PageBuilder";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "./PortableTextComponents";

const builder = imageUrlBuilder({ projectId, dataset });

export default function SectionHeadingText({
  block,
}: {
  //@ts-expect-error: error
  block: PageBuilderProps["pageBuilder"][number];
}) {
  return (
    <div className="relative p-5">
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

      {block?.text ? (
        <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
          <div className="bg-bronze-1 border-brown-1 text-brown-1 h-fit w-fit border-5 p-5">
            <PortableText
              value={block.text}
              components={portableTextComponents}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
