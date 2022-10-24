const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.xn--frumnerd-v3a.com/2020/09/lista-toda-colecao-de-armaduras-do.html');
  await page.evaluate(() => {
    const nodeList = document.querySelectorAll('.item-post-padd img')
    const imgArray = [...nodeList]


    const testeArray = imgArray.map(item => {
      return item.currentSrc
    })

    console.log(testeArray)

   

    // console.log(listImgs)
  })
  // await browser.close();
})()