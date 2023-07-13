const { BaseAction } = require('../../setup/baseAction');
const { SignupForm } = require('../aj_bell/SignupForm.po');
const signupObj = new SignupForm();

exports.authenticate = class authenticate extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        email: 'input[name="email"]',
        dob: 'input[name="dateOfBirth"]',
        gender: 'input[name="gender"]',
        nationalInsuranceNumber: 'input[name="nationalInsuranceNumber"]',
        partnerSipp: 'input[name="hasPartnerSipp"]',
        postcode: 'input[name="currentAddress.postcode"]',
        houseNumber: 'input[name="currentAddress.houseNumber"]',
        addressLine: 'input[name="currentAddress.addressLine1"]',
        town: 'input[name="currentAddress.town"]',
        xApiKey: 'input[name="headers.xApiKey"]',
        authenticateButton: 'button[data-testid="tid-btn-primary"]',
        iframe: '//iframe[contains(@src, "https://ajbpf-v2-git-master-raindrop-tech.vercel.app/add-pension-search")]',
        nextButton: 'button[data-testid="tid-btn-primary"]',
        reviewPensionIframe: '//iframe[contains(@src, "https://ajbpf-v2-git-master-raindrop-tech.vercel.app/review-pension-search")]',
        submitButton: 'button[data-testid="tid-btn-primary"]',
        addMorePensionButton: 'button[data-testid="tid-btn-grey"]',
        employerName: '.your-employer',
        dashboardHeading: '.MuiTypography-body1',
        pensionTracker: '//a[@href="/v2/pension-tracker"]',
        pensionTrackerIframe: '//iframe[contains(@src,"https://ajbpf-v2-git-master-raindrop-tech.vercel.app/pension-tracker")]',
        employerWebsitHeading: '//div[@name="pensionSearch-0"]//*[@data-testid="InfoOutlinedIcon"]/..',
        employerWebsites: '.MuiList-padding [role="button"]',
        companyWebsite: 'input[name="pensions[0].employerURL"]',
        companySize: 'input[name="pensions[0].employerSize"]'
    }

    /**
     * function to go to url
     * @param {string} url - URL which we will redirect to
     * @return {void} Nothing
     */
    async goTo(url) {
        await this.openBrowser(url);
    }

    /**
     * function for enter full name
     * @param {string} first_name - value for the first name
     * @param {string} last_name - value for the last name
     * @return {void} Nothing
     */
    async typename(data) {
        if (data.fName && data.lName) {
            await this.verifyVisibility(signupObj.elements.firstName, true)
            await this.verifyVisibility(signupObj.elements.lastName, true)
            await this.type(signupObj.elements.firstName, data.fName)
            await this.type(signupObj.elements.lastName, data.lName)
        }
    }

    /**
     * function for fill email id
     * @param {string} email - value for the type email id
     * @return {void} Nothing
    */
    async typeEmailId(email) {
        await this.verifyVisibility(this.elements.email, true)
        await this.type(this.elements.email, email)
    }


    /**
     * function for date of birth
     * @param {string} dob - value for the date of birth
     * @return {void} Nothing
    */
    async fillDob(data) {
        if (data.dob) {
            await this.verifyVisibility(this.elements.dob, true)
            await this.type(this.elements.dob, data.dob)
        }
    }

    /**
     * function for fill gender
     * @return {void} Nothing
    */
    async typeGender(data) {
        if (data.gender) {
            await this.verifyVisibility(this.elements.gender, true)
            await this.type(this.elements.gender, data.gender)
        }
    }

    /**
     * function for fill national insurance number
     * @return {void} Nothing
    */
    async typeNationalInsuranceNumber(data) {
        if (data.gender) {
            await this.verifyVisibility(this.elements.nationalInsuranceNumber, true)
            await this.type(this.elements.nationalInsuranceNumber, data.gender)
        }
    }

    /**
     * function for select partner SIPP
     * @return {void} Nothing
    */
    async selectPartnerSipp() {
        await this.verifyVisibility(this.elements.partnerSipp + '>>nth=0', true)
        await this.verifyVisibility(this.elements.partnerSipp + '>>nth=1', true)
        await this.click(this.elements.partnerSipp + '>>nth=0')
    }

    /**
     * function for fill address
     * @return {void} Nothing
    */
    async typeAddress() {
        await this.verifyVisibility(this.elements.postcode, true)
        await this.verifyVisibility(this.elements.houseNumber, true)
        await this.verifyVisibility(this.elements.addressLine, true)
        await this.verifyVisibility(this.elements.town, true)
        await this.type(this.elements.postcode, "gu147hf")
        await this.type(this.elements.houseNumber, "2")
        await this.type(this.elements.addressLine, "9 Stourhead Close")
        await this.type(this.elements.town, "Farnborough")
    }

    /**
     * function for fill national insurance number
     * @return {void} Nothing
    */
    async typeXApiKey() {
        await this.verifyVisibility(this.elements.xApiKey, true)
        await this.type(this.elements.xApiKey, process.env.X_API_KEY)
    }

    /**
     * function for clicking on authenticator button
     * @return {void} Nothing
    */
    async submitAuthenticator() {
        await this.verifyVisibility(this.elements.authenticateButton, true)
        await this.click(this.elements.authenticateButton)
    }

    /**
     * function for fill pension with employer
     * @param {string} employer_name - value for the previous employer
     * @return {void} Nothing
     */
    async fillPensionwithEmployer(employer_name) {
        await this.wait(6)
        await this.verifyVisibilityinIframe(this.elements.iframe, signupObj.elements.employer, true)
        await this.typeInIframe(this.elements.iframe, signupObj.elements.employer, employer_name)
        await this.pressKey('Enter')
    }

    /**
     * function for fill starting year and ending year
     * @return {void} Nothing
     */
    async selectYear() {
        await this.verifyVisibilityinIframe(this.elements.iframe, signupObj.elements.startDate, true)
        await this.typeInIframe(this.elements.iframe, signupObj.elements.startDate, "2014")
        await this.pressKey('Enter')
        await this.verifyVisibilityinIframe(this.elements.iframe, signupObj.elements.endDate, true)
        await this.typeInIframe(this.elements.iframe, signupObj.elements.endDate, "2015")
        await this.pressKey('Enter')
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
    /**
    * function for selecting employer website
    * @return {void} Nothing
    */
    async addNewWebsite(employer_website, employer_size) {
        await this.clickInIframe(this.elements.iframe, this.elements.employerWebsites + '>>nth=3')
        await this.wait(1)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companyWebsite, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companySize, true)
        await this.typeInIframe(this.elements.iframe, this.elements.companyWebsite, employer_website)
        await this.typeInIframe(this.elements.iframe, this.elements.companySize, employer_size)
        await this.pressKey('Enter')
    }

    /**
     * function for clicking on next button
     * @return {void} Nothing
    */
    async clickOnNextButton() {
        await this.verifyVisibility(this.elements.nextButton, true)
        await this.click(this.elements.nextButton + '>>nth=0')
        await this.wait(2)
    }

    /**
    * function for fill signature
    * @return {void} Nothing
    */
    async fillSignature() {
        await this.wait(5)
        await this.click(signupObj.elements.signature)
        const signPad = await page.locator(signupObj.elements.signature).boundingBox();
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
    * function for submitting the form
    * @return {void} Nothing
    */
    async clickOnSubmitButton() {
        await this.verifyVisibility(this.elements.submitButton, true)
        await this.click(this.elements.submitButton)
        await this.wait(2)
    }

    /**
    * function for verifying pension finding dashboard page
    * @return {void} Nothing
    */
    async verifyDashboardPage(employer_name) {
        await this.verifyVisibility(this.elements.pensionTracker, true)
        await this.verifyVisibility(this.elements.dashboardHeading, true)
        await this.shouldContainSomeText(this.elements.dashboardHeading, "Your pension-finding dashboard")
        await this.verifyVisibility(this.elements.addMorePensionButton, true)
        await this.shouldContainSomeTextInIframe(this.elements.pensionTrackerIframe, this.elements.employerName + '>>nth=0', employer_name)
    }
}