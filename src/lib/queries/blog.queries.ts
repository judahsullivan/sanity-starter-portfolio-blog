import { groq } from "next-sanity"
import { SanityClient } from "next-sanity"
import { pageFields, settings } from "./fields"

const postFields = groq`
  _id,
  title,
  publishedAt, 
  description,
  _updatedAt,
  coverImage,
  "slug": slug.current,
  "author": author->{name},
  "category": category ->{title} 
`
export const postQuery = groq`
  {
"blog": *[_type == "blog"]{
${pageFields}
  },
"posts": *[_type == "post"]{
    ${postFields}
  },
"settings": *[_type == "settings"][0]{
    ${settings}
  }
  }`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current == $slug] | order(pusblishedAt desc)[0...2]{
    content,
    ${postFields}
  },
  "settings": *[_type == "settings"][0]{
    ${settings}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

// Async Functions 


export async function getBlogPage(client: SanityClient): Promise<{
  blog: PageLoad[]
  settings: SettingsPayload
}> {
  return (await client.fetch(postQuery))
}


