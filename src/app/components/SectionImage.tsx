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
    <div className="relative h-fit p-3 px-3 pb-2.5 md:p-5 md:pb-2.5">
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
          className="border-bronze-1 aspect-[1/1] w-full border-2 object-cover md:aspect-[auto]"
        />
      ) : null}

      {block?.text ? (
        <div className="absolute inset-0 flex items-center justify-center p-10 text-center md:absolute md:top-0 md:p-10">
          <div className="bg-brown-1 border-bronze-1 text-bronze-1 h-fit w-fit border-2 p-5 md:border-2">
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
