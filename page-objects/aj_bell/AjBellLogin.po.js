const { BaseAction } = require('../../setup/baseAction');
const { ajBell } = require('../../fixtures/data.json');
exports.ppfLogin = class ppfLogin extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        loginButton: 'button[data-testid="tid-btn-secondary"]',
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        emailField: 'input[name="email"]',
        passwordField: 'input[name="password"]',
        login: 'button[data-testid="tid-btn-primary"]',
        verifyDashboardTitle: "//h1[text()='Your Pension Finding Dashboard']",
        hamburgerMenu: '//*[@data-testid="MenuIcon"]/..',
        logOutButton: '.MuiButton-outlinedPrimary[type="button"]',
        mobileLogout: '.MuiMenuItem-gutters'
    }

    /**
     * function for go to the login page
     * @return {void} Nothing
     */
    async goToLoginPage() {
        await this.waitForSelector(this.elements.iframe, this.elements.loginButton)
        await this.clickInIframe(this.elements.iframe, this.elements.loginButton + ' >> nth=0')
    }

    /**
     * function for verify landing on login page
     * @return {void} Nothing
     */
    async verifyLandingOnLoginpage() {
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.emailField, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.passwordField, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.login, true)
    }

    /**
    * function for login with new password
    * @return {void} Nothing
    */
    async loginWith(email) {
        await this.wait(5)
        await this.typeInIframe(this.elements.iframe, this.elements.emailField, email)
        await this.waitForSelector(this.elements.iframe, this.elements.passwordField)
        await this.wait(2)
        await this.typeInIframe(this.elements.iframe, this.elements.passwordField, ajBell.account.password)
        await this.clickInIframe(this.elements.iframe, this.elements.login)
        await this.wait(2)
    }

    /**
     * function for verify the dashboard page
     * @return {void} Nothing
     */
    async verifyDashboardPage() {
        await this.waitForSelector(this.elements.iframe, this.elements.verifyDashboardTitle)
        await this.isVisibleinIframe(this.elements.iframe, this.elements.verifyDashboardTitle)
    }

    /**
     * function for logout the page
     * @return {void} Nothing
     */
    async logOut() {
        if(await this.isVisibleinIframe(this.elements.iframe, this.elements.hamburgerMenu)){
            await this.clickInIframe(this.elements.iframe, this.elements.hamburgerMenu);
            await this.wait(2)
            await this.forceClickInIframe(this.elements.iframe, this.elements.mobileLogout + ' >> nth=2')
            await this.wait(2)    
        }
        else{
            await this.isVisibleinIframe(this.elements.iframe, this.elements.logOutButton)
            await this.clickInIframe(this.elements.iframe, this.elements.logOutButton)    
        }
    }
}
