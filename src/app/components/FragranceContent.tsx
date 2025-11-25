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
      <div className="flex gap-5 p-5">
        <div className="w-1/3">
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
        <div className="w-2/3 p-40 text-center">
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
