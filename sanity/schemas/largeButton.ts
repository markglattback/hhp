import { Rule } from "@sanity/validation/src/Rule";
import Sanity from "./helpers";
import internal from "./internal";

export default Sanity.createObjectType({
  name: "largeButton",
  title: "Large Button",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
      description: "The text shown within the button",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "reference",
      to: [
        {
          type: "linkExternal",
        },
        {
          type: "linkInternal",
        },
      ],
      description: "Either an internal slug or external url",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "additionalText",
      title: "Additional Text",
      type: "blockContentBasic",
      description: "To be displayed under the button",
    },
  ],
});
