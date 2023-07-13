const { Then } = require('@cucumber/cucumber');
const { sfpfcase } = require('../../page-objects/salesforce/sfpfcase.po');

const sfpfObj = new sfpfcase();

Then('update chase employer information to {string} and verify', async(chaser) => {
    await sfpfObj.updateChaseEmployer(chaser)
    await sfpfObj.saveChaserAndVerify()
});