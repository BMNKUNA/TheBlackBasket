import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'ctaText', title: 'CTA Button Text', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'ctaLink', title: 'CTA Button Link', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'backgroundImage', title: 'Background Image', type: 'image', options: {hotspot: true}}),
  ],
})
