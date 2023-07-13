/*global page, userPage, document, pageNew, promisify, context, window*/

const { expect, assert } = require('chai');
const dayjs = require('dayjs');
const { request } = require('playwright');
const fs = require('fs');
let defaultTimeout = 50000;

exports.BaseAction = class BaseAction {

  /**
   * function to type 
   * @param {string} locator - locator of element
   * @param {string} value - text to type
   * @param {string} [type=''] - type of page
   * @returns {void} nothing
   */
  async type(locator, value, type = '') {
    if (type === 'newWindow') {
      await userPage.locator(locator).isVisible({ timeout: defaultTimeout });
      await this.wait(2);
      await userPage.fill(locator, value);
    }
    else {
      await page.locator(locator).isVisible({ timeout: defaultTimeout });
      await this.wait(2);
      await page.fill(locator, value);
    }
  }

  /**
   * function to type in frame
   * @param {string} locator - locator of element
   * @param {string} value - text to type
   * @param {string} iframe - locator of iframe
   * @returns {void} nothing
   */
  async typeInIframe(iFrame, locator, value) {
    const ele = page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout });
    await ele.fill(value);
  }

  /**
   * function to click on element
   * @param {string} locator - locator of element
   * @param {string} [pageType=''] - type of page
   * @returns {void} nothing
   */
  async click(locator, pageType = '') {
    if (pageType === 'newTab') {
      await global.pageNew.click(locator, { timeOut: defaultTimeout });
    } else if (pageType == 'newWindow') {
      await global.userPage.click(locator, { timeOut: defaultTimeout });
    } else {
      await page.click(locator, { timeout: defaultTimeout });
    }
  }

  /**
   * function to click an element in iframe
   * @param {string} locator - locator of element
   * @param {string} iframe - locator of iframe
   * @returns {void} nothing
   */
  async clickInIframe(iFrame, locator) {
    const ele = page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout });
    await ele.scrollIntoViewIfNeeded();
    await ele.click();
  }

  /**
   * function to click on element forcefully
   * @param {string} locator - locator of element
   * @param {string} [type=''] - type of page
   * @returns {void} nothing
   */
  async forceClick(locator, type = '') {
    if (type === 'newWindow') {
      await global.userPage.evaluate((locator) => {
        let marketSelektor = document.querySelector(locator);
        if (marketSelektor != null) {
          marketSelektor.click({ force: true });
        }
      }, locator);
    } else {
      await page.locator(locator).click({ force: true });
    }
  }

  /**
   * function to generate alpha numeric string
   * @returns {string} - returns random string
   */
  userID_Alpha_Numeric() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  /**
   * function to select from dropdown with text
   * @param {string} locator - locator of element
   * @param {string} option - option to select
   * @returns {void} nothing
   */
  async dropdownOptionSelect(locator, option) {
    // Required to visible & take a count of dropdown
    await this.wait(4);
    let con = await page.locator(locator + '//option[text()="' + option + '"]').count() > 0;
    if (con === true) {
      let attr = await page.getAttribute(locator + '//option[text()="' + option + '"]', 'value');
      if (attr != option) {
        option = attr;
      }
    }

    await page.locator(locator).selectOption(option);
  }

  /**
   * function to match two strings
   * @param {string} locator - locator of element
   * @param {string} text1 - text to assert
   * @param {string} text2 - text to assert 
   * @returns {void} nothing
   */
  async containSubstring(text1, text2) {
    await expect(text1).contains(text2);
  }

  /**
   * function to validate element title contains that value
   * @param {string} locator - locator of element
   * @param {string} value - text
   * @returns {void} nothing
   */
  async shouldHasTitleValue(locator, value) {
    let element = await page.$(locator);
    let locatorValue = await element.getAttribute('title');
    expect(value).contains(locatorValue);
  }

  /**
   * function to check checkbox
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async checkboxIsChecked(locator) {
    return await page.isChecked(locator);
  }

  /**
   * function to verify element contains some text
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async shouldContainSomeText(locator) {
    await page.locator(locator).isVisible({ timeout: defaultTimeout });
    await page.locator(locator).innerText();
  }

  /**
   * function to verify element contains some text
   * @param {string} locator - locator of element
   * @param {string} iFrame - locator of iframe
   * @returns {void} nothing
   */
  async shouldContainSomeTextInIframe(iFrame, locator) {
    await page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout }).scrollIntoViewIfNeeded();
    const ele = page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout });
  }
  /**
   * function to get text from element
   * @param {string} locator - locator of element
   * @returns {string} return text inside element
   */
  async getText(locator, pageType = '') {
    if (pageType == 'newWindow') {
      await global.userPage.locator(locator).isVisible({ timeout: defaultTimeout });
      let textString = await global.userPage
        .locator(locator)
        .innerText({ timeout: defaultTimeout });
      return textString;
    } else {
      await page.locator(locator).isVisible({ timeout: defaultTimeout });
      let textString = await page.locator(locator).innerText({ timeout: defaultTimeout });
      return textString;
    }
  }

  /**
   * function to wait for response
   * @param {string} request - request url
   * @param {string} [type=''] - type of page
   * @returns {void} nothing
   */
  async waitForResponse(request, type = '') {
    if (type === 'newWindow')
      await global.userPage.waitForResponse(request, { timeout: defaultTimeout });
    else
      await page.waitForResponse(request, { timeout: defaultTimeout });
  }

  /**
   * function to get current date
   * @returns {string} returns date
   */
  async getCurrentDate() {
    return dayjs().format('DD-MM-YYYY');
  }

  /**
   * function to click first element of similar locators 
   * @param {string} locator - locator of element
   * @param {boolean} [isForce=false] - forcefully
   * @returns {void} nothing
   */
  async clickFirstElement(locator, isForce = false) {
    await page.locator(locator).first().click({ force: isForce });
  }

  /**
   * function to click last element of similar locators 
   * @param {string} locator - locator of element
   * @param {string} [isForce=false] - forcefullt
   * @returns {void} nothing
   */
  async clickLastElement(locator, isForce = false) {
    await page.locator(locator).last().click({ force: isForce });
  }

  /**
   * function to send logs
   * @param {string} data - text
   * @returns {string} text data
   */
  async log(data) {
    await console.log(data);
    return true;
  }

  /**
   * function to scroll into element
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async scrollIntoElement(locator) {
    await page.locator(locator).scrollIntoViewIfNeeded();
  }

  async scrollIntoElementInIframe(iFrame, locator) {
    await page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout }).scrollIntoViewIfNeeded();
  }

  /**
   * function to scroll into element
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async scrollIntoElementInIframe(iFrame, locator) {
    await page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout }).scrollIntoViewIfNeeded();
  }

  /**
   * function to vaidate and then check checkbox
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async checkToCheckbox(locator) {
    await page.waitForSelector(locator);
    await page.locator(locator).isVisible({ timeOut: defaultTimeout });
    const flag = await page.isChecked(locator);
    if (!flag) {
      await page.check(locator);
    }
  }

  /**
   * function to validate and then uncheck checkbox
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async uncheckToCheckbox(locator) {
    await page.waitForSelector(locator);
    await page.locator(locator).isVisible({ timeOut: defaultTimeout });
    const flag = await page.isChecked(locator);
    if (flag) {
      await page.uncheck(locator);
    }
  }

  /**
   * function to get value of input text
   * @param {string} locator - locator of element
   * @returns {string} text value
   */
  async getValueFromTextInput(locator) {
    let element;
    element = await page.$eval(locator, el => el.value);
    return element;
  }

  /**
   * function to verify text in element
   * @param {string} locator - locator of element
   * @param {string} text - text
   * @param {string} [type=''] - type of page
   * @returns {void} nothing
   */
  async shouldContainText(locator, text, type = '') {
    if (type === 'newWindow') {
      await userPage.locator(locator).isVisible({ timeout: defaultTimeout });
      let locatorText = await userPage.locator(locator).innerText();
      if (locatorText) {
        expect(locatorText).contains(text);
      }
    }
    else {
      await page.locator(locator).isVisible({ timeout: defaultTimeout });
      let locatorText = await page.locator(locator).innerText();
      expect(locatorText).contains(text);
    }
  }

  /**
   * function to verify element contains some text in iframe
   * @param {string} locator - locator of element
   * @param {string} text - text
   * @param {string} iFrame - locator of iframe
   * @returns {void} nothing
   */
  async shouldContainTextInIframe(iFrame, locator, text) {
    await page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout }).scrollIntoViewIfNeeded();
    const ele = page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout });
    const locatorText = await ele.innerText();
    expect(locatorText).contains(text);
  }

  /**
   * function to verify hidden and visiblity of new window
   * @param {string} locator - locator of element
   * @param {string} [type=''] - type of page
   * @returns {void} nothing
   */
  async shouldVisible(locator, type = '') {
    if (type === 'newWindow') {
      let frame = await global.userPage.locator(locator).isVisible({ timeout: defaultTimeout });
      assert.isTrue(frame);
    }
    else {
      let frame = await page.locator(locator).isVisible({ timeout: defaultTimeout });
      assert.isTrue(frame);
    }
  }

  /**
   * function to verify hidden and visiblity
   * @param {string} locator - locator of element
   * @param {boolean} visibility - visible or hidden
   * @returns {void} nothing
   */
  async verifyVisibility(locator, visibility) {
    let visible = await page.locator(locator).isVisible({ timeout: defaultTimeout });
    await expect(visible).to.equal(visibility);
  }

  async verifyVisibilityinIframe(iFrame, locator, visibility) {
    const visible = await page.frameLocator(iFrame).locator(locator).isVisible({ timeout: defaultTimeout });
    await expect(visible).to.equal(visibility);
  }

  async verifyelementIsHidden(locator, visibility) {
    let visible = await page.locator(locator).isHidden({ timeout: defaultTimeout });
    await expect(visible).to.equal(visibility);
  }

  /**
   * function to check visibility of element in new and current window
   * @param {string} locator - locator of element
   * @param {string} [type=''] - type of page
   * @returns {void} nothing
   */
  async isVisible(locator, type = '') {
    let Is = '';
    if (type === 'newWindow') {
      Is = await userPage.locator(locator).first().isVisible({ timeout: defaultTimeout });
    }
    else {
      Is = await page.locator(locator).first().isVisible({ timeout: defaultTimeout });
    }
    return Is;
  }

  /**
   * function to check visibility of element in iframe
   * @param {string} locator - locator of element
   * @param {string} iFrame - locator of element
   * @returns {void} nothing
   */
  async isVisibleinIframe(iFrame, locator) {
    let Is = '';
    Is = await page.frameLocator(iFrame).locator(locator).first().isVisible({ timeout: defaultTimeout });
    return Is;
  }

  /**
   * function to open browser
   * @param {string} url - url endpoint
   * @returns {void} nothing
   */
  async openBrowser(url) {
    await page.goto(url, { timeout: 50000 });
    await page.waitForLoadState("load",{ timeout: 50000 });
  }

  /**
   * function to wait for seconds
   * @param {string} time - time in seconds to wait
   * @returns {void} nothing
   */
  async wait(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, (time * 1000));
    });
  }

  /**
   * function to verify control exists in element
   * @param {string} locator - locator of element
   * @returns {boolean} - boolean value for control
   */
  async isControlExist(locator) {
    try {
      await page.locator(locator).isVisible({ timeout: defaultTimeout });
      const lengthOfElement = await promisify(page.then($el => $el.length));
      return lengthOfElement !== 0;
    } catch (e) {
      return false;
    }
  }

  /**
   * function to verify control exists in iframe for element
   * @param {string} iFrame - locator of iFrame
   * @param {string} locator - locator of element
   * @returns {boolean} - boolean value for control
   */
  async isControlExistInFrame(iFrame, locator) {
    try {
      await page.frameLocator(iFrame).locator(locator).isVisible({ timeout: defaultTimeout });
      const lengthOfElement = await promisify(page.then($el => $el.length));
      return lengthOfElement !== 0;
    } catch (e) {
      return false;
    }
  }

  /**
   * function to get attributes of element
   * @param {string} locator - locator of element
   * @param {string} attributeName - attribute of element
   * @returns {string} - attribute of element
   */
  async getAttributeElement(locator, attributeName) {
    await page.locator(locator).isVisible({ timeout: defaultTimeout });
    const attributeOfElement = await page.locator(locator).getAttribute(attributeName);
    return attributeOfElement.toString();
  }

  /**
   * function to get attributes of element in iframe
   * @param {string} locator - locator of element
   * @param {string} iFrame - locator of iframe
   * @param {string} attributeName - attribute of element
   * @returns {string} - attribute of element
   */
  async getAttributeElementInIframe(iFrame, locator, attributeName) {
    const ele = await page.frameLocator(iFrame).locator(locator).getAttribute(attributeName);
    return ele.toString();
  }

  /**
   * function to count elements
   * @param {string} locator - locator of element
   * @returns {number} length
   */
  async countElement(locator) {
    let lengthOfElement = await page.locator(locator).count();
    return lengthOfElement;
  }

  /**
   * function to get random string
   * @param {string} string - string to concat
   * @returns {string} random string
   */
  async getRandomString(string) {
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result += string;
  }

  /**
   * function to trigger mouse over element 
   * @param {string} locator - locator of element
   * @param {string} [type=''] - type of page
   * @returns {void} nothing
   */
  async mouseOver(locator, type = '') {
    if (type === 'newWindow') {
      await userPage.locator(locator).isVisible({ timeout: defaultTimeout });
      await userPage.locator(locator).hover();
    }
    else {
      await page.locator(locator).isVisible({ timeout: defaultTimeout });
      await page.locator(locator).hover();
    }
  }

  /**
   * function to press keyboard key
   * @param {string} key - key name to press
   * @param {string} [type=''] - type of page
   * @returns {void} nothing
   */
  async pressKey(key, type = '') {
    if (type === 'newWindow') {
      await userPage.keyboard.press(key);
    }
    else {
      await page.keyboard.press(key);
    }
  }
  /**
   * function to upload file 
   * @param {string} locator - locator of element
   * @param {string} filePath - filepath as string
   * @returns {void} nothing
   */
  async uploadFile(locator, filePath) {
    await page.waitForSelector(locator);
    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.waitForSelector(locator),
      page.locator(locator).click(),
    ]);
    await fileChooser.setFiles(filePath);
  }

  /**
   * function to browse file and upload
   * @param {string} locator - locator of element
   * @param {string} fileName - filename as string
   * @param {string} [newTab=''] - type of page
   * @returns {void} nothing
   */
  async browseFile(locator, fileName, newTab = '') {
    if (newTab === 'newTab') {
      await pageNew.setInputFiles(locator, fileName);
    } else {
      await page.setInputFiles(locator, fileName);
    }
  }

  /**
   * function to type in hidden text box
   * @param {string} locator - locator of element
   * @param {string} value - text to type
   * @returns {void} nothing
   */
  async typeInHiddenTextBox(locator, value) {
    await page.locator(locator).last().type(value);
  }

  /**
   * function to drag and drop elements
   * @param {string} sourceLocator - locator to be dragged
   * @param {string} targetLocator - locator of element where to drag
   * @returns {void} nothing
   */
  async dragAndDrop(sourceLocator, targetLocator) {
    const originElement = await page.waitForSelector(sourceLocator);
    const destinationElement = await page.waitForSelector(targetLocator);
    await originElement.hover();
    await page.mouse.down();
    const box = (await destinationElement.boundingBox());
    await page.mouse.move(box.x + box.width, box.y + 5);
    await destinationElement.hover();
    await page.mouse.up();
  }

  /**
   * function to verify file has downloaded 
   * @param {string} locator - locator of element
   * @param {string} fileName - filename as string
   * @returns {void} nothing
   */
  async verifyDownloadableFile(locator, fileName) {
    await page.locator(locator).isVisible({ timeout: defaultTimeout });
    await page.invoke('attr', 'href')
      .then(href => {
        page.downloadFile(href, 'downloads', fileName);
      });
    return true;
  }

  /**
   * function to open new tab
   * @param {string} url - url to open in new tab
   * @returns {void} nothing
   */
  async openNewTab(url) {
    global.pageNew = await context.newPage();
    await pageNew.goto(url, { waitUntil: 'networkidle' });
  }

  /**
   * function to wait for selector to apppear
   * @param {string} selector - selector of element
   * @param {number} timeOut - time to wait
   * @param {string} [pageType=''] - type of page
   * @returns {void} nothing
   */
  async waitForSelector(selector, pageType = '', timeOut = defaultTimeout) {
    if (pageType === 'newTab') {
      await global.pageNew.waitForSelector(selector, { timeout: timeOut });
    }
    else if (pageType === 'newWindow') {
      await global.userPage.waitForSelector(selector, { timeout: timeOut });
    }
    else {
      await page.waitForSelector(selector, { timeout: timeOut });
    }
  }

  /**
   * function to verify element exists in dom
   * @param {string} locator - locator of element
   * @returns {boolean} true if element exist and vice versa
   */
  async isElementExist(locator) {
    return await page.$$(locator);
  }

  /**
   * function to clear text input
   * @param {string} locator - locator of element
   */
  async clearField(locator) {
    await page.fill(locator, '');
  }

  /**
   * function to clear text input in iframe
   * @param {string} locator - locator of element
   */
  async clearFieldInIframe(iFrame, locator) {
    const ele = page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout });
    await ele.fill('');
  }

  /**
   * function to count total element 
   * @param {string} locator - locator of element
   * @param {number} countShouldBe - length
   * @returns {boolean} return assertion
   */
  async countTotalElementsCompare(locator, countShouldBe) {
    let countEle = await page.locator(locator).count();
    if (countEle >= countShouldBe) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * function to switch between tab
   * @param {string} [pageType=''] - type of page
   * @returns {void} nothing
   */
  async switchTab(index = 1) {
    let pages = await context.pages();
    global.page = await pages[index]
  }

  /**
   * function to verify counters increment
   * @param {string} Pcounter - previous counter value
   * @param {string} Ncounter - new counter value
   * @returns {void} nothing
   */
  async verifyGreaterThan(Pcounter, Ncounter) {
    await assert.isTrue(Pcounter < Ncounter);
  }

  /**
   * function to verify counter less than
   * @param {string} Pcounter - previous counter
   * @param {string} Ncounter - new counter
   * @returns {void} nothing
   */
  async verifyLessThan(Pcounter, Ncounter) {
    await assert.isTrue(Pcounter > Ncounter);
  }

  /**
   * function to verify counter less than or equal to
   * @param {string} Pcounter - previous counter
   * @param {string} Ncounter - new counter
   * @returns {void} nothing
   */
  async verifyLessThanEqualTo(Pcounter, Ncounter) {
    await assert.isTrue(Pcounter >= Ncounter);
  }

  /**
   * function to check checkbox
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async checkBox(locator) {
    await page.check(locator);
  }

  /**
   * function to verify mail recieved
   * @param {string} sentToEmail - email id
   * @param {string} subject - subject text
   * @returns {void} nothing
   */
  async mailCheck(sentToEmail, subject) {
    console.log('sentToEmail=', sentToEmail);
    console.log('subject=', subject);
    // Access mail using api-key
    const Getnada = await request.newContext({
      baseURL: 'https://getnada.com/api/v1/'
    });
    // Required to wait till mail received at destination
    await this.wait(20);
    let response = Getnada.get('inboxes/' + sentToEmail + '');

    (await response).json().then((data) => {
      console.log((data.msgs[0].s).includes(subject));
      let subjectData = data.msgs[0].s.includes(subject);
      assert.isTrue(subjectData);
      console.log(data.msgs[0].fe);
      console.log(data.msgs[0].rf);
    });
  }

  /**
   * function to verify download event was triggered
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async verifyDownload(locator) {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.click(locator)
    ]);

    const path = await download.path();
    await this.containSubstring(download.suggestedFilename(), '.csv');

    await download.saveAs(download.suggestedFilename());

    try {
      if (fs.existsSync(path)) {
        //file exists
        const newFile = await fs.readFileSync(path);
        console.log(newFile);
      }
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * read csv and return data in array
   * @param {*} csvName 
   * @returns 
   */
  async readCsv(csvName) {
    // Reads the CSV file and saves it  
    let dataInCSV = [];
    const csvPath = process.cwd() + '\\' + csvName;
    console.log(csvPath);

    let data = fs.readFileSync(csvPath)
      .toString() // convert Buffer to string
      .split('\n') // split string to lines
      .map(e => e.trim()); // remove white spaces for each line

    // Start of for loop, to loop through csv file
    for (const entry of data) {
      // First csv file item sent to console
      console.log(entry);
      //   // Do whatever else you need
      dataInCSV.push(entry);
    }
    return dataInCSV;
  }

  /**
   * function to check checkbox
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async checkCheckbosIsChecked(locator) {
    return await page.isChecked(locator);
  }

  /**
   * function to select options
   * @param {string} locator - locator of element
   * @param {string} indexValue - index in dropdown
   * @returns {void} nothing
   */
  async selectOption(locator, indexValue) {
    const dropdown = await page.$(locator);
    await dropdown.selectOption({ index: indexValue });
  }

  /**
   * function to assert two strings
   * @param {string} text1 - text
   * @param {string} text2 - text
   * @returns {void} nothing
   */
  async shouldHasText(text1, text2) {
    assert.equal(text1, text2);
  }

  /**
   * function to wait for redirections
   */
  async waitForNavigation() {
    await page.setDefaultTimeout(defaultTimeout);
    await page.waitForNavigation('networkidle', { timeout: defaultTimeout });
  }

  /**
   * function to generate random string
   * @returns {string} returns random string
   */
  generateRandomMessage() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return 'This is a test message ' + text;
  }

  /**
   * function to select option by value
   * @param {string} locator - locator of element
   * @param {string} value - select value
   * @returns {void} nothing
   */
  async selectOptionByValue(locator, value) {
    await page.locator(locator).selectOption(value);
  }

  /**
   * function to check if checkbox is checked
   * @param {string} locator - locator of element
   * @returns {boolean} return value if checked
   */
  async isChecked(locator) {
    const checked = await page.locator(locator).isChecked();
    return checked;
  }


  /**
   * function to count total elements with same selectors
   * @param {string} locator - locator of element
   * @param {string} countShouldBe - length
   * @returns {boolean} assertion value
   */
  async countTotalElements(locator, countShouldBe) {
    let countEle = await page.locator(locator).count();
    if (countEle === countShouldBe) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * function to slide element
   * @param {string} sourceLocator - locator of element
   * @param {string} targetLocator - locator of target element
   * @param {string} target - target type
   * @param {string} timeout - time to wait
   * @returns {void} nothing
   */
  async slider(sourceLocator, targetLocator, target, timeout = 2) {
    const d = new Date();
    let hour = d.getHours();
    const originElement = await page.waitForSelector(sourceLocator);
    const destinationElement = await page.waitForSelector(targetLocator);
    await originElement.hover();
    await page.mouse.down();
    await this.wait(timeout);
    const box = (await destinationElement.boundingBox());
    if (target === 'outOfSchedule') {

      if (hour < 12) {
        await page.mouse.move(box.x + box.width - 50, box.y + box.height);
      }
      else {
        await page.mouse.move(box.x + box.width + 50, box.y + box.height);
      }
    }
    if (target === 'exception') {
      hour = hour - 6;
      await page.mouse.move(box.x + box.width + ((hour) * 20), box.y + box.height);
    }
    if (target === 'reset') {
      if (hour < 12) {

        await page.mouse.move(box.x, box.y + box.height);
      }
      else {

        await page.mouse.move(box.x + 20, box.y + box.height);
      }
    }
    await page.mouse.up();


  }

  /**
   * function to get inner text of element
   * @param {string} locator - locator of element
   * @returns {string} element text
   */
  async getTexts(locator) {
    await page.locator(locator).isVisible({ timeout: defaultTimeout });
    const textString = await page.locator(locator).innerText();
    return textString;
  }

  /**
   * function to select option by text
   * @param {string} locator - locator of element
   * @param {string} text - text
   * @returns {void} nothing
   */
  async selectOptionByText(locator, text) {
    await page.selectOption(locator, { label: `${text}` });
  }

  /**
   * function to get the checked status of toggle button
   * @param  {string} locator - locator of element
   * @returns {boolean} status of toggle button
   */
  async getToggleButtonStatus(locator) {
    const result = await page.evaluate(locator => document.querySelector(locator).checked, locator);
    return result;
  }

  /**
  * function to wait for element by retrying
  * @param {string} ele - click on element
  * @param {string} eleVisible - verify the visibility of element
  * @param {string} count - in loop
  * @returns {string} random string
  */
  async getFutureDate(numberOfDaysToAdd) {
    let someDate = new Date();
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    return someDate.toLocaleDateString('en-GB');
  }

  /**
   * function to click an element in iframe forcefully
   * @param {string} locator - locator of element
   * @returns {void} nothing
   */
  async forceClickInIframe(iFrame, locator) {
    const ele = page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout });
    await ele.scrollIntoViewIfNeeded();
    await ele.click({ force: true });
  }

  /**
   * function to setinput files in iframe
   * @param {string} locator - locator of element
   * @param {string} iFrame - locator of iframe
   * @returns {void} nothing
   */
  async setInputFilesinIframe(iFrame, locator, file) {
    const ele = await page.frameLocator(iFrame).locator(locator, { timeout: defaultTimeout });
    await ele.setInputFiles(file);
  }

  async generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 899999 + 100000);
    return "ZA" + randomNumber + "A";
  };

};