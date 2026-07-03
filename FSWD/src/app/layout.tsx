import type { Metadata } from "next";
import "./globals.css";
import { WEBINAR_CONFIG, SITE_URL } from "@/config/webinar";

const { meta, brand, details } = WEBINAR_CONFIG;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  applicationName: brand.name,
  authors: [{ name: brand.org, url: brand.orgUrl }],
  creator: brand.org,
  publisher: brand.org,
  category: "education",
  icons: {
    icon: brand.logo,
    apple: brand.logo,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: brand.org,
    title: meta.title,
    description: meta.description,
    url: "/",
    locale: "en_IN",
    // opengraph-image.tsx supplies the image automatically
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  other: {
    // surfaced by some crawlers / previews as event context
    "event:start_time": details.countdownDateStr,
    "event:end_time": details.endDateStr,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
