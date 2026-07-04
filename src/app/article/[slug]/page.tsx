import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard, Breadcrumbs, CategoryCover, RiskNotice, SiteFooter, SiteHeader } from "@/components/site/chrome";
import { getArticleCoverImage } from "@/lib/cover-images";
import { articleBySlug, articles, categoryBySlug, relatedArticles } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    alternates: { canonical: `/article/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const category = categoryBySlug(article.category);
  const related = relatedArticles(article.slug);
  const index = articles.findIndex((item) => item.slug === article.slug);
  const previous = articles[index - 1];
  const next = articles[index + 1];

  return (
    <>
      <SiteHeader />
      <main className="site-container py-10">
        <Breadcrumbs
          items={[
            { label: category?.name ?? "资讯", href: `/category/${article.category}` },
            { label: article.title },
          ]}
        />
        <div className="article-layout">
          <article className="article-shell">
            <div className="article-topline">
              <Link className="tag" href={`/category/${article.category}`}>
                {category?.name}
              </Link>
              {article.tags.map((tag) => (
                <span className="info-chip" key={tag}>{tag}</span>
              ))}
            </div>
            <h1>{article.title}</h1>
            <p className="article-summary">{article.summary}</p>
            <div className="meta-line">
              <span>发布时间：{article.publishedAt}</span>
              <span>更新时间：{article.updatedAt}</span>
              <span>作者 / 编辑：{article.author}</span>
              <span>{article.readTime}</span>
            </div>
            <div className="mt-7">
              <CategoryCover
                categorySlug={article.category}
                title={article.tags.slice(0, 2).join(" / ")}
                imageSrc={getArticleCoverImage(article.slug)}
              />
            </div>

            <nav className="toc lg:hidden" aria-label="正文目录">
              <h2>正文目录</h2>
              <ol>
                <li><a href="#section-1">核心信息与适用场景</a></li>
                <li><a href="#risk">风险提醒</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="section-1" className="prose-block">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <div id="risk" className="mt-8">
              <RiskNotice />
            </div>

            <section id="faq" className="faq-block">
              <h2>FAQ</h2>
              {article.faq.map((item) => (
                <details key={item.q} open>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </section>

            <section className="related-block">
              <h2>相关文章</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <ArticleCard article={item} key={item.slug} />
                ))}
              </div>
            </section>

            <nav className="post-nav" aria-label="上一篇和下一篇">
              {previous ? <Link href={`/article/${previous.slug}`}>上一篇：{previous.title}</Link> : <span />}
              {next ? <Link href={`/article/${next.slug}`}>下一篇：{next.title}</Link> : <span />}
            </nav>

            <section className="legal-note">
              <h2>免责声明</h2>
              <p>
                本文只记录资料、规则和风险提醒，不提供投注、投资、法律或财务建议。博彩活动可能造成财务损失，请确认年龄限制和所在地法律法规。
              </p>
            </section>
          </article>
          <aside className="article-side-toc hidden lg:block">
            <h2>内容目录</h2>
            <ol>
              <li><a href="#section-1">核心信息与适用场景</a></li>
              <li><a href="#risk">风险提醒</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
            <div className="mt-5 border-t border-[#E2E8F0] pt-5">
              <RiskNotice compact />
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
