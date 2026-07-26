import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'], 
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://solitaire-education.vercel.app'),
  title: 'O-Level, IP & JC Physics Tuition Singapore | Solitaire Education',
  description: 'Expert Secondary School O-Level and IP Physics tuition, plus JC H2 A-Level Physics tuition in Singapore. Build strong concepts, sharpen exam skills, and learn in capped classes with lifetime mentorship.',
  keywords: [
    'Physics tuition',
    'Physics tuition Singapore',
    'Physics mentorship',
    'H2 Physics tuition',
    'H2 Physics tuition Singapore',
    'JC Physics tuition',
    'JC tuition Singapore',
    'A-Level Physics tuition',
    'O-Level Physics tuition',
    'O-Level Physics tuition Singapore',
    'IP Physics tuition',
    'Secondary School Physics tuition',
    'Secondary Physics tuition Singapore',
    'Physics mentorship Singapore',
    'STEM tuition Singapore',
    'Raffles tuition',
    'best Physics tuition Singapore',
    'Physics tutor Singapore',
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
    title: 'O-Level, IP & JC Physics Tuition Singapore | Solitaire Education',
    description: 'Expert Secondary School O-Level and IP Physics tuition, plus JC H2 A-Level Physics tuition in Singapore, with capped classes and lifetime mentorship.',
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
    google: 'fzV8KqLzG4EIgAH5j4WeVuYgRSgNhgkpJkKJp1vQLCA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Solitaire Education',
      url: 'https://solitaire-education.vercel.app',
      logo: 'https://solitaire-education.vercel.app/solitaire-education-logo/web-app-manifest-512x512.png',
      description: 'Expert Secondary School O-Level and IP Physics tuition, plus JC H2 A-Level Physics tuition in Singapore with lifetime mentorship.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'SG',
        addressLocality: 'Singapore',
      },
      areaServed: 'Singapore',
      serviceType: ['O-Level Physics Tuition', 'IP Physics Tuition', 'H2 Physics Tuition', 'Physics Mentorship'],
      offers: [
        {
          '@type': 'Offer',
          name: 'JC A-Level H2 Physics Tuition',
          description: 'Expert JC H2 Physics tuition with personalized mentorship and small class sizes (max 6:1)',
          category: 'Physics Tuition',
        },
        {
          '@type': 'Offer',
          name: 'Secondary School O-Level and IP Physics Tuition',
          description: 'Concept-focused Secondary School Physics tuition for O-Level and IP students with personalized guidance and exam preparation',
          category: 'Physics Tuition',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '50',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Solitaire Education',
      url: 'https://solitaire-education.vercel.app',
      description: 'Expert Secondary School O-Level and IP Physics tuition, plus JC H2 A-Level Physics tuition in Singapore, with capped classes and lifetime mentorship.',
      publisher: {
        '@type': 'Organization',
        name: 'Solitaire Education',
        logo: 'https://solitaire-education.vercel.app/solitaire-education-logo/web-app-manifest-512x512.png',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://solitaire-education.vercel.app/#contact',
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${lato.variable} ${lato.className}`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
