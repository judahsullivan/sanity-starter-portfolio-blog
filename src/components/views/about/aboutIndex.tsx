import { Box, Heading } from "@chakra-ui/react";





export default function AboutIndex({
  aboutPage
}: {
  aboutPage: PageLoad;
}) {
  console.log(aboutPage)
  return (
    <Box>
      <Heading>About Index</Heading>
    </Box>
  )
}
