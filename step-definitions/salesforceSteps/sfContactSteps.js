const { Then } = require('@cucumber/cucumber');
const { sfContact } = require('../../page-objects/salesforce/sfContact.po');
const { personAccount } = require('../../page-objects/salesforce/personAccount.po');

const sfContactObj = new sfContact();
const personAccountObj = new personAccount();

Then('User go to the email', async () => {
    await sfContactObj.openCustomerAccount()
    await sfContactObj.clickOnEmail()
})

Then('User select template folders', async () => {
    await sfContactObj.clickOnInsertandUpdateBtn()
})

Then('User select assign email and send the email', async () => {
    await sfContactObj.selectAssignEmailAndSendEmail()
})

Then('User select generic update email and send the email', async () => {
    await sfContactObj.clickOnEmail()
    await sfContactObj.clickOnInsertandUpdateBtn()
    await sfContactObj.selectGenericUpdateEmailAndSendEmail()
})

Then('User verify activity feed for email', async () => {
    await personAccountObj.verifyActivityFeedForEmail()
})