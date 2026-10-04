import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/menu", priority: 0.9 },
  { path: "/brunch-grand-baie", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
  { path: "/galettes-sans-gluten-grand-baie", priority: 0.8 },
  { path: "/langouste-grand-baie", priority: 0.8 },
  { path: "/galerie", priority: 0.7 },
  { path: "/en", priority: 0.9 },
  { path: "/en/brunch-grand-baie", priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: `${SITE_URL}${p.path === "/" ? "/" : p.path}`, priority: p.priority }))
}
