import * as React from "react";
import {
  YellowTextIcon,
  YellowTextRender,
  NoSpacingIcon,
  NewLineIcon,
  NewLineRender,
} from "../custom_block_components";

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "No Spacing", value: "noSpacing" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
        { title: "Smaller Text", value: "smallertext" },
        { title: "Large Text", value: "largetext" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
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
          {
            title: "No Spacing",
            value: "noSpacing",
            blockEditor: {
              icon: NoSpacingIcon,
            },
          },
          {
            title: "New Line",
            value: "newLine",
            blockEditor: {
              icon: NewLineIcon,
              render: NewLineRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "pageImage",
      options: { hotspot: true },
    },
    {
      type: "quote",
    },
    {
      type: "callToActionRef",
    },
    {
      type: "section",
    },
    {
      type: "largeButton",
    },
    {
      type: "videoRef",
    },
    {
      type: "reference",
      to: [{ type: "section" }],
    },
  ],
};
