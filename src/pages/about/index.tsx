import { getAboutPage } from "@/lib/queries/about.queries";
import { getClient } from "@/lib/sanity.client";
import AboutIndex from "@/components/views/about/aboutIndex";






export default function About({
  aboutPage
}: {
  aboutPage: PageLoad
}) {
  return (
    <AboutIndex aboutPage={aboutPage} />
  )
}



export async function getStaticProps() {
  const client = getClient()
  const data = await getAboutPage(client)
  return {
    props: {
      ...data
    }
  }
}
