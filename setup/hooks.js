const playwright = require('playwright');
const { setWorldConstructor, World, BeforeAll, Before, After, AfterAll, Status, setDefaultTimeout } = require('@cucumber/cucumber');
const { webkit } = require('playwright');

class CustomWorld extends World{
  async setTestStatus(status, remark) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status, remark } })}`)
  }
}

setDefaultTimeout(60 * 8* 1000);

let headlessValue = false;

// Launch options.
const options = {
  headless: headlessValue,
  slowMo: 100,
  channel: 'chrome', // or 'msedge'
};

// Create a global browser for the test session.
BeforeAll(async () => {
  console.log('before all ...');
});

AfterAll(async () => {
  console.log('after all ...');
});

// Create a fresh browser context for each test.
Before(async (scenario) => {
  console.log('before ...');
  
  // Enable for local execution
  // global.browser = await playwright['chromium'].launch(options);

  const capabilities = {
    'browserName': process.env.LT_BROWSER_NAME || "Chrome", // Browsers allowed: `pw-webkit`, `MicrosoftEdge`, `pw-pw-webkit`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': process.env.LT_PLATFORM || "MacOS Big sur",
      'build': 'BUILD_NAME_RAINDROP',
      'name': scenario.pickle.name,
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true,
      'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
      'tunnelName': '' // Optional
    }
  }
  // For running the test execution on Lambdatest
  if(process.env.LT_BROWSER_SERVER.indexOf("webkit") >= 0){
    global.browser = await playwright.webkit.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })
  }
  else if (process.env.LT_BROWSER_SERVER.indexOf("msedge") >= 0){
    global.browser = await playwright.chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })
  }
  else
    global.browser = await playwright.chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })

  global.context = await global.browser.newContext({ viewport: { width: parseInt(process.env.LT_SCREEN_RESOLUTION_WIDTH) || 1000, height: parseInt(process.env.LT_SCREEN_RESOLUTION_HEIGHT) || 600 } });
  global.page = await global.context.newPage();
});


After(async () => {
  await global.browser.close();
});

setWorldConstructor(CustomWorld);