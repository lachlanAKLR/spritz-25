import type { StructureResolver } from "sanity/structure";
import { HomeIcon, MasterDetailIcon } from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Site Content  ")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(S.document().schemaType("home").documentId("home")),
      S.divider(),
      orderableDocumentListDeskItem({
        type: "fragranceType",
        title: "Fragrances",
        S,
        icon: MasterDetailIcon,
        context,
      }),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["home", "fragranceType"].includes(item.getId()!),
      ),
    ]);
