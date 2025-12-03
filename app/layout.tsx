import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'], 
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900']
})

export const metadata: Metadata = {
  title: 'Physics Tuition & Computing Tuition Singapore | Solitaire Education',
  description: 'Expert Physics tuition and Computing tuition in Singapore with lifetime mentorship. Specialised JC H2 Physics and Computing classes with capped class sizes (max 6:1). Top-tier A-Level tuition from Raffles Institution & NUS Computing educator. Achieve straight A grades with personalized Physics mentorship and Computing mentorship.',
  keywords: [
    'Physics tuition',
    'Physics tuition Singapore',
    'Computing tuition',
    'Computing tuition Singapore',
    'Physics mentorship',
    'Computing mentorship',
    'H2 Physics tuition',
    'H2 Physics tuition Singapore',
    'H2 Computing tuition',
    'H2 Computing tuition Singapore',
    'JC Physics tuition',
    'JC Computing tuition',
    'JC tuition Singapore',
    'A-Level Physics tuition',
    'A-Level Computing tuition',
    'Physics mentorship Singapore',
    'Computing mentorship Singapore',
    'STEM tuition Singapore',
    'Raffles tuition',
    'NUS tuition',
    'best Physics tuition Singapore',
    'best Computing tuition Singapore',
    'Physics tutor Singapore',
    'Computing tutor Singapore',
  ],
  authors: [{ name: 'Solitaire Education' }],
  icons: {
    icon: [
      { url: '/solitaire-education-logo/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/solitaire-education-logo/favicon.svg', type: 'image/svg+xml' },
      { url: '/solitaire-education-logo/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/solitaire-education-logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/solitaire-education-logo/site.webmanifest' },
    ],
  },
  appleWebApp: {
    title: 'Solitaire Education',
  },
  openGraph: {
    title: 'Physics Tuition & Computing Tuition Singapore | Solitaire Education',
    description: 'Expert Physics tuition and Computing tuition in Singapore with lifetime mentorship. Specialised JC H2 Physics and Computing classes with capped class sizes (max 6:1). Top-tier A-Level tuition from Raffles Institution & NUS Computing educator.',
    url: 'https://solitaire-education.vercel.app',
    siteName: 'Solitaire Education',
    locale: 'en_SG',
    type: 'website',
    images: [
      {
        url: '/solitaire-education-logo/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Solitaire Education Logo',
      },
    ],
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Solitaire Education',
    description: 'Expert Physics tuition and Computing tuition in Singapore with lifetime mentorship. Specialised JC H2 Physics and Computing classes.',
    url: 'https://solitaire-education.vercel.app',
    logo: 'https://solitaire-education.vercel.app/solitaire-education-logo/web-app-manifest-512x512.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SG',
      addressLocality: 'Singapore',
    },
    areaServed: 'Singapore',
    serviceType: ['Physics Tuition', 'Computing Tuition', 'Physics Mentorship', 'Computing Mentorship'],
    offers: [
      {
        '@type': 'Offer',
        name: 'JC H2 Physics Tuition',
        description: 'Expert JC H2 Physics tuition with personalized mentorship and small class sizes (max 6:1)',
        category: 'Physics Tuition',
      },
      {
        '@type': 'Offer',
        name: 'JC H2 Computing Tuition',
        description: 'Specialized JC H2 Computing tuition with lifetime mentorship from NUS Computing educator',
        category: 'Computing Tuition',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${lato.variable} ${lato.className}`}>{children}</body>
    </html>
  )
}
