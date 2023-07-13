/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');
const { copf } = require('../../fixtures/data.json');
exports.CopfSignupForm = class CopfSignupForm extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        firstName: 'div[data-testid="first-name"] input',
        lastName: 'div[data-testid="last-name"] input',
        emailField: 'div[data-testid="email"] input',
        enteringPassword: '[type="password"]',
        clickStartNow: '[data-testid="submit"]',
        gender: 'input[name="gender"]',
        signature: 'canvas[data-testid="signature"]',
        primaryBtn: '[data-testid="tid-btn-primary"]',
        dobField: '[placeholder="DD/MM/YYYY"]',
        dobInput: '[data-testid="PenIcon"]',
        enterdob: 'input[placeholder="dd/mm/yyyy"]',
        okButton: '.MuiButton-textPrimary[type="button"]',
        addressField: 'input[name="postcode"]',
        nationalInsurance: 'input[data-testid="tid-txt-ni"]',
        startDate: '[data-testid="tid-dtp-start"]',
        endDate: '[data-testid="tid-dtp-end"]',
        startingYear: '[data-value="2014"]',
        endingYear: '[data-value="2015"]',
        submitButton: '[data-testid="tid-btn-submit"]',
        verifyThankyouMsg: '.header-h1',
        previousPostCodeField: '[name="pensions[0].previousAddress"]',
        postCode: '[role="dialog"] [name^="post"]',
        houseNumber: '[name="houseNumber"]',
        address1: '[name="address1"]',
        town: '[name="town"]',
        countryInput: 'input[name="country"]',
        addAddressButton: '[role="dialog"] .MuiButton-root',
        pensionProvider: '[name="pensions[0].pensionProvider"]',
        employer: 'input[name="pensions[0].employer"]',
        nationalityDropdown: 'input[name="nationality"]',
        maritalStatusDropdown: 'input[name="maritalStatus"]',
        nextButton: 'button[data-testid="tid-btn-primary"]',
        targetRetirementAge: 'button[data-testid="tid-btn-age1"]',
        agreeToConsolidateCheckbox: 'input[name="agreeToConsolidate"]',
        openRaindropPension: '.MuiTypography-subtitle1',
        startButton: '.MuiButton-primary[data-testid="tid-btn-primary"]',
        ltdOption: 'input[value="LTD_DIRECTOR"]',
        monthlyContribution: 'input[id="contribution"]',
        calculateButton: 'button[data-testid="tid-btn-calculate"]',
        next: 'button[data-testid="tid-btn-next"]',
        menuButton: 'button[aria-label="menu"]',
        oldPension: '[data-testid="old-pension-nav-btn"]',
        dashboardPage: '[data-testid="tid-previous-pensions"]'
    };

    /**
     * function for enter full name
     * @return {void} Nothing
     */
    async typeFirstname() {
        await this.type(this.elements.firstName, await this.getRandomString())
    }

    /**
     * function for enter full name
     * @return {void} Nothing
     */
    async typeLastname() {
        await this.type(this.elements.lastName, await this.getRandomString())
    }
    
    generateEmaild(email_id) {
        return this.getRandomString(email_id);
    }

    /**
     * function for enter email and password
     * @param {string} email_id - value for email
     * @param {string} password - value for password
     * @return {void} Nothing
     */
    async fillEmailandPassword(email) {
        await this.type(this.elements.emailField, email)
        await this.type(this.elements.enteringPassword, copf.account.password)
        await this.click(this.elements.clickStartNow)
    }

    /**
     * function for select gender
     * @param {string} Gender - value for the gender
     * @return {void} Nothing
     */
    async selectGender(Gender) {
        await this.waitForSelector(this.elements.gender)
        await this.type(this.elements.gender, Gender)
        await this.pressKey('Enter')
    }

    /**
     * function for select date of birth
     * @param {string} DOB - value for the date of birth
     * @return {void} Nothing
     */
    async selectDob(DOB) {
        await this.click(this.elements.dobField)
        await this.click(this.elements.dobInput)
        await this.type(this.elements.enterdob, DOB)
        await this.click(this.elements.okButton + ' >> nth=1')
    }

    /**
     * function for select the address
     * @param {string} address - value for the address
     * @return {void} Nothing
     */
    async selectAddress(address) {
        await this.waitForSelector(this.elements.addressField)
        await this.type(this.elements.addressField, address)
        await this.wait(1)
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
    }

    /**
   * function for fill signature
   * @return {void} Nothing
   */
     async fillSignature() {
        await this.click(this.elements.signature)
        const signPad = await page.locator(this.elements.signature).boundingBox();
        await page.mouse.move(signPad.x, signPad.y);
        await page.mouse.down();
        for (let i = 1; i < 201; i = i + 10) {
            let j = i / 4;
            await page.mouse.move(signPad.x + i, signPad.y + j);
        }
        await page.mouse.up();
    }

    /**
     * function for fill national insurance number
     * @param {string} NI_number - value for the national insurance
     * @return {void} Nothing
     */
    async fillNationalInsurance(NI_number) {
        await this.waitForSelector(this.elements.nationalInsurance)
        await this.type(this.elements.nationalInsurance, NI_number)
    }

    /**
     * function for fill pension with employer
     * @param {string} employer_name - value for the previous employer
     * @return {void} Nothing
     */
    async fillPensionwithEmployer(employer_name) {
        await this.waitForSelector(this.elements.employer)
        await this.type(this.elements.employer, employer_name)
        await this.pressKey('Enter')
    }

    /**
     * function for fill starting year and ending year
     * @return {void} Nothing
     */
    async selectYear() {
        await this.click(this.elements.startDate)
        await this.waitForSelector(this.elements.startingYear)
        await this.click(this.elements.startingYear)
        await this.click(this.elements.endDate)
        await this.waitForSelector(this.elements.endingYear)
        await this.click(this.elements.endingYear)
    }

    /**
    * function for submitting the form
    * @return {void} Nothing
    */
    async clickOnSubmitButton() {
        await this.waitForSelector(this.elements.submitButton)
        await this.click(this.elements.submitButton)
        await this.click(this.elements.nextButton)
    }

    /**
     * function for verify the dashboard page
     * @return {void} Nothing
     */
    async verifyThankyouMessage() {
        await this.shouldContainText(this.elements.verifyThankyouMsg, "Thank you for submitting")
        await this.wait(10)
    }

    /**
    * function for select nationality
    * @return {void} Nothing
    */
    async selectNationality() {
        await this.verifyVisibility(this.elements.nationalityDropdown, true)
        await this.click(this.elements.nationalityDropdown)
        await this.pressKey('Enter')
    }

    /**
    * function for select marital status
    * @return {void} Nothing
    */
    async selectMaritalStatus() {
        await this.verifyVisibility(this.elements.maritalStatusDropdown, true)
        await this.click(this.elements.maritalStatusDropdown)
        await this.pressKey('Enter')
    }

    /**
    * function for click on next button
    * @return {void} Nothing
    */
    async clickOnNextButton() {
        await this.verifyVisibility(this.elements.nextButton, true)
        await this.click(this.elements.nextButton)
    }

    /**
    * function for select target retirement age
    * @return {void} Nothing
    */
    async selectTargetRetirementAge() {
        await this.verifyVisibility(this.elements.targetRetirementAge + '>> nth=1', true)
        await this.click(this.elements.targetRetirementAge + '>> nth=1')
    }

    /**
    * function for select check box
    * @return {void} Nothing
    */
    async checkAgreeToConsolidatCheckBox() {
        await this.verifyVisibility(this.elements.agreeToConsolidateCheckbox + '>> nth=0', true)
        await this.checkToCheckbox(this.elements.agreeToConsolidateCheckbox + '>> nth=0')
    }

    /**
    * function for user open raindrop pension
    * @return {void} Nothing
    */
    async openRaindropPension() {
        await this.verifyVisibility(this.elements.openRaindropPension + '>> nth=3', true)
        await this.forceClick(this.elements.openRaindropPension + '>> nth=3')
    }

    /**
    * function for user select employment status
    * @return {void} Nothing
    */
    async selectEmploymentStatus() {
        await this.wait(2)
        await this.verifyVisibility(this.elements.startButton, true)
        await this.forceClick(this.elements.startButton)
        await this.wait(2)
        await this.waitForSelector(this.elements.ltdOption)
        await this.verifyVisibility(this.elements.ltdOption, true)
        await this.click(this.elements.ltdOption)
        await this.verifyVisibility(this.elements.monthlyContribution, true)
        await this.type(this.elements.monthlyContribution, "2")
        await this.verifyVisibility(this.elements.calculateButton, true)
        await this.click(this.elements.calculateButton)
        await this.click(this.elements.next)
    }

    /**
    * function for go back to old pensions
    * @return {void} Nothing
    */
    async goToOldPensions() {
        await this.waitForSelector(this.elements.menuButton)
        await this.verifyVisibility(this.elements.menuButton, true)
        await this.click(this.elements.menuButton)
        await this.verifyVisibility(this.elements.oldPension, true)
        await this.click(this.elements.oldPension)
    }

    /**
     * function for verify the dashboard page
     * @return {void} Nothing
     */
    async verifyDashboardPage() {
        await this.waitForSelector(this.elements.dashboardPage)
        await this.shouldContainText(this.elements.dashboardPage, "Previous Pensions Summary")
        await this.wait(2)
    }
}