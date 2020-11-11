import { Rule } from "@sanity/validation/src/Rule";

export default {
  name: "assets",
  title: "Assets",
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
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
};
