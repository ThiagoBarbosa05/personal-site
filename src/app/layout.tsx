import './globals.css'

import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { MenuMobile } from '@/components/navigation/menu-mobile'
import { ToggleMenuProvider } from '@/contexts/toggle-menu-mobile'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <ToggleMenuProvider>
          <div className="flex min-h-screen flex-col items-center justify-center bg-[#010C15] p-4">
            <div className="scrollbar-styled relative flex max-h-[850px] w-full max-w-[1440px] flex-1 flex-col justify-between overflow-hidden overflow-y-auto rounded-lg border border-[#1E2D3D] bg-primary-dark-blue">
              <Header />
              <div className="flex flex-1 flex-col">{children}</div>

              <Footer />
            </div>
          </div>
        </ToggleMenuProvider>
      </body>
    </html>
  )
}
