import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
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
      description: 'This field is the title of your personal website.',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'array',
      title: 'Role',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      description:
        'This Field Describes specific skills and what your good at!',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
