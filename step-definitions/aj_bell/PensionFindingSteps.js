const { Then } = require('@cucumber/cucumber');
const { Iapf } = require('../../page-objects/aj_bell/PensionFinding.po');
const { SignupForm } = require('../../page-objects/aj_bell/SignupForm.po');
const { ppfLogin} = require('../../page-objects/aj_bell/AjBellLogin.po');

const signupObj = new SignupForm();
const pensionFinderObj = new Iapf();
const ppfLoginObj = new ppfLogin();

Then('user go to add new pension page', async () => {
    await pensionFinderObj.clickOnAddNewPension()
})

Then('user add pension with employer {string}', async (employer_name) => {
    await signupObj.fillPensionwithEmployer(employer_name)
    await signupObj.selectYear("2015", "2016")
    await pensionFinderObj.submitRequest()
    await ppfLoginObj.verifyDashboardPage()
})
