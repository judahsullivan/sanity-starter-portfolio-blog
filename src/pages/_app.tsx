import { AppProps } from "next/app";
import "../styles/global.css"
import AppLayout from "@/components/layouts/appLayout";





export default function Website({ pageProps, Component }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
