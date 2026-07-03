import { createServer } from "node:http";
import { existsSync, createReadStream, statSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const shotDir = process.env.UI_SCREENSHOT_DIR
  ? path.resolve(process.env.UI_SCREENSHOT_DIR)
  : path.join(root, "artifacts", "screenshots");
const port = Number(process.env.UI_SCREENSHOT_PORT || 3058);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const clean = decoded === "/" ? "/index.html" : decoded;
  const direct = path.join(outDir, clean);
  const html = path.join(outDir, `${clean}.html`);
  const nested = path.join(outDir, clean, "index.html");
  if (existsSync(html)) return html;
  if (existsSync(nested)) return nested;
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  return path.join(outDir, "404.html");
}

async function withServer(run) {
  const server = createServer((req, res) => {
    const file = resolveFile(req.url || "/");
    const ext = path.extname(file);
    res.setHeader("Content-Type", contentTypes[ext] || "application/octet-stream");
    createReadStream(file)
      .on("error", () => {
        res.statusCode = 404;
        res.end("Not found");
      })
      .pipe(res);
  });

  await new Promise((resolve) => server.listen(port, "127.0.0.1", resolve));
  try {
    await run();
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

async function capture(page, name, url, viewport) {
  await page.setViewportSize(viewport);
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts?.ready);
  await page.waitForTimeout(350);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  const file = path.join(shotDir, `${name}.png`);
  await page.screenshot({ path: file, fullPage: name.includes("mobile") });
  return { name, file, overflow };
}

await mkdir(shotDir, { recursive: true });

const executablePath = existsSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
  ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  : undefined;

await withServer(async () => {
  const browser = await chromium.launch({ headless: true, executablePath });
  const page = await browser.newPage();
  const base = `http://127.0.0.1:${port}`;
  const results = [];

  results.push(await capture(page, "home-desktop", `${base}/`, { width: 1440, height: 1100 }));
  results.push(await capture(page, "home-mobile", `${base}/`, { width: 390, height: 1100 }));
  results.push(await capture(page, "category-page", `${base}/category/esports-betting`, { width: 1440, height: 1100 }));
  results.push(await capture(page, "article-page", `${base}/article/esports-market-risk-checklist`, { width: 1440, height: 1200 }));
  results.push(await capture(page, "platform-page", `${base}/platform/northstar-review`, { width: 1440, height: 1200 }));
  results.push(await capture(page, "rankings-page", `${base}/rankings`, { width: 1440, height: 1200 }));

  await browser.close();
  console.table(results);
});
