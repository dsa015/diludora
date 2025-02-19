import puppeteer from "puppeteer";

export type ScrapedStore = {
  names: string[];
  links: string[];
  images?: string[];
};

export const getListOfStores = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto("https://mattilbud.no/", { waitUntil: "domcontentloaded" });

  // Wait for the UL element to appear
  await page.waitForSelector("ul");

  // Extract data
  const items = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("ul li")).map((li) => {
      const link = li.querySelector("a")?.getAttribute("href") || "";
      const name = li.querySelector("h2")?.textContent?.trim() || "";
      const img = li.querySelector("img")?.getAttribute("src") || "";
      return { name, link, img };
    });
  });

  await browser.close();

  return items;
};
