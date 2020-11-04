import internal from "./internal";

export default {
  name: "linkInternal",
  title: "Internal Link",
  type: "document",
  fields: [
    internal,
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    },
  ],
};
