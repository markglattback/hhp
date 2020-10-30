export default {
  name: "pageContent",
  title: "Page Content",
  type: "document",
  fields: [
    {
      title: "Page Name",
      name: "pageName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Meta Description",
      name: "metaDescription",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Structred Content",
      name: "structuredContent",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
};
