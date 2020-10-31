export default {
  name: "callToAction",
  title: "Call To Action",
  type: "document",
  fields: [
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
      type: "slug",
    },
    {
      name: "buttonTwoText",
      title: "Button Two Text",
      type: "string",
    },
    {
      name: "buttonTwoLink",
      title: "Button Two Link",
      type: "slug",
    },
  ],
};
