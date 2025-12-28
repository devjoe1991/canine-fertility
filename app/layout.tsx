import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/context/UIContext";

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
  title: {
    default: "Capital Canine Fertility | Professional Canine Breeding Services in London",
    template: "%s | Capital Canine Fertility",
  },
  description: "Professional canine breeding services in London. Expert progesterone testing, ultrasound scanning, sperm analysis, stud dog services, and comprehensive fertility services. Licensed and regulated by the Royal College of Veterinary Surgeons.",
  keywords: [
    "canine fertility",
    "dog breeding services",
    "progesterone testing",
    "ultrasound scanning",
    "sperm analysis",
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
  authors: [{ name: "Capital Canine Fertility" }],
  creator: "Capital Canine Fertility",
  publisher: "Capital Canine Fertility",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://capital-canine-fertility.netlify.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://capital-canine-fertility.netlify.app",
    siteName: "Capital Canine Fertility",
    title: "Capital Canine Fertility | Professional Canine Breeding Services in London",
    description: "Professional canine breeding services in London. Expert progesterone testing, ultrasound scanning, sperm analysis, stud dog services, and comprehensive fertility services.",
    images: [
      {
        url: "/mainlogo.png",
        width: 512,
        height: 512,
        alt: "Capital Canine Fertility Logo",
        type: "image/png",
      },
      {
        url: "/overlayebluehero.png",
        width: 1200,
        height: 630,
        alt: "Capital Canine Fertility - Professional Canine Breeding Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Canine Fertility | Professional Canine Breeding Services",
    description: "Professional canine breeding services in London. Expert fertility services for your breeding needs.",
    images: [
      {
        url: "/mainlogo.png",
        alt: "Capital Canine Fertility Logo",
      },
    ],
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
  verification: {
    // Add Google Search Console verification code when available
    // google: "your-verification-code",
  },
  category: "Veterinary Services",
  icons: {
    icon: [
      { url: "/mainlogo.png", type: "image/png" },
      { url: "/mainlogo.png", type: "image/png", sizes: "32x32" },
      { url: "/mainlogo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/mainlogo.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/mainlogo.png",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <UIProvider>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
