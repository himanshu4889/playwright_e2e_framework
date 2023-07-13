const { When, Then } = require('@cucumber/cucumber');
const { SignupForm } = require('../../page-objects/aj_bell/SignupForm.po');
const { ForgotPwd } = require('../../page-objects/aj_bell/ForgotPassword.po');
const { ppfLogin} = require('../../page-objects/aj_bell/AjBellLogin.po');

const ppfLoginObj = new ppfLogin();
const pwdObj = new ForgotPwd();
const signupObj = new SignupForm();
let email_generated;
const d = new Date()
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
let email = "cherry" + date + month + year;
let email_generated_date;

When('User fills FirstName and LastName', async function () {
    await signupObj.typeFirstname("test")
    await signupObj.typeLastname("automation")
})

Then('User fills email and password {string}', async (email_id) => {
    email_generated = await signupObj.generateEmaild(email_id);
    process.env.email_generated = email_generated;
    await signupObj.fillEmailandPassword(email_generated)
})

Then('User select gender {string}', async (Gender) => {
    await signupObj.selectGender(Gender)
})

Then('User select date of birth {string}', async (DOB) => {
    await signupObj.selectDob(DOB)
})

Then('User select address {string}', async (address) => {
    await signupObj.selectAddress(address)
})

Then('User fill insurance number {string}', async (NI_number) => {
    await signupObj.fillNationalInsurance(NI_number)
})

Then('User fill pension with employer {string}', async (employer_name) => {
    await signupObj.fillPensionwithEmployer(employer_name)
    await signupObj.selectYear("2014", "2015")
})

Then('User fill signature', async () => {
    await signupObj.fillSignature()
})

Then('User submit the form and verify', async () => {
    await signupObj.clickOnSubmitButton()
    await signupObj.verifyThankyouMessage("Please verify your email.", "We cannot begin searching for your pension until we verify your email.")
})

Then('User select date of birth {string} and verify the error message for min age', async (DOB) => {
    await signupObj.selectDob(DOB)
    await signupObj.verifyErrorMessage("You must be at least 18 to use our pension finding service")
})

Then('User select date of birth {string} and verify the error message for max age', async (DOB) => {
    await signupObj.updateDob(DOB)
    await signupObj.verifyErrorMessage("Please check the date of birth you have inputted")
})

Then('User fill previous postcode {string}', async (address) => {
    await signupObj.previousPostCode(address)
    await signupObj.fillPreviousPostcode()
})

Then('User fill pension provider {string}', async(provider_name) => {
    await signupObj.fillPensionProvider(provider_name)
})

Then('User type email {string}', async (email_id) => {
    await signupObj.fillEmail(email_id)
})

Then('User type password for verify the password strength', async() => {
    await signupObj.passwordwith1Character("q", "Q")
    await signupObj.passwordWithNumbers("123")
    await signupObj.passwordWith8Digits("erty1234")
})

Then('User search pension with current employment {string} and verify', async(employer_name) => {
    await signupObj.fillPensionwithEmployer(employer_name)
    await signupObj.searchPensionWithCurrentEmployment("We cannot transfer pensions")
})

Then('User verify the email for ppf', async() => {
    await pwdObj.goTOMailosaurEmail(email_generated, "AJ Bell Youinvest (master) Pension Finding Service")
})

Then('User verify successfully land on the ppf dashboard page', async() => {
    await ppfLoginObj.verifyDashboardPage()
})

Then('Fills email and password {string}', async (email_id) => {
    email_generated_date = email + email_id;
    await signupObj.fillEmailandPassword(email_generated_date)
})

Then('User add first pension as {string}', async(employer_name) => {
    await signupObj.fillPensionwithEmployer(employer_name)
    await signupObj.selectYear("2017", "2018")
})

Then('User add second pension as {string}', async(secondEmployer_name) => {
    await signupObj.addSecondPensionWithCurrentEmployment(secondEmployer_name, "We cannot transfer pensions")
})

Then('User verify Pension cards', async() => {
    await signupObj.verifySearchingPensionCards('Lancashire City Council')
    await signupObj.verifyInvalidPensionCards('Barclay & Mathieson Limited')
})

When('User fills first name as {string} and last name as {string}', async(first_name, last_name) => {
    await signupObj.typeName(first_name, last_name)
})

Then('User fill second pension with employer {string}', async(secondEmployer_name) => {
    await signupObj.fillSecondPensionCardWithEmployer(secondEmployer_name)
    await signupObj.selectYearForSecondPensionCard("2017", "2018")
})

Then('User enter mobile number {string}', async(mobile_number) => {
    await signupObj.enterMobileNumber(mobile_number)
})

Then('User verify signature field', async() => {
    await signupObj.verifySignatureField()
})

Then('User verify part time and full time options', async() => {
    await signupObj.verifyEmploymentType()
})

Then('User select part time option', async() => {
    await signupObj.selectPartTime("If you worked part time at a job it is very unlikely that you had a pension.")
})

Then('User upload the document for proof of address at sign up page', async() => {
    await signupObj.uploadDocumentatSignup()
})

Then('User verify the email for government pension', async() => {
    await pwdObj.goTOMailosaurEmail(email_generated_date, "AJ Bell Youinvest (master) Pension Finding Service")
})

Then('User verify and select employer website for {string}', async(employer_name) => {
    await signupObj.verifyEmployerWebsite("Please match your employer website:", employer_name, "+ None of the websites match with my company")
    await signupObj.selectEmployerWebsite()
})