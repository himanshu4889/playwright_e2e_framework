const { BaseAction } = require('../../setup/baseAction');
exports.uploadProof = class uploadProof extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        proofOfName: '[href="/documents/proof-of-name-change"]',
        reuploadButton: 'button[data-testid="tid-btn-primary"]',
        uploadProof: 'input[id="front-page"]',
        verifyPONPage: '[text="Proof of name change upload"]',
        ponFrame: '.MuiGrid-item',
        backButton: 'button[data-testid="tid-btn-secondary"]',
        previewDocument: '[data-testid="CheckCircleIcon"]',
        nextButton: 'button[data-testid="tid-btn-primary"]',
        successfulMessage: '.MuiAlert-message',
        errorMessage: '.MuiFormHelperText-root',
        hamburgerMenu: '//*[@data-testid="MenuIcon"]/..',
        pensionTrackerTab: '[href="/pension-tracker"]',
        profileTab: '[href="/profile"]',
        logoutButton: '.MuiButton-outlinedPrimary[type="button"]',
        dashboardHeading: '.MuiTypography-body1',
        addNewPensionButton: '[href="/pension-search"]',
        addPensionButton: 'button[data-testid="tid-btn-grey"]'
    }

    /**
    * function for go to the upload proof of name change page
    * @return {void} Nothing
    */
    async gotoUploadProofOfNamePage() {
        await this.wait(5)
        await this.scrollIntoElementInIframe(this.elements.iframe, this.elements.addPensionButton + '>>nth=2')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.proofOfName, true)
        await this.wait(5)
        await this.forceClickInIframe(this.elements.iframe, this.elements.proofOfName)
        await this.wait(1)
    }

    /**
    * function for verify the upload proof of name page
    * @return {void} Nothing
    */
    async verifyUploadPONpage() {
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.verifyPONPage, "Proof of name change upload")
        await this.wait(2)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.ponFrame + '>>nth=0', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.reuploadButton, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.backButton, true)
    }

    /**
    * function for upload the document
    * @return {void} Nothing
    */
    async uploadPONdocument() {
        await this.clickInIframe(this.elements.iframe, this.elements.backButton)
        await this.clickInIframe(this.elements.iframe, this.elements.reuploadButton)
        await this.setInputFilesinIframe(this.elements.iframe, 'input[type="file"]', 'fixtures/upload.png')
    }

    /**
    * function for verify document is uploaded or not
    * @return {void} Nothing
    */
    async verifyUploadPONdocument() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.previewDocument, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.reuploadButton + '>>nth=0', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.nextButton, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.backButton + '>>nth=1', true)
        await this.clickInIframe(this.elements.iframe, this.elements.nextButton)
    }

    async verifySuccessmessage() {
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.successfulMessage, "You have successfully uploaded your proof of name change.")
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
}