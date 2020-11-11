import { Rule } from "@sanity/validation/src/Rule";

export default {
  name: "quote",
  title: "Quote",
  type: "document",
  fields: [
    {
      name: "snippet",
      title: "Snippet",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "blockContentBasic",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "person",
      title: "Person",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "reference",
      title: "Reference",
      type: "url",
    },
  ],
};
