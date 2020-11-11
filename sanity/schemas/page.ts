import { Rule } from "@sanity/validation/src/Rule";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      title: "Internal Name",
      name: "name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Page Title [SEO]",
      name: "metaTitle",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Meta Description [SEO]",
      name: "metaDescription",
      type: "text",
      rows: 4,
      validation: (Rule: Rule) => Rule.required().max(160),
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "section" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};