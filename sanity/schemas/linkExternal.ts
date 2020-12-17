import Sanity from "./helpers";
import internal from "./internal";

export default Sanity.createDocumentType({
  name: "linkExternal",
  title: "External Link",
  type: "document",
  fields: [
    internal,
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
});
