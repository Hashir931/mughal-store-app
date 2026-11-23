const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mughal-store-app-production.up.railway.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/account",
          "/account/*",
          "/checkout",
          "/order-success",
          "/auth/*",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
