import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waverley-circle.vercel.app"),
  title:
    "Waverley Apartments | Premium Apartments in Waverley, Pretoria | Invicta Developments",
  description:
    "Discover Waverley Apartments — modern 2 & 3 bedroom apartments with 2 bathrooms in Waverley, Pretoria. Register your interest today. By Invicta Developments.",
  keywords:
    "Waverley apartments, Pretoria apartments, 2 bedroom Waverley, 3 bedroom apartments Pretoria, Invicta Developments, new development Pretoria, Waverley Apartments",
  openGraph: {
    title: "Waverley Apartments | Premium Apartments in Waverley, Pretoria",
    description:
      "Modern 2 & 3 bedroom apartments in Waverley, Pretoria by Invicta Developments.",
    type: "website",
    locale: "en_ZA",
    url: "https://waverley-circle.vercel.app",
    images: [{ url: "/media/Image 1.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              name: "Waverley Apartments",
              description:
                "Premium 2 & 3 bedroom apartments in Waverley, Pretoria",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Waverley",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              url: "https://waverley-circle.vercel.app",
              developer: {
                "@type": "Organization",
                name: "Invicta Developments",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
