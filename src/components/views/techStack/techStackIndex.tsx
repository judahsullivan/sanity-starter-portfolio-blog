import { Box, Heading } from "@chakra-ui/react";






export default function TechStackIndex({
  techStackPage
}: {
  techStackPage: PageLoad
}) {
  console.log(techStackPage)
  return (
    <Box>
      <Heading>Tech Stack</Heading>
    </Box>
  )
}
