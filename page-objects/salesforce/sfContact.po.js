/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');
exports.sfContact = class sfContact extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        email: 'button[title="Email"]',
        insertBtn: '//a[@role="button"]//div[@class="tooltip-trigger uiTooltip"]',
        assignMail: '//button[@title="Assign email (auto-transfer intro)"]',
        sendBtn: '//button[@class="slds-button slds-button--brand cuf-publisherShareButton  send uiButton"]',
        tempFolder: '//div[@class="slds-list__item slds-m-right--large"]//select[@class="templateInputs select"]',
        introandUpdates: '//select/option[text()="1. Intro and Updates"]',
        insertTemplate: '//a[@title="Insert a template..."]',
        mailSentMsg: 'div[data-key="success"]',
        clickOnMore: '//div[@class="slds-tabs_card"]//a[@role="button"][text()="More"]',
        scrollToPersonal: '(//div[@class="slds-col slds-has-flexi-truncate firstHeaderRow"])[2]',
        contactName: '//span[@title="Account"]',
        moreTab: '//li[@data-target-reveals="NewEventTab,SendEmailTab"]//a[@role="button"]',
        filesTab: '//a[@data-label="Files"]',
        uploadButton: '//label[@for="front-page"]',
        documentDropDown: '//input[@placeholder="Select policy"]',
        iframe: '//iframe[contains(@src,"https://salesforce-git-master-raindrop-tech.vercel.app/user/details-panel/files/")]',
        uplodadeTime: '(//div[@class="MuiDataGrid-cellContent"])[1]',
        orderIcon: '(//div[@data-field="uploadedAt"])[1]',
        genericUpdateEmail: '//button[@title="Generic update email"]'
    };

    /**
     * function for opening person account
     * @return {void} Nothing
     */
    async openCustomerAccount() {
        await this.waitForSelector(this.elements.contactName + ' >> nth=1 ')
        await this.verifyVisibility(this.elements.contactName + ' >> nth=1 ', true)
        await this.forceClick(this.elements.contactName + ' >> nth=1 ')
        await this.wait(7)
    }

    /**
     * function for click on email
     * @return {void} Nothing
     */
    async clickOnEmail() {
        await this.click(this.elements.email)
    }

    /**
    * function for click on insert and update button
    * @return {void} Nothing
    */
    async clickOnInsertandUpdateBtn() {
        await this.waitForSelector(this.elements.insertBtn)
        await this.verifyVisibility(this.elements.insertBtn, true)
        await this.click(this.elements.insertBtn)
        await this.wait(4)
        await this.waitForSelector(this.elements.insertTemplate)
        await this.forceClick(this.elements.insertTemplate)
    }

    /**
    * function for select assign email and send the email
    * @return {void} Nothing
    */
    async selectAssignEmailAndSendEmail() {
        await this.waitForSelector(this.elements.tempFolder)
        await this.verifyVisibility(this.elements.tempFolder, true)
        await this.click(this.elements.tempFolder)
        await this.forceClick(this.elements.assignMail)
        await this.verifyVisibility(this.elements.sendBtn, true)
        await this.click(this.elements.sendBtn)
        await this.wait(2)
        await this.isVisible(this.elements.mailSentMsg)
    }

    /**
    * function for select generic update email and send the email
    * @return {void} Nothing
    */
    async selectGenericUpdateEmailAndSendEmail() {
        await this.waitForSelector(this.elements.tempFolder)
        await this.verifyVisibility(this.elements.tempFolder, true)
        await this.click(this.elements.tempFolder)
        await this.forceClick(this.elements.genericUpdateEmail)
        await this.verifyVisibility(this.elements.sendBtn, true)
        await this.click(this.elements.sendBtn)
        await this.wait(2)
        await this.isVisible(this.elements.mailSentMsg)
    }

    /**
     * function for open file tab
     * @return {void} Nothing
     */
    async openFileTab() {
        await this.waitForSelector(this.elements.filesTab)
        await this.verifyVisibility(this.elements.filesTab, true)
        await this.click(this.elements.filesTab)
    }

    /**
    * function for selecting doucment type
    * @return {void} Nothing
    */
    async selectDocumentType() {
        await this.wait(6)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.documentDropDown, true)
        await this.clickInIframe(this.elements.iframe, this.elements.documentDropDown)
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
    }

    /**
    * function for uploading document
    * @return {void} Nothing
    */
    async uploadDocument() {
        await this.scrollIntoElementInIframe(this.elements.iframe, this.elements.uploadButton)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.uploadButton, true)
        await this.setInputFilesinIframe(this.elements.iframe, this.elements.uploadButton, 'fixtures/upload.png')
        await this.wait(1)
    }

    /**
    * function for verifying uploaded document
    * @return {void} Nothing
    */
    async verifyUploadDocument() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.orderIcon, true)
        await this.clickInIframe(this.elements.iframe, this.elements.orderIcon)
        await this.clickInIframe(this.elements.iframe, this.elements.orderIcon)
        const d = new Date()
        const date = d.toLocaleDateString('en-GB')
        const D1 = date.split("/");
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.uplodadeTime, D1[0])
    }
}