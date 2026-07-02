import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArticleCard,
  Breadcrumbs,
  CategoryCover,
  PlatformCard,
  RiskNotice,
  SectionTitle,
  Sidebar,
  SiteFooter,
  SiteHeader,
} from "@/components/site/chrome";
import { articles, platforms, topicBySlug, topicPages, topicsByParent } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topicPages.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) return {};

  return {
    title: topic.title,
    description: topic.description,
    alternates: { canonical: `/topic/${topic.slug}` },
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) notFound();

  const parentArticles = articles.filter((article) => article.category === topic.parentSlug);
  const articleList = parentArticles.length ? parentArticles : articles.slice(0, 4);
  const relatedTopics = topicsByParent(topic.parentSlug).filter((item) => item.slug !== topic.slug).slice(0, 6);
  const platformList = platforms
    .filter((platform) => platform.supported.some((item) => topic.parentName.includes(item) || topic.title.includes(item)))
    .concat(platforms)
    .filter((platform, index, list) => list.findIndex((item) => item.slug === platform.slug) === index)
    .slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main className="site-container py-10">
        <Breadcrumbs
          items={[
            { label: topic.parentName, href: `/category/${topic.parentSlug}` },
            { label: topic.title },
          ]}
        />

        <section className="topic-hero">
          <div>
            <p className="eyebrow">专题 / {topic.parentName}</p>
            <h1>{topic.title}</h1>
            <p>{topic.description}</p>
            <div className="topic-pill-row">
              <span>资料整理</span>
              <span>规则说明</span>
              <span>风险提醒</span>
            </div>
          </div>
          <CategoryCover categorySlug={topic.parentSlug} title={`${topic.title}资料专题`} compact />
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="min-w-0">
            <section>
              <SectionTitle eyebrow="专题重点" title={`${topic.title}访问前核对`} />
              <div className="topic-grid">
                {topic.highlights.map((item) => (
                  <article className="module-card" key={item}>
                    <span>{item}</span>
                    <p>围绕 {topic.title} 的资料、规则、时间和平台信息建立访问前核对清单。</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle eyebrow="风险提醒" title={`${topic.title}常见风险`} />
              <div className="topic-risk-list">
                {topic.risks.map((item) => (
                  <div key={item}>
                    <strong>{item}</strong>
                    <p>阅读资料前请确认信息来源、更新时间、平台规则和所在地法律法规。</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle eyebrow="相关文章" title={`${topic.parentName}延伸阅读`} />
              <div className="grid gap-5 md:grid-cols-2">
                {articleList.slice(0, 4).map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle eyebrow="平台资料" title={`${topic.title}相关平台资料`} />
              <div className="grid gap-4 md:grid-cols-3">
                {platformList.map((platform) => (
                  <PlatformCard key={platform.slug} platform={platform} />
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle eyebrow="同类专题" title={`${topic.parentName}更多专题`} />
              <div className="topic-link-grid">
                {relatedTopics.map((item) => (
                  <Link href={`/topic/${item.slug}`} key={item.slug}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-10">
              <RiskNotice />
            </div>
          </div>
          <Sidebar />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
