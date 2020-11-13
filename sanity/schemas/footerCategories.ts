import { Rule } from "@sanity/validation/src/Rule";

export default {
  name: 'footerCategories',
  title: 'Footer Categories',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [{
          name: 'linkText',
          title: 'Link Text',
          type: 'string',
        }, {
          name: 'linkRef',
          title: 'Link Reference',
          type: 'reference',
          to: [{ type: 'linkExternal' }, { type: 'linkInternal' }]
        }]
      }]
    },
    {
      name: 'footerPosition',
      title: 'Footer Position',
      type: 'number',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}