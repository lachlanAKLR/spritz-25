import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
  *[_type == "home"][0]{
    _id,
    pageBuilder[]{
      // --- Heading Text Block ---
      _type == "headingText" => {
        _type,
        heading,
        image{
          alt,
          asset->
        }
      },

      // --- Image Block ---
      _type == "imageBlock" => {
        _type,
        image{
          alt,
          asset->
        },
        text
      },

      // --- Text & Image Block ---
      _type == "textImageBlock" => {
        _type,
        heading,
        image{
          alt,
          asset->
        },
        ctaBlock[]{
          text,
          link
        },
        imageLeft
      }
    }
  }
`);
