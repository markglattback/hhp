export default {
  name: "mainQuote",
  title: "Main Quote",
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
