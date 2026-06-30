import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  BookOpen,
  ChevronRight,
  CircleDot,
  FileText,
  Grid2X2,
  Landmark,
  ListChecks,
  Menu,
  SearchCheck,
  ShieldAlert,
  Trophy,
} from "lucide-react";
import { articles, categories, legalPages, platforms, site } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <span className="grid size-10 place-items-center rounded-md bg-slate-950 text-orange-300">
            <ShieldAlert className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-semibold text-slate-950">{site.name}</span>
            <span className="block text-xs text-slate-500">资讯 · 资料 · 风险核对</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {categories.slice(0, 6).map((category) => (
            <Link key={category.slug} className="nav-link" href={`/category/${category.slug}`}>
              {category.name}
            </Link>
          ))}
          <Link className="nav-link" href="/rankings">
            平台排行榜
          </Link>
        </nav>
        <Link className="btn-secondary hidden sm:inline-flex" href="/category/risk-warning">
          <AlertTriangle className="size-4" aria-hidden="true" />
          风险提醒
        </Link>
        <details className="mobile-menu lg:hidden">
          <summary aria-label="打开导航菜单">
            <Menu className="size-5" aria-hidden="true" />
          </summary>
          <nav aria-label="移动导航">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                {category.name}
              </Link>
            ))}
            <Link href="/rankings">平台排行榜</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const groups = [
    { title: "核心栏目", links: categories.slice(0, 4).map((item) => ({ href: `/category/${item.slug}`, label: item.name })) },
    { title: "资料与榜单", links: [{ href: "/rankings", label: "平台排行榜" }, ...platforms.slice(0, 3).map((item) => ({ href: `/platform/${item.slug}`, label: item.name }))] },
    { title: "风险与指南", links: categories.slice(4, 6).map((item) => ({ href: `/category/${item.slug}`, label: item.name })) },
    { title: "法律页面", links: legalPages },
  ];

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_repeat(4,1fr)] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md bg-orange-400 text-slate-950">
              <ShieldAlert className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-white">{site.name}</p>
              <p className="text-xs text-slate-400">博彩资讯与平台风险资料库</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            本站仅用于资料整理、规则说明与风险教育，不提供投注服务，不构成法律、财务或投资建议。
          </p>
          <p className="mt-5 inline-flex items-center rounded-md border border-orange-300/40 px-3 py-2 text-sm font-semibold text-orange-200">
            18+ 请遵守所在地法律法规
          </p>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-semibold text-white">{group.title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-orange-200" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        本站内容仅用于资料整理、规则说明与风险教育，不提供投注服务，不构成法律、财务或投资建议。请遵守所在地法律法规。
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="面包屑">
      <Link href="/" className="hover:text-slate-900">
        首页
      </Link>
      {items.map((item) => (
        <span className="inline-flex items-center gap-2" key={item.label}>
          <ChevronRight className="size-4" aria-hidden="true" />
          {item.href ? (
            <Link href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function RiskNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={compact ? "risk-box compact" : "risk-box"}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-1 size-5 shrink-0 text-orange-500" aria-hidden="true" />
        <div>
          <h2 className="text-base font-semibold text-slate-950">风险提醒</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            博彩存在财务损失和成瘾风险。阅读平台资料前，请核对所在地法律、年龄限制、平台规则、费用条款和自我限制工具。
          </p>
        </div>
      </div>
    </aside>
  );
}

export function Sidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <div className="side-panel">
        <h2 className="side-title">
          <Landmark className="size-4" aria-hidden="true" />
          热门平台资料
        </h2>
        <div className="mt-4 space-y-4">
          {platforms.slice(0, 4).map((platform) => (
            <Link key={platform.slug} href={`/platform/${platform.slug}`} className="platform-mini">
              <span className="platform-logo">{platform.name.slice(0, 1)}</span>
              <span>
                <span className="block font-semibold text-slate-900">{platform.name}</span>
                <span className="block text-xs text-slate-500">
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
          相关文章推荐
        </h2>
        <ul className="mt-4 space-y-4">
          {articles.slice(0, 5).map((article) => (
            <li key={article.slug}>
              <Link className="text-sm font-medium leading-6 text-slate-800 hover:text-blue-700" href={`/article/${article.slug}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function CategoryCover({
  categorySlug,
  title,
  compact = false,
}: {
  categorySlug: string;
  title: string;
  compact?: boolean;
}) {
  const category = categories.find((item) => item.slug === categorySlug);
  const cover = category?.cover ?? "guide";
  const Icon =
    cover === "esports"
      ? Activity
      : cover === "sports"
        ? CircleDot
        : cover === "poker"
          ? Grid2X2
          : cover === "games"
            ? ListChecks
            : cover === "risk"
              ? ShieldAlert
              : cover === "review"
                ? SearchCheck
                : cover === "ranking"
                  ? Trophy
                  : BookOpen;

  return (
    <div className={`category-cover cover-${cover} ${compact ? "compact" : ""}`}>
      <div className="cover-mark">
        <Icon className="size-7" aria-hidden="true" />
      </div>
      <div>
        <span>{category?.name ?? "博彩指南"}</span>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export function ArticleCard({ article, featured = false }: { article: (typeof articles)[number]; featured?: boolean }) {
  const category = categories.find((item) => item.slug === article.category);
  return (
    <article className={featured ? "article-card featured" : "article-card"}>
      <Link href={`/article/${article.slug}`} className="block" aria-label={article.title}>
        <CategoryCover categorySlug={article.category} title={article.title} compact={!featured} />
      </Link>
      <div className="p-5">
        <Link className="tag" href={`/category/${article.category}`}>
          {category?.name}
        </Link>
        <h3 className={featured ? "mt-3 text-2xl font-semibold leading-tight" : "mt-3 text-lg font-semibold leading-snug"}>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
          <span>{article.updatedAt}</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export function PlatformCard({ platform, rank }: { platform: (typeof platforms)[number]; rank?: number }) {
  const completeness = platform.basics.find((item) => item.label === "资料完整度")?.value ?? "待核对";
  const openness = platform.basics.find((item) => item.label === "规则公开度")?.value ?? "待核对";

  return (
    <article className="platform-card">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="platform-logo large">
          <span>{rank ? rank : platform.name.slice(0, 1)}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-950">{platform.name}</h3>
            <span className={`risk-pill risk-${platform.risk}`}>风险{platform.risk}</span>
          </div>
          <p className="mt-1 text-sm text-slate-500">{platform.type}</p>
          <dl className="platform-metrics">
            <div>
              <dt>资料完整度</dt>
              <dd>{completeness}</dd>
            </div>
            <div>
              <dt>规则公开度</dt>
              <dd>{openness}</dd>
            </div>
            <div>
              <dt>更新时间</dt>
              <dd>{platform.updatedAt}</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm leading-6 text-slate-700">{platform.overview}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {platform.supported.map((item) => (
              <span key={item} className="info-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
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
    <section className="section-band">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="eyebrow">平台排行榜</p>
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950">按资料完整度和风险提示整理平台列表</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            榜单仅基于资料完整度、规则透明度、内容分类和更新时间整理，仅用于资料索引，不构成平台背书。
          </p>
          <Link className="btn-primary mt-6" href="/rankings">
            查看排行榜
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="offer-panel">
        <div>
          <p className="eyebrow text-orange-700">活动规则提醒</p>
          <h2 className="text-2xl font-semibold text-slate-950">活动资料先看限制条件，再看适用范围</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
            活动资料只作为规则索引展示，重点记录更新时间、有效投注、流水要求、地区限制、账户限制和取消条件。
          </p>
        </div>
        <Link className="btn-secondary" href="/article/online-games-offer-terms">
          查看规则
        </Link>
      </div>
    </section>
  );
}

export function CategoryIcon({ label }: { label: string }) {
  return (
    <span className="grid size-10 place-items-center rounded-md bg-slate-100 text-slate-700">
      {label === "平台排行榜" ? <Trophy className="size-5" aria-hidden="true" /> : <FileText className="size-5" aria-hidden="true" />}
    </span>
  );
}
