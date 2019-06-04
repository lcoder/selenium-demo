const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build() ,
    searchKeyWord = `自动化测试方案`
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys( searchKeyWord , Key.RETURN);
    await driver.wait(until.titleIs(`${searchKeyWord} - Google Search`), 1100);
  } finally {
    await driver.quit();
  }
})();