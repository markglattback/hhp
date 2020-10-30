export default {
  name: "quote",
  title: "Quote",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "blockQuoteContent",
    },
    {
      name: "person",
      title: "Person",
      type: "string",
    },
    {
      name: "reference",
      title: "Reference",
      type: "url",
    },
  ],
};
