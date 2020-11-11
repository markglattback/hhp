import { Rule } from '@sanity/validation/src/Rule';

export default {
  name: "heading",
  title: "Heading - No Tag",
  type: "object",
  fieldsets: [
    { name: "heading", title: "Heading Text" },
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
  ],
};
