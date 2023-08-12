import { getHomePage } from "@/lib/queries/home.queries";
import HomeIndex from "@/components/views/home/homeIndex";
import { getClient } from "@/lib/sanity.client";


export default function Home({
  home
}: {
  home: HomePageLoad
}) {
  return (
    <HomeIndex home={home} />
  )
}



export async function getStaticProps() {
  const client = getClient()


  const data = await getHomePage(client)


  return {
    props: {
      ...data,
    }
  }
}
