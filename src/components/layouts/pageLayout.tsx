import { motion } from "framer-motion";
import { Fragment, ReactNode } from "react";



export default function PageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Fragment>
      <motion.div
      >
        {children}
      </motion.div>
    </Fragment>
  )

}
