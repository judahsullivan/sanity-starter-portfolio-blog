import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";
import { imageFields, pageFieldsWithImage, postFields, settings } from "./fields";





export const homeQuery = groq`
{
  "home": *[_type == "home"][0]{
    role[], 
    ${pageFieldsWithImage}
  },
  "settings": *[_type == "settings"][0]{
    ${settings}
  }
}`


export async function getHomePage(
  client: SanityClient
): Promise<{
  home: HomePageLoad;
  settings: SettingsPayload
}> {
  const data = await client.fetch(homeQuery);
  return data;
}
