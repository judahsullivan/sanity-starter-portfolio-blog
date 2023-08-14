import TechStackIndex from "@/components/views/techStack/techStackIndex";
import { getTechStackPage } from "@/lib/queries/techStack.queries";
import { readToken } from "@/lib/sanity.api";
import { getClient } from "@/lib/sanity.client";
import { GetStaticProps } from "next";


interface TechStackProps {
  techStackPage: PageLoad;
  token: string
  draftMode: boolean
}

interface Query {
  [key: string]: string
}


export default function TechStack(
  props
    : TechStackProps
) {
  const { techStackPage, draftMode, token } = props;
  return (
    <TechStackIndex techStackPage={techStackPage} />
  )
}

export const getStaticProps: GetStaticProps<TechStackProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const data = await getTechStackPage(client)



  return {
    props: {
      ...data,
      draftMode,
      token: draftMode ? readToken : ''
    }
  }
}
