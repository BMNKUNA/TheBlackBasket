import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pastTour',
  title: 'Past Tours',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'date', title: 'Date', type: 'date', validation: (Rule) => Rule.required()}),
    defineField({name: 'location', title: 'Location', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'caption', title: 'Caption', type: 'string'})],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
