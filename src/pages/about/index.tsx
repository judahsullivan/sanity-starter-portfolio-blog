import { getClient } from "@/lib/sanity.client";
import AboutIndex from "@/components/views/about/aboutIndex";
import { getAboutPage } from "@/lib/queries/about.queries";
import { readToken } from "@/lib/sanity.api";
import { GetStaticProps } from "next";


interface AboutProps {
  aboutPage: PageLoad;
  token?: string;
  draftMode?: boolean;
}


interface Query {
  [key: string]: string;
}

export default function About({
  aboutPage
}: AboutProps) {
  return (
    <AboutIndex aboutPage={aboutPage} />
  )
}



export const getStaticProps: GetStaticProps<AboutProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const data = await getAboutPage(client)
  return {
    props: {
      ...data,
      draftMode,
      token: draftMode ? readToken : '',
    }
  }
}
