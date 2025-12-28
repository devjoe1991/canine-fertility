import type { Metadata } from "next";
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
  title: "Capital Canine Fertility | Professional Canine Breeding Services",
  description: "Professional Canine Breeding Services in the Heart of the Capital. Expert progesterone testing, ultrasound scanning, and comprehensive fertility services.",
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
