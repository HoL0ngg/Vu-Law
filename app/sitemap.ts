import type { MetadataRoute } from "next";
import { getArticles } from "./content/insights";
import { en } from "./i18n/en";
import { VI_ENABLED } from "./i18n/config";
import { insightPath, localePath, personPath, routes } from "./i18n/routes";
import { absoluteUrl } from "./lib/site";

/**
 * Pages worth indexing. The four legal placeholders and /experience are left out on
 * purpose: they carry `noindex` until the Client supplies their text.
 */
const indexableRoutes = [
  routes.home,
  routes.about,
  routes.expertise,
  routes.people,
  routes.insights,
  routes.careers,
  routes.contact,
] as const;

/** One sitemap entry that also announces its other-language twin. */
function entry(
  enPath: string,
  viPath: string,
  extra: { lastModified?: string; priority?: number; changeFrequency?: "weekly" | "monthly" } = {},
): MetadataRoute.Sitemap {
  const languages = { en: absoluteUrl(enPath), vi: absoluteUrl(viPath) };
  const base = { ...extra, alternates: { languages } };
  return VI_ENABLED
    ? [{ url: languages.en, ...base }, { url: languages.vi, ...base }]
    : [{ url: languages.en, ...base }];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = indexableRoutes.flatMap((path) =>
    entry(path, localePath(path, "vi"), {
      priority: path === routes.home ? 1 : 0.7,
      changeFrequency: "monthly",
    }),
  );

  const people = en.peoplePage.members.flatMap((member) =>
    entry(personPath(member.slug, "en"), personPath(member.slug, "vi"), { priority: 0.6, changeFrequency: "monthly" }),
  );

  const articles = (await getArticles()).flatMap((article) =>
    entry(insightPath(article.slug, "en"), insightPath(article.slug, "vi"), {
      lastModified: article.updatedAt ?? article.publishedAt,
      priority: 0.8,
      changeFrequency: "monthly",
    }),
  );

  return [...pages, ...people, ...articles];
}
