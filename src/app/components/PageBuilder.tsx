import { HOME_QUERYResult } from "../../../sanity.types";
import SectionHeadingText from "./SectionHeadingText";
import SectionImage from "./SectionImage";
import SectionTextImage from "./SectionTextImage";

export type PageBuilderProps = {
  pageBuilder: NonNullable<HOME_QUERYResult>["pageBuilder"];
};

export default function PageBuilder({ pageBuilder }: PageBuilderProps) {
  if (!pageBuilder || !Array.isArray(pageBuilder)) {
    return null;
  }

  return (
    <div>
      {pageBuilder.map((block, index) => {
        switch (block._type) {
          case "headingText":
            if (block.heading) {
              return (
                <section key={index}>
                  <SectionHeadingText block={block} />
                </section>
              );
            }
            break;

          case "imageBlock":
            if (block.image) {
              return (
                <section key={index}>
                  <SectionImage block={block} />
                </section>
              );
            }
            break;

          case "textImageBlock":
            if (block.ctaBlock) {
              return (
                <section key={index}>
                  <SectionTextImage block={block} />
                </section>
              );
            }
            break;

          default:
            return null;
        }
      })}
    </div>
  );
}
