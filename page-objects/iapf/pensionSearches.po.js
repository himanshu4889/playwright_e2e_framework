const { BaseAction } = require('../../setup/baseAction');
exports.pensionSearch = class pensionSearch extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        findoldPensionsButton: 'button[data-testid="tid-btn-secondary"]',
        startingYear: '[data-value="2014"]',
        endingYear: '[data-value="2015"]',
        postcode: 'input[name="postcode"]',
        houseNumber: 'input[name="houseNumber"]',
        address1: 'input[name="address1"]',
        town: 'input[name="town"]',
        country: 'input[name="country"]',
        addButton: '.MuiButton-primary[type="button"]',
        messageBox: '//div[@role="alert"]',
        agreeToConsolidate: '[name="agreeToConsolidate"]',
        submitButton: 'button[data-testid="tid-btn-primary"][type="submit"]',
        addMorePensionButton: 'button[data-testid="tid-btn-primary"][type="button"]',
        verifySecondPension: '.MuiTypography-body1 .MuiTypography-subtitle1',
        cancelCard: '[data-testid="CancelIcon"]',
        previousEmployer: function (val) {
            return ('input[name="pensions[' + val + '].employer"]')
        },
        startDate: function (val) {
            return ('[id="mui-component-select-pensions[' + val + '].startDate"]')
        },
        companyWebsite: function (val) {
            return ('input[name="pensions[' + val + '].employerURL"]')
        },
        companySize: function (val) {
            return ('[id="mui-component-select-pensions[' + val + '].employerSize"]')
        },
        previousAddress: function (val) {
            return ('input[name="pensions[' + val + '].previousAddress"]')
        },
        previousProvider: function (val) {
            return ('input[name="pensions[' + val + '].pensionProvider"]')
        },
        currentEmployment: function (val) {
            return ('[name="pensions[' + val + '].isCurrentEmployment"]')
        },
        planNumber: function (val) {
            return ('input[name="pensions['+ val + '].planNumber"]')
        },
        endDate: function (val) {
            return ('[id="mui-component-select-pensions[' + val + '].endDate"]')
        }, 
    }

    /**
     * function for verify landing on login page
     * @return {void} Nothing
     */
    async clickOnFindOldPensionButton() {
        await this.waitForSelector(this.elements.findoldPensionsButton)
        await this.verifyVisibility(this.elements.findoldPensionsButton, true)
        await this.click(this.elements.findoldPensionsButton)
    }

    /**
     * function for fill previouspension
     * @return {void} Nothing
     */
    async fillPreviousEmployer(num) {
        await this.waitForSelector(this.elements.previousEmployer(num))
        await this.verifyVisibility(this.elements.previousEmployer(num), true)
        await this.type(this.elements.previousEmployer(num), "Joe's Diner")
        await this.pressKey('Enter')
    }

    /**
     * function for fill starting year and ending year
     * @return {void} Nothing
     */
    async selectYear(num) {
        await this.click(this.elements.startDate(num))
        await this.waitForSelector(this.elements.startingYear)
        await this.click(this.elements.startingYear)
        await this.click(this.elements.endDate(num))
        await this.waitForSelector(this.elements.endingYear)
        await this.click(this.elements.endingYear)
    }

    /**
     * function for fill company website and company size
     * @return {void} Nothing
     */
    async fillCompanyWebsiteAndCompanySize(num) {
        await this.verifyVisibility(this.elements.companyWebsite(num), true)
        await this.type(this.elements.companyWebsite(num), "www.test.com")
        await this.verifyVisibility(this.elements.companySize(num), true)
        await this.click(this.elements.companySize(num))
        await this.pressKey("Enter")
    }

    /**
     * function for select the previous address
     * @return {void} Nothing
     */
     async previousPostCode(num) {
        await this.waitForSelector(this.elements.previousAddress(num))
        await this.verifyVisibility(this.elements.previousAddress(num), true)
        await this.type(this.elements.previousAddress(num), "sw11")
        await this.wait(1)
        await this.pressKey('ArrowDown')
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
    }

    async fillPreviousPostcode() {
        await this.waitForSelector(this.elements.postcode)
        await this.type(this.elements.postcode, "SW116JA")
        await this.type(this.elements.houseNumber, "1")
        await this.type(this.elements.address1, "1 Dents Roads")
        await this.type(this.elements.town, "London")
        await this.type(this.elements.country, "United Kingdom")
        await this.verifyVisibility(this.elements.addButton + ' >> nth=1', true)
        await this.click(this.elements.addButton + ' >> nth=1')
    }

    /**
     * function for fill pension with provider
     * @return {void} Nothing
     */
    async fillPensionProvider(num) {
        await this.waitForSelector(this.elements.previousProvider(num))
        await this.verifyVisibility(this.elements.previousProvider(num), true)
        await this.type(this.elements.previousProvider(num), "Aegon")
        await this.pressKey('Enter')
        await this.verifyVisibility(this.elements.planNumber(num), true)
        await this.type(this.elements.planNumber(num), "3")
    }

    /**
     * function for search pension with current employment
     * @return {void} Nothing
     */
    async searchPensionWithCurrentEmployment(num) {
        await this.verifyVisibility(this.elements.currentEmployment(num), true)
        await this.click(this.elements.currentEmployment(num))
        await this.shouldContainText(this.elements.messageBox, "We cannot transfer pensions from your current employer as you may lose out on employer contributions.")
    }

    /**
     * function for check the agree to consolidate check box
     * @return {void} Nothing
     */
    async checkAgreeToConsolidate() {
        await this.verifyVisibility(this.elements.agreeToConsolidate, true)
        await this.checkToCheckbox(this.elements.agreeToConsolidate)
        await this.checkCheckbosIsChecked(this.elements.agreeToConsolidate)
    }

    /**
     * function for submit request
     * @return {void} Nothing
     */
    async submitRequest() {
        await this.verifyVisibility(this.elements.submitButton, true)
        await this.click(this.elements.submitButton)
        await this.click(this.elements.submitButton + '>> nth=1')
        await this.wait(2)
    }

    /**
     * function for add one more pension
     * @return {void} Nothing
     */
    async clickOnAddMorePension() {
        await this.verifyVisibility(this.elements.addMorePensionButton, true)
        await this.click(this.elements.addMorePensionButton)
    }

    /**
     * function for verify added pension card available
     * @return {void} Nothing
     */
    async verifyAddedPensionCardAvailable() {
        await this.verifyVisibility(this.elements.verifySecondPension + '>> nth=1', true)
    }

    /**
     * function for delete third pension card
     * @return {void} Nothing
     */
    async deleteThirdPensionCard() {
        await this.clickLastElement(this.elements.cancelCard)
    }
}
