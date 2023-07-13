const { Given, When, Then } = require('@cucumber/cucumber');
const { authenticate } = require("../../page-objects/ajbpf-v2/ajbpf-v2.po")
const { SignupForm } = require('../../page-objects/aj_bell/SignupForm.po');

const authenticateObj = new authenticate()
const signupObj = new SignupForm();

Given('User opens the ajBf-V2 url', async () => {
    await authenticateObj.goTo(global.AJBPF_V2_URL);
});

When('User registers or logs in a Partner user in Raindrop system', async (dataTable) => {
    let data='';
    dataTable.hashes().forEach(async (element) => {
        data={
            fName:element.fName,
            lName:element.lName,
            dob:element.dob,
            gender:element.gender,
            nationalInsuranceNumber:element.nationalInsuranceNumber
        }
    });
    await authenticateObj.typename(data)
    const email=await signupObj.generateEmaild()
    await authenticateObj.typeEmailId(email + "@8hlpvn6h.mailosaur.net")
    await authenticateObj.fillDob(data)
    await authenticateObj.typeGender(data)
    await authenticateObj.typeNationalInsuranceNumber(data)
    await authenticateObj.selectPartnerSipp()
    await authenticateObj.typeAddress()
    await authenticateObj.typeXApiKey()
    await authenticateObj.submitAuthenticator()
})

Then('User add pension finding request with employer {string}', async (employer_name) => {
    await authenticateObj.fillPensionwithEmployer(employer_name)
    await authenticateObj.selectYear()
})

Then('User verify and select employer website {string}', async (employer_name) => {
    await authenticateObj.verifyEmployerWebsite("Please match your employer website:", employer_name, "+ None of the websites match with my company")
    await authenticateObj.selectEmployerWebsite()
    await authenticateObj.addNewWebsite("https://www.mcdonalds.com", "small")
    await authenticateObj.clickOnNextButton()
})

Then('User add signature', async () => {
    await authenticateObj.fillSignature()
})

Then('User submit the request', async () => {
    await authenticateObj.clickOnSubmitButton()
})

Then('User verify pension finding dashboard page', async () => {
    await authenticateObj.verifyDashboardPage("Mcdonald's")
})