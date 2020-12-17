import { Rule } from "@sanity/validation/src/Rule";
import Sanity from "./helpers";
import internal from "./internal";

export default Sanity.createDocumentType({
  name: "linkInternal",
  title: "Internal Link",
  type: "document",
  fields: [
    internal,
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
});
