import { groq } from "next-sanity";

export const settings = groq`
    pageLinks[] -> {
      _type, 
      title,

    },
    externalLinks[]->{
      _type,
      title
    },
   "image": image.asset -> url, 
   
`

export const projectFields = groq`
  title,
  description,
  "slug": slug.current,
  "projectcategory": projectcategory -> [],
  body,
  coverimage {
    asset-> {
      url,
      _id
    }
  },
  techStack[],
  site
`;



export const pageFields = groq`
title, 
heading, 
description, 
`

export const pageFieldsWithImage = groq`
title, 
heading,
description, 
"image": image.asset -> url,
`

export const postFields = groq`
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


export const imageFields = groq`
      "image": image.asset -> url,
`


export const technologiesFields = groq`
 title,
  description, 
  "image": image.asset -> url,
  link,
  type
`
