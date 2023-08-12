import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Post Categories',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
