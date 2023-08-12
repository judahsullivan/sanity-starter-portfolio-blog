import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: BookIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      description: 'Here you can put a brief page heading.',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description: 'Here you can put a brief page description.',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Blog',
        title,
      }
    },
  },
})
