const { Given, When, Then } = require('@cucumber/cucumber');
const { Login } = require('../../page-objects/salesforce/login.po');
const { iapf } = require('../../page-objects/iapf/iapfLogin.po');

const loginObj = new Login();
const iapfObj = new iapf();

Given('User opens the IAPF url', async () => {
    await loginObj.goTo(global.IAPF_URL);
});

When('user login to IAPF account {string}', async (email) => {
    await iapfObj.verifyLandingOnIapfLoginpage()
    await iapfObj.login(email)
    await iapfObj.verifyDashboardPage()
})
