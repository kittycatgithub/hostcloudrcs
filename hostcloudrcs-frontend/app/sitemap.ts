import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', 'about', 'why-choose-us', 'our-services', 'contact-us'].map((route) => ({ url: `/${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' : 'monthly', priority: route === '' ? 1 : 0.8 }));
}
