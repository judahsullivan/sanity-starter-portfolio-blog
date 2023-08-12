import { PublishIcon } from "@sanity/icons"
import { format, parseISO } from "date-fns"
import { defineField, defineType } from "sanity"



export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: PublishIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    }),
      defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
     defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',

    }),
     defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' }
    }),
  ],
   preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
