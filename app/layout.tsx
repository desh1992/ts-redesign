import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://talent-share.com'),
  title: 'Talent Share - Learn from Experts, Teach What You Love',
  description: 'A vibrant marketplace where knowledge meets opportunity. Connect with real professionals, learn new skills, and share your expertise with an eager community.',
  keywords: ['learning', 'teaching', 'online courses', 'live sessions', 'education', 'skills'],
  authors: [{ name: 'Talent Share' }],
  openGraph: {
    title: 'Talent Share - Learn from Experts, Teach What You Love',
    description: 'A vibrant marketplace where knowledge meets opportunity. Connect with real professionals, learn new skills, and share your expertise with an eager community.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent Share - Learn from Experts, Teach What You Love',
    description: 'A vibrant marketplace where knowledge meets opportunity. Connect with real professionals, learn new skills, and share your expertise with an eager community.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
