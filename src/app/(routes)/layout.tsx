'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import { Mainnet, DAppProvider, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const inter = Inter({ subsets: ['latin'] })

/* export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
} */

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    // [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Mainnet.chainId]: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
    [Mainnet.chainId]: `https://goerly.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
  },
  refresh: 'never'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DAppProvider config={config}>
          {children}
        </DAppProvider>
      </body>
    </html>
  )
}
