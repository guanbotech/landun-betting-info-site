import type { Metadata } from "next";
import { Breadcrumbs, SiteFooter, SiteHeader } from "@/components/site/chrome";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "蓝盾博彩情报站关于访问数据、联系方式和第三方服务的隐私说明。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "隐私政策" }]} />
        <article className="article-shell">
          <h1>隐私政策</h1>
          <div className="prose-block">
            <p>本站主要提供公开资料阅读，不提供投注服务，也不处理用户资金。</p>
            <p>访问网站时，服务商可能记录基础访问数据，例如浏览器类型、访问时间、页面路径和安全日志，用于维护网站稳定和识别异常访问。</p>
            <p>如果你通过邮件或其它方式联系我们，请不要发送账户密码、支付凭证或敏感身份证明。我们只会把联系方式用于回复你的问题。</p>
            <p>本站可能引用第三方公开资料或链接。离开本站后，请自行阅读对应网站的隐私说明和使用规则。</p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
