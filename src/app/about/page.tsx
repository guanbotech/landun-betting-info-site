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
              {site.name} 是面向中文用户的博彩资讯与平台风险资料库，定位为规则说明、平台资料整理、风险提醒和责任博彩资讯。
            </p>
            <p>
              我们按栏目、文章、平台资料、排行榜和法律页面组织内容，重点呈现访问前需要核对的公开信息。
            </p>
            <p>
              本站不提供投注服务，不使用诱导注册文案，不承诺任何结果。所有内容应以公开资料、编辑核对和持续更新为基础。
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
