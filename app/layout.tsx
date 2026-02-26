import type React from "react"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "@/app/globals.css"
import ChatbaseScript from "@/components/chatbase"
import OfferBar from "@/components/OfferBar"
import NavigationProgress from "@/components/NavigationProgress"
import GlobalDotAccent from "@/components/GlobalDotAccent"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://cursorcoders.ai"),
  title: "Hire Cursor Coders | Expert Cursor AI Developers for Hire",
  description:
    "Hire expert Cursor AI developers who build your software 3× faster. Dedicated Cursor coders for startups, SaaS and enterprise. Same-week start. Free consultation.",
  keywords: "Cursor AI Developers, Cursor Coders, Hire Cursor Experts, AI Workflow Automation",
  verification: {
    google: "dvHTOSJR4zdlxAgVgmxbghvshaT34Zee1oA0hg_3Qc0",
  },
  alternates: {
    canonical: "https://cursorcoders.ai",
  },
  openGraph: {
    title: "Hire Cursor AI Developers | CursorCoders.ai",
    description: "The world's leading Cursor AI dev team. Build 3× faster. Same-week start.",
    url: "https://cursorcoders.ai",
    siteName: "Cursor Coders",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cursor Coders Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <GoogleAnalytics gaId="G-697VHW2SEJ" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>
          <GlobalDotAccent />
          <Header />
          {/* <OfferBar /> */}
          <main className="px-0 py-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

        <ChatbaseScript />

        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="875d1f20-cdec-45f8-b918-0665e17654b0"
          type="text/javascript"
          async
        />
      </body>
    </html>
  )
}
