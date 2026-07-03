import type { Metadata } from "next";
import { Breadcrumbs, SiteFooter, SiteHeader } from "@/components/site/chrome";

export const metadata: Metadata = {
  title: "免责声明",
  description: "博彩资讯站的年龄限制、地区法规、财务风险和内容说明。",
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
              本站只记录博彩规则、平台资料和风险提醒，不提供投注服务，不处理资金，也不建议你使用任何平台。
            </p>
            <p>
              博彩活动可能造成财务损失，也可能带来成瘾风险。阅读任何平台资料前，请先核对所在地法律、平台条款、费用规则、账户限制和自我限制工具。
            </p>
            <p>
              平台资料、排行榜和文章内容只是本站编辑记录的信息，不代表平台官方说法，也不保证结果。
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
