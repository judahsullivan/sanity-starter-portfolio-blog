import { RocketIcon } from '@sanity/icons'
import {  defineField, defineType } from 'sanity'

export default defineType({
  name: 'stack',
  title: 'Stack',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This will Show as the Title in your Page',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
defineField({
   name: 'heading',
      description: 'This will Show as the Header in your Page',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'description',
      description: 'Here you can put a brief page description.',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'TechStack',
        title,
      }
    },
  },
})
