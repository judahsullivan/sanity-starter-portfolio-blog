import { groq } from "next-sanity";
import { pageFields } from "./fields";
import { SanityClient } from "sanity";








export const homeQuery = groq`
{
"home": *[_type == "home"][0]{
role[],
${pageFields}
}
}
`





export async function getHomePage(
  client: SanityClient
): Promise<{
  home: HomePageLoad;


}> {
  const data = await client.fetch(homeQuery)
  return data
}
