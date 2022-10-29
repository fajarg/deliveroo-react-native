export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Type of the dish in GDP',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    },
  ],
}
