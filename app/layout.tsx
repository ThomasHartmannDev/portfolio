import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import {Header} from '@/app/components/header/index'
import { ContactForm } from './components/contact-forms'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-to-top'
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='enUS' className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
        <ContactForm/>
        <Footer/>
        <BackToTop />
      </body>
    </html>
  )
}
