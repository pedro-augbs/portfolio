import './globals.css'

import { ReactNode } from 'react'
import type { Metadata } from 'next'
import {
  Roboto_Flex as RobotoFlex,
  Roboto_Serif as RobotoSerif,
} from 'next/font/google'

import { Header } from '@/components/header/Header'

import { ThemeProvider } from '@/lib/theme-provider'

const robotoFlex = RobotoFlex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
})

const robotoSerif = RobotoSerif({
  subsets: ['latin'],
  variable: '--font-roboto-serif',
})

export const metadata: Metadata = {
  title: 'Pedro',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`${robotoFlex.variable} ${robotoSerif.variable} font-sans`}
    >
      <body className="min-h-screen bg-secondary">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
