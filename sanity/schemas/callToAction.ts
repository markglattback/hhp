import Sanity from "./helpers";
import internal from "./internal";

export default Sanity.createDocumentType({
  name: "callToAction",
  title: "Call To Action",
  type: "document",
  fields: [
    internal,
    {
      name: "firstLine",
      title: "Text - First Line",
      type: "string",
    },
    {
      name: "secondLine",
      title: "Text - Second Line",
      type: "string",
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
