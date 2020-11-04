export default {
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    {
      name: "internalName",
      title: "Internal Name",
      type: "string",
      description: 'Example: "Home Page - Heading Section"',
    },
    {
      name: "sectionName",
      title: "Section Name",
      type: "string",
      description: "Used to add an id to outputted html, only use letters",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "blockContentBasic",
    },
  ],
};
