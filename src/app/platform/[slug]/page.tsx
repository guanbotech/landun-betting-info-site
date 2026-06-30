import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArticleCard,
  Breadcrumbs,
  PlatformCard,
  RiskNotice,
  SiteFooter,
  SiteHeader,
} from "@/components/site/chrome";
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
    description: `${platform.name}的平台类型、支持内容、资料更新时间、风险等级、基础资料、注意事项、FAQ 与免责声明。`,
    alternates: { canonical: `/platform/${platform.slug}` },
  };
}

export default async function PlatformPage({ params }: Props) {
  const { slug } = await params;
  const platform = platformBySlug(slug);
  if (!platform) notFound();
  const sameType = platforms.filter((item) => item.slug !== platform.slug && item.type === platform.type);
  const recommendations = sameType.length ? sameType : platforms.filter((item) => item.slug !== platform.slug).slice(0, 2);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "平台资料库", href: "/rankings" }, { label: platform.name }]} />
        <article className="platform-detail">
          <header className="platform-header">
            <div className="platform-logo xl">{platform.name.slice(0, 1)}</div>
            <div>
              <p className="eyebrow">{platform.type}</p>
              <h1>{platform.name}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {platform.supported.map((item) => (
                  <span className="info-chip" key={item}>
                    {item}
                  </span>
                ))}
                <span className={`risk-pill risk-${platform.risk}`}>风险{platform.risk}</span>
                <span className="info-chip">资料更新时间：{platform.updatedAt}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link className="btn-primary" href="#review">查看资料</Link>
                <Link className="btn-secondary" href="#review">阅读评测</Link>
                <Link className="btn-secondary" href="#risk">风险提醒</Link>
                <Link className="btn-secondary" href="#entry-check">核对入口</Link>
              </div>
            </div>
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
                  <tr>
                    <th>平台名称</th>
                    <td>{platform.name}</td>
                  </tr>
                  <tr>
                    <th>平台类型</th>
                    <td>{platform.type}</td>
                  </tr>
                  <tr>
                    <th>支持内容</th>
                    <td>{platform.supported.join("、")}</td>
                  </tr>
                  <tr>
                    <th>风险等级</th>
                    <td>风险{platform.risk}</td>
                  </tr>
                  {platform.basics.map((item) => (
                    <tr key={item.label}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                  <tr>
                    <th>资料更新时间</th>
                    <td>{platform.updatedAt}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="review" className="content-panel">
            <h2>平台概况</h2>
            <p>{platform.overview}</p>
          </section>

          <section id="entry-check" className="content-panel">
            <h2>入口核对说明</h2>
            <p>
              核对入口时请确认域名、证书、公开公告、客服渠道和最后更新时间。本站资料不代表平台官方声明，也不应替代读者自己的核验。
            </p>
          </section>

          <div className="grid gap-5 lg:grid-cols-3">
            <section className="content-panel">
              <h2>使用前注意事项</h2>
              <ul>
                {platform.cautions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="content-panel">
              <h2>常见风险</h2>
              <ul>
                {platform.risks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="content-panel">
              <h2>优点整理</h2>
              <ul>
                {platform.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="content-panel">
            <h2>需要留意的地方</h2>
            <p>
              资料页只整理公开信息和编辑字段，不承诺平台结果。请重点查看地区限制、账户限制、费用、活动条款、提款条件和争议处理渠道。
            </p>
          </section>

          <section className="faq-block">
            <h2>FAQ</h2>
            <details open>
              <summary>平台资料页是否表示推荐？</summary>
              <p>不是。资料页仅用于信息整理、风险提醒和规则核对，不构成使用建议。</p>
            </details>
            <details open>
              <summary>风险等级如何理解？</summary>
              <p>风险等级来自资料完整度、规则清晰度、入口状态和编辑观察等字段，后续可按真实数据调整。</p>
            </details>
          </section>

          <div id="risk">
            <RiskNotice />
          </div>

          <section className="related-block">
            <h2>同类平台推荐</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((item) => (
                <PlatformCard key={item.slug} platform={item} />
              ))}
            </div>
          </section>

          <section className="related-block">
            <h2>相关文章</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>

          <section className="legal-note">
            <h2>免责声明</h2>
            <p>
              本页仅整理平台公开资料、编辑字段与风险提醒，不代表平台官方声明，不构成使用建议或任何形式背书。访问前请自行核对所在地法律法规、平台条款、费用规则和账户限制。
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
