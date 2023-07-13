/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');
const { ajBell } = require('../../fixtures/data.json');
let count = 1;

exports.ForgotPwd = class ForgotPwd extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        forgetPwd: 'a[href="/forgot-password"]',
        resetButton: 'button[data-testid="tid-btn-primary"]',
        newPassword: 'input[name="password"]',
        emailField: 'input[name="email"]',
        message: '.MuiTypography-h1',
        hamburgerMenu: '//*[@data-testid="MenuIcon"]/..',
        profileTab: 'a[href="/profile"]',
        securityDetailsBtn: '.MuiTab-textColorPrimary[role="tab"]',
        clickOnChangePassword: '.MuiButton-greyPrimary',
        enterOldPassword: 'input[name="oldPassword"]',
        newPwd: 'input[name="newPassword"]',
        primaryBtn: 'button[data-testid="tid-btn-primary"]',
        successMsg: '.MuiAlert-message',
        closeMessageBox: '.MuiIconButton-root',
        mobileProfileTab: '[role="menuitem"] .MuiTypography-root'
    }

    /**
     * function for go to the forgot password page
     * @return {void} Nothing
     */
    async goToforgotPasswordPage() {
        await this.waitForSelector(this.elements.iframe, this.elements.forgetPwd)
        await this.isVisibleinIframe(this.elements.iframe, this.elements.forgetPwd)
        await this.clickInIframe(this.elements.iframe, this.elements.forgetPwd)
        await this.wait(5)
    }

    /**
    * function for reset password
    * @return {void} Nothing
    */
    async resetPassword(email) {
        await this.wait(2)
        await this.waitForSelector(this.elements.iframe, this.elements.emailField)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.emailField, true)
        await this.typeInIframe(this.elements.iframe, this.elements.emailField, email)
        await this.waitForSelector(this.elements.iframe, this.elements.resetButton)
        await this.clickInIframe(this.elements.iframe, this.elements.resetButton)
    }

    /**
    * function for verify mailosaur email
    * @return {void} Nothing
    */
    async goTOMailosaurEmail(emailId, text) {
        try {
            const MailosaurClient = require('mailosaur');
            const apiKey = process.env.CYPRESS_MAILOSAUR_API_KEY
            const serverId = '8hlpvn6h'
            const mailosaur = new MailosaurClient(apiKey)
            const criteria = {
                sentTo: (emailId)
            }
            let email = await mailosaur.messages.get(serverId, criteria)
            expect(email.html.body).contains("ajbell_logo")
            expect(email.subject).contains(text);
            let verifyLink = email.html.links[0].href;
            await this.openBrowser(verifyLink);
            await this.wait(15)
        }
        catch (e) {
            if (count < 4) {
                this.goTOMailosaurEmail(emailId, text);
                count++;
            }
        }
    }

    /**
    * function for type new password
    * @return {void} Nothing
    */
    async typeNewPassword() {
        await this.wait(5)
        await this.waitForSelector(this.elements.iframe, this.elements.newPassword)
        await this.isVisibleinIframe(this.elements.iframe, this.elements.newPassword)
        await this.typeInIframe(this.elements.iframe, this.elements.newPassword, ajBell.account.password)
        await this.clickInIframe(this.elements.iframe, this.elements.resetButton)
        await this.wait(7)
    }

    /**
    * function for verify successfully message
    * @return {void} Nothing
    */
    async verifySuccessMessage() {
        await this.isVisibleinIframe(this.elements.iframe, this.elements.message, true)
    }

    /**
    * function for change the password
    * @return {void} Nothing
    */
    async changePassword() {
        await this.wait(5)
        if (await this.isVisibleinIframe(this.elements.iframe, this.elements.hamburgerMenu)) {
            await this.clickInIframe(this.elements.iframe, this.elements.hamburgerMenu);
            await this.wait(2)
            await this.forceClickInIframe(this.elements.iframe, this.elements.mobileProfileTab + ' >> nth=1')
            await this.wait(2)
        }
        else {
            await this.forceClickInIframe(this.elements.iframe, this.elements.profileTab)
        }
        await this.wait(5)
        await this.waitForSelector(this.elements.iframe, this.elements.securityDetailsBtn + ' >> nth=1')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.securityDetailsBtn + ' >> nth=1', true)
        await this.clickInIframe(this.elements.iframe, this.elements.securityDetailsBtn + ' >> nth=1')
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.clickOnChangePassword + '>>nth=0', true)
        await this.clickInIframe(this.elements.iframe, this.elements.clickOnChangePassword + '>>nth=0')
        await this.typeInIframe(this.elements.iframe, this.elements.enterOldPassword, ajBell.account.password)
        await this.typeInIframe(this.elements.iframe, this.elements.newPwd, ajBell.account.newPassword)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.primaryBtn + '>>nth=0', true)
        await this.clickInIframe(this.elements.iframe, this.elements.primaryBtn + '>>nth=0')
    }

    async verifySuccessMessage() {
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.successMsg, "Your password has been succesfully updated")
    }
}
