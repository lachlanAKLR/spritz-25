import { type SchemaTypeDefinition } from "sanity";
import { homeType } from "./homeType";
import headingText from "./objects/headingText";
import { blockContentType } from "./objects/blockContentType";
import imageBlock from "./objects/imageBlock";
import textImageBlock from "./objects/textImageBlock";
import product from "./objects/product";
import { fragranceType } from "./fragranceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    headingText,
    blockContentType,
    imageBlock,
    textImageBlock,
    product,
    fragranceType,
  ],
};
