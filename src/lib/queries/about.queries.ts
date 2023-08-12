import { groq } from "next-sanity";
import { pageFields } from "./fields";
import { SanityClient } from "sanity";





export const aboutQuery = groq`
{
"aboutPage": *[_type == "about"][0]{
${pageFields}
}
}
`



export async function getAboutPage(
  client: SanityClient
): Promise<{
  aboutPage: PageLoad
}> {
  const data = await client.fetch(aboutQuery)
  return data
}
