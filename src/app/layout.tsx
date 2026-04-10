import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RESTAURANT } from "@/lib/constants";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${RESTAURANT.name} | 焼き鳥・鳥料理`,
    template: `%s | ${RESTAURANT.name}`,
  },
  description: RESTAURANT.description,
  metadataBase: new URL("https://kimama-yakitori.jp"),
  keywords: ["焼き鳥", "鳥料理", "きまま", "備長炭", "和食", "居酒屋"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: RESTAURANT.name,
    title: `${RESTAURANT.name} | 焼き鳥・鳥料理`,
    description: RESTAURANT.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: RESTAURANT.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESTAURANT.name} | 焼き鳥・鳥料理`,
    description: RESTAURANT.description,
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT.name,
    description: RESTAURANT.description,
    telephone: RESTAURANT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT.address.street,
      addressLocality: RESTAURANT.address.city,
      addressRegion: RESTAURANT.address.prefecture,
      postalCode: RESTAURANT.address.postal,
      addressCountry: "JP",
    },
    servesCuisine: ["焼き鳥", "鳥料理", "和食"],
    priceRange: "¥¥",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:30",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "11:30",
        closes: "22:30",
      },
    ],
  };

  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
