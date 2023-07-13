const { BaseAction } = require('../../setup/baseAction');
exports.pensionTracker = class pensiontracker extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        iframe: '//iframe[contains(@src, "https://ajb-pf-git-master")]',
        pensionTrackerDetails: '(//a[contains(@href,"/pension-tracker/details/")])[1]',
        arrowIcon: '[href="/pension-tracker"]',
        searchingText: '.MuiTypography-subtitle1',
        employmentDetailsHeading: '.MuiAccordionSummary-content',
        personalDetailsHeading: '.MuiAccordionSummary-content',
        EditDetailsButton: 'button[data-testid="tid-btn-primary"]',
        contactDetails: 'input[name="contactDetails"]',
        companyWebsite: 'input[name="website"]',
        companySize: '[id="mui-component-select-size"]',
        companyIndustry: 'input[name="industry"]',
        dissolvedYes: 'input[value="Yes"]',
        dissolvedNo: 'input[value="No"]',
        notSure: 'input[value="NotSure"]',
        cancelButton: 'button[data-testid="tid-btn-secondary"]',
        saveButton: 'button[data-testid="tid-btn-primary"]',
        noContactDetailsCheckBox: 'input[name="noContactDetails"]',
        noWebsiteCheckBox: 'input[name="noWebsite"]',
        mediumSize: '[data-value="medium"]',
        maidenName: 'input[name="formerLastName"]',
        hamburgerMenu: '//*[@data-testid="MenuIcon"]/..',
        personalDetailsExpand: '.MuiAccordionSummary-expandIconWrapper',
        actionRequired: '//h6[text()="ACTION REQUIRED"]',
        addMoreInformationButton: 'button[data-testid="tid-btn-primary"]',
        errorIcon: '.MuiGrid-item [data-testid="ErrorIcon"]',
        employerContactError: '//*[@data-testid="ErrorIcon"]/following-sibling::p[text()="Employer contact details"]',
        companyWebsiteError: '//*[@data-testid="ErrorIcon"]/following-sibling::p[text()="Company website"]',
        companySizeError: '//*[@data-testid="ErrorIcon"]/following-sibling::p[text()="Company size"]',
        companyIndustryError: '//*[@data-testid="ErrorIcon"]/following-sibling::p[text()="Company industry"]',
        companyDissolvedError: '//*[@data-testid="ErrorIcon"]/following-sibling::p[text()="Company dissolved"]',
        pensionFound: '//h6[text()="PENSION FOUND"]',
        transferPensionButton: '(//button[@data-testid="tid-btn-primary"])[2]',
        ajBellLogo: '[alt="AJ Bell Youinvest"]',
        ajBellHeading: '//span[@class="account-type-sipp"]',
        personalDetails: '//div[@class="panel-heading active-type-sipp"]',
        accountDetails: '[id="panel-account-details"]',
        invalidPension: '//h6[text()="PENSION NOT ELIGIBLE"]',
        ctaButton: 'button[data-testid="tid-btn-primary"]',
        crossIcon: '//div[@role="button"]',
        unlikelyToExist: '//h6[text()="UNLIKELY TO EXIST"]',
        unlikelyToExistErrorIcon: '//div[@aria-label="animation"]',
        backIcon: '//a[@href="/pension-tracker"]',
        searchingPension: '//h6[text()="SEARCHING"]',
        customerWithdrawn: '//h6[text()="WITHDRAWN"]',
        pensionNotFound: '//h6[text()="PENSION NOT FOUND"]',

    }

    /**
    * function for go to the searching pension tracker page
    * @return {void} Nothing
    */
    async gotoSearchingPensionTrackerPage() {
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.pensionTrackerDetails, true)
        await this.clickInIframe(this.elements.iframe, this.elements.pensionTrackerDetails)
    }

    /**
    * function for verify the searching pension tracker page
    * @return {void} Nothing
    */
    async verifySearchingPensionTrackerPage() {
        await this.wait(5)
        if (await this.isVisibleinIframe(this.elements.iframe, this.elements.hamburgerMenu)) {
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.arrowIcon, true)
        }
        else {
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.arrowIcon + '>>nth=1', true)
        }
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.employmentDetailsHeading + '>>nth=0', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.personalDetailsHeading + '>>nth=1', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.EditDetailsButton + '>>nth=0', true)
    }

    /**
    * function for go to edit employment details page
    * @return {void} Nothing
    */
    async goToEditEmploymentDetails() {
        await this.clickInIframe(this.elements.iframe, this.elements.EditDetailsButton + '>>nth=0')
    }

    /**
    * function for go to edit employment details page
    * @return {void} Nothing
    */
    async verifyEditEmploymentDetailsPage() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.contactDetails, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companyWebsite, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companySize, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companyIndustry, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.dissolvedYes, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.dissolvedNo, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.notSure, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.cancelButton, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.saveButton + '>>nth=0', true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.noContactDetailsCheckBox, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.noWebsiteCheckBox, true)
    }

    /**
     * function for validation of label and error
     * @param {string} iFrame - value for the first name
     * @param {string} locator - value for the last name
     * @return {void} Nothing
     */
    async validateError(iFrame, locator, text) {
        await this.shouldContainTextInIframe(iFrame, locator, text)
    }

    /**
    * function for validate employment details
    * @return {void} Nothing
    */
    async validateErrorForEmploymentDetails() {
        await this.clickInIframe(this.elements.iframe, this.elements.contactDetails)
        await this.clickInIframe(this.elements.iframe, this.elements.companyWebsite)
        await this.validateError(this.elements.iframe, "[aria-label='contactDetails']", "Contact is required")
        await this.clickInIframe(this.elements.iframe, this.elements.contactDetails)
        await this.validateError(this.elements.iframe, "[aria-label='website']", "Website is required")
    }

    /**
    * function for employer contact details
    * @return {void} Nothing
    */
    async fillEmployerContactDetails() {
        await this.typeInIframe(this.elements.iframe, this.elements.contactDetails, "123456")
    }

    /**
    * function for type company website
    * @return {void} Nothing
    */
    async fillCompanyWebsite() {
        await this.typeInIframe(this.elements.iframe, this.elements.companyWebsite, "https://myraindrop.co.uk/")
    }

    /**
    * function for select company size
    * @return {void} Nothing
    */
    async selectCompanySize() {
        await this.clickInIframe(this.elements.iframe, this.elements.companySize)
        await this.clickInIframe(this.elements.iframe, this.elements.mediumSize)
    }

    /**
    * function for select company industry
    * @return {void} Nothing
    */
    async selectCompanyIndustry() {
        await this.clickInIframe(this.elements.iframe, this.elements.companyIndustry)
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
    }

    /**
    * function for select company disolved
    * @return {void} Nothing
    */
    async selectCompanyDissolved() {
        await this.clickInIframe(this.elements.iframe, this.elements.dissolvedYes)
    }

    /**
    * function for save the information
    * @return {void} Nothing
    */
    async saveEmploymentDetails() {
        await this.clickInIframe(this.elements.iframe, this.elements.saveButton + '>>nth=0')
        await this.wait(2)
    }

    /**
    * function for edit personal details
    * @return {void} Nothing
    */
    async editPersonalDetails() {
        await this.clickInIframe(this.elements.iframe, this.elements.personalDetailsExpand + '>>nth=1')
        await this.clickInIframe(this.elements.iframe, this.elements.EditDetailsButton + '>>nth=1')
    }

    /**
    * function for save the personal information
    * @return {void} Nothing
    */
    async savePersonalDetails() {
        await this.clickInIframe(this.elements.iframe, this.elements.saveButton + '>>nth=1')
        await this.wait(2)
    }

    /**
    * function for save the personal information
    * @return {void} Nothing
    */
    async gotODashboard() {
        await this.wait(5)
        if (await this.isVisibleinIframe(this.elements.iframe, this.elements.hamburgerMenu)) {
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.arrowIcon, true)
            await this.clickInIframe(this.elements.iframe, this.elements.arrowIcon)
        }
        else {
            await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.arrowIcon + '>>nth=1', true)
            await this.clickInIframe(this.elements.iframe, this.elements.arrowIcon + '>>nth=1')
            await this.wait(10)
        }
    }

    /**
    * function for verifying action required
    * @return {void} Nothing
    */
    async verifyActionRequired() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.actionRequired + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.actionRequired + '>>nth=0', "ACTION REQUIRED")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.addMoreInformationButton + '>>nth=0', true)
        await this.clickInIframe(this.elements.iframe, this.elements.addMoreInformationButton + '>>nth=0')
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, '.MuiTypography-body1' + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, '.MuiTypography-body1' + '>>nth=0', "We need more information about your employer to continue this search.")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.employerContactError, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companyWebsiteError, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companySizeError, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companyIndustryError, true)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.companyDissolvedError, true)
        await this.wait(2)
        await this.gotODashboard()
        await this.wait(2)
    }

    /**
    * function for verifying pension found card
    * @return {void} Nothing
    */
    async verifyPensionFoundCard() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.pensionFound, true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.pensionFound, "PENSION FOUND")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.transferPensionButton, true)
    }

    /**
    * function for verify aj bell page open in new tab
    * @return {void} Nothing
    */
    async verifyajBellOpenInNewTab() {
        const [newPage] = await Promise.all([
            page.frameLocator(this.elements.iframe).locator(this.elements.transferPensionButton, { timeout: 30000 }).click(), // Opens a new tab/
            context.waitForEvent('page'),
        ])
        await this.wait(7)
        await this.switchTab()
        await this.verifyVisibility(this.elements.ajBellLogo, true)
        await this.verifyVisibility(this.elements.ajBellHeading, true)
        await this.shouldContainSomeText(this.elements.ajBellHeading, "Self-invested personal pension")
        await this.verifyVisibility(this.elements.personalDetails, true)
        await this.verifyVisibility(this.elements.accountDetails, true)
        await this.shouldContainSomeText(this.elements.personalDetails, "Personal details")
        await this.shouldContainSomeText(this.elements.accountDetails, "Your online account details")
    }

    /**
    * function for verifying invalid pension
    * @return {void} Nothing
    */
    async verifyInvalidPension() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.invalidPension, true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.invalidPension, "PENSION NOT ELIGIBLE")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=3', true)
        await this.clickInIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=3')
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, '.MuiTypography-body1', true)
        await this.shouldContainTextInIframe(this.elements.iframe, '.MuiTypography-body1', "Unfortunately this request is invalid, please contact your pension assistant for more information.")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.crossIcon, true)
        await this.gotODashboard()
        await this.wait(5)
    }

    /**
    * function for verifying unlikely to exist pension card
    * @return {void} Nothing
    */
    async verifyUnlikelyToExistPension() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.unlikelyToExist, true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.unlikelyToExist, "UNLIKELY TO EXIST")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=4', true)
        await this.clickInIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=4')
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.unlikelyToExistErrorIcon, true)
        await this.gotODashboard()
        await this.wait(5)
    }

    /**
    * function for verifying searching pension card
    * @return {void} Nothing
    */
    async verifySearchingPension() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.searchingPension + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.searchingPension + '>>nth=0', "SEARCHING")
    }

    /**
    * function for verifying searching pension card
    * @return {void} Nothing
    */
    async verifyActionRequiredPension() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.actionRequired, true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.actionRequired, "ACTION REQUIRED")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=2', true)
        await this.clickInIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=2')
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, '.MuiTypography-body1' + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, '.MuiTypography-body1' + '>>nth=0', "We need more information about your employer to continue this search.")
        await this.gotODashboard()
        await this.wait(5)
    }

    /**
    * function for verifying customer withdrawn pension card
    * @return {void} Nothing
    */
    async verifyCustomerWithdrawnPension() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.customerWithdrawn, true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.customerWithdrawn, "WITHDRAWN")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=6', true)
        await this.clickInIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=6')
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, '.MuiTypography-body1' + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, '.MuiTypography-body1' + '>>nth=0', "We need more information about your employer to continue this search.")
        await this.gotODashboard()
        await this.wait(5)
    }

    /**
    * function for verifying pension not found pension card
    * @return {void} Nothing
    */
    async verifyPensionNotFoundPensionCard() {
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.pensionNotFound, true)
        await this.shouldContainTextInIframe(this.elements.iframe, this.elements.pensionNotFound, "PENSION NOT FOUND")
        await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=5', true)
        await this.clickInIframe(this.elements.iframe, this.elements.ctaButton + '>>nth=5')
        await this.wait(5)
        await this.verifyVisibilityinIframe(this.elements.iframe, '.MuiTypography-body1' + '>>nth=0', true)
        await this.shouldContainTextInIframe(this.elements.iframe, '.MuiTypography-body1' + '>>nth=0', "We need more information from you to continue our search for this request.")
        await this.gotODashboard()
        await this.wait(5)
    }

}