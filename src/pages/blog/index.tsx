import BlogIndex from "@/components/views/blog/blogIndex"
import { getBlogPage } from "@/lib/queries/blog.queries"
import { getClient } from "@/lib/sanity.client"








export default function Blog({
  blogPage
}: {
  blogPage: PageLoad
}) {
  return (
    <BlogIndex blogPage={blogPage} />
  )
}


export async function getStaticProps() {
  const client = getClient()

  const data = await getBlogPage(client)

  return {

    props: {
      ...data,

    }
  }
}
