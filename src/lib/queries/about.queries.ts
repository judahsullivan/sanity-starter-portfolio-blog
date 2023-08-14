import groq from 'groq';
import { SanityClient } from 'sanity';
import { pageFieldsWithImage, settings } from './fields';


const aboutFields = groq`
    _id,
 education[]->{
   description, 
   title, 
   duration{
start,
end 
},
tags[],
},
   career[] -> {
   tags[],
   duration{
   start,
   end,
   },
    }
`




export const aboutQuery = groq`
{
"about": *[_type == "about"][0]{
${pageFieldsWithImage}
${aboutFields} 
},
  "settings": *[_type == "settings"][0]{
    ${settings}
  }
}
`



export async function getAboutPage(
  client: SanityClient
): Promise<{
  about: PageLoad;
  settings: SettingsPayload;
}> {
  const data = await client.fetch(aboutQuery);
  return data;
}

