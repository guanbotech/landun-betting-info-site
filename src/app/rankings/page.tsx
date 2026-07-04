import type { Metadata } from "next";
import { Breadcrumbs, CategoryCover, PlatformCard, SiteFooter, SiteHeader, StatCard } from "@/components/site/chrome";
import { platforms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "平台资料榜",
  description: "按资料完整度、规则说明、入口核对状态、风险等级和更新时间整理平台资料，仅用于资料索引，不构成平台背书。",
  alternates: { canonical: "/rankings" },
};

export default function RankingsPage() {
  const sorted = platforms.slice().sort((a, b) => b.score - a.score);

  return (
    <>
      <SiteHeader />
      <main className="site-container py-10">
        <Breadcrumbs items={[{ label: "平台资料榜" }]} />
        <section className="ranking-hero ranking-hero-media">
          <div className="min-w-0">
            <p className="eyebrow">平台资料榜</p>
            <h1>平台资料榜</h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#475569]">
              按资料完整度、规则说明、入口核对状态、风险等级和更新时间整理平台资料，仅用于资料索引，不构成平台背书。
            </p>
            <p className="mt-3 text-sm font-bold text-[#64748B]">更新时间：2026-06-30</p>
            <div className="channel-stats">
              <StatCard label="收录平台" value={sorted.length} />
              <StatCard label="筛选项" value="4 项" />
              <StatCard label="榜单性质" value="资料列表" />
            </div>
          </div>
          <CategoryCover categorySlug="rankings" title="资料完整度 / 风险等级" compact />
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
