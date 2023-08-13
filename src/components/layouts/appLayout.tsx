import { Fragment, ReactNode } from "react";
import Navbar from "../settings/navbar";


export default function AppLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <Fragment>
      <Navbar />
      <div
        className="applayout"
      >
        {children}
      </div>
    </Fragment>
  )
}
