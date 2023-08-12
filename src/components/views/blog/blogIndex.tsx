import { Box, Heading } from "@chakra-ui/react";






export default function BlogIndex({
  blogPage
}: {
  blogPage: PageLoad
}) {
  console.log(blogPage)
  return (
    <Box>
      <Heading>Blog Page</Heading>
    </Box>
  )
}
