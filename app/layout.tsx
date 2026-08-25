import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { PERSONAL, PROFILE_LINKS } from '@/lib/data'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Raique Babar - AI Engineer',
  description: 'Raique Babar is an AI Engineer building voice agents, intelligent automation, RAG systems, and applied machine learning products.',
  keywords: ['AI engineer', 'machine learning', 'generative AI', 'voice agents', 'automation', 'Raique Babar'],
  authors: [{ name: 'Raique Babar' }],
  creator: 'Raique Babar',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Raique Babar - AI Engineer',
    description: 'AI Engineer building voice agents, intelligent automation, RAG systems, and applied machine learning products.',
    siteName: 'Raique Babar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raique Babar - AI Engineer',
    description: 'AI Engineer building voice agents, intelligent automation, RAG systems, and applied machine learning products.',
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
    google: 'fRvJPeQuqsOp4rSOEh-_m0hXZNSerwCRGQoVQJPwgFs',
  },
}

// Person structured data (JSON-LD) — helps Google show a rich result /
// Knowledge Panel for the site owner. Built from the same PERSONAL /
// PROFILE_LINKS source as the rest of the site.
const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSONAL.name,
  url: 'http://localhost:3000',
  image: 'http://localhost:3000/icon.png',
  jobTitle: 'AI Engineer',
  description: PERSONAL.bio,
  email: PROFILE_LINKS.find((link) => link.label === 'Email')?.href.replace('mailto:', ''),
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Haripur',
  },
  sameAs: PROFILE_LINKS
    .filter((link) => link.href.startsWith('http'))
    .map((link) => link.href),
}

// Applied before hydration so the correct theme is painted on the very first frame
// (avoids a flash of the wrong theme). Dark is the default, so only an
// explicit stored "light" preference should paint light on first load.
const THEME_INIT_SCRIPT = `
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }
  } catch (e) {}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
