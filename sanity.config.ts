import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { projectId, dataset, apiVersion, previewSecretId } from '@/lib/sanity.api';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { previewDocumentNode } from '@/plugins/previewPane';
import author from '@/schemas/documents/author';
import blockContent from '@/schemas/documents/blockContent';
import category from '@/schemas/objects /category';
import career from '@/schemas/objects /career';
import post from '@/schemas/documents/post';
import project from '@/schemas/documents/project';
import technologies from '@/schemas/documents/technologies';
import home from '@/schemas/singletons/home';
import features from '@/schemas/objects /features';
import about from '@/schemas/singletons/about';
import blog from '@/schemas/singletons/blog';
import projects from '@/schemas/singletons/projects';
import stack from '@/schemas/singletons/stack';
import { pageStructure, singletonPlugin } from '@/plugins/settings';
import { productionUrl } from '@/plugins/productionUrl';
import settings from '@/schemas/singletons/settings';
import duration from '@/schemas/duration';
import education from '@/schemas/objects /education';
import projectcategory from '@/schemas/objects /projectcategory';
import { iconPicker } from 'sanity-plugin-icon-picker';


export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  about.name,
  projects.name,
  blog.name,
  post.name,
  project.name,
]
export default defineConfig({
  basePath: '/studio',
  name: 'My_Digital_Studio',
  title: 'My Digital Studio',
  projectId,
  dataset,
  apiVersion,
  schema: {
    types: [
      //DocumentType
      author,
      blockContent,
      category,
      features,
      project,
      settings,
      technologies,
      career,
      education,
      post,
      projectcategory,
      //objectType
      duration,
      //singletonType
      home,
      about,
      blog,
      projects,
      stack
    ]
  },
  plugins: [

    deskTool({
      structure: pageStructure([home, about, blog, projects, stack]),
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId })
    }),
    iconPicker(),
    singletonPlugin([home.name, settings.name, about.name, blog.name, projects.name, stack.name]),
    unsplashImageAsset(),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    visionTool({
      defaultApiVersion: apiVersion,
    })],
});
