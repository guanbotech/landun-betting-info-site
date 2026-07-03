import type { Metadata } from "next";
import { Breadcrumbs, SiteFooter, SiteHeader } from "@/components/site/chrome";

export const metadata: Metadata = {
  title: "服务条款",
  description: "蓝盾博彩情报站的内容使用、风险提醒和责任说明。",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "服务条款" }]} />
        <article className="article-shell">
          <h1>服务条款</h1>
          <div className="prose-block">
            <p>使用本站内容前，请确认你已年满 18 周岁，并且所在地法律允许阅读相关资讯。</p>
            <p>本站内容只用于资料阅读和风险提醒，不提供投注服务，不处理充值、提现或账户操作。</p>
            <p>平台资料、榜单和文章可能随公开信息变化而调整。访问任何平台前，请自行核对域名、条款、费用、账户限制和所在地法律。</p>
            <p>如果你已经出现追亏、借钱参与或影响生活的情况，请立即停止继续参与，并寻求专业帮助。</p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
