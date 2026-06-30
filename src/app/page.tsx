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
  const latest = articles.slice(1, 6);
  const keyCategories = categories.slice(0, 6);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <div>
              <div className="hero-badges" aria-label="站点标签">
                <span>18+ 风险提醒</span>
                <span>平台资料整理</span>
                <span>入口核对指南</span>
              </div>
              <h1>亚洲博彩资讯与平台风险资料库</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                整理电竞博彩、体育博彩、德州扑克、在线游戏、平台资料、风险提醒与入口核对信息，帮助用户在访问前先了解平台规则和潜在风险。
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn-primary light" href="/category/risk-warning">
                  <AlertTriangle className="size-4" aria-hidden="true" />
                  查看风险提醒
                </Link>
                <Link className="btn-outline-light" href="/rankings">
                  平台资料库
                </Link>
              </div>
            </div>
            <div className="intel-board" aria-label="资讯站结构概览">
              <div className="intel-row active">
                <span>重点资讯</span>
                <strong>规则、风险、资料</strong>
              </div>
              <div className="intel-row">
                <span>平台资料</span>
                <strong>{platforms.length} 个平台资料卡</strong>
              </div>
              <div className="intel-row">
                <span>资料范围</span>
                <strong>栏目 / 文章 / 平台 / 榜单</strong>
              </div>
              <div className="intel-row warning">
                <span>文案策略</span>
                <strong>中性按钮，避免夸大承诺</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
          <ArticleCard article={featured} featured />
          <div className="stack-panel">
            <SectionTitle eyebrow="小文章推荐列表" title="编辑精选" />
            <div className="space-y-4">
              {latest.slice(0, 4).map((article) => (
                <Link className="headline-link" href={`/article/${article.slug}`} key={article.slug}>
                  <span>{article.title}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="热门平台资料"
            title="平台资料库"
            description="使用统一字段展示平台类型、支持内容、资料更新时间、风险等级、基础资料和注意事项。"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {platforms.map((platform) => (
              <PlatformCard key={platform.slug} platform={platform} />
            ))}
          </div>
        </section>

        <section className="section-band">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="最新资讯列表" title="最新规则与风险内容" />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="栏目矩阵" title="核心二级栏目" description="按访问前核对、规则说明、平台资料和风险提醒组织内容，便于长期更新。" />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {keyCategories.map((category) => (
              <Link className="category-card" href={`/category/${category.slug}`} key={category.slug}>
                <CategoryIcon label={category.name} />
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <RiskNotice />
        <RankingTeaser />
        <OfferRules />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="guide-grid">
            <div>
              <p className="eyebrow">博彩指南</p>
              <h2 className="text-2xl font-semibold text-slate-950">访问前先看规则、资料和风险</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                指南栏目整理术语解释、预算管理、冷静期、自我限制、平台资料核对和常见问题。
              </p>
            </div>
            <Link className="btn-primary" href="/article/guide-responsible-gambling">
              阅读全文
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="disclaimer-strip">
            <ShieldCheck className="size-5 shrink-0" aria-hidden="true" />
            <p>
              18+ 免责声明：本站内容仅作资讯与风险教育用途，不提供投注服务，不保证任何结果。请遵守所在地法律法规，理性评估财务风险。
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
