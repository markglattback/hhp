import internal from "./internal";

export default {
  name: "linkExternal",
  title: "External Link",
  type: "document",
  fields: [
    internal,
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};
