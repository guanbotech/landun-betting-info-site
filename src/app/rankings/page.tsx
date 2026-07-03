import type { Metadata } from "next";
import { Breadcrumbs, PlatformCard, RiskNotice, SiteFooter, SiteHeader, StatCard } from "@/components/site/chrome";
import { platforms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "平台排行榜",
  description: "按平台资料完整度、规则透明度、内容分类和更新时间整理的平台资料索引榜单。",
  alternates: { canonical: "/rankings" },
};

export default function RankingsPage() {
  const sorted = platforms.slice().sort((a, b) => b.score - a.score);

  return (
    <>
      <SiteHeader />
      <main className="site-container py-10">
        <Breadcrumbs items={[{ label: "平台排行榜" }]} />
        <section className="ranking-hero">
          <p className="eyebrow">平台资料索引榜单</p>
          <h1>平台排行榜</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#475569]">
            榜单仅基于资料完整度、规则透明度、内容分类和更新时间整理，仅用于资料索引，不构成平台背书。
          </p>
          <p className="mt-3 text-sm font-bold text-[#64748B]">更新时间：2026-06-30</p>
          <div className="channel-stats">
            <StatCard label="收录平台" value={sorted.length} />
            <StatCard label="筛选维度" value="4 项" />
            <StatCard label="榜单性质" value="资料索引" />
          </div>
        </section>

        <div className="mt-8">
          <RiskNotice />
        </div>

        <section className="filters" aria-label="平台筛选">
          <div>
            <span>平台类型</span>
            <button>全部</button>
            <button>电竞</button>
            <button>体育</button>
            <button>扑克</button>
            <button>在线游戏</button>
          </div>
          <div>
            <span>风险等级</span>
            <button>全部</button>
            <button>低</button>
            <button>中</button>
            <button>高</button>
          </div>
          <div>
            <span>支持内容</span>
            <button>全部内容</button>
            <button>赛事</button>
            <button>扑克</button>
            <button>在线游戏</button>
          </div>
          <div>
            <span>更新时间</span>
            <button>最近更新</button>
            <button>本月</button>
            <button>本季度</button>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          {sorted.map((platform, index) => (
            <PlatformCard key={platform.slug} platform={platform} rank={index + 1} />
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
