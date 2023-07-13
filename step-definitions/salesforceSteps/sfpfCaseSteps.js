const { When, Then } = require('@cucumber/cucumber');
const { sfpfcase } = require('../../page-objects/salesforce/sfpfcase.po');
const { Verify_Email } = require('../../page-objects/salesforce/verifyEmail.po');

const sfpfObj = new sfpfcase();
const emailObj = new Verify_Email();
const d = new Date()
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
let email = "cherry" + date + month + year

When('User searches for case number {string}', async (case_no) => {
    await sfpfObj.searchCaseNumber(case_no);
})

Then("User update employer information {string}", async (employer_name) => {
    await sfpfObj.updateEmployerInformation(employer_name)
})

Then("save the updated information", async () => {
    await sfpfObj.saveInformation()
})

Then("User generates and sends Employer LOA", async () => {
    await sfpfObj.generateAndSendEmployerLOA()
})

Then("Employer receives the LoA", async () => {
    await emailObj.checkSentStatus()
})

Then("logout the page", async () => {
    await sfpfObj.logout()
})

Then("User creates a new Employer account {string}", async (employerName) => {
    await sfpfObj.createNewEmployerAccount(employerName)
    await sfpfObj.verifyAccountInformation()
    await sfpfObj.fillAccountInformation()
})

Then("User update provider information {string} and {string}", async (provider_name, scheme) => {
    await sfpfObj.updateProviderInformation(provider_name, scheme)
})

Then("Generate provider LOA and send Provider LOA", async () => {
    await sfpfObj.generateAndSendProviderLOA()
})

Then("Provider receives the LoA", async () => {
    await emailObj.checkSentStatus()
})

Then("User saves the Employer information", async () => {
    await sfpfObj.saveInformation()
})

Then("User open and verify employer contact details tab in external data sources", async () => {
    await sfpfObj.openEmployerContactDetails()
    await sfpfObj.verifyEmployerContactDetails()
})

Then("User search and verify employer details", async () => {
    await sfpfObj.validateSearchingError()
    await sfpfObj.searchingEmployer()
})

Then("User search and verify contact details by employer domain", async () => {
    await sfpfObj.searchingContactDetails()
})

Then("User get contact email and verify", async () => {
    await sfpfObj.getContactDetails()
})

When('User search for a ppf user {string}', async (email_id) => {
    const email_generated_date = email + email_id;
    await sfpfObj.searchPpfUser(email_generated_date)
})

Then('User verify government portal', async () => {
    await sfpfObj.verifyGovernmentPortal()
})