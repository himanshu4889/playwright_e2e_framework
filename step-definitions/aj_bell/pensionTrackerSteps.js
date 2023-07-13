const { Then } = require('@cucumber/cucumber');
const { pensionTracker} = require('../../page-objects/aj_bell/pensionTracker.po');
const pensionTrackerObj = new pensionTracker();

Then('user go to searching pension tracker page and verify the page', async () => {
    await pensionTrackerObj.gotoSearchingPensionTrackerPage()
    await pensionTrackerObj.verifySearchingPensionTrackerPage()
})

Then('user edit employment details page and verify the page', async () => {
    await pensionTrackerObj.goToEditEmploymentDetails()
    await pensionTrackerObj.verifyEditEmploymentDetailsPage()
    await pensionTrackerObj.validateErrorForEmploymentDetails()
})

Then('user fill employment details', async () => {
    await pensionTrackerObj.fillEmployerContactDetails()
    await pensionTrackerObj.fillCompanyWebsite()
    await pensionTrackerObj.selectCompanySize()
    await pensionTrackerObj.selectCompanyIndustry()
    await pensionTrackerObj.selectCompanyDissolved()
})

Then('user save the employment information', async () => {
    await pensionTrackerObj.saveEmploymentDetails()
})

Then('user redirects to the dashboard page', async () => {
    await pensionTrackerObj.gotODashboard()
})

Then('user verify action required pension card', async () => {
    await pensionTrackerObj.verifyActionRequired()
})

Then('user click on transfer button', async () => {
    await pensionTrackerObj.verifyPensionFoundCard()
})

Then('Verify aj bell page is opening in new tab', async () => {
    await pensionTrackerObj.verifyajBellOpenInNewTab()
})

Then('user verify pension cards', async () => {
    await pensionTrackerObj.verifyPensionFoundCard()
    await pensionTrackerObj.verifyActionRequiredPension()
    await pensionTrackerObj.verifySearchingPension()
    await pensionTrackerObj.verifyInvalidPension()
    await pensionTrackerObj.verifyUnlikelyToExistPension()
    await pensionTrackerObj.verifyCustomerWithdrawnPension()
    await pensionTrackerObj.verifyPensionNotFoundPensionCard()
})