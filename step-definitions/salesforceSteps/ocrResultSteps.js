const { Then } = require('@cucumber/cucumber');
const { sfpfcase } = require('../../page-objects/salesforce/sfpfcase.po');

const sfpfObj = new sfpfcase();

Then("User searches for Case by Raindrop ID {string}", async (case_id) => {
    await sfpfObj.searchRaindropId(case_id)
})

Then("User opens Related tab", async () => {
    await sfpfObj.openRelatedTab()
})

Then("User can see Case level OCR results", async () => {
    await sfpfObj.verifyDateReceivedValues()
    await sfpfObj.verifyDocumentClassValues()
    await sfpfObj.verifyhasDataValues()
    await sfpfObj.verifyApproxValue()
    await sfpfObj.verifyPensionPlan()
})