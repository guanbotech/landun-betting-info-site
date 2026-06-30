import type { MetadataRoute } from "next";
import { articles, categories, platforms, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-30");
  const routes = [
    "",
    "/rankings",
    "/about",
    "/disclaimer",
    ...categories.map((category) => `/category/${category.slug}`),
    ...articles.map((article) => `/article/${article.slug}`),
    ...platforms.map((platform) => `/platform/${platform.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/article") ? 0.8 : 0.7,
  }));
}
