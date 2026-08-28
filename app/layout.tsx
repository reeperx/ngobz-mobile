import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ngobzmobile.co.za"),
  title: "NGOBZ Mobile | Mobile Coolers, Warmers & VIP Mobile Toilets Pretoria",
  description:
    "Professional mobile equipment hire in Pretoria, Soshanguve, Mabopane & Hammanskraal. Rents out heavy-duty mobile coolers, mobile food warmers with chafing dishes, and luxury VIP mobile toilets.",
  keywords: [
    "NGOBZ mobile",
    "mobile cooler rental pretoria",
    "mobile warmer rental",
    "VIP mobile toilets soshanguve",
    "event rentals mabopane",
    "chafing dish hire pretoria",
    "mobile fridge hire hammanskraal",
  ],
  openGraph: {
    title: "NGOBZ Mobile | Mobile Coolers, Warmers & VIP Restrooms",
    description:
      "Reliable event rentals delivered across Pretoria. Mobile cold storage, food warming units, and VIP mobile toilets.",
    images: ["/images/client/client_logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
