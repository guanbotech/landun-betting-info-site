import type { Metadata } from "next";
import { Breadcrumbs, PlatformCard, RiskNotice, SiteFooter, SiteHeader } from "@/components/site/chrome";
import { platforms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "平台排行榜",
  description: "按平台资料完整度、规则透明度、内容分类和更新时间整理的平台资料索引榜单。",
  alternates: { canonical: "/rankings" },
};

export default function RankingsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "平台排行榜" }]} />
        <section className="archive-hero">
          <p className="eyebrow">平台排行榜</p>
          <h1>平台排行榜</h1>
          <p>
            榜单仅基于资料完整度、规则透明度、内容分类和更新时间整理，仅用于资料索引，不构成平台背书。
          </p>
          <p className="mt-3 text-sm text-slate-500">更新时间：2026-06-30</p>
        </section>

        <div className="mt-8">
          <RiskNotice />
        </div>

        <section className="filters" aria-label="平台筛选">
          <div>
            <span>平台类型筛选</span>
            <button>全部</button>
            <button>电竞</button>
            <button>体育</button>
            <button>扑克</button>
            <button>在线游戏</button>
          </div>
          <div>
            <span>风险等级筛选</span>
            <button>全部</button>
            <button>低</button>
            <button>中</button>
            <button>高</button>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          {platforms
            .slice()
            .sort((a, b) => b.score - a.score)
            .map((platform, index) => (
              <PlatformCard key={platform.slug} platform={platform} rank={index + 1} />
            ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
