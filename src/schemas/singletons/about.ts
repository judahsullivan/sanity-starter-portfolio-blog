import { UserIcon, ImageIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';


export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: UserIcon,
  // Uncomment below to have edits publish automatically as you type
  //   liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This will Show as the Title in your Page',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'heading',
      description: 'This will Show as the Heading in your Page',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      description: 'Here you can put a brief page description.',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      type: 'image',
      icon: ImageIcon,
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'education' }]
      }],
    }),
    defineField({
      name: 'career',
      title: 'Career',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'career' }]
      }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'About',
        title,
      };
    },
  },
});
