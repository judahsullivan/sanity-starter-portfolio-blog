import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";





export default function Website({ pageProps, Component }: AppProps) {
  return (
    <ChakraProvider
      resetCSS={true}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
