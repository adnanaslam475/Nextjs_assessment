'use client'
import { ReactNode, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function ReactQueryClientProvider({
  children,
}: {
  children: ReactNode
}) {
  const [client] = useState(() => new QueryClient())

  return <>  <QueryClientProvider client={client}>{children}
    <ReactQueryDevtools initialIsOpen={false} /></QueryClientProvider></>
}
