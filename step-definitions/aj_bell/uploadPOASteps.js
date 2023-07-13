const { Then } = require('@cucumber/cucumber');
const { uploadPOA} = require('../../page-objects/aj_bell/uploadPOA.po');
const uploadPOAobj = new uploadPOA();

Then('user go to upload proof of address page', async () => {
    await uploadPOAobj.gotoUploadPOA()
    await uploadPOAobj.verifyUploadPOApage()
})

Then('user upload the document for proof of address', async () => {
    await uploadPOAobj.verifyValidationError()
    await uploadPOAobj.uploadPOAdocument()
})

Then('user verify proof of address document is uploaded or not', async () => {
    await uploadPOAobj.verifyUploadPOAdocument()
    await uploadPOAobj.verifySuccessmessage()
    await uploadPOAobj.verifyDashboardPage()
})