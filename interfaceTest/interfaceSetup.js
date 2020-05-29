const puppeteer = require("puppeteer");
const { expect } = require("chai");

const opts = {
  headless: false,
  slowMo: 10,
  timeout: 0,
  args: ["--start-maximized"],
};

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

after(() => {
  browser.close();
});
