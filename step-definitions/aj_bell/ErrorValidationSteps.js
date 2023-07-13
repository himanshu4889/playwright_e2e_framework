const { When, Then } = require('@cucumber/cucumber');
const { ErrorValidate} = require('../../page-objects/aj_bell/ErrorValidation.po');

const errorObj = new ErrorValidate();

When('User verify the validation error for name, email and password fields', async() => {
    await errorObj.intialisingValidationError()
    await errorObj.passwordValidationError()
})

Then('User verify the validation error for personal details', async() => {
    await errorObj.personalDetailsValidationError()
})

Then('User verify the validation error for national insurance number', async() => {
    await errorObj.insuranceNumberValidationError()
})

Then('User verify the validation error for pension searches', async() => {
    await errorObj.pensionSearchesValidationError()
})

Then('User verify the validation error for the signature', async() => {
    await errorObj.signatureValidationError()
})