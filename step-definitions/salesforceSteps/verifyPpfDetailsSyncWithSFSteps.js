const { Then } = require('@cucumber/cucumber');
const { sfpfcase } = require('../../page-objects/salesforce/sfpfcase.po');

const sfpfObj = new sfpfcase();

Then('User search for account {string}', async (account_id) => {
    await sfpfObj.searchRaindropId(account_id)
})

Then('User verify searching status', async () => {
    await sfpfObj.verifySearchingStatus()
})

Then('User verify employment details', async () => {
    await sfpfObj.verifyEmploymentDetails()
})