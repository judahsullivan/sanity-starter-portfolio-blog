import { AppProps } from "next/app";
import "../styles/global.css"
import AppLayout from "@/components/layouts/appLayout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { lazy, Fragment } from "react";

const PreviewProvider = lazy(() => import('@/components/sanity/preview/previewProvider'))

export default function Website({ pageProps, Component }: AppProps) {
  const { settings, token, preview } = pageProps;
  const router = useRouter()
  const isStudioPage = router.route.startsWith("/studio") /* seperates the studio route from the appLayout*/
  return (
    <Fragment>
      {preview ? (
        <PreviewProvider
          token={token}
        >
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Fragment>
          {isStudioPage ? (
            <Component {...pageProps} />
          ) : (
            <AppLayout
              settings={settings}
            >
              <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => scrollTo(0, 0)}
              >
                <div
                  key={router.asPath}
                >
                  <Component {...pageProps} />
                </div>
              </AnimatePresence>
            </AppLayout>

          )}
        </Fragment>
      )}
    </Fragment>
  )
}
