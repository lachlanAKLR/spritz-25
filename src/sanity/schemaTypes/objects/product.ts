import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "object",
  fields: [
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
    defineField({
      name: "size",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: "Product: " + (title || "Untitled"),
        media,
      };
    },
  },
});
