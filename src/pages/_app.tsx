import { AppProps } from "next/app";





export default function Website({ pageProps, Component }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
