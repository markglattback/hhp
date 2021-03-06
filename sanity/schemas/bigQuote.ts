import Sanity from './helpers';

const bigQuote = Sanity.createDocumentType({
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
      type: "text",
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
});


export default bigQuote;