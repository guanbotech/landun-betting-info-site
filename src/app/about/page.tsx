import type { Metadata } from "next";
import { Breadcrumbs, SiteFooter, SiteHeader } from "@/components/site/chrome";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解蓝盾博彩情报站的内容定位、编辑原则、平台资料整理方式和风险提示原则。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "关于我们" }]} />
        <article className="article-shell">
          <h1>关于我们</h1>
          <div className="prose-block">
            <p>
              {site.name}主要整理博彩相关公开资料，包括电竞博彩、体育博彩、德州扑克、棋牌游戏、平台资料、入口核对和风险提醒。
            </p>
            <p>
              本站不提供投注服务，也不承诺任何结果。我们更关注访问前的信息核对、规则说明和风险提示。
            </p>
            <p>
              站内资料会随公开信息变化持续更新，但读者仍需自行核对所在地法律法规、平台条款、费用条件和账号限制。
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
