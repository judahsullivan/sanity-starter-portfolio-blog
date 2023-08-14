import PageLayout from "@/components/layouts/pageLayout";






export default function HomeIndex({
  home
}: {
  home: HomePageLoad
}) {
  console.log(home)
  return (
    <PageLayout>
      <h1>Home Page</h1>
    </PageLayout >
  )
}
