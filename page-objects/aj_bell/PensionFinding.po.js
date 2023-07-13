const { BaseAction } = require('../../setup/baseAction');
exports.Iapf = class Iapf extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        addPensionButton: 'a[href="/pension-search"]',
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        submitButton: 'button[data-testid="tid-btn-submit"]',
        doneButton: 'button[data-testid="tid-btn-primary"]',
    }

    /**
     * function for go to the add new pension page
     * @return {void} Nothing
    */
    async clickOnAddNewPension() {
        await this.wait(2)
        await this.scrollIntoElementInIframe(this.elements.iframe, ".card-header" + '>>nth=0')
        await this.waitForSelector(this.elements.iframe, this.elements.addPensionButton)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.addPensionButton, true)
        await this.clickInIframe(this.elements.iframe, this.elements.addPensionButton)
    }

    /**
     * function for submit the pension finding request
     * @return {void} Nothing
     */
    async submitRequest() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.submitButton, true)
        await this.clickInIframe(this.elements.iframe, this.elements.submitButton)
        await this.wait(6)
        await this.waitForSelector(this.elements.iframe, this.elements.doneButton + ' >> nth=1')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.doneButton + ' >> nth=1', true)
        await this.clickInIframe(this.elements.iframe, this.elements.doneButton + ' >> nth=1')
    }

}