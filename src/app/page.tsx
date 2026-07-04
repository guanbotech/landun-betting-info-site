import Link from "next/link";
import { AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import {
  ArticleCard,
  CategoryCover,
  OfferRules,
  PlatformCard,
  RankingTeaser,
  RiskNotice,
  SectionTitle,
  SiteFooter,
  SiteHeader,
} from "@/components/site/chrome";
import { getTopicCoverImage } from "@/lib/cover-images";
import { articles, categories, platforms, topicPages } from "@/lib/site-data";

export default function Home() {
  const featured = articles[0];
  const latest = articles.slice(1, 7);
  const keyCategories = categories.slice(0, 4);
  const sportsTopics = topicPages.filter((topic) => topic.parentSlug === "sports-betting").slice(0, 4);
  const esportsTopics = topicPages.filter((topic) => topic.parentSlug === "esports-betting").slice(0, 4);
  const gamesTopics = topicPages.filter((topic) => topic.parentSlug === "online-games").slice(0, 4);
  const channelPanels = [
    {
      eyebrow: "体育规则",
      title: "足球 / NBA / F1",
      categorySlug: "sports-betting",
      imageSrc: getTopicCoverImage("nba"),
      links: sportsTopics,
    },
    {
      eyebrow: "电竞赛事",
      title: "版本、阵容和赛制",
      categorySlug: "esports-betting",
      imageSrc: getTopicCoverImage("league-of-legends"),
      links: esportsTopics,
    },
    {
      eyebrow: "棋牌扑克",
      title: "资金与活动条款",
      categorySlug: "online-games",
      imageSrc: getTopicCoverImage("niuniu-online"),
      links: gamesTopics,
    },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-media">
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <div className="hero-badges" aria-label="站点标签">
                <span>18+ 风险提醒</span>
                <span>平台资料</span>
                <span>入口核对指南</span>
              </div>
              <h1>亚洲博彩资讯与风险资料库</h1>
              <p>
                这里整理电竞、体育、扑克、棋牌游戏相关的公开资料、平台信息与风险提醒。访问前建议先核对规则、入口状态和限制条件。
              </p>
              <div className="hero-actions mt-7 flex flex-wrap gap-3">
                <Link className="btn-primary" href="/category/risk-warning">
                  <AlertTriangle className="size-4" aria-hidden="true" />
                  查看风险提醒
                </Link>
                <Link className="btn-secondary" href="/rankings">
                  浏览平台资料榜
                </Link>
              </div>
            </div>
            <aside className="risk-observer" aria-label="今日风险观察">
              <p className="eyebrow risk">今日风险观察</p>
              <h2>访问前先核对入口、规则与资金限制</h2>
              <p>重点看域名是否正常、条款是否写清楚、提款和活动有没有额外限制。</p>
              <ul className="observer-list">
                <li>
                  <span className="observer-index">01</span>
                  <span className="observer-text">虚假入口识别</span>
                  <strong>域名 / 证书</strong>
                </li>
                <li>
                  <span className="observer-index">02</span>
                  <span className="observer-text">平台资料更新</span>
                  <strong>{platforms.length} 个资料卡</strong>
                </li>
                <li>
                  <span className="observer-index">03</span>
                  <span className="observer-text">充值提现风险</span>
                  <strong>费用 / 限制</strong>
                </li>
                <li>
                  <span className="observer-index">04</span>
                  <span className="observer-text">最新风险提醒</span>
                  <strong>{articles.filter((item) => item.category === "risk-warning").length || 4} 条</strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="site-container home-lead-grid">
          <ArticleCard article={featured} featured />
          <aside className="news-rail">
            <SectionTitle eyebrow="快讯 / 风险提醒" title="今日关注" />
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

        <section className="site-container dense-home-board">
          <div className="dense-board-head">
            <SectionTitle
              eyebrow="频道速览"
              title="先按赛事和规则快速进入"
              description="把体育、电竞、棋牌、风险内容压缩在一起，减少翻页成本。"
            />
            <Link className="dense-board-link" href="/category/sports-betting">
              查看全部
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="dense-board-grid">
            {channelPanels.map((panel) => (
              <article className="dense-channel-card" key={panel.eyebrow}>
                <Link href={`/category/${panel.categorySlug}`} aria-label={panel.title}>
                  <CategoryCover categorySlug={panel.categorySlug} title="" compact imageSrc={panel.imageSrc} />
                </Link>
                <div className="dense-channel-body">
                  <p className="eyebrow">{panel.eyebrow}</p>
                  <h3>{panel.title}</h3>
                  <div className="dense-link-list">
                    {panel.links.map((topic) => (
                      <Link href={`/topic/${topic.slug}`} key={topic.slug}>
                        <span>{topic.title}</span>
                        <small>{topic.highlights[0]}</small>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            <aside className="dense-alert-feed">
              <p className="eyebrow risk">风险与资料</p>
              <h3>入口、账户、规则更新</h3>
              {[articles[3], articles[4], articles[5], articles[1]].map((article) => (
                <Link href={`/article/${article.slug}`} key={article.slug}>
                  <span>{article.title}</span>
                  <small>{article.updatedAt} · {article.readTime}</small>
                </Link>
              ))}
            </aside>
          </div>
        </section>

        <section className="site-container home-platform-section py-6">
          <SectionTitle
            eyebrow="平台资料"
            title="先看资料，再看风险"
            description="每个平台只列公开信息、更新时间和需要留意的条款，不做安全承诺。"
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
              eyebrow="栏目入口"
              title="按你要查的内容进入"
              description="电竞看版本和阵容，体育看赛程和结算，扑克和棋牌先看资金与活动限制。"
            />
            <div className="channel-grid">
              {keyCategories.map((category) => (
                <Link className="category-card" href={`/category/${category.slug}`} key={category.slug}>
                  <CategoryCover categorySlug={category.slug} title="" compact />
                  <div className="category-card-body">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-8">
          <SectionTitle eyebrow="最新内容" title="最近更新的规则和提醒" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="site-container py-6">
          <SectionTitle eyebrow="风险提醒" title="入口、账户、支付和规则都要提前核对" />
          <RiskNotice title={null} />
        </section>

        <RankingTeaser />
        <OfferRules />

        <section className="site-container py-10">
          <div className="guide-grid">
            <div>
              <p className="eyebrow">博彩资讯</p>
              <h2>访问前先看规则、资料和风险</h2>
              <p>如果已经开始追亏、借钱或频繁改预算，先停下来，不要继续往下走。</p>
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
                本站只做资料记录和风险提醒，不提供投注服务，也不保证任何结果。请先确认所在地法律和个人财务风险。
              </p>
            </div>
            <span className="disclaimer-badge">自己核对</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
