import { SanityClient } from "sanity"
import { groq } from "next-sanity"
import { pageFields } from "./fields"






export const projectQuery = groq`
{
"projectsPage": *[_type == "projects"][0]{
${pageFields}
}
}
`




export async function getProjectsPage(
  client: SanityClient
): Promise<{
  projectsPage: PageLoad
}> {
  const data = await client.fetch(projectQuery)
  return data
}
