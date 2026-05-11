import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/context/UIContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalBottomSheet from "@/components/overlay/GlobalBottomSheet";
import FloatingWhatsApp from "@/components/cta/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { BUSINESS, SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${BUSINESS.name} | Canine Fertility Services across London, Essex & Herts`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.metaDescription,
  keywords: [
    "canine fertility",
    "dog breeding services",
    "progesterone testing",
    "ultrasound scanning",
    "semen analysis",
    "stud dog services",
    "canine reproduction",
    "dog breeding London",
    "puppy care",
    "whelping assistance",
    "microchipping",
    "chilled semen",
    "canine insemination",
    "veterinary services London",
    "dog breeding UK",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  category: "Veterinary Services",
  icons: {
    icon: [
      { url: BUSINESS.logoPath, type: "image/png" },
      { url: BUSINESS.logoPath, type: "image/png", sizes: "32x32" },
      { url: BUSINESS.logoPath, type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: BUSINESS.logoPath, type: "image/png", sizes: "180x180" },
    ],
    shortcut: BUSINESS.logoPath,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#002147" },
    { media: "(prefers-color-scheme: dark)", color: "#002147" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <UIProvider>
          <Header />
          {children}
          <Footer />
          <GlobalBottomSheet />
          <FloatingWhatsApp />
        </UIProvider>
      </body>
    </html>
  );
}
