import AppLayout from "@/components/layouts/appLayout";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";





export default function Website({ pageProps, Component }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
