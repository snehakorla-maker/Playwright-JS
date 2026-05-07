const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    recordVideo: {
        dir: 'videos'
    }
});
  const page = await context.newPage();
  await page.goto('https://www.wikipedia.org/');
  await page.getByText('Wikipedia The Free Encyclopedia English 7,166,000+ articles 日本語 1,497,000+ 記事').click();
  await page.getByText('Wikipedia The Free Encyclopedia English 7,166,000+ articles 日本語 1,497,000+ 記事').click();
  await page.getByRole('link', { name: 'English 7,166,000+ articles' }).click();
  await page.locator('a').filter({ hasText: 'Ornithoprion' }).click();
  await page.getByRole('link', { name: 'Greek' }).click();
  await page.screenshot({path: 'wiki_screen.png'})

  // ---------------------
  await context.close();
  await browser.close();
})();