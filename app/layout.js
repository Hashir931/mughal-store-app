import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { GoogleOAuthProvider } from "@react-oauth/google";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mughal-store-app-production.up.railway.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mughal Store | Luxury Jewelry, Attars & Handcrafted Heritage",
    template: "%s | Mughal Store",
  },
  description:
    "Discover premium royal jewelry, artisanal attars & fragrances, and handcrafted luxury accessories inspired by timeless Mughal heritage. Fast delivery across Pakistan.",
  keywords: [
    "Mughal Store",
    "jewelry Pakistan",
    "royal jewelry",
    "attar Pakistan",
    "fragrances",
    "handcrafted jewelry",
    "luxury accessories",
    "traditional jewelry",
    "Mughal heritage fashion",
  ],
  authors: [{ name: "Mughal Store" }],
  creator: "Mughal Store",
  publisher: "Mughal Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "Mughal Store",
    title: "Mughal Store | Luxury Jewelry, Attars & Handcrafted Heritage",
    description:
      "Shop royal jewelry, premium attars, and luxury handcrafted accessories inspired by Mughal royalty.",
    images: [
      {
        url: "/desktophero.jpeg",
        width: 1200,
        height: 630,
        alt: "Mughal Store - Luxury Heritage E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mughal Store | Luxury Jewelry, Attars & Handcrafted Heritage",
    description:
      "Discover royal jewelry, attars & handcrafted accessories at Mughal Store.",
    images: ["/desktophero.jpeg"],
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
    google: "googledd34fb2643c9bae2.html",
  },
};

export const viewport = {
  themeColor: "#8b6f47",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-surface-base text-content-main font-sans">
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
          <Providers>
            <Header />
            <main className="flex-1 pb-1 lg:pb-0">{children}</main>
            <Footer />
            <MobileBottomNav />
          </Providers>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
