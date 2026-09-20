import type { MetadataRoute } from "next";
import { homeUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: homeUrl }];
}
