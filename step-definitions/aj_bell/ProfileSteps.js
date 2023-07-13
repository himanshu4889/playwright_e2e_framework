const { Then } = require('@cucumber/cucumber');
const { profile } = require('../../page-objects/aj_bell/Profile.po');

const profileObj = new profile();

Then('User go to the profile page', async () => {
    await profileObj.goToProfilePage()
})

Then('User verify personal details', async () => {
    await profileObj.verifyPersonalDetails()
})

Then('User go to security details tab', async () => {
    await profileObj.goToSecurityDetailsPage()
})

Then('User add mobile number', async () => {
    await profileObj.addMobileNumber()
})

Then('User edit mobile number', async () => {
    await profileObj.editMobileNumber()
})