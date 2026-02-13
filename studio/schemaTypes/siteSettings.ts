import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Site Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Site Description', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required().email()}),
    defineField({name: 'phone', title: 'Phone', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'address', title: 'Address', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number (with country code)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({name: 'facebook', title: 'Facebook URL', type: 'url'}),
        defineField({name: 'instagram', title: 'Instagram URL', type: 'url'}),
        defineField({name: 'twitter', title: 'Twitter URL', type: 'url'}),
        defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
      ],
    }),
  ],
})
