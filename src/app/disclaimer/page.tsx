import type { Metadata } from "next";
import { Breadcrumbs, SiteFooter, SiteHeader } from "@/components/site/chrome";

export const metadata: Metadata = {
  title: "免责声明",
  description: "博彩资讯站的年龄限制、地区法规、财务风险、内容更新和非背书声明。",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "免责声明" }]} />
        <article className="article-shell">
          <h1>免责声明</h1>
          <div className="prose-block">
            <p>本站内容仅面向年满 18 周岁且所在地法律允许阅读相关资讯的用户。</p>
            <p>
              本站仅提供博彩规则说明、平台资料整理、风险提醒和责任博彩教育，不提供投注服务，不处理资金，不构成法律、财务、投资或使用建议。
            </p>
            <p>
              博彩活动可能造成财务损失，并可能带来成瘾风险。请在阅读任何平台资料前核对所在地法律法规、平台公开条款、费用规则、账户限制和自我限制工具。
            </p>
            <p>
              平台资料、排行榜和文章内容均为编辑整理信息，不代表平台官方声明，也不代表任何形式的担保或背书。
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
