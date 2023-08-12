import TechStackIndex from "@/components/views/techStack/techStackIndex";
import { getTechStackPage } from "@/lib/queries/techstack.queries";
import { getClient } from "@/lib/sanity.client";







export default function TechStack({
  techStackPage
}: {
  techStackPage: PageLoad
}) {
  return (
    <TechStackIndex techStackPage={techStackPage} />
  )
}

export async function getStaticProps() {
  const client = getClient()


  const data = await getTechStackPage(client)



  return {
    props: {
      ...data,

    }
  }
}
