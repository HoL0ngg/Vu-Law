import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticleView from "../../../components/InsightArticleView";
import { getArticle, insightArticles } from "../../../content/insights";
import { en } from "../../../i18n/en";
import { articleMetadata } from "../../../lib/article-metadata";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? articleMetadata(article, "en") : {};
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <InsightArticleView dictionary={en} article={article} />;
}
