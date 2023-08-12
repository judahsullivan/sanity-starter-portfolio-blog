import { CogIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
   defineField({
      name: 'pageLinks',
      title: 'Page Links',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            { type: 'home' },
            { type: 'projects' },
            { type: 'about' },
            { type: 'blog' },
            { type: 'stack' },
          ],
        },
      ],
    }),
   defineField({
      name: 'image',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      };
    },
  },
});
