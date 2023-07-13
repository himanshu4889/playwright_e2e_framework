const { Then } = require('@cucumber/cucumber');
const { ForgotPwd } = require('../../page-objects/aj_bell/ForgotPassword.po');
const { ppfLogin} = require('../../page-objects/aj_bell/AjBellLogin.po');

const pwdObj = new ForgotPwd();
const ppfLoginObj = new ppfLogin();

Then('user go to the forgot password page', async () => {
    await pwdObj.goToforgotPasswordPage()
})

Then('user reset the password {string}', async  (email) => {
    await pwdObj.resetPassword(email)
    await pwdObj.goTOMailosaurEmail(email)
    await pwdObj.typeNewPassword()
})

Then('user verify the success message', async () => {
    await pwdObj.verifySuccessMessage()
})

Then('user login to ppf account {string}', async (email) => {
    await ppfLoginObj.loginWith(email)
    await ppfLoginObj.verifyDashboardPage()
})

Then('user change the password', async () => {
    await pwdObj.changePassword()
    await pwdObj.verifySuccessMessage()
})
