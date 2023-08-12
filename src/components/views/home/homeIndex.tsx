import { Box, Heading } from "@chakra-ui/react";






export default function HomeIndex({
  home
}: {
  home: HomePageLoad
}) {
  console.log(home)
  return (
    <Box>
      <Heading>Home</Heading>
    </Box>
  )
}
