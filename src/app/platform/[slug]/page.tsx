import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard, Breadcrumbs, PlatformCard, RiskNotice, SiteFooter, SiteHeader } from "@/components/site/chrome";
import { articles, platformBySlug, platforms } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const platform = platformBySlug(slug);
  if (!platform) return {};

  return {
    title: `${platform.name}平台资料`,
    description: `${platform.name}的平台类型、支持内容、更新时间、入口状态、注意事项和常见风险。`,
    alternates: { canonical: `/platform/${platform.slug}` },
  };
}

export default async function PlatformPage({ params }: Props) {
  const { slug } = await params;
  const platform = platformBySlug(slug);
  if (!platform) notFound();
  const sameType = platforms.filter((item) => item.slug !== platform.slug && item.type === platform.type);
  const recommendations = sameType.length ? sameType : platforms.filter((item) => item.slug !== platform.slug).slice(0, 2);
  const completeness = platform.basics.find((item) => item.label === "资料情况" || item.label === "资料完整度")?.value ?? "待核对";
  const openness = platform.basics.find((item) => item.label === "规则说明" || item.label === "规则公开度")?.value ?? "待核对";

  return (
    <>
      <SiteHeader />
      <main className="site-container py-10">
        <Breadcrumbs items={[{ label: "平台资料榜", href: "/rankings" }, { label: platform.name }]} />
        <article className="platform-detail">
          <header className="platform-header">
            <div className="platform-identity">
              <div className="platform-logo xl">{platform.name.slice(0, 1)}</div>
              <div>
                <p className="eyebrow">{platform.type}</p>
                <h1>{platform.name}</h1>
                <div className="mt-4 flex flex-wrap gap-2">
                  {platform.supported.map((item) => (
                    <span className="info-chip" key={item}>{item}</span>
                  ))}
                  <span className={`risk-pill risk-${platform.risk}`}>风险{platform.risk}</span>
                  <span className="info-chip">更新时间：{platform.updatedAt}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link className="btn-primary" href="#review">查看资料</Link>
                  <Link className="btn-secondary" href="#review">看概况</Link>
                  <Link className="btn-secondary" href="#risk">风险提醒</Link>
                  <Link className="btn-secondary" href="#entry-check">核对入口</Link>
                </div>
              </div>
            </div>
            <aside className="platform-hero-panel">
              <dl className="platform-metrics">
                <div>
                  <dt>资料情况</dt>
                  <dd>{completeness}</dd>
                </div>
                <div>
                  <dt>规则说明</dt>
                  <dd>{openness}</dd>
                </div>
                <div>
                  <dt>入口状态</dt>
                  <dd>需自行核对</dd>
                </div>
              </dl>
              <p className="platform-overview">{platform.overview}</p>
            </aside>
          </header>

          <section className="detail-grid">
            {platform.basics.map((item) => (
              <div className="fact-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </section>

          <section className="content-panel">
            <h2>基础资料表格</h2>
            <div className="table-wrap">
              <table>
                <tbody>
                  <tr><th>平台名称</th><td>{platform.name}</td></tr>
                  <tr><th>平台类型</th><td>{platform.type}</td></tr>
                  <tr><th>支持内容</th><td>{platform.supported.join("、")}</td></tr>
                  <tr><th>资料情况</th><td>{completeness}</td></tr>
                  <tr><th>风险等级</th><td>风险{platform.risk}</td></tr>
                  <tr><th>更新时间</th><td>{platform.updatedAt}</td></tr>
                  <tr><th>入口说明</th><td>访问前请核对域名、证书、公告来源和客服渠道。</td></tr>
                  <tr><th>注意事项</th><td>重点查看地区限制、费用、活动条款、提款条件和争议处理渠道。</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="review" className="content-panel">
            <h2>平台概况</h2>
            <p>{platform.overview}</p>
          </section>

          <section id="entry-check" className="content-panel">
            <h2>入口说明</h2>
            <p>核对入口时请确认域名、证书、公开公告、客服渠道和最后更新时间。本站只记录看到的资料，入口仍要自己确认。</p>
          </section>

          <div className="grid gap-5 lg:grid-cols-3">
            <section className="content-panel">
              <h2>使用前注意事项</h2>
              <ul>{platform.cautions.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section className="content-panel">
              <h2>常见风险</h2>
              <ul>{platform.risks.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section className="content-panel">
              <h2>需要留意的地方</h2>
              <ul>{platform.strengths.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>

          <section className="faq-block">
            <h2>FAQ</h2>
            <details open>
              <summary>平台资料页是不是使用建议？</summary>
              <p>不是。这里只写公开资料、规则和风险点，不建议你直接使用任何平台。</p>
            </details>
            <details open>
              <summary>风险等级如何理解？</summary>
              <p>风险等级主要看规则是否清楚、入口是否稳定、有没有公开争议，以及资料多久没更新。</p>
            </details>
          </section>

          <div id="risk" className="mt-8">
            <RiskNotice />
          </div>

          <section className="related-block">
            <h2>同类平台资料</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {recommendations.map((item) => (
                <PlatformCard key={item.slug} platform={item} />
              ))}
            </div>
          </section>

          <section className="related-block">
            <h2>相关文章</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>

          <section className="legal-note">
            <h2>免责声明</h2>
            <p>
              本页只记录平台公开资料和风险提醒，不代表平台官方说法，也不建议你直接使用。访问前请自己核对所在地法律、平台条款、费用规则和账户限制。
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
