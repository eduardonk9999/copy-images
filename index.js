const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  
  await page.goto('https://www.xn--frumnerd-v3a.com/2020/09/lista-toda-colecao-de-armaduras-do.html');
  
  const  imgList = await page.evaluate(() => {

    const nodeList = document.querySelectorAll('.item-post-padd img')

    const imgArray = [...nodeList]


    const list = imgArray.map(item => (item.currentSrc))

    return list

  })

  fs.writeFile('iron.json', JSON.stringify(imgList, null, 2), err => {
    if(err) throw new Error('deu ruim!!!')

    console.log('NICE!!!')
  })

  await browser.close();
})()