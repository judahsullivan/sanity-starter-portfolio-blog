import { SanityClient } from 'next-sanity'
import { groq } from 'next-sanity'
import { pageFields, settings, technologiesFields } from './fields';


export const techStackPageQuery = groq`
{
"stackPage": *[_type == "stack"][0]{
${pageFields}
},
"technologies": *[_type == "techstack"] | order(type desc){
${technologiesFields} 
},
"settings": *[_type == "settings"][0]{
${settings} 
}
}
`




export async function getTechStackPage(
  client: SanityClient
):
  Promise<{
    stackPage: PageLoad;
    settings: SettingsPayload
  }> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await client.fetch(techStackPageQuery)
  return data;
}
