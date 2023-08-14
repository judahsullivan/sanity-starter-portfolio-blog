import HomeIndex from "@/components/views/home/homeIndex";
import { getHomePage } from "@/lib/queries/home.queries";
import { getClient } from "@/lib/sanity.client";
import { GetStaticProps } from "next";
import { readToken } from "@/lib/sanity.api";

interface HomeProps {
  home: HomePageLoad;
  token?: string;
  draftMode?: boolean;
}

interface Query {
  [key: string]: string;
}

export default function Home({
  home,
  draftMode,
  token,
}:
  HomeProps
) {
  return (
    <HomeIndex home={home} />
  )
}


export const getStaticProps: GetStaticProps<HomeProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const data = await getHomePage(client)
  console.log(data)


  return {
    props: {
      ...data,
      draftMode,
      token: draftMode ? readToken : '',
    }
  }
}
