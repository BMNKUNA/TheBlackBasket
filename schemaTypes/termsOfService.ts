import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'termsOfService',
  title: 'Terms of Service',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
