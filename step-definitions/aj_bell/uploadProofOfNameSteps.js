const { Then } = require('@cucumber/cucumber');
const { uploadProof} = require('../../page-objects/aj_bell/uploadProofOfName.po');

const uploadProofObj = new uploadProof();

Then('user verify the dashboard page', async () => {
    await uploadProofObj.verifyDashboardPage()
})

Then('user go to upload proof of name change page', async () => {
    await uploadProofObj.gotoUploadProofOfNamePage()
    await uploadProofObj.verifyUploadPONpage()

})

Then('user upload the document for proof of name change', async () => {
    await uploadProofObj.verifyValidationError()
    await uploadProofObj.uploadPONdocument()
})

Then('user verify document is uploaded or not', async () => {
    await uploadProofObj.verifyUploadPONdocument()
    await uploadProofObj.verifySuccessmessage()
    await uploadProofObj.verifyDashboardPage()
})