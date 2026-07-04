import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  CategoryCover,
  SectionTitle,
  SiteFooter,
  SiteHeader,
} from "@/components/site/chrome";
import { GameSimulator } from "@/components/site/game-simulator";
import { getTopicCoverImage } from "@/lib/cover-images";
import { topicBySlug, topicPages, topicsByParent } from "@/lib/site-data";

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

  const isOnlineGame = topic.parentSlug === "online-games";
  const isTopicCardOnly = topic.parentSlug === "sports-betting" || topic.parentSlug === "esports-betting";
  const siblingTopics = topicsByParent(topic.parentSlug);

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
            {!isOnlineGame && !isTopicCardOnly ? (
              <div className="topic-pill-row">
                <span>资料来源</span>
                <span>规则条款</span>
                <span>风险点</span>
              </div>
            ) : null}
          </div>
          <CategoryCover
            categorySlug={topic.parentSlug}
            title={`${topic.title}资料`}
            compact
            imageSrc={getTopicCoverImage(topic.slug)}
          />
        </section>

        {isOnlineGame ? (
          <div className="online-game-focus mt-8">
            <GameSimulator slug={topic.slug} />
          </div>
        ) : null}

        {isTopicCardOnly ? (
          <section className="clean-topic-board mt-8">
            <SectionTitle eyebrow="专题卡片" title={`${topic.parentName}栏目`} />
            <div className="topic-card-wall">
              {siblingTopics.map((item) => (
                <Link className="topic-entry-card" href={`/topic/${item.slug}`} key={item.slug}>
                  <CategoryCover
                    categorySlug={item.parentSlug}
                    title=""
                    compact
                    imageSrc={getTopicCoverImage(item.slug)}
                  />
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
