const { BaseAction } = require('../../setup/baseAction');
exports.uploadPOA = class uploadPOA extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        poaButton: '[href="/documents/proof-of-address"]',
        reuploadButton: 'button[data-testid="tid-btn-primary"]',
        backButton: 'button[data-testid="tid-btn-secondary"]',
        verifyPOAPage: 'h1[text="Proof of address upload"]',
        poaFrame: '.MuiGrid-item',
        previewDocument: '[data-testid="CheckCircleIcon"]',
        nextButton: 'button[data-testid="tid-btn-primary"]',
        successfulMessage: '.MuiAlert-message',
        pensionTrackerTab: '[href="/pension-tracker"]',
        profileTab: '[href="/profile"]',
        logoutButton: '.MuiButton-outlinedPrimary[type="button"]',
        dashboardHeading: '.MuiTypography-body1',
        errorMessage: '.MuiFormHelperText-root',
        hamburgerMenu: '//*[@data-testid="MenuIcon"]/..'
    }

    /**
    * function for verify dashboard page
    * @return {void} Nothing
    */
    async verifyDashboardPage() {
        await this.wait(5)
        if(await this.isVisibleinIframe(this.elements.iframe, this.elements.hamburgerMenu)){
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.hamburgerMenu, true)
        }
        else{
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.pensionTrackerTab, true)
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.profileTab, true)
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.logoutButton, true)    
        }
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.dashboardHeading + '>>nth=0', "Your pension-finding dashboard")
    }

    /**
    * function for go to the upload poa page
    * @return {void} Nothing
    */
    async gotoUploadPOA() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.poaButton, true)
        await this.clickInIframe(this.elements.iframe, this.elements.poaButton)
    }

    /**
    * function for verify the upload poa page
    * @return {void} Nothing
    */
     async verifyUploadPOApage() {
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.verifyPOAPage, "Proof of address upload")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.poaFrame + '>>nth=0', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.reuploadButton, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.backButton, true)
    }

    /**
    * function for upload the document
    * @return {void} Nothing
    */
    async uploadPOAdocument() {
        await this.clickInIframe(this.elements.iframe, this.elements.backButton)
        await this.clickInIframe(this.elements.iframe, this.elements.reuploadButton)
        await this.setInputFilesinIframe(this.elements.iframe, 'input[type="file"]', 'fixtures/upload.png')
    }

    /**
    * function for verify document is uploaded or not
    * @return {void} Nothing
    */
    async verifyUploadPOAdocument() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.previewDocument, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.reuploadButton + '>>nth=0', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.nextButton, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.backButton + '>>nth=1', true)
        await this.clickInIframe(this.elements.iframe, this.elements.nextButton)
    }

    async verifySuccessmessage() {
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.successfulMessage, "You have successfully uploaded the proof of address.")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.nextButton, true)
        await this.clickInIframe(this.elements.iframe, this.elements.nextButton)
    }

    /**
    * function for verify the validation error
    * @return {void} Nothing
    */
    async verifyValidationError() {
        await this.clickInIframe(this.elements.iframe, this.elements.reuploadButton)
        await this.setInputFilesinIframe(this.elements.iframe, 'input[type="file"]', 'fixtures/ajbell.webm')
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.errorMessage, "Please choose a file less than 4 MB")
        await this.wait(2)
    }
}