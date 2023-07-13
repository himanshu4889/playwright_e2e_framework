/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');
const { ajBell } = require('../../fixtures/data.json');
exports.SignupForm = class SignupForm extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        emailField: 'div[data-test-id="email"] input',
        enteringPassword: '[type="password"]',
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        clickStartNow: '[data-testid="submit"]',
        gender: 'input[name="gender"]',
        signature: 'canvas[data-testid="signature"]',
        primaryBtn: '[data-testid="tid-btn-primary"]',
        dobField: '[placeholder="DD/MM/YYYY"]',
        okBtn: '.MuiButton-textPrimary',
        enterdob: 'input[placeholder="dd/mm/yyyy"]',
        okButton: '.MuiButton-textPrimary[type="button"]',
        addressField: 'input[name="postcode"]',
        nationalInsurance: 'input[data-testid="tid-txt-ni"]',
        startDate: 'input[name="pensions[0].startDate"]',
        endDate: '[name="pensions[0].endDate"]',
        startingYear: '[data-value="2014"]',
        endingYear: '[data-value="2015"]',
        submitButton: '[data-testid="tid-btn-submit"]',
        verifyThankyouMsg: '.MuiTypography-h1',
        dobErrorMessage: '.MuiFormHelperText-filled',
        calenderIcon: '[data-testid="CalendarIcon"]',
        previousPostCodeField: '[name="pensions[0].previousAddress"]',
        postCode: '[role="dialog"] [name^="post"]',
        houseNumber: '[name="houseNumber"]',
        address1: '[name="address1"]',
        town: '[name="town"]',
        countryInput: 'input[name="country"]',
        addAddressButton: '(//div[@role="dialog"]//button)[3]',
        pensionProvider: '[name="pensions[0].pensionProvider"]',
        redTick: '[data-testid="CloseIcon"]',
        greenTick: '[data-testid="CheckIcon"]',
        employer: 'input[name="pensions[0].employer"]',
        currentEmployment: '[name="pensions[0].isCurrentEmployment"]',
        messageBox: '.MuiAlert-standardInfo[role="alert"]',
        okBtn: '.MuiButton-textPrimary',
        secondEmployer: 'input[name="pensions[1].employer"]',
        secondCurrentEmployment: 'input[name="pensions[1].isCurrentEmployment"]',
        employerName: '.MuiTypography-h4',
        pensionStatus: '.MuiTypography-subtitle1',
        statusIcon: 'div[aria-label="animation"]',
        employmentTypeLabel: '.MuiFormControlLabel-label',
        employmentType: 'input[name="pensions[0].contractType"]',
        partTimeAlertMessage: '.MuiAlert-message',
        proofOfAddress: 'input[id="front-page"]',
        checkSign: '[data-testid="SuccessOutlinedIcon"]',
        mobileNumber: '.MuiInputBase-inputAdornedStart',
        countryCode: '.MuiInputBase-adornedStart',
        startDate2: 'input[name="pensions[1].startDate"]',
        endDate2: '[name="pensions[1].endDate"]',
        employerWebsitHeading: '//div[@name="pensionSearch-0"]//*[@data-testid="InfoOutlinedIcon"]/..',
        employerWebsites: '.MuiList-padding [role="button"]',
        companyWebsite: 'input[name="pensions[0].employerURL"]',
        companySize: 'input[name="pensions[0].employerSize"]',
        strongerEmailMsg: '.MuiTypography-h6'
    };

    /**
     * function for enter full name
     * @param {string} first_name - value for the first name
     * @return {void} Nothing
     */
    async typeFirstname(first_name) {
        await this.scrollIntoElementInIframe(this.elements.iframe, this.elements.clickStartNow)
        await this.typeInIframe(this.elements.iframe, this.elements.firstName, await this.getRandomString(first_name))
    }

    /**
     * function for enter full name
     * @param {string} last_name - value for the last name
     * @return {void} Nothing
     */
    async typeLastname(last_name) {
        await this.typeInIframe(this.elements.iframe, this.elements.lastName, await this.getRandomString(last_name))
    }

    /**
     * function for enter email and password
     * @param {string} email_id - value for the first name
     * @param {string} password - value for the last name
     * @return {void} Nothing
     */
    async fillEmailandPassword(email_id) {
        await this.typeInIframe(this.elements.iframe, this.elements.emailField, email_id)
        await this.typeInIframe(this.elements.iframe, this.elements.enteringPassword, ajBell.account.password)
        await this.clickInIframe(this.elements.iframe, this.elements.clickStartNow)
    }

    /**
     * function for select gender
     * @param {string} Gender - value for the gender
     * @return {void} Nothing
     */
    async selectGender(Gender) {
        await this.waitForSelector(this.elements.iframe, this.elements.gender)
        await this.typeInIframe(this.elements.iframe, this.elements.gender, Gender)
        await this.pressKey('Enter')
    }

    /**
     * function for select date of birth
     * @param {string} DOB - value for the date of birth
     * @return {void} Nothing
     */
    async selectDob(DOB) {
        await this.clickInIframe(this.elements.iframe, this.elements.dobField)
        await this.clickInIframe(this.elements.iframe, "//*[text()=" + DOB + "]")
        await this.clickInIframe(this.elements.iframe, this.elements.okBtn + '>>nth=2')
    }

    /**
     * function for select the address
     * @param {string} address - value for the address
     * @return {void} Nothing
     */
    async selectAddress(address) {
        await this.waitForSelector(this.elements.iframe, this.elements.addressField)
        await this.typeInIframe(this.elements.iframe, this.elements.addressField, address)
        await this.wait(1)
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
    }

    /**
   * function for fill signature
   * @return {void} Nothing
   */
    async fillSignature() {
        await this.scrollIntoElement(this.elements.iframe, this.elements.primaryBtn)
        await this.clickInIframe(this.elements.iframe, this.elements.signature)
        const signPad = await page.frameLocator(this.elements.iframe).locator(this.elements.signature).boundingBox();
        await this.wait(4)
        for (let i = 1; i < 300; i = i + 10) {
            let j = i / 2;
            await page.mouse.click(signPad.x + i + signPad.width / 4, signPad.y + j + signPad.height / 4)
        }
        for (let i = 1; i < 300; i = i + 10) {
            let j = i / 2;
            await page.mouse.click(signPad.x - i + signPad.width / 4, signPad.y - j + signPad.height / 4)
        }
        await this.wait(2)
    }

    /**
     * function for fill national insurance number
     * @param {string} NI_number - value for the national insurance
     * @return {void} Nothing
     */
    async fillNationalInsurance(NI_number) {
        await this.waitForSelector(this.elements.iframe, this.elements.nationalInsurance)
        await this.typeInIframe(this.elements.iframe, this.elements.nationalInsurance, NI_number)
    }

    /**
     * function for fill pension with employer
     * @param {string} employer_name - value for the previous employer
     * @return {void} Nothing
     */
    async fillPensionwithEmployer(employer_name) {
        await this.waitForSelector(this.elements.iframe, this.elements.employer)
        await this.typeInIframe(this.elements.iframe, this.elements.employer, employer_name)
        await this.pressKey('Enter')
    }

    /**
     * function for fill starting year and ending year
     * @return {void} Nothing
     */
    async selectYear(startingYear, endingYear) {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.startDate, true)
        await this.typeInIframe(this.elements.iframe, this.elements.startDate, startingYear)
        await this.pressKey('Enter')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.endDate, true)
        await this.typeInIframe(this.elements.iframe, this.elements.endDate, endingYear)
        await this.pressKey('Enter')
    }

    /**
    * function for submitting the form
    * @return {void} Nothing
    */
    async clickOnSubmitButton() {
        await this.waitForSelector(this.elements.iframe, this.elements.submitButton)
        await this.clickInIframe(this.elements.iframe, this.elements.submitButton)
        await this.wait(10)
    }

    /**
     * function for verify the dashboard page
     * @return {void} Nothing
     */
    async verifyThankyouMessage(message, strongerEmailMsg) {
        await this.wait(5)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.verifyThankyouMsg, message)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.strongerEmailMsg, strongerEmailMsg)
    }

    /**
     * function for verify the error message for min age
     * @return {void} Nothing
     */
    async verifyErrorMessage(text) {
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.dobErrorMessage + ' >> nth=0', text)
    }

    /**
     * function for select date of birth
     * @param {string} DOB - value for the date of birth
     * @return {void} Nothing
     */
    async updateDob(DOB) {
        await this.clickInIframe(this.elements.iframe, this.elements.dobField)
        await this.clickInIframe(this.elements.iframe, "//*[text()=" + DOB + "]")
        await this.clickInIframe(this.elements.iframe, this.elements.okBtn + '>>nth=2')
    }

    /**
     * function for select the previous address
     * @param {string} address - value for the address
     * @return {void} Nothing
     */
    async previousPostCode(address) {
        await this.waitForSelector(this.elements.iframe, this.elements.previousPostCodeField)
        await this.typeInIframe(this.elements.iframe, this.elements.previousPostCodeField, address)
        await this.wait(1)
        await this.pressKey('ArrowDown')
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
    }

    async fillPreviousPostcode() {
        await this.waitForSelector(this.elements.iframe, this.elements.postCode)
        await this.typeInIframe(this.elements.iframe, this.elements.postCode, "SW116JA")
        await this.typeInIframe(this.elements.iframe, this.elements.houseNumber + ' >> nth=1', "1")
        await this.typeInIframe(this.elements.iframe, this.elements.address1 + ' >> nth=1', "1 Dents Roads")
        await this.typeInIframe(this.elements.iframe, this.elements.town + ' >> nth=1', "London")
        await this.typeInIframe(this.elements.iframe, this.elements.countryInput, "United Kingdom")
        await this.clickInIframe(this.elements.iframe, this.elements.addAddressButton)
    }

    /**
     * function for fill pension with provider
     * @param {string} provider_name - value for the pension provider
     * @return {void} Nothing
     */
    async fillPensionProvider(provider_name) {
        await this.waitForSelector(this.elements.iframe, this.elements.pensionProvider)
        await this.typeInIframe(this.elements.iframe, this.elements.pensionProvider, provider_name)
        await this.pressKey('Enter')
    }

    async fillEmail(email_id) {
        await this.typeInIframe(this.elements.iframe, this.elements.emailField, await this.getRandomString(email_id))
    }

    /**
     * function for verify password strength indicator
     * @return {void} Nothing
     */
    async passwordwith1Character(small_character, capital_character) {
        await this.waitForSelector(this.elements.iframe, this.elements.enteringPassword)
        await this.typeInIframe(this.elements.iframe, this.elements.enteringPassword, small_character)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.redTick + ' >> nth=3', true)
        await this.typeInIframe(this.elements.iframe, this.elements.enteringPassword, capital_character)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.greenTick + ' >> nth=0', true)
    }

    async passwordWithNumbers(number) {
        await this.typeInIframe(this.elements.iframe, this.elements.enteringPassword, number)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.greenTick + ' >> nth=0', true)
    }

    async passwordWith8Digits(digits) {
        await this.typeInIframe(this.elements.iframe, this.elements.enteringPassword, digits)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.greenTick + ' >> nth=1', true)
    }

    /**
     * function for search pension with current employment
     * @return {void} Nothing
     */
    async searchPensionWithCurrentEmployment(msg) {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.currentEmployment, true)
        await this.clickInIframe(this.elements.iframe, this.elements.currentEmployment)
        await this.wait(2)
        await this.scrollIntoElementInIframe(this.elements.iframe, '[data-testid="tid-website-0"]')
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.messageBox + ' >> nth=1', msg)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.startDate, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.endDate, false)
        await this.clickInIframe(this.elements.iframe, this.elements.startDate)
        await this.waitForSelector(this.elements.iframe, this.elements.startingYear)
        await this.typeInIframe(this.elements.iframe, this.elements.startDate, "2014")
        await this.pressKey('Enter')
    }

    generateEmaild(email_id) {
        return this.getRandomString(email_id);
    }

    /**
     * function for filling second pension with current employment
     * @return {void} Nothing
     */
    async addSecondPensionWithCurrentEmployment(employer_name, msg) {
        await this.waitForSelector(this.elements.iframe, this.elements.secondEmployer)
        await this.typeInIframe(this.elements.iframe, this.elements.secondEmployer, employer_name)
        await this.pressKey('Enter')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.secondCurrentEmployment, true)
        await this.clickInIframe(this.elements.iframe, this.elements.secondCurrentEmployment)
        await this.wait(2)
        await this.scrollIntoElementInIframe(this.elements.iframe, '[data-testid="tid-website-0"]')
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.messageBox + ' >> nth=1', msg)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.startDate2, true)
        await this.typeInIframe(this.elements.iframe, this.elements.startDate2, "2017")
        await this.pressKey('Enter')
    }

    /**
     * function for verifying  pension cards
     * @return {void} Nothing
     */
    async verifySearchingPensionCards(employer_name, SEARCHING) {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.employerName + '>>nth=0', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.statusIcon + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.employerName + '>>nth=0', employer_name)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.pensionStatus + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.pensionStatus + '>>nth=0', 'SEARCHING')
    }

    async verifyInvalidPensionCards(employer_name) {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.employerName + '>>nth=1', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.statusIcon + '>>nth=1', true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.employerName + '>>nth=1', employer_name)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.pensionStatus + '>>nth=1', true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.pensionStatus + '>>nth=1', 'PENSION NOT ELIGIBLE')
    }

    /**
     * function for enter full name
     * @param {string} first_name - value for the first name
     * @param {string} last_name - value for the first name
     * @return {void} Nothing
     */
    async typeName(first_name, last_name) {
        await this.scrollIntoElementInIframe(this.elements.iframe, this.elements.clickStartNow)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.firstName, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.lastName, true)
        await this.typeInIframe(this.elements.iframe, this.elements.firstName, first_name)
        await this.typeInIframe(this.elements.iframe, this.elements.lastName, last_name)

    }
    /*
     * function for fill second pension with employer
     * @param {string} second_employer_name - value for the previous employer
     * @return {void} Nothing
     */
    async fillSecondPensionCardWithEmployer(second_employer_name) {
        await this.waitForSelector(this.elements.iframe, this.elements.secondEmployer)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.secondEmployer, true)
        await this.typeInIframe(this.elements.iframe, this.elements.secondEmployer, second_employer_name)
        await this.pressKey('Enter')
    }

    /**
     * function for fill starting year and ending year for second pension card
     * @return {void} Nothing
     */
    async selectYearForSecondPensionCard(startingYear, endingYear) {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.startDate2, true)
        await this.clickInIframe(this.elements.iframe, this.elements.startDate2)
        await this.typeInIframe(this.elements.iframe, this.elements.startDate2, startingYear)
        await this.pressKey('Enter')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.endDate2, true)
        await this.clickInIframe(this.elements.iframe, this.elements.endDate2)
        await this.typeInIframe(this.elements.iframe, this.elements.endDate2, endingYear)
        await this.pressKey('Enter')
    }

    /**
     * function for verify signature field
     * @return {void} Nothing
     */
    async verifySignatureField() {
        await this.waitForSelector(this.elements.iframe, this.elements.signature)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.signature, true)
    }

    /**
     * function for verifying employment type options
     * @return {void} Nothing
     */
    async verifyEmploymentType() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.employmentTypeLabel + '>>nth=0', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.employmentTypeLabel + '>>nth=1', true)
    }

    /**
     * function for selecting employment type options
     * @return {void} Nothing
     */
    async selectPartTime(message) {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.employmentType + '>>nth=1', true)
        await this.clickInIframe(this.elements.iframe, this.elements.employmentType + '>>nth=1', true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.partTimeAlertMessage + '>>nth=1', message)
    }

    /**
     * function for uploading document
     * @return {void} Nothing
     */
    async uploadDocumentatSignup() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.proofOfAddress, true)
        await this.setInputFilesinIframe(this.elements.iframe, this.elements.proofOfAddress, 'fixtures/upload.png')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.checkSign, true)
    }

    /**
    * function for enter mobile number
    * @return {void} Nothing
    */
    async enterMobileNumber(mobile_number) {
        await this.waitForSelector(this.elements.iframe, this.elements.mobileNumber)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.countryCode, true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.countryCode, "+44")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.mobileNumber, true)
        await this.typeInIframe(this.elements.iframe, this.elements.mobileNumber, mobile_number)
    }

    /**
    * function for verifying employer website
    * @return {void} Nothing
    */
    async verifyEmployerWebsite(employer_website_heading, employer_name, add_new_website) {
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.employerWebsitHeading, employer_website_heading)
        await this.shouldContainSomeTextInIframe(this.elements.iframe, this.elements.employerWebsites + '>>nth=0', employer_name)
        await this.shouldContainSomeTextInIframe(this.elements.iframe, this.elements.employerWebsites + '>>nth=1', employer_name)
        await this.shouldContainSomeTextInIframe(this.elements.iframe, this.elements.employerWebsites + '>>nth=2', employer_name)
        await this.shouldContainSomeTextInIframe(this.elements.iframe, this.elements.employerWebsites + '>>nth=3', add_new_website)
    }

    /**
    * function for select employer website
    * @return {void} Nothing
    */
    async selectEmployerWebsite() {
        await this.clickInIframe(this.elements.iframe, this.elements.employerWebsites + '>>nth=0')
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companyWebsite, false)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companySize, false)
    }
}