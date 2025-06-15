import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const title = "OnlyCast - Social Token Revolution";
const imageUrl = `/banner.png`; // Default image URL for Open Graph and Twitter cards
const description =
  "An experiment in helping users monetize all digital assets by ’social token’";
export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    images: [
      {
        url: imageUrl,
        width: 1536,
        height: 1024,
        alt: "image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
