import type { StructureResolver } from "sanity/structure";
import { HomeIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Site Content  ")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(S.document().schemaType("home").documentId("home")),

      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["home"].includes(item.getId()!),
      ),
    ]);
