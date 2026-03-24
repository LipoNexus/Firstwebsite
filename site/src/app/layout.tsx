import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liponexus.com"),
  title: {
    default: "LipoNexus | Blood Test for Early Detection of Fatty Liver Disease",
    template: "%s | LipoNexus",
  },
  description:
    "LipoNexus is developing a highly accurate non-invasive blood test for early detection and assessment of Fatty Liver Disease through inflammatory lipid biomarkers.",
  keywords: [
    "fatty liver disease",
    "NAFLD",
    "MASLD",
    "blood test",
    "biomarkers",
    "diagnostics",
    "non-invasive",
    "lipid biomarkers",
    "LipoNexus",
    "San Diego biotech",
  ],
  authors: [{ name: "LipoNexus" }],
  creator: "LipoNexus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://liponexus.com",
    siteName: "LipoNexus",
    title: "LipoNexus | Blood Test for Early Detection of Fatty Liver Disease",
    description:
      "Developing a highly accurate non-invasive blood test for early detection and assessment of Fatty Liver Disease through inflammatory lipid biomarkers.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "LipoNexus – Blood Test for Early Detection of Fatty Liver Disease",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LipoNexus | Blood Test for Early Detection of Fatty Liver Disease",
    description:
      "Non-invasive blood test for early detection of Fatty Liver Disease.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LipoNexus",
  url: "https://liponexus.com",
  logo: "https://liponexus.com/images/logo.svg",
  description:
    "Developing a highly accurate non-invasive blood test for early detection and assessment of Fatty Liver Disease through inflammatory lipid biomarkers.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "partnering@liponexus.com",
    contactType: "partnerships",
  },
  sameAs: ["https://www.linkedin.com/company/liponexus"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Open+Sans:wght@300;400;700&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
