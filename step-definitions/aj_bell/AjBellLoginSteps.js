const { Given, When, Then } = require('@cucumber/cucumber');
const { Login } = require('../../page-objects/salesforce/login.po');
const { ppfLogin} = require('../../page-objects/aj_bell/AjBellLogin.po');

const loginObj = new Login();
const ppfLoginObj = new ppfLogin();

Given('User opens the ajBell url', async () => {
    await loginObj.goTo(global.AJBELL_URL);
});

When('user go to the login page', async () => {
    await ppfLoginObj.goToLoginPage()
})

Then('logout', async () => {
    await ppfLoginObj.logOut()
})


