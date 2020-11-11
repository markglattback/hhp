import { Rule } from "@sanity/validation/src/Rule";

export default {
  name: "heading3",
  title: "Heading - H3",
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
      validation: (Rule: Rule) => Rule.required(),
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
