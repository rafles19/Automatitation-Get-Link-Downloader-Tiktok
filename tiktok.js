const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      args: [
        "--start-maximized",
        "--disable-popup-blocking",
        "--allow-popups-during-page-unload"
    ]
  });
  
  const page = await browser.newPage();

 
  await page.goto('https://ssstik.io/');
  await page.waitForSelector('#main_page_text');
  await page.type('#main_page_text',"https://vt.tiktok.com/ZSJ7uhfwd/");
  await page.waitForTimeout(4000);
  await page.click('#_gcaptcha_pt > div.pure-u-1.pure-u-sm-6-24');
  await page.waitForTimeout(4000);
  const link = await page.$eval('#mainpicture > div > a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark_direct', element => element.href);
  console.log(link);
  //await page.waitForSelector('#mainpicture > div > a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark_direct');
  //await page.click('#mainpicture > div > a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark_direct');
  //const chain = response.request().redirectChain();
  //console.log(chain.length); // 1
  //console.log(chain[0].url()); // 'http://example.com'
  //await page.keyboard.type('https://vt.tiktok.com/ZSJ7uhfwd/');
  //await waitForTimeout(3000);
  //await page.screenshot({path: 'screenshot.png'});
  
  await browser.close();
})();