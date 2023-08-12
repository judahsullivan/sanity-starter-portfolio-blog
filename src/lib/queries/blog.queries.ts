import { groq } from "next-sanity";
import { pageFields } from "./fields";
import { SanityClient } from "sanity";
import { projectQuery } from "./projects.queries";




export const blogQuery = groq`
"blogPage": *[_type == "blog"]{
${pageFields}
}
`

export async function getBlogPage(
  client: SanityClient
): Promise<{
  blogPage: PageLoad
}> {
  const data = await client.fetch(projectQuery)
  return data
}



