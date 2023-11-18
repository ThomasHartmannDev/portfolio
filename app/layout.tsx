import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import {Header} from '@/app/components/header/index'
import { ContactForm } from './components/contact-forms'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-to-top'
import { Toaster } from './components/toaster'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: "Home | Hartmann's Dev",
    template: "%s | Hartmann's Dev"
  },
  icons: [
    {
      url: '/favicon.svg'
    }
  ]
}

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='enUS' className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        {children}
        <ContactForm/>
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
