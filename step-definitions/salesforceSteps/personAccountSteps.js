const { When, Then } = require('@cucumber/cucumber');
const { personAccount } = require('../../page-objects/salesforce/personAccount.po');
const { sfpfcase } = require('../../page-objects/salesforce/sfpfcase.po');
const { Verify_Email } = require('../../page-objects/salesforce/verifyEmail.po');
const { Login } = require('../../page-objects/salesforce/login.po');

const loginObj = new Login();

const personAccountObj = new personAccount();
const sfpfObj = new sfpfcase();
const verifyEmailobj = new Verify_Email()

When('User select unassigned cases', async () => {
    await personAccountObj.clickonCases()
    await personAccountObj.selectUnassignedCases()
    await personAccountObj.openSpecificContact()
})
Then('User change account owner', async () => {
    await personAccountObj.changeOwner()
})

Then('User open the customer person account', async () => {
    await sfpfObj.openPersonAccount()
})

Then('User select chase for more information as yes', async () => {
    await personAccountObj.selectNoChaseForMoreInformation()
    await personAccountObj.saveChaserInformation()
    await personAccountObj.selectYesChaseForMoreInformation()
})

Then('User select chase reason from list', async () => {
    await personAccountObj.selectChaseReason()
})

Then('User save the updated chaser', async () => {
    await personAccountObj.saveChaserInformation()
})

Then('User select chase for more information again', async () => {
    await personAccountObj.selectYesChaseForMoreInformation()
    await personAccountObj.selectDateAndTime()
    await personAccountObj.saveChaserInformation()
    await personAccountObj.verifyChaserYes()
})

Then('User verify activity feed', async () => {
    await personAccountObj.verifyActivityFeed()
})

Then('User verify and open the related tab', async () => {
    await sfpfObj.verifyRelatedTab()
})

Then('User verify expand and collapse that are in related tab', async () => {
    await sfpfObj.verifyExpandandCollapseSummary()
})

Then('User add potential scheme profiles in user potential schemes field', async () => {
    await sfpfObj.addSchemeProfile()
})

Then('User add new scheme in user potential schemes field', async () => {
    await sfpfObj.addScheme()
})

Then('User send mass LoA', async () => {
    await sfpfObj.sendMassLoA()
})

Then('User verify the email for mass LoA', async () => {
    await verifyEmailobj.verifyEmailForMassLoA("pension_provider_scheme_694@8hlpvn6h.mailosaur.net")
    await verifyEmailobj.verifyEmailForMassLoA("pension_provider_scheme_681@8hlpvn6h.mailosaur.net")
    await verifyEmailobj.verifyEmailForMassLoA("pension_provider_scheme_670@8hlpvn6h.mailosaur.net")
})

Then('User verify LoA status', async () => {
    await loginObj.goTo(global.SALESFORCE_URL);
    await sfpfObj.verifyRelatedTab()
    await sfpfObj.verifyLoAStatus()
})

Then('User delete all schemes', async () => {
    await sfpfObj.deleteScheme()
})