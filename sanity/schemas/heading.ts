import { Rule } from '@sanity/validation/src/Rule';
import Sanity from './helpers';

const { object: heading, query } = Sanity.defineObject({
  name: "heading",
  title: "Heading",
  preview: {
    select: {
      firstLine: 'firstLine',
      secondLine: 'secondLine',
      subHeadingFirstLine: 'subHeadingFirstLine',
      subHeadingSecondLine: 'subHeadingSecondLine',
      element: 'headingElement',
    },
    prepare: (selection: {
      firstLine?: string;
      secondLine?: string;
      subHeadingFirstLine?: string;
      subHeadingSecondLine?: string;
      element?: string;
    }) => {
      const titlePrefix = selection.element === 'none' ? '' : `${selection.element} - `;
      const titleContent = selection.firstLine || selection.subHeadingFirstLine || '';

      return {
        title: `${titlePrefix}${titleContent}`,
      }
    }
  },
  fieldsets: [
    {
      name: "heading", title: "Heading Text", options: {
        collapsible: true,
        collapsed: false,
      }
    },
    {
      name: "subHeading", title: "Sub Heading Text", options: {
        collapsible: true,
        collapsed: true,
      }
    },
  ],
  fields: [
    {
      name: 'headingElement',
      title: 'Heading Element',
      description: 'Select a heading element to use for the heading',
      fieldset: "heading",
      type: 'string',
      options: {
        list: [
          { title: 'None (display sub-heading text only)', value: 'none' },
          { title: 'H1', value: 'H1' },
          { title: 'H2', value: 'H2' },
          { title: 'H3', value: 'H3' },
        ],
        layout: 'radio'
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "firstLine",
      title: "First Line",
      type: "string",
      fieldset: "heading",
      description: 'Will only be rendered if a heading element is selected above'
    },
    {
      name: "secondLine",
      title: "Second Line",
      type: "string",
      fieldset: "heading",
      description: 'Will only be rendered if a heading element is selected above'

    },
    {
      name: 'headingSize',
      title: 'Heading Display Size',
      description: 'Use this to override the default heading styling, leave blank otherwise',
      fieldset: 'heading',
      type: 'string',
      options: {
        list: [
          { title: 'Big', value: 'big' },
          { title: 'Medium', value: 'medium' },
          { title: 'Small', value: 'small' },
        ],
        layout: 'radio'
      }
    },
    {
      name: "subHeadingFirstLine",
      title: "First Line",
      type: "string",
      fieldset: "subHeading",
    },
    {
      name: "subHeadingSecondLine",
      title: "Second Line",
      type: "string",
      fieldset: "subHeading",
    },
    {
      name: 'displaySubHeadingFirst',
      title: 'Show Sub-Heading First',
      fieldset: 'subHeading',
      type: 'boolean',
      description: 'Display the sub-heading before the heading element text',
      options: {
        layout: 'checkbox'
      }
    },
    {
      name: 'subHeadingSize',
      title: 'Sub-Heading Display Size',
      description: 'Use this to override the default sub-heading styling, leave blank otherwise',
      fieldset: 'subHeading',
      type: 'string',
      options: {
        list: [
          { title: 'Big', value: 'big' },
          { title: 'Medium', value: 'medium' },
          { title: 'Small', value: 'small' },
          { title: 'Smallest', value: 'smallest' },
        ],
        layout: 'radio'
      }
    },
    {
      name: 'useBodyColor',
      title: 'Use Default Text Colour',
      fieldset: 'subHeading',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    }
  ],
}, []);

export type HeadingQuery = typeof query;

export default heading;