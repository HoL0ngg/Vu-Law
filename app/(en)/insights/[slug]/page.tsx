import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticleView from "../../../components/InsightArticleView";
import { getArticle, getArticlesFor, hasLocale } from "../../../content/insights";
import { en } from "../../../i18n/en";
import { articleMetadata } from "../../../lib/article-metadata";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getArticlesFor("en")).map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  return article && hasLocale(article, "en") ? articleMetadata(article, "en") : {};
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article || !hasLocale(article, "en")) notFound();
  return <InsightArticleView dictionary={en} article={article} />;
}
