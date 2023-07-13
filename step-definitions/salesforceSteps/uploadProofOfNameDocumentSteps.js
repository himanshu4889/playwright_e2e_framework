const { Then } = require('@cucumber/cucumber');
const { sfContact } = require('../../page-objects/salesforce/sfContact.po');

const sfContactObj = new sfContact();

Then('User open the file tab', async () => {
    await sfContactObj.selectDocumentType()
})

Then('User upload proof of name document', async () => {
    await sfContactObj.uploadDocument()
})
