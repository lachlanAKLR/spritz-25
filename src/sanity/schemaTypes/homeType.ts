import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "pageBuilder",
      type: "array",
      of: [
        { type: "headingText", title: "Heading Text w/ Image" },
        { type: "imageBlock", title: "Image Block" },
        { type: "textImageBlock", title: "Text & Image Block" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
});
