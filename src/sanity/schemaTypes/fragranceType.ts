import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const fragranceType = defineType({
  name: "fragranceType",
  title: "Fragrance",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "course",
      type: "string",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "brand",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "intro",
      type: "blockContent",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/mp4,video/webm,video/ogg,video/quicktime",
      },
    }),
    defineField({
      name: "posterImage",
      title: "Poster Image",
      type: "image",
    }),
    defineField({
      name: "info",
      type: "blockContent",
    }),
    defineField({
      name: "productText",
      type: "blockContent",
    }),
    defineField({
      name: "products",
      type: "array",
      of: [{ type: "product", title: "product" }],
    }),
    defineField({
      name: "bottomText",
      type: "string",
    }),
    defineField({
      name: "orderRank",
      type: "string",
      title: "Order Rank",
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      course: "course",
      media: "mainImage",
    },
    prepare({ title, course, media }) {
      return {
        title: `${title}`,
        subtitle: course,
        media,
      };
    },
  },
});
