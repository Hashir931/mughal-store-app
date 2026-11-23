const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mughal-store-app-production.up.railway.app";

export default function manifest() {
  return {
    name: "Mughal Store | Luxury Jewelry & Accessories",
    short_name: "Mughal Store",
    description: "Shop premium royal jewelry, attars and handcrafted accessories at Mughal Store.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#8b6f47",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
