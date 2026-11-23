import { getProducts, getCategories } from "@/lib/api";
import { getProductSlug } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mughal-store-app-production.up.railway.app";

export default async function sitemap() {
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/shop/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  let categoryPages = [];
  try {
    const categoriesRes = await getCategories();
    const categories = categoriesRes?.data || categoriesRes?.categories || [];
    categoryPages = categories
      .filter((cat) => cat.name || cat.slug)
      .map((cat) => {
        const categorySlug = encodeURIComponent(cat.slug || cat.name);
        return {
          url: `${siteUrl}/shop/categories/${categorySlug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        };
      });
  } catch {
    categoryPages = [];
  }

  let productPages = [];
  try {
    const productsRes = await getProducts({ limit: 100 });
    const products = productsRes?.data || productsRes?.products || [];
    productPages = products.map((product) => {
      const slug = getProductSlug(product);
      return {
        url: `${siteUrl}/shop/products/${encodeURIComponent(slug)}`,
        lastModified: product.updatedAt ? new Date(product.updatedAt) : new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      };
    });
  } catch {
    productPages = [];
  }

  return [...staticPages, ...categoryPages, ...productPages];
}
