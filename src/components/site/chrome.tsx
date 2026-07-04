"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  BookOpen,
  ChevronDown,
  ChevronRight,
  CircleDot,
  ClipboardCheck,
  FileText,
  Grid2X2,
  Landmark,
  ListChecks,
  Menu,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { categoryImagePaths, getArticleCoverImage, getPlatformCoverImage } from "@/lib/cover-images";
import { articles, categories, legalPages, platforms, site } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/category/sports-betting", label: "体育博彩" },
  { href: "/category/esports-betting", label: "电子竞技" },
  { href: "/category/online-games", label: "棋牌游戏" },
  { href: "/category/poker", label: "德州扑克" },
  { href: "/category/platform-reviews", label: "博彩资讯" },
  { href: "/rankings", label: "平台资料榜" },
  { href: "/category/risk-warning", label: "风险提醒" },
];

const navDropdowns = [
  {
    label: "体育博彩",
    href: "/category/sports-betting",
    items: [
      { label: "欧冠", href: "/topic/champions-league" },
      { label: "英超", href: "/topic/premier-league" },
      { label: "NBA", href: "/topic/nba" },
      { label: "F1", href: "/topic/f1" },
      { label: "中超", href: "/topic/chinese-super-league" },
      { label: "体育平台规则", href: "/topic/sports-betting-regulation" },
    ],
  },
  {
    label: "电子竞技",
    href: "/category/esports-betting",
    items: [
      { label: "英雄联盟", href: "/topic/league-of-legends" },
      { label: "CS2", href: "/topic/cs2" },
      { label: "DOTA2", href: "/topic/dota2" },
      { label: "王者荣耀", href: "/topic/honor-of-kings" },
      { label: "无畏契约", href: "/topic/valorant" },
      { label: "穿越火线", href: "/topic/crossfire" },
    ],
  },
  {
    label: "棋牌游戏",
    href: "/category/online-games",
    items: [
      { label: "牛牛在线游戏", href: "/topic/niuniu-online" },
      { label: "三公在线游戏", href: "/topic/sangong-online" },
      { label: "百家乐在线游戏", href: "/topic/baccarat-online" },
      { label: "炸金花在线", href: "/topic/golden-flower-online" },
      { label: "龙虎斗在线", href: "/topic/dragon-tiger-online" },
      { label: "斗地主在线", href: "/topic/doudizhu-online" },
    ],
  },
];

const brandLogoPath = "";

const plainNavItems = [
  { href: "/category/poker", label: "德州扑克" },
  { href: "/category/platform-reviews", label: "博彩资讯" },
  { href: "/rankings", label: "平台资料榜" },
];

function BrandLogo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <span className={`brand-logo-combo ${variant}`}>
      {brandLogoPath ? (
        <Image
          className={imageLoaded ? "brand-logo-image is-loaded" : "brand-logo-image is-probing"}
          src={brandLogoPath}
          alt=""
          aria-hidden="true"
          width={192}
          height={44}
          onLoad={() => setImageLoaded(true)}
        />
      ) : null}
      <span className={imageLoaded ? "brand-fallback is-hidden" : "brand-fallback"}>
        <span className="brand-mark">
          <ShieldAlert className="size-5" aria-hidden="true" />
        </span>
        <span className="brand-text min-w-0">
          <span className="brand-name">{site.name}</span>
          <span className="brand-subtitle">博彩资讯 · 平台资料</span>
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-lockup" aria-label={site.name}>
          <BrandLogo />
        </Link>
        <nav className="desktop-nav" aria-label="主导航">
          <Link className={isActive("/") ? "nav-link active" : "nav-link"} href="/">
            首页
          </Link>
          {navDropdowns.map((group) => (
            <div
              className={[
                "nav-dropdown",
                isActive(group.href) ? "active" : "",
                openDropdown === group.label ? "is-open" : "",
              ].filter(Boolean).join(" ")}
              key={group.label}
              onMouseEnter={() => setOpenDropdown(group.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="nav-dropdown-trigger"
                type="button"
                aria-expanded={openDropdown === group.label}
                onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
              >
                {group.label}
                <ChevronDown className="size-4" aria-hidden="true" />
              </button>
              {openDropdown === group.label ? (
                <div className="nav-dropdown-menu" aria-label={`${group.label}栏目`}>
                  <span className="nav-dropdown-rail" aria-hidden="true" />
                  <div className="nav-dropdown-list">
                    <Link href={group.href}>{group.label}首页</Link>
                    {group.items.map((item) => (
                      <Link key={`${group.label}-${item.label}`} href={item.href}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          {plainNavItems.map((item) => (
            <Link key={item.href} className={isActive(item.href) ? "nav-link active" : "nav-link"} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="risk-action" href="/category/risk-warning">
          <AlertTriangle className="size-4" aria-hidden="true" />
          风险提醒
        </Link>
        <details className="mobile-menu">
          <summary aria-label="打开导航菜单">
            <Menu className="size-5" aria-hidden="true" />
          </summary>
          <nav aria-label="移动导航">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const groups = [
    { title: "核心栏目", links: categories.slice(0, 4).map((item) => ({ href: `/category/${item.slug}`, label: item.name })) },
    { title: "平台资料", links: [{ href: "/rankings", label: "平台资料榜" }, ...platforms.slice(0, 3).map((item) => ({ href: `/platform/${item.slug}`, label: item.name }))] },
    { title: "风险与指南", links: categories.slice(4, 6).map((item) => ({ href: `/category/${item.slug}`, label: item.name })) },
    { title: "法律页面", links: legalPages },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <BrandLogo variant="footer" />
          </div>
          <p className="footer-copy">记录博彩资讯、平台资料、入口变化和风险提醒，不提供投注服务。</p>
          <span className="footer-age">18+ 风险提醒</span>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        本站只记录公开资料、规则说明和风险提醒，不提供投注服务。请先确认所在地法律法规。
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="面包屑">
      <Link href="/">首页</Link>
      {items.map((item) => (
        <span className="inline-flex items-center gap-2" key={item.label}>
          <ChevronRight className="size-4" aria-hidden="true" />
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="section-title">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function RiskNotice({ compact = false, title = "风险提醒" }: { compact?: boolean; title?: string | null }) {
  return (
    <aside className={compact ? "risk-box compact" : "risk-box"}>
      <div className="risk-icon">
        <AlertTriangle className="size-5" aria-hidden="true" />
      </div>
      <div>
        {title ? <h2>{title}</h2> : null}
        <p>
          博彩存在财务损失和成瘾风险。阅读平台资料前，请核对所在地法律、年龄限制、平台规则、费用条款和自我限制工具。
        </p>
      </div>
    </aside>
  );
}

export function Sidebar({
  articleList = articles.slice(0, 5),
  guideTitle = "相关指南",
  platformList = platforms.slice(0, 4),
}: {
  articleList?: typeof articles;
  guideTitle?: string;
  platformList?: typeof platforms;
}) {
  return (
    <aside className="sidebar">
      <div className="side-panel">
        <h2 className="side-title">
          <Landmark className="size-4" aria-hidden="true" />
          热门平台资料
        </h2>
        <div className="side-list">
          {platformList.slice(0, 4).map((platform) => (
            <Link key={platform.slug} href={`/platform/${platform.slug}`} className="platform-mini">
              <span className="platform-logo">{platform.name.slice(0, 1)}</span>
              <span>
                <span className="block font-semibold text-[#111827]">{platform.name}</span>
                <span className="block text-xs text-[#64748B]">
                  {platform.type} · 风险{platform.risk}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <RiskNotice compact />
      <div className="side-panel">
        <h2 className="side-title">
          <BookOpen className="size-4" aria-hidden="true" />
          {guideTitle}
        </h2>
        <ul className="side-article-list">
          {articleList.slice(0, 5).map((article) => (
            <li key={article.slug}>
              <Link href={`/article/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-panel disclaimer-mini">
        <h2 className="side-title">
          <ShieldCheck className="size-4" aria-hidden="true" />
          免责声明
        </h2>
        <p>本站只记录公开资料和风险信息，不提供投注服务，也不替任何平台作保证。</p>
      </div>
    </aside>
  );
}

const coverIcons = {
  esports: Activity,
  sports: CircleDot,
  poker: Grid2X2,
  games: ListChecks,
  risk: ShieldAlert,
  review: SearchCheck,
  ranking: Trophy,
  guide: BookOpen,
};

export function CategoryCover({
  categorySlug,
  title,
  compact = false,
  imageSrc,
}: {
  categorySlug: string;
  title: string;
  compact?: boolean;
  imageSrc?: string;
}) {
  const category = categories.find((item) => item.slug === categorySlug);
  const cover = category?.cover ?? "guide";
  const Icon = coverIcons[cover as keyof typeof coverIcons] ?? BookOpen;
  const imagePath = imageSrc ?? categoryImagePaths[categorySlug];
  const hasImage = Boolean(imagePath);

  return (
    <div
      className={[
        "category-cover",
        `cover-${cover}`,
        compact ? "compact" : "",
        hasImage ? "has-image" : "",
      ].filter(Boolean).join(" ")}
    >
      {hasImage ? (
        <Image
          className="category-cover-image"
          src={imagePath}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          unoptimized
        />
      ) : null}
      <div className="cover-scrim" aria-hidden="true" />
      <div className="cover-grid" aria-hidden="true" />
      <div className="cover-symbol">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <div className="cover-graphic" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="cover-content">
        <span>{category?.name ?? "博彩资讯"}</span>
        {title ? <strong>{title}</strong> : null}
      </div>
    </div>
  );
}

export function ArticleCard({ article, featured = false }: { article: (typeof articles)[number]; featured?: boolean }) {
  const category = categories.find((item) => item.slug === article.category);
  return (
    <article className={featured ? "article-card featured" : "article-card"}>
      <Link href={`/article/${article.slug}`} aria-label={article.title}>
        <CategoryCover categorySlug={article.category} title="" compact={!featured} imageSrc={getArticleCoverImage(article.slug)} />
      </Link>
      <div className="article-card-body">
        <div className="article-card-top">
          <Link className="tag" href={`/category/${article.category}`}>
            {category?.name}
          </Link>
          <span>{article.readTime}</span>
        </div>
        <h3>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
        <div className="article-card-meta">
          <span>更新：{article.updatedAt}</span>
          <span>{article.tags[0]}</span>
        </div>
        <Link className="read-more" href={`/article/${article.slug}`}>
          阅读全文
          <ChevronRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function PlatformCard({ platform, rank }: { platform: (typeof platforms)[number]; rank?: number }) {
  const completeness = platform.basics.find((item) => item.label === "资料情况" || item.label === "资料完整度")?.value ?? "待核对";
  const openness = platform.basics.find((item) => item.label === "规则说明" || item.label === "规则公开度")?.value ?? "待核对";
  const coverImage = getPlatformCoverImage(platform.slug);

  return (
    <article className={[rank ? "platform-card ranked" : "platform-card", coverImage ? "with-cover" : ""].filter(Boolean).join(" ")}>
      {rank ? <span className="platform-rank-flag">#{rank}</span> : null}
      {coverImage ? (
        <Link className="platform-card-cover" href={`/platform/${platform.slug}`} aria-label={`${platform.name}资料`}>
          <Image
            className="platform-card-cover-image"
            src={coverImage}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            unoptimized
          />
          <span className="platform-card-cover-scrim" aria-hidden="true" />
          <span className="platform-card-cover-label">
            <span>{platform.type}</span>
            <strong>{platform.name}</strong>
          </span>
        </Link>
      ) : null}
      <div className="platform-card-head">
        {!coverImage ? (
          <div className="platform-logo large">
            <span>{platform.name.slice(0, 1)}</span>
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="platform-title-row">
            <h3>{platform.name}</h3>
            <span className={`risk-pill risk-${platform.risk}`}>风险{platform.risk}</span>
          </div>
          <p className="platform-type">{platform.type}</p>
        </div>
      </div>
      <dl className="platform-metrics priority">
        <div>
          <dt>资料情况</dt>
          <dd>{completeness}</dd>
        </div>
        <div>
          <dt>规则说明</dt>
          <dd>{openness}</dd>
        </div>
        <div>
          <dt>更新时间</dt>
          <dd>{platform.updatedAt}</dd>
        </div>
      </dl>
      <p className="platform-overview">{platform.overview}</p>
      <div className="chip-row">
        {platform.supported.map((item) => (
          <span key={item} className="info-chip">
            {item}
          </span>
        ))}
      </div>
      <div className="platform-actions">
        <Link className="btn-primary" href={`/platform/${platform.slug}`}>
          查看资料
        </Link>
        <Link className="btn-secondary" href={`/platform/${platform.slug}#review`}>
          阅读评测
        </Link>
      </div>
    </article>
  );
}

export function RankingTeaser() {
  return (
    <section className="media-band">
      <div className="site-container ranking-teaser">
        <div className="ranking-teaser-head">
          <p className="eyebrow">平台资料榜</p>
          <h2>按资料情况和规则说明列出平台</h2>
          <p>这里按资料情况、规则说明、内容分类和更新时间列出平台，只方便查资料，不代表使用建议。</p>
          <Link className="btn-primary" href="/rankings">
            查看平台资料榜
          </Link>
        </div>
        <div className="ranking-mini-list">
          {platforms.slice(0, 4).map((platform, index) => (
            <PlatformCard key={platform.slug} platform={platform} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferRules() {
  return (
    <section className="site-container">
      <div className="offer-panel">
        <div>
          <p className="eyebrow risk">活动规则提醒</p>
          <h2>活动资料先看限制条件，再看适用范围</h2>
          <p>查看活动资料时，建议先核对更新时间、有效投注、流水要求、地区限制、账户限制和取消条件。</p>
        </div>
        <Link className="btn-secondary" href="/article/online-games-offer-terms">
          查看规则
        </Link>
      </div>
    </section>
  );
}

export function CategoryIcon({ label }: { label: string }) {
  const Icon = label === "平台资料榜" ? Trophy : label.includes("风险") ? ShieldAlert : label.includes("指南") ? ClipboardCheck : FileText;
  return (
    <span className="category-icon">
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}

export function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function DataIcon({ type }: { type: "articles" | "platforms" | "risk" }) {
  const Icon = type === "articles" ? FileText : type === "platforms" ? BarChart3 : AlertTriangle;
  return <Icon className="size-4" aria-hidden="true" />;
}
