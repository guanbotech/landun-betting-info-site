import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArticleCard,
  Breadcrumbs,
  CategoryCover,
  PlatformCard,
  SectionTitle,
  Sidebar,
  SiteFooter,
  SiteHeader,
  StatCard,
} from "@/components/site/chrome";
import { GameSimulator } from "@/components/site/game-simulator";
import { articles, articlesByCategory, categories, categoryBySlug, categoryModules, platforms } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/category/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  const categoryArticles = articlesByCategory(slug);
  const list = categoryArticles.length ? categoryArticles : articles.slice(0, 4);
  const featured = list[0];
  const latestArticles = [...list, ...articles.filter((article) => article.category !== slug)].slice(0, 4);
  const modules = categoryModules[slug] ?? [
    { title: "资料说明", description: "看平台资料、规则页面、入口状态和更新时间。" },
    { title: "风险核对", description: "条款、地区限制、费用、账号安全，先看清楚。" },
    { title: "延伸阅读", description: "相关文章放在下面，方便继续查规则和提醒。" },
  ];
  const relatedPlatforms = platforms.filter((platform) =>
    platform.supported.some((item) => category.name.includes(item) || platform.type.includes(category.name.slice(0, 2))),
  );
  const platformList = relatedPlatforms.length ? relatedPlatforms.slice(0, 2) : platforms.slice(0, 2);
  const isPoker = slug === "poker";
  const sidebarPlatforms = platformList
    .concat(platforms)
    .filter((platform, index, list) => list.findIndex((item) => item.slug === platform.slug) === index);
  const guideTitleBySlug: Record<string, string> = {
    "esports-betting": "电竞延伸阅读",
    "sports-betting": "体育投注规则阅读",
    poker: "德州扑克资料阅读",
    "online-games": "棋牌游戏规则阅读",
    "risk-warning": "风险识别专题",
    "platform-reviews": "平台资料阅读",
    rankings: "榜单说明阅读",
  };

  return (
    <>
      <SiteHeader />
      <main className="site-container py-10">
        <Breadcrumbs items={[{ label: category.name }]} />
        <section className="archive-hero">
          <div className="archive-hero-inner">
            <div>
              <p className="eyebrow">栏目 / {category.name}</p>
              <h1>{category.name}</h1>
              <p>{category.description}</p>
              <div className="channel-stats">
                <StatCard label="资料整理" value={list.length} />
                <StatCard label="风险提醒" value={modules.filter((item) => item.title.includes("风险")).length || 1} />
                <StatCard label="最新更新" value={featured.updatedAt} />
              </div>
            </div>
            <CategoryCover categorySlug={category.slug} title={`${category.name}重点专题`} compact />
          </div>
        </section>

        {isPoker ? (
          <section className="poker-sim-section online-game-focus mt-8">
            <GameSimulator slug="poker" />
          </section>
        ) : null}

        <section className="mt-8">
            <SectionTitle eyebrow="栏目重点" title={`${category.name}先看这些`} />
          <div className="module-grid">
            {modules.map((item) => (
              <article className="module-card" key={item.title}>
                <span>{item.title}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="min-w-0">
            <SectionTitle eyebrow="重点文章" title={`${category.name}相关内容`} />
            <ArticleCard article={featured} featured />

            <section className="mt-10">
              <SectionTitle eyebrow="最新文章" title={`${category.name}最近更新`} />
              <div className="category-news-list">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle eyebrow="平台资料" title={`${category.name}相关资料`} />
              <div className="grid gap-4 md:grid-cols-2">
                {platformList.map((platform) => (
                  <PlatformCard key={platform.slug} platform={platform} />
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle eyebrow="延伸阅读" title="相关指南与风险内容" />
              <div className="grid gap-4 md:grid-cols-2">
                {articles
                  .filter((article) => article.category !== slug)
                  .slice(0, 4)
                  .map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
              </div>
            </section>

            <nav className="pagination" aria-label="分页">
              <span className="is-current">1</span>
              <span>2</span>
              <span>3</span>
              <span>下一页</span>
            </nav>
          </div>
          <Sidebar articleList={latestArticles} guideTitle={guideTitleBySlug[slug] ?? "延伸阅读"} platformList={sidebarPlatforms} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
