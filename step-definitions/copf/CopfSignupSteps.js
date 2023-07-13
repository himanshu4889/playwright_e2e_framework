const { Given, When, Then } = require('@cucumber/cucumber');
const { Login } = require('../../page-objects/salesforce/login.po');
const { ForgotPwd } = require('../../page-objects/aj_bell/ForgotPassword.po');
const { CopfSignupForm } = require('../../page-objects/copf/CopfSignup.po');

const loginObj = new Login();
const pwdObj = new ForgotPwd();
const CopfSignupObj = new CopfSignupForm();
let email_generated;

Given('User opens the copf url', async () => {
    await loginObj.goTo(global.COPF_URL);
});

When('user fills FirstName and LastName', async () => {
    await CopfSignupObj.typeFirstname()
    await CopfSignupObj.typeLastname()
})

Then('user fills email and password {string}', async (email_id) => {
    email_generated = await CopfSignupObj.generateEmaild(email_id);
    await CopfSignupObj.fillEmailandPassword(email_generated)
})

Then('user select gender {string}', async (Gender) => {
    await CopfSignupObj.selectGender(Gender)
})

Then('user select date of birth {string}', async (DOB) => {
    await CopfSignupObj.selectDob(DOB)
})

Then('user select address {string}', async (address) => {
    await CopfSignupObj.selectAddress(address)
    await CopfSignupObj.clickOnNextButton()
})

Then('user fill insurance number {string}', async (NI_number) => {
    await CopfSignupObj.fillNationalInsurance(NI_number)
})

Then('user select nationality and marital status', async () => {
    await CopfSignupObj.selectNationality()
    await CopfSignupObj.selectMaritalStatus()
    await CopfSignupObj.clickOnNextButton()
})

Then('user fill pension with employer {string}', async (employer_name) => {
    await CopfSignupObj.fillPensionwithEmployer(employer_name)
    await CopfSignupObj.selectYear()
    await CopfSignupObj.clickOnNextButton()
})

Then('user select target retirement age', async () => {
    await CopfSignupObj.selectTargetRetirementAge()
    await CopfSignupObj.clickOnNextButton()
})

Then('user fill signature', async () => {
    await CopfSignupObj.fillSignature()
    await CopfSignupObj.checkAgreeToConsolidatCheckBox()
})

Then('user submit the form and verify', async () => {
    await CopfSignupObj.clickOnSubmitButton()
    await CopfSignupObj.verifyThankyouMessage()
})

Then('user verify the email', async () => {
    await pwdObj.goTOMailosaurEmail(email_generated, "Verify your Raindrop account")
})

Then('user open raindrop pension', async () => {
    await CopfSignupObj.openRaindropPension()
})

Then('user select employment status as LTD Director', async () => {
    await CopfSignupObj.selectEmploymentStatus()
})

Then('user go back to old pensions page', async () => {
    await CopfSignupObj.goToOldPensions()
    await CopfSignupObj.verifyDashboardPage()
})

Then('user again go to open a raindrop pension page', async () => {
    await CopfSignupObj.openRaindropPension()
})
