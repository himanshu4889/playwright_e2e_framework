/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');
exports.profile = class profile extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        profileTab: 'a[href="/profile"]',
        personalDetailsTab: '.MuiTab-textColorPrimary[role="tab"]',
        personalDetails: '[role="tabpanel"] .MuiTypography-root',
        securityDetails: '.MuiTab-textColorPrimary[role="tab"]',
        addButton: '.MuiButton-greyPrimary',
        mobileNumber: '.MuiInputBase-inputAdornedStart',
        saveButton: 'button[data-testid="tid-btn-primary"]',
        editMobileButton: '.MuiButton-greyPrimary',
        successMessage: '.MuiAlert-message',
        mobileProfileTab: '[role="menuitem"] .MuiTypography-root',
        hamburgerMenu: '//*[@data-testid="MenuIcon"]/..'
    }

    /**
     * function for going to the profile page
     * @return {void} Nothing
     */
    async goToProfilePage() {
        await this.wait(5)
        if (await this.isVisibleinIframe(this.elements.iframe, this.elements.hamburgerMenu)) {
            await this.clickInIframe(this.elements.iframe, this.elements.hamburgerMenu);
            await this.wait(2)
            await this.forceClickInIframe(this.elements.iframe, this.elements.mobileProfileTab + ' >> nth=1')
            await this.wait(2)
        }
        else {
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.profileTab, true)
            await this.clickInIframe(this.elements.iframe, this.elements.profileTab)
            await this.wait(2)
        }
    }

    /**
     * function for verifying the personal details
     * @return {void} Nothing
     */
    async verifyPersonalDetails() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.personalDetailsTab + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=0', "Title")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=1', "MS")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=2', "Legal first name")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=3', "test")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=4', "Legal last name")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=5', "automation")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=6', "Maiden name")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=8', "Date of birth")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=9', "1963")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=10', "National insurance number")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=11', "AZ123456A")
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=12', "Current residential address")
        await this.shouldContainSomeTextInIframe(this.elements.iframe, this.elements.personalDetails + '>>nth=13', "Dents Road, SW11 6JA, London")
    }

    /**
     * function for going to the security details page
     * @return {void} Nothing
     */
    async goToSecurityDetailsPage() {
        await this.waitForSelector(this.elements.iframe, this.elements.securityDetails + '>>nth=1')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.securityDetails + '>>nth=1', true)
        await this.clickInIframe(this.elements.iframe, this.elements.securityDetails + '>>nth=1')
        await this.wait(2)
    }

    /**
     * function for adding mobile number
     * @return {void} Nothing
     */
    async addMobileNumber() {
        await this.waitForSelector(this.elements.iframe, this.elements.addButton + '>>nth=1')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.addButton + '>>nth=1', true)
        await this.clickInIframe(this.elements.iframe, this.elements.addButton + '>>nth=1')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.mobileNumber, true)
        await this.typeInIframe(this.elements.iframe, this.elements.mobileNumber, "123456789")
        await this.clickInIframe(this.elements.iframe, this.elements.saveButton + '>>nth=1')
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.successMessage, "Your mobile number has been succesfully updated")
    }

    /**
     * function for editing the  mobile number
     * @return {void} Nothing
     */
    async editMobileNumber() {
        await this.wait(4)
        await this.waitForSelector(this.elements.iframe, this.elements.editMobileButton + '>>nth=1')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.editMobileButton + '>>nth=1', true)
        await this.clickInIframe(this.elements.iframe, this.elements.editMobileButton + '>>nth=1')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.mobileNumber, true)
        await this.typeInIframe(this.elements.iframe, this.elements.mobileNumber, "012345678")
        await this.clickInIframe(this.elements.iframe, this.elements.saveButton + '>>nth=1')
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.successMessage, "Your mobile number has been succesfully updated")
    }
}