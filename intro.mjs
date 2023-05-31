import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: { width: 1920, height: 1080 },
  slowMo: 250,
  userDataDir: "temporary",
});

const page = await browser.newPage();
await page.goto("https://example.com", {
  waitUntil: "networkidle2",
  timeout: 60000,
});
await page.screenshot({ path: "example.com.png" });

await page.goto("https://devconfbd.com/");
await page.screenshot({ path: "devconfbd.png" });

await browser.close();
