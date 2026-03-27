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
  metadataBase: new URL("https://emergentappbuilders.com"),
  title: "Hire an Emergent App Builder | Expert Emergent.sh Developers for Hire",
  description:
    "Expert Emergent.sh agency. We build web + mobile apps (iOS & Android) using Emergent's 5-agent AI system — 20× faster than traditional dev. Free scoping call. Same-week start.",
  keywords: "Emergent App Builders, Emergent.sh Developers, Hire Emergent Experts, AI App Development, AI Agents, Mobile App Development",
  verification: {
    google: "dvHTOSJR4zdlxAgVgmxbghvshaT34Zee1oA0hg_3Qc0",
  },
  alternates: {
    canonical: "https://emergentappbuilders.com",
  },
  openGraph: {
    title: "Emergent App Builders | Expert Emergent.sh Agency",
    description: "Web + mobile apps built with Emergent's AI agents. App Store publishing included. Free 15-min call.",
    url: "https://emergentappbuilders.com",
    siteName: "Emergent App Builders",
    images: [
      {
        url: "/emergent-og-image.png",
        width: 1200,
        height: 630,
        alt: "Emergent App Builders - Expert AI Agency",
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
  robots: {
    index: true,
    follow: true,
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://emergentappbuilders.com/#organization",
      "name": "Emergent App Builders",
      "url": "https://emergentappbuilders.com",
      "logo": "https://emergentappbuilders.com/icon.png",
      "sameAs": [
        "https://linkedin.com/company/emergent-app-builders",
        "https://x.com/emergentbuilders"
      ]
    },
    {
      "@type": "Service",
      "name": "Expert Emergent.sh App Development",
      "provider": { "@id": "https://emergentappbuilders.com/#organization" },
      "description": "We build web and mobile apps using Emergent's AI-powered multi-agent system."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Emergent.sh and what is an Emergent app builder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emergent.sh is an AI-powered app development platform that builds full-stack web and mobile applications from plain language descriptions. The platform uses a multi-stage build pipeline — covering architecture, design, quality assurance, deployment, and live monitoring — to generate production-ready code. An Emergent app builder is an expert developer who knows how to use Emergent.sh professionally: how to scope projects correctly, structure build instructions to get clean results, handle backend integrations, configure authentication, and manage App Store publishing. Emergent App Builders is a specialist agency providing these expert services — we use Emergent.sh as our primary development tool."
          }
        },
        {
          "@type": "Question",
          "name": "Can Emergent really build mobile apps for the App Store and Play Store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — and this is one of Emergent's key differentiators. Emergent's Mobile Agent builds native iOS and Android apps using React Native and Expo, which can be published directly to Apple's App Store and Google's Play Store. Our team handles the full submission process — from building the app to managing App Store certificates and publishing."
          }
        },
        {
          "@type": "Question",
          "name": "How is hiring an Emergent builder different from using Emergent myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emergent.sh is powerful, but getting consistent production-quality results takes experience. Without knowing how to scope a project correctly inside Emergent, users burn through credits, hit dead ends, and end up with apps that look fine but break under real usage. Our developers have built dozens of apps on the platform — we know what works, what to avoid, and how to structure builds that produce clean, scalable, secure code rather than a fragile prototype."
          }
        },
        {
          "@type": "Question",
          "name": "Does Emergent's monitoring really auto-fix live apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Emergent.sh includes a built-in Ops stage that monitors live applications and can automatically detect and patch issues if something crashes or underperforms after deployment. As part of our service, we configure and enable this monitoring layer on all production builds so your app keeps running smoothly without you needing to manage it manually."
          }
        },
        {
          "@type": "Question",
          "name": "Do I own the code that Emergent builds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — 100%. Emergent supports GitHub export, and all source code, database schema, and assets belong to you. We deliver the full repository with documentation on project completion. NDAs are signed before any work begins, and you retain complete intellectual property ownership with no strings attached and no platform lock-in."
          }
        },
        {
          "@type": "Question",
          "name": "What types of apps can you build with Emergent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using Emergent.sh as our build platform, we can deliver web apps, native mobile apps (iOS + Android), SaaS platforms, internal tools, admin dashboards, e-commerce stores, AI-powered products, CRMs, ERPs, logistics tools, booking systems, and marketplace apps. Emergent supports complex logic, third-party API integrations (Stripe, Shopify, OpenAI, and more), authentication, and enterprise-grade security."
          }
        }
      ]
    },
    {
      "@type": "MobileApplication",
      "name": "Emergent App Builders",
      "operatingSystem": "iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description": "Web + mobile apps built with Emergent's AI agents. App Store publishing included."
    },
    {
      "@type": "SoftwareApplication",
      "name": "Emergent App Builder",
      "operatingSystem": "Web",
      "applicationCategory": "DeveloperApplication",
      "description": "AI-powered app development platform used by Emergent App Builders."
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
