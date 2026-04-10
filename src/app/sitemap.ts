import { MetadataRoute } from "next";

const BASE_URL = "https://kimama-yakitori.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                    lastModified: new Date(), changeFrequency: "monthly",  priority: 1.0 },
    { url: `${BASE_URL}/menu`,          lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/gallery`,       lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/access`,        lastModified: new Date(), changeFrequency: "yearly",   priority: 0.8 },
    { url: `${BASE_URL}/reservation`,   lastModified: new Date(), changeFrequency: "yearly",   priority: 0.9 },
    { url: `${BASE_URL}/news`,          lastModified: new Date(), changeFrequency: "weekly",   priority: 0.6 },
  ];
}
