/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');
const { salesforce } = require('../../fixtures/data.json');

exports.Login = class Login extends BaseAction {
  constructor() {
    super();
  }
  /**
   * Creating elements object for initializing required locators
   */
  elements = {
    username: '[id="username"]',
    password: '[id="password"]',
    searchBar: 'button[aria-label="Search"]',
    verifyLogin: '[id="Login"]'
  };
  /**
   * function to go to url
   * @param {string} url - URL which we will redirect to
   * @return {void} Nothing
   */
  async goTo(url) {
    await this.openBrowser(url);
    await this.wait(5)
  }

  /**
   * function to login to the page
   * @return {void} Nothing
   */
  async logintoSalesforce() {
    await this.wait(2)
    await this.verifyVisibility(this.elements.username, true)
    await this.verifyVisibility(this.elements.password, true)
    await this.type(this.elements.username, salesforce.account.username)
    await this.type(this.elements.password, process.env.SALESFORCE_TEST_PASSWORD)
    await this.click(this.elements.verifyLogin)
    await page.waitForLoadState("load",{ timeout: 50000 });
    await this.waitForSelector(this.elements.searchBar)
  }
};
