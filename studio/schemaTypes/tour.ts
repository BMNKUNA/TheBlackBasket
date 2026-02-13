import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'tour',
  title: 'Tours & Packages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price (ZAR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Package',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'travelDates',
      title: 'Travel Dates',
      type: 'string',
      description: 'Example: 24 Sep – 5 Oct 2026',
    }),

    defineField({
      name: 'deposit',
      title: 'Deposit Required (ZAR)',
      type: 'number',
      description: 'Deposit amount required to secure booking',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'countries',
      title: 'Countries Covered',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Example: Brazil, Argentina, Paraguay',
    }),

    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),

    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'included',
      title: "What's Included",
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'excluded',
      title: "What's Excluded",
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'day', title: 'Day', type: 'number'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
          ],
        },
      ],
    }),

    defineField({
      name: 'packagePdf',
      title: 'Downloadable Package File',
      type: 'file',
      description: 'Upload a PDF or an image brochure (PNG/JPG).',
      options: {accept: 'application/pdf,image/*'},
    }),
  ],
})
