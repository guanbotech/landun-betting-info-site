import Link from "next/link";
import { AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import {
  ArticleCard,
  CategoryIcon,
  OfferRules,
  PlatformCard,
  RankingTeaser,
  RiskNotice,
  SectionTitle,
  SiteFooter,
  SiteHeader,
} from "@/components/site/chrome";
import { articles, categories, platforms } from "@/lib/site-data";

export default function Home() {
  const featured = articles[0];
  const latest = articles.slice(1, 7);
  const keyCategories = categories.slice(0, 4);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-media">
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <div className="hero-badges" aria-label="站点标签">
                <span>18+ 风险提醒</span>
                <span>平台资料整理</span>
                <span>入口核对指南</span>
              </div>
              <h1>亚洲博彩资讯与平台风险资料库</h1>
              <p>
                聚合电竞博彩、体育博彩、德州扑克、棋牌游戏、平台资料、风险提醒与入口核对信息，帮助用户在访问前先了解平台规则、资料完整度和潜在风险。
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn-primary" href="/category/risk-warning">
                  <AlertTriangle className="size-4" aria-hidden="true" />
                  查看风险提醒
                </Link>
                <Link className="btn-secondary" href="/rankings">
                  浏览平台资料
                </Link>
              </div>
            </div>
            <aside className="risk-observer" aria-label="今日风险观察">
              <p className="eyebrow risk">今日风险观察</p>
              <h2>访问前先核对入口、规则与资金限制</h2>
              <p>站内按资料完整度、规则透明度、入口核对状态和风险提醒组织内容。</p>
              <ul className="observer-list">
                <li>
                  <span>虚假入口识别</span>
                  <strong>域名 / 证书</strong>
                </li>
                <li>
                  <span>平台资料更新</span>
                  <strong>{platforms.length} 个资料卡</strong>
                </li>
                <li>
                  <span>充值提现风险</span>
                  <strong>费用 / 限制</strong>
                </li>
                <li>
                  <span>最新风险提醒</span>
                  <strong>{articles.filter((item) => item.category === "risk-warning").length || 4} 条</strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="site-container home-lead-grid">
          <ArticleCard article={featured} featured />
          <aside className="news-rail">
            <SectionTitle eyebrow="快讯 / 风险提醒" title="编辑关注" />
            {latest.slice(0, 4).map((article) => (
              <Link className="headline-link" href={`/article/${article.slug}`} key={article.slug}>
                <span>
                  {article.title}
                  <small>{article.updatedAt} · {article.readTime}</small>
                </span>
                <ArrowRight className="mt-1 size-4 shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </aside>
        </section>

        <section className="site-container py-6">
          <SectionTitle
            eyebrow="热门平台资料横向榜单"
            title="平台资料库"
            description="整理平台类型、支持内容、资料完整度、规则公开度、更新时间和风险等级，方便访问前核对。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {platforms.map((platform, index) => (
              <PlatformCard key={platform.slug} platform={platform} rank={index + 1} />
            ))}
          </div>
        </section>

        <section className="media-band">
          <div className="site-container">
            <SectionTitle
              eyebrow="四大频道入口"
              title="按场景进入资讯频道"
              description="电竞、体育、扑克和棋牌游戏分别沉淀规则说明、资料核对、平台信息和风险提醒。"
            />
            <div className="channel-grid">
              {keyCategories.map((category) => (
                <Link className="category-card" href={`/category/${category.slug}`} key={category.slug}>
                  <CategoryIcon label={category.name} />
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-8">
          <SectionTitle eyebrow="最新文章流" title="最新规则、资料与风险内容" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="site-container py-6">
          <SectionTitle eyebrow="风险提醒专题" title="入口、账户、支付与规则风险" />
          <RiskNotice />
        </section>

        <RankingTeaser />
        <OfferRules />

        <section className="site-container py-10">
          <div className="guide-grid">
            <div>
              <p className="eyebrow">博彩资讯</p>
              <h2>访问前先看规则、资料和风险</h2>
              <p>资讯栏目整理术语解释、预算管理、冷静期、自我限制、平台资料核对和常见问题。</p>
            </div>
            <Link className="btn-primary" href="/article/guide-responsible-gambling">
              阅读全文
            </Link>
          </div>
        </section>

        <section className="site-container pb-12">
          <div className="disclaimer-strip">
            <span className="disclaimer-icon">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2>18+ 合规与风险声明</h2>
              <p>
                本站内容仅作资讯整理与风险教育用途，不提供投注服务，不保证任何结果。请遵守所在地法律法规，理性评估财务风险。
              </p>
            </div>
            <span className="disclaimer-badge">资料参考</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
