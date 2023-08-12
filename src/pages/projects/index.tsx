import { getProjectsPage } from "@/lib/queries/projects.queries";
import { getClient } from "@/lib/sanity.client";
import ProjectsIndex from "@/components/views/projects/projectsIndex";






export default function Projects({
  projectsPage
}: {
  projectsPage: PageLoad
}) {
  return (
    <ProjectsIndex projectsPage={projectsPage} />
  )
}



export async function getStaticProps() {
  const client = getClient()

  const data = await getProjectsPage(client)


  return {
    props: {
      ...data,

    },
  }
}

