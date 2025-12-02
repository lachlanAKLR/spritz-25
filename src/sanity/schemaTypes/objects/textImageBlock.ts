import { defineType, defineField } from "sanity";
import { TextIcon } from "@sanity/icons";

export default defineType({
  name: "textImageBlock",
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
    defineField({
      name: "ctaBlock",
      title: "CTAs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "CTA Text",
              type: "string",
            },
            {
              name: "link",
              title: "CTA Link",
              type: "string",
            },
            {
              name: "video",
              title: "Video File",
              type: "file",
              options: {
                accept: "video/mp4,video/webm,video/ogg,video/quicktime",
              },
            },
            {
              name: "cloudUrl",
              title: "Cloudflare Stream URL",
              type: "url",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "imageLeft",
      title: "Position Image Left (Default Right)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "heading.0.children.0.text",
    },
    prepare({ title }) {
      return {
        title: "Text & Image: " + (title || "Untitled"),
        media: TextIcon,
      };
    },
  },
});
