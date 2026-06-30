import type { Metadata } from "next";
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
  const modules = categoryModules[slug] ?? [
    { title: "资料说明", description: "整理平台资料、规则公开度、入口状态和更新时间。" },
    { title: "风险核对", description: "访问前先核对条款、地区限制、费用规则和账号安全。" },
    { title: "延伸阅读", description: "通过相关文章了解更多规则说明和风险提醒。" },
  ];
  const relatedPlatforms = platforms.filter((platform) =>
    platform.supported.some((item) => category.name.includes(item) || platform.type.includes(category.name.slice(0, 2))),
  );
  const platformList = relatedPlatforms.length ? relatedPlatforms.slice(0, 2) : platforms.slice(0, 2);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: category.name }]} />
        <section className="archive-hero">
          <div>
            <p className="eyebrow">{category.name}</p>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </div>
          <CategoryCover categorySlug={category.slug} title={`${category.name}资料专题`} compact />
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_330px]">
          <div>
            <section className="module-grid" aria-label={`${category.name}栏目模块`}>
              {modules.map((item) => (
                <article className="module-card" key={item.title}>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </article>
              ))}
            </section>

            <SectionTitle eyebrow="重点文章" title={`${category.name}重点内容`} />
            <div className="mt-5">
              <ArticleCard article={featured} featured />
            </div>

            <section className="mt-10">
              <SectionTitle eyebrow="平台资料" title={`${category.name}相关平台资料`} />
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {platformList.map((platform) => (
                  <PlatformCard key={platform.slug} platform={platform} />
                ))}
              </div>
            </section>

            <SectionTitle eyebrow="最新文章列表" title="最新文章" />
            <div className="mt-5 space-y-5">
              {list.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            <section className="mt-10">
              <SectionTitle eyebrow="相关文章推荐" title="延伸阅读" />
              <div className="mt-5 grid gap-4 md:grid-cols-2">
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
          <div className="space-y-6">
            <Sidebar />
            <RiskNotice compact />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
