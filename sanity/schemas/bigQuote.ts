export default {
  name: "bigQuote",
  title: "Big Quote",
  type: "document",
  fields: [
    {
      name: "internalName",
      title: "Internal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "blockQuoteContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "person",
      title: "Person",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "reference",
      title: "Reference",
      type: "url",
    },
  ],
};
