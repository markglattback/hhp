import Sanity, { SanityDocumentResult } from "./helpers";

const assets = Sanity.createDocumentType({
  name: "assets",
  title: "Assets",
  type: "document",
  fields: [
    {
      name: "file",
      title: "File",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
});

export default assets;
