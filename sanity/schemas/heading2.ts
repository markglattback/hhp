export default {
  name: "heading2",
  title: "Heading - H2",
  type: "object",
  fieldsets: [
    { name: "heading", title: "Heading Text" },
    { name: "subHeading", title: "Sub Heading Text" },
  ],
  fields: [
    {
      name: "firstLine",
      title: "First Line",
      type: "string",
      validation: (Rule) => Rule.required(),
      fieldset: "heading",
    },
    {
      name: "secondLine",
      title: "Second Line",
      type: "string",
      fieldset: "heading",
    },
    {
      name: "subHeadingFirstLine",
      title: "First Line",
      type: "string",
      fieldset: "subHeading",
    },
    {
      name: "subHeadingSecondLine",
      title: "Second Line",
      type: "string",
      fieldset: "subHeading",
    },
  ],
};
