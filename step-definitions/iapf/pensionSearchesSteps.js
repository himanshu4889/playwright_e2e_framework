const { Then } = require('@cucumber/cucumber');
const { pensionSearch } = require('../../page-objects/iapf/pensionSearches.po');

const pensionSearchObj = new pensionSearch();

Then('user go to find old pensions page', async () => {
    await pensionSearchObj.clickOnFindOldPensionButton()
})

Then('user fill first pension search information', async () => {
    await pensionSearchObj.fillPreviousEmployer(0)
    await pensionSearchObj.selectYear(0)
    await pensionSearchObj.searchPensionWithCurrentEmployment(0)
    await pensionSearchObj.fillCompanyWebsiteAndCompanySize(0)
    await pensionSearchObj.previousPostCode(0)
    await pensionSearchObj.fillPreviousPostcode()
    await pensionSearchObj.fillPensionProvider(0)
})

Then('user submit the search request', async () => {
    await pensionSearchObj.checkAgreeToConsolidate()
    await pensionSearchObj.submitRequest()
})

Then('user add one pension card', async () => {
    await pensionSearchObj.clickOnAddMorePension()
    await pensionSearchObj.verifyAddedPensionCardAvailable()
})

Then('user leave the second card empty and try to submit the request', async () => {
    await pensionSearchObj.checkAgreeToConsolidate()
    await pensionSearchObj.submitRequest()
})

Then('user add second pension card', async () => {
    await pensionSearchObj.clickOnAddMorePension()
    await pensionSearchObj.verifyAddedPensionCardAvailable()
})

Then('user fill second pension card', async () => {
    await pensionSearchObj.fillPreviousEmployer(1)
    await pensionSearchObj.selectYear(1)
    await pensionSearchObj.fillCompanyWebsiteAndCompanySize(1)
    await pensionSearchObj.previousPostCode(1)
    await pensionSearchObj.fillPreviousPostcode()
    await pensionSearchObj.fillPensionProvider(1)
})

Then('user add third pension card', async () => {
    await pensionSearchObj.clickOnAddMorePension()
    await pensionSearchObj.verifyAddedPensionCardAvailable()
})

Then('verify user can delete third pension card', async () => {
    await pensionSearchObj.deleteThirdPensionCard()
})

