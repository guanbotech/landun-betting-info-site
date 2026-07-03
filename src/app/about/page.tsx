import type { Metadata } from "next";
import { Breadcrumbs, SiteFooter, SiteHeader } from "@/components/site/chrome";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解蓝盾博彩情报站记录哪些资料、怎么提醒风险。",
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
              {site.name}主要记录博彩相关公开资料，包括电竞、体育、德州扑克、棋牌游戏、平台资料、入口变化和风险提醒。
            </p>
            <p>
              本站不提供投注服务，也不承诺任何结果。我们更关注规则有没有写清楚、入口是否正常、限制条件有没有被忽略。
            </p>
            <p>
              站内资料会跟着公开信息调整，但读者仍要自己核对所在地法律、平台条款、费用条件和账号限制。
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
