import { defineType, defineField } from "sanity";

export default defineType({
  name: "imageBlock",
  title: "Image Block",
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
      name: "text",
      title: "Text",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: "Image: " + (title || "Untitled"),
        media,
      };
    },
  },
});
