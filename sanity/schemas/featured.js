export default {
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
    },
    {
      name: 'restaurant',
      type: 'array',
      title: 'Restaurant',
      of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
    },
  ],
}
