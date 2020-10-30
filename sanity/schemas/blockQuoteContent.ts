import { YellowTextIcon, YellowTextRender } from "./blockContent";

export default {
  title: "Block Quote Content",
  name: "blockQuoteContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Yellow Text",
            value: "yellowText",
            blockEditor: {
              icon: YellowTextIcon,
              render: YellowTextRender,
            },
          },
        ],
      },
    },
  ],
};
