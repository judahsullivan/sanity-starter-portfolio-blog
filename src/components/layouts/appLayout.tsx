import { Fragment, ReactNode } from 'react'
import Navbar from '../settings/navbar'


export default function AppLayout({
  settings,
  children
}: {
  children: ReactNode
  settings?: SettingsPayLoad // Make settings optional
}) {
  return (
    <Fragment>
      {settings && <Navbar pageLinks={settings?.pageLinks} />}
      {children}
    </Fragment>
  )
}
