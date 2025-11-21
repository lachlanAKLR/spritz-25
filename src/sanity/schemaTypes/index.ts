import { type SchemaTypeDefinition } from "sanity";
import { homeType } from "./homeType";
import headingText from "./objects/headingText";
import { blockContentType } from "./objects/blockContentType";
import imageBlock from "./objects/imageBlock";
import textImageBlock from "./objects/textImageBlock";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeType, headingText, blockContentType, imageBlock, textImageBlock],
};
