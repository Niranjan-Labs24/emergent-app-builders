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
  metadataBase: new URL("https://lovableappbuilders.com"),
  title: "Lovable App Builders | Expert Lovable Developers for Hire",
  description:
    "We are a certified Lovable Partner agency — expert Lovable.dev builders who turn your idea into a production-ready app, faster than any traditional dev team.",
  keywords: "Lovable App Builders, Lovable Developers, Hire Lovable Experts, AI App Development, No-Code Apps",
  verification: {
    google: "dvHTOSJR4zdlxAgVgmxbghvshaT34Zee1oA0hg_3Qc0",
  },
  alternates: {
    canonical: "https://lovableappbuilders.com",
  },
  openGraph: {
    title: "Hire Lovable App Builders | Lovableappbuilders.com",
    description: "The world's leading Lovable dev team. Build faster. Ship in days.",
    url: "https://lovableappbuilders.com",
    siteName: "Lovable App Builders",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lovable App Builders Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <GoogleAnalytics gaId="G-Y493NCK899" />
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
