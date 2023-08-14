import { LiveQueryProvider } from "next-sanity/preview";
import { getClient } from "@/lib/sanity.client";
import { ReactNode, useMemo } from "react";




export default function PreviewProvider({
  children,
  token,
}: {
  children: ReactNode;
  token: string;
}) {
  const client = useMemo(() => getClient({ token }), [token])
  return (
    <LiveQueryProvider
      client={client}
      logger={console}
    >
      {children}
    </LiveQueryProvider>
  )
}
