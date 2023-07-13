const { BaseAction } = require('../../setup/baseAction');
const { iapfPension } = require('../../fixtures/data.json');
exports.iapf = class iapf extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        emailField: '[id="standard-error-helper-text"][type="text"]',
        passwordField: '[id="standard-error-helper-text"][type="password"]',
        loginButton: 'button[data-testid="tid-btn-login"]',
        dashboardTitle: '.MuiTypography-h2'
    }

    /**
     * function for verify landing on login page
     * @return {void} Nothing
     */
    async verifyLandingOnIapfLoginpage() {
        await this.wait(5)
        await this.verifyVisibility(this.elements.emailField, true)
        await this.verifyVisibility(this.elements.passwordField, true)
        await this.verifyVisibility(this.elements.loginButton, true)
    }

    /**
    * function for login
    * @return {void} Nothing
    */
    async login(email) {
        await this.waitForSelector(this.elements.emailField)
        await this.type(this.elements.emailField, email)
        await this.waitForSelector(this.elements.passwordField)
        await this.wait(2)
        await this.type(this.elements.passwordField, iapfPension.account.password)
        await this.click(this.elements.loginButton)
    }

    /**
     * function for verify the landing on the dashboard page
     * @return {void} Nothing
     */
    async verifyDashboardPage() {
        await this.waitForSelector(this.elements.dashboardTitle)
        await this.verifyVisibility(this.elements.dashboardTitle, true)
        await this.wait(2)
    }
}