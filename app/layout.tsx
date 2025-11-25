import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'], 
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900']
})

export const metadata: Metadata = {
  title: 'Solitaire Education | JC H2 Physics & Computing Tuition Singapore',
  description: 'Specialised JC H2 Physics and Computing tuition in Singapore. Unlock your true potential with lifetime mentorship, expert guidance, and a supportive learning community. Achieve A-grade excellence.',
  keywords: [
    'H2 Physics tuition Singapore',
    'H2 Computing tuition Singapore',
    'JC tuition Singapore',
    'A-Level Physics tuition',
    'A-Level Computing tuition',
    'Physics mentorship Singapore',
    'Computing mentorship',
    'STEM tuition Singapore',
  ],
  authors: [{ name: 'Solitaire Education' }],
  openGraph: {
    title: 'Solitaire Education | JC H2 Physics & Computing Tuition Singapore',
    description: 'Unlock every student\'s true potential with specialised H2 Physics and Computing tuition, lifetime mentorship, and a supportive learning community.',
    url: 'https://solitaire-education.vercel.app',
    siteName: 'Solitaire Education',
    locale: 'en_SG',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.variable} ${lato.className}`}>{children}</body>
    </html>
  )
}
