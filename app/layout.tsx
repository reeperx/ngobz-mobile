import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SEO_CONFIG } from "@/lib/seo-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.title,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.siteName, url: SEO_CONFIG.siteUrl }],
  creator: SEO_CONFIG.siteName,
  publisher: SEO_CONFIG.siteName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [
      {
        url: "/images/client/client_logo.jpg",
        width: 800,
        height: 600,
        alt: "NGOBZ Mobile Event Rentals Pretoria Logo",
      },
      {
        url: "/images/hero/mobile-cooler-trailer.jpg",
        width: 1200,
        height: 800,
        alt: "Heavy-Duty Mobile Cooler Trailer Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: ["/images/hero/mobile-cooler-trailer.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Business & Industrial > Event Services > Equipment Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Pretoria, Gauteng" />
        <meta
          name="geo.position"
          content={`${SEO_CONFIG.location.latitude};${SEO_CONFIG.location.longitude}`}
        />
        <meta
          name="ICBM"
          content={`${SEO_CONFIG.location.latitude}, ${SEO_CONFIG.location.longitude}`}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
