import { Box, Heading } from "@chakra-ui/react";








export default function ProjectsIndex({
  projectsPage
}: {
  projectsPage: PageLoad
}) {
  console.log(projectsPage)
  return (
    <Box>
      <Heading>Projects Page</Heading>
    </Box>
  )
}
