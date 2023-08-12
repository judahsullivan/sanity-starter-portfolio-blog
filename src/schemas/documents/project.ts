import {  ImageIcon, MobileDeviceIcon } from '@sanity/icons'
import {  defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: MobileDeviceIcon,
  fields: [
  defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
  }),
    defineField({
      name: 'site',
      type: 'url',
      title: 'Site'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: any) =>
          input
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 96)
      },
      }),
    defineField({
      name: 'coverimage',
      title: 'Cover Image',
      type: 'image',
      icon: ImageIcon,
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description'
    }),
    defineField({
      name: 'content',
      title: 'Body',
      type: 'blockContent'
    }),
       defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options:{
        dateFormat: 'MM-DD-YYYY',
      },
      initialValue:() => new Date().toISOString(),
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      of: [{ type: 'string' }]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Project',
        title,
      }
    },
  },
})
