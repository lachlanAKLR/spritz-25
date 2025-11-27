import { PageBuilderProps } from "./PageBuilder";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "./PortableTextComponents";
import FadeInImage from "../utils/FadeInImage";
import Image from "next/image";

const builder = imageUrlBuilder({ projectId, dataset });

export default function SectionTextImage({
  fragrance,
}: {
  //@ts-expect-error: error
  fragrance: PageBuilderProps["pageBuilder"][number];
}) {
  return (
    <div className={`flex flex-col gap-5 p-3 pt-0 md:flex-row-reverse md:p-5`}>
      <div className="flex w-full flex-col items-center justify-center md:w-1/2">
        <div className="relative w-full">
          <Image
            src="/Background_Item_001.svg"
            alt="Background Box"
            width={500}
            height={80}
            className="hidden w-full md:block"
          />
          <Image
            src="/Background_Item_Mobile_001.svg"
            alt="Background Box"
            width={500}
            height={80}
            className="block w-full md:hidden"
          />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="px-5 py-10 sm:px-10 md:px-12 lg:px-16 xl:px-32">
              <PortableText
                value={fragrance.courseText}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {fragrance?.courseImage && (
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
                .image(fragrance.courseImage.asset as SanityImageSource)
                .width(3000)
                .fit("max")
                .auto("format")
                .url()}
              width={2000}
              height={2000}
              alt={fragrance.courseImage.alt ?? ""}
              className="aspect-[1/1.249] w-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
