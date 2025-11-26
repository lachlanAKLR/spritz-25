import { PortableText } from "next-sanity";
import { FRAGRANCE_QUERYResult } from "../../../sanity.types";
import { portableTextComponents } from "./PortableTextComponents";

export default function FragranceContent({
  fragrance,
}: {
  fragrance: FRAGRANCE_QUERYResult;
}) {
  return (
    <section>
      <div className="flex flex-col gap-5 p-3 md:flex-row md:p-5">
        <div className="w-full md:w-1/3">
          {fragrance?.videoFile?.asset?.url && (
            <div className="w-fit">
              <video
                src={fragrance.videoFile.asset.url}
                controls
                className="aspect-9/16 w-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="border-bronze-1 flex w-full flex-col items-center justify-center border-2 px-5 py-10 text-center sm:px-10 md:w-2/3 md:px-20 lg:px-32 xl:px-40">
          {fragrance?.info && (
            <PortableText
              value={fragrance?.info}
              components={portableTextComponents}
            />
          )}
        </div>
      </div>
    </section>
  );
}
