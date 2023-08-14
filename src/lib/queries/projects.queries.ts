import { SanityClient, groq } from 'next-sanity'
import { getClient } from '../sanity.client';
import { projectFields, settings } from './fields';



export const projectQuery = groq`
{
  "projects":  *[_type == "project"] {
  },
   "settings": *[_type == "settings"][0]{
    ${settings}
  } 

}`


export const projectAndMoreProjectsQuery = groq`
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(publishedAt desc) [0...2] {
    content,
    ${projectFields}
  }
}`

export const projectSlugQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`

export const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`

export const getSanityImageConfig = () => getClient()

export async function getProjectsPage(client: SanityClient): Promise<{
  projects: PageLoad
  settings: SettingsPayload
}> {
  return (await client.fetch(projectQuery))
}

