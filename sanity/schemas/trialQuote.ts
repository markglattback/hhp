export default {
  name: "trialQuote",
  title: "TrialQuote",
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
