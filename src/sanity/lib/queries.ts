import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
  *[_type == "home"][0]{
    _id,
    pageBuilder[]{
      _type == "headingText" => {
        _type,
        heading,
        image{
          alt,
          asset->
        }
      },

      _type == "imageBlock" => {
        _type,
        image{
          alt,
          asset->
        },
        text
      },

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

export const FRAGRANCE_QUERY = defineQuery(`
  *[_type == "fragranceType" && slug.current == $slug][0]{
    _id,
    title,
    brand,
    course,
    slug,
    orderRank,

    mainImage{
      alt,
      asset->{
        _id,
        url,
        metadata { dimensions { width, height, aspectRatio } }
      }
    },

    videoFile{
      asset->{
        _id,
        url,
        metadata { dimensions { width, height, aspectRatio } }
      }
    },

    posterImage{
      asset->{
        _id,
        url,
        metadata { dimensions { width, height, aspectRatio } }
      }
    },

    intro,
    info,
    productText,
    bottomText,

    products[]{
      _key,
      size,
      link,
      image{
        alt,
        asset->{
          _id,
          url,
          metadata { dimensions { width, height, aspectRatio } }
        }
      }
    }
  }
`);

export const FRAGRANCES_QUERY = defineQuery(`
  *[_type == "fragranceType" && defined(slug.current)] | order(orderRank) {
    _id,
    title,
    brand,
    course,
    slug,
    mainImage{
      alt,
      asset->{
        _id,
        url,
        metadata { dimensions { width, height, aspectRatio } }
      }
    }
  }
`);
