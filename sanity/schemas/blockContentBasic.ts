import { YellowTextIcon, YellowTextRender } from "../custom_block_components";
import {
  BodySmall,
  Caption,
  Caption2,
  Large,
  LargeCaps,
} from "../custom_block_components/styles";
import LinkExternal from "../custom_icons/LinkExternal/LinkExternal";
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiLink2 } from 'react-icons/fi'

export default {
  title: "Block Content Basic",
  name: "blockContentBasic",
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
        { title: "Body", value: "normal" },
        {
          title: "Body Smaller",
          value: "small",
          blockEditor: {
            render: BodySmall,
          },
        },
        {
          title: "Large Caps",
          value: "largeCaps",
          blockEditor: {
            render: LargeCaps,
          },
        },
        {
          title: "Large",
          value: "large",
          blockEditor: {
            render: Large,
          },
        },
        {
          title: "Caption",
          value: "caption",
          blockEditor: {
            render: Caption,
          },
        },
        {
          title: "Caption 2",
          value: "caption2",
          blockEditor: {
            render: Caption2,
          },
        },
      ],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Highlight Text",
            value: "highlightText",
            blockEditor: {
              icon: YellowTextIcon,
              render: YellowTextRender,
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
          {
            title: "External Link",
            name: "linkExternal",
            type: "object",
            fields: [
              {
                title: "Slug",
                name: "slug",
                type: "reference",
                to: [
                  {
                    type: "linkExternal",
                  },
                ],
              },
            ],
            blockEditor: {
              icon: HiOutlineExternalLink,
            }
          },
          {
            title: "Internal Link",
            name: "linkInternal",
            type: "object",
            fields: [
              {
                title: "Slug",
                name: "slug",
                type: "reference",
                to: [
                  {
                    type: "linkInternal",
                  },
                ],
              },
            ],
            blockEditor: {
              icon: FiLink2,
            }
          },
        ],
      },
    },
    {
      // renders multi-line H1 tag
      type: "heading1",
    },
    {
      // renders multi-line H2 tag
      type: "heading2",
    },
    {
      // renders multi-line H3 tag
      type: "heading3",
    },
    {
      // renders a formatted image
      type: "pageImage",
      title: "Page Image",
    },
    {
      type: "largeButton",
    },
    {
      type: "reference",
      to: [
        {
          // renders a big quote
          type: "bigQuote",
          title: "Big Quote",
        },
        {
          // renders a full quote
          type: 'quote',
          title: 'full quote',
        },
      ],
    },
    {
      type: "videoRef",
      title: "Video"
    },
{
  type: 'callToActionRef',
  title: 'Call to Action'
}
  ],
};
