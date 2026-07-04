import Link from "next/link";
import { AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import {
  ArticleCard,
  CategoryCover,
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
              <div className="hero-risk-strip" aria-label="今日风险观察">
                <div>
                  <span>01</span>
                  <strong>虚假入口识别</strong>
                  <small>域名 / 证书</small>
                </div>
                <div>
                  <span>02</span>
                  <strong>平台资料更新</strong>
                  <small>{platforms.length} 个资料卡</small>
                </div>
                <div>
                  <span>03</span>
                  <strong>充值提现风险</strong>
                  <small>费用 / 限制</small>
                </div>
                <div>
                  <span>04</span>
                  <strong>最新风险提醒</strong>
                  <small>{articles.filter((item) => item.category === "risk-warning").length || 4} 条</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-editorial-section">
          <div className="site-container">
            <div className="home-editorial-title">
              <div>
                <p>综合资讯</p>
                <h2>今日重点与风险观察</h2>
              </div>
              <Link href="/category/platform-reviews">
                查看更多
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="home-lead-grid">
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
            </div>
          </div>
        </section>

        <section className="site-container dense-home-board home-module-panel">
          <div className="dense-board-head">
            <SectionTitle
              eyebrow="频道速览"
              title="体育赛事和规则"
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

        <section className="media-band">
          <div className="site-container">
            <SectionTitle
              eyebrow="栏目入口"
              title="电竞-体育-德州-棋牌"
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

        <section className="site-container home-module-panel py-8">
          <SectionTitle eyebrow="最新内容" title="最近更新的规则和提醒" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="site-container py-10">
          <div className="home-risk-board">
            <div className="home-risk-head">
              <div>
                <p className="eyebrow risk">风险提醒</p>
                <h2>入口、账户、支付和规则都要提前核对</h2>
              </div>
              <p>
                博彩存在财务损失和成瘾风险。阅读平台资料前，请核对所在地法律、年龄限制、平台规则、费用条款和自我限制工具。
              </p>
            </div>
            <div className="home-risk-grid">
              <Link className="home-risk-item risk-one" href="/category/risk-warning">
                <span className="risk-number">01</span>
                <div>
                  <h3>入口与域名核对</h3>
                  <p>先看域名、证书、跳转路径和公告记录，避免误入仿冒入口。</p>
                </div>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link className="home-risk-item risk-two" href="/article/online-games-offer-terms">
                <span className="risk-number">02</span>
                <div>
                  <h3>活动规则先看限制</h3>
                  <p>核对更新时间、有效投注、流水要求、地区限制和取消条件。</p>
                </div>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link className="home-risk-item risk-three" href="/article/guide-responsible-gambling">
                <span className="risk-number">03</span>
                <div>
                  <h3>预算和行为先停一下</h3>
                  <p>如果已经追亏、借钱或频繁改预算，先暂停，不要继续往下走。</p>
                </div>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <div className="home-risk-item risk-four">
                <span className="risk-number">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3>18+ 合规与风险声明</h3>
                  <p>本站只做资料记录和风险提醒，不提供投注服务，也不保证任何结果。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
