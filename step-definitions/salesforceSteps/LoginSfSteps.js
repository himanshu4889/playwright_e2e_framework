const { Given, When, Then } = require('@cucumber/cucumber');
const { Login } = require('../../page-objects/salesforce/login.po');

const loginObj = new Login();

Given('User opens Salesforce', async () => {
    await loginObj.goTo(global.SALESFORCE_URL);
});

When('User logs into Salesforce', async () => {
    await loginObj.logintoSalesforce()
});
