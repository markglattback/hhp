import { Rule } from "@sanity/validation/src/Rule";

export default {
  name: "pageImage",
  title: "Page Image",
  type: "document",
  fields: [
    {
      name: "file",
      title: "File",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "headerImage",
      title: "Header Image",
      type: "boolean",
    },
  ],
};
