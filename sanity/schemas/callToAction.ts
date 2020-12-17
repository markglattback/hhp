import Sanity from "./helpers";
import internal from "./internal";

export default Sanity.createDocumentType({
  name: "callToAction",
  title: "Call To Action",
  type: "document",
  fields: [
    internal,
    {
      name: "headlineText",
      title: "Headline Text",
      type: "blockContent",
    },
    {
      name: "buttonOneText",
      title: "Button One Text",
      type: "string",
    },
    {
      name: "buttonOneLink",
      title: "Button One Link",
      type: "reference",
      to: [{
        type: "linkInternal"
      }],
    },
    {
      name: "buttonTwoText",
      title: "Button Two Text",
      type: "string",
    },
    {
      name: "buttonTwoLink",
      title: "Button Two Link",
      type: "reference",
      to: [{
        type: 'linkInternal'
      }]
    },
  ],
});
