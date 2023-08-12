import { groq } from 'next-sanity'



export const pageFields = groq`
title,
heading,
description,
"image": image.asset -> url,
`


export const settingsFields = groq`
`
