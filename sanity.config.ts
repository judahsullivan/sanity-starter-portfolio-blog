import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { projectId, dataset, apiVersion } from '@/lib/sanity.api'






export default defineConfig({
  basePath: "/studio",
  name: 'My_Digital_Studio',
  title: 'My Digital Sutdio',
  projectId,
  dataset,
  apiVersion,
  schema: {
    types: [
      //singleton

      //Documents

      //Objects
    ]
  },
  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: apiVersion,
    })],
});
