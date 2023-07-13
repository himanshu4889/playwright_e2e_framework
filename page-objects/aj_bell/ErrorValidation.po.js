/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');
exports.ErrorValidate = class ErrorValidate extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        clickStartNow: '[data-testid="submit"]',
        firstName: 'div[data-test-id="first-name"] input',
        lastName: 'div[data-test-id="last-name"] input',
        emailField: 'div[data-test-id="email"] input',
        labelErrorValidation: 'p.Mui-error',
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        labelErrorValidation: 'p.Mui-error',
        passwordLabel: 'input[name="password"]',
        submitButton: '[data-testid="tid-btn-submit"]',
        gender: 'input[name="gender"]',
        dateOfBirth: '[placeholder="DD/MM/YYYY"]',
        houseNumberLabel: 'input[name="houseNumber"]',
        addressLabel: 'input[name="address1"]',
        cityLabel: 'input[name="town"]',
        nationalInsuranceNumber: 'input[data-testid="tid-txt-ni"]',
        employer: 'input[name="pensions[0].employer"]',
        pensionProviderLabel: 'input[name="pensions[0].pensionProvider"]',
        signaturevalidate: 'p.Mui-error',
        termsCondition: '[text="terms and conditions"]'
    }

    /**
     * function for validate name and email id
     * @param {string} first_name - value for the first name
     * @param {string} last_name - value for the last name
     * @param {string} email_id - value for the email id
     * @return {void} Nothing
     */
    async intialisingValidationError() {
        await this.wait(5)
        await this.scrollIntoElementInIframe(this.elements.iframe, this.elements.termsCondition)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.clickStartNow, true)
        await this.clickInIframe(this.elements.iframe, this.elements.clickStartNow)
        await this.validateLabel(this.elements.iframe, this.elements.firstName, "aria-invalid", "true")
        await this.validateLabel(this.elements.iframe, this.elements.lastName, "aria-invalid", "true")
        await this.validateLabel(this.elements.iframe, this.elements.emailField, "aria-invalid", "true")
        await this.validateError(this.elements.iframe, this.elements.labelErrorValidation + ' >> nth = 0', "First name is required")
        await this.validateError(this.elements.iframe, this.elements.labelErrorValidation + ' >> nth = 1', "Last name is required")
        await this.validateError(this.elements.iframe, this.elements.labelErrorValidation + ' >> nth = 2', "Email is required")
    }

    /**
     * function for validation of label and error
     * @param {string} iFrame - value for the first name
     * @param {string} locator - value for the last name

     * @return {void} Nothing
     */
    async validateLabel(iFrame, locator, attributeName, text) {
        let attr = await this.getAttributeElementInIframe(iFrame, locator, attributeName)
        await this.containSubstring(attr, text)
    }

    async validateError(iFrame, locator, text) {
        await this.shouldContainTextInIframe(iFrame, locator, text)
    }

    /**
     * function for validate the password
     * @param {string} passwordLabel - value for the password label
     * @return {void} Nothing
     */
    async passwordValidationError() {
        await this.validateLabel(this.elements.iframe, this.elements.passwordLabel, "aria-invalid", "true")
    }

    /**
     * function for validation of personal details
     * @param {string} gender - value for the password label
     * @param {string} dateOfBirth - value for the date of birth label
     * @param {string} houseNumberLabel - value for the housenumber label
     * @param {string} addressLabel - value for the address label
     * @param {string} cityLabel - value for the city label
     * @return {void} Nothing
     */
    async personalDetailsValidationError() {
        await this.clickInIframe(this.elements.iframe, this.elements.submitButton)
        await this.validateLabel(this.elements.iframe, this.elements.gender, "aria-invalid", "true")
        await this.validateLabel(this.elements.iframe, this.elements.dateOfBirth, "aria-invalid", "true")
        await this.validateLabel(this.elements.iframe, this.elements.houseNumberLabel, "aria-invalid", "true")
        await this.validateLabel(this.elements.iframe, this.elements.addressLabel, "aria-invalid", "true")
        await this.validateLabel(this.elements.iframe, this.elements.cityLabel, "aria-invalid", "true")
    }

    /**
     * function for validation of national insurance number
     * @param {string} nationalInsuranceNumber - value for the national insurance label
     * @return {void} Nothing
     */
    async insuranceNumberValidationError() {
        await this.clickInIframe(this.elements.iframe, this.elements.submitButton)
        await this.wait(2)
        await this.validateLabel(this.elements.iframe, this.elements.nationalInsuranceNumber, "aria-invalid", "true")
    }

    /**
     * function for validation of pension searches
     * @param {string} employer - value for the employer label
     * @param {string} pensionProviderLabel - value for the provider label
     * @return {void} Nothing
     */
    async pensionSearchesValidationError() {
        await this.clickInIframe(this.elements.iframe, this.elements.submitButton)
        await this.validateLabel(this.elements.iframe, this.elements.employer, "aria-invalid", "true")
        await this.validateLabel(this.elements.iframe, this.elements.pensionProviderLabel, "aria-invalid", "true")
    }

    /**
     * function for validation of signature
     * @param {string} signaturevalidate - value for the provider label
     * @return {void} Nothing
     */
    async signatureValidationError() {
        await this.clickInIframe(this.elements.iframe, this.elements.submitButton)
        await this.validateError(this.elements.iframe, this.elements.signaturevalidate + '>>nth=1', "This field is required")
    }
}