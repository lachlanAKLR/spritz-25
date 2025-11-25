import { PortableText } from "next-sanity";
import { FRAGRANCE_QUERYResult } from "../../../sanity.types";
import { portableTextComponents } from "./PortableTextComponents";

export default function FrangranceIntro({
  fragrance,
}: {
  fragrance: FRAGRANCE_QUERYResult;
}) {
  return (
    <section>
      {fragrance?.intro && (
        <div className="px-20 py-36 text-center">
          <h2 className="font-egyptian pb-2.5 text-base uppercase">
            {fragrance?.course}
          </h2>
          <PortableText
            value={fragrance.intro}
            components={portableTextComponents}
          />
        </div>
      )}
    </section>
  );
}
