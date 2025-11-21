import { defineType, defineField } from "sanity";
import { TextIcon } from "@sanity/icons";

export default defineType({
  name: "headingText",
  title: "Heading Text",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "blockContent",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for screen readers and SEO",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading.0.children.0.text",
    },
    prepare({ title }) {
      return {
        title: "Heading Text: " + (title || "Untitled"),
        media: TextIcon,
      };
    },
  },
});
