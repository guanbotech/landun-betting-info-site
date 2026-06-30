import Link from "next/link";
import { AlertTriangle, Home, Landmark } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site/chrome";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[64vh] w-full max-w-5xl items-center px-4 py-14 sm:px-6 lg:px-8">
        <section className="not-found-panel">
          <p className="eyebrow">404</p>
          <h1>页面未找到</h1>
          <p>
            你访问的内容可能已移动、更新或暂时不可用。可以返回首页，或继续查看平台资料、风险提醒和博彩指南内容。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/">
              <Home className="size-4" aria-hidden="true" />
              返回首页
            </Link>
            <Link className="btn-secondary" href="/category/risk-warning">
              <AlertTriangle className="size-4" aria-hidden="true" />
              查看风险提醒
            </Link>
            <Link className="btn-secondary" href="/rankings">
              <Landmark className="size-4" aria-hidden="true" />
              平台资料库
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
