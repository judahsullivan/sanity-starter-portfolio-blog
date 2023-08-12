import { groq } from "next-sanity";
import { pageFields } from "./fields";
import { SanityClient } from "sanity";






export const techStackQuery = groq`
{
"techStackPage": *[_type == "stack"]{
${pageFields}
}
}
`


export async function getTechStackPage(
  client: SanityClient
): Promise<{
  techStackPage: PageLoad
}> {
  const data = await client.fetch(techStackQuery)
  return data
}
