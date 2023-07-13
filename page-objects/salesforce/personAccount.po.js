/*global browser, userContext, userPage*/
const d = new Date();
const date = d.toLocaleDateString('en-GB')
let minMinutes, maxMinutes;

const { expect } = require('chai');
const { BaseAction } = require('../../setup/baseAction');
exports.personAccount = class personAccount extends BaseAction {
    constructor() {
        super();
    }
    /**
     * Creating elements object for initializing required locators
     */
    elements = {
        casesdropdown: '//button[@title="Show Navigation Menu"]',
        caseOption: '//a[@data-label="Cases"]',
        listView: '//button[@title="Select a List View"]',
        textBox: '.uiInputTextForAutocomplete',
        changeOwnerIcon: '(//*[@data-key="change_owner"])[1]',
        ownerSearchBar: '//input[@title="Search Users"]',
        transferAllOwndedCase: '//input[@name="TransferAllOwnedCases"]',
        changeOwnerButton: '//button[@value="change owner"]',
        message: '//div[@data-aura-class="forceToastMessage"]',
        ownerName: '//span[@class="flex-wrap-ie11 owner-name slds-truncate slds-grow"]',
        specificContact: '(//tr/td[5]//a)[1]',
        emailAutomation: '//span[text()="Email Automation"]',
        editChase: '//div[contains(@id,"sectionContent")]//button[@title="Edit Chase For More Information"]',
        selectChase: '//button[contains(@aria-label,"Chase For More Information,")]',
        chaseReasonList: '//button[contains(@aria-label,"Chase for More Information Reason 2,")]',
        chaseDob: '//span[@title="Date of Birth"]',
        moveChaseButton: '//button[@title="Move selection to Chosen"]',
        noneChase: '//button[@aria-label="Chase For More Information, --None--"]',
        yesChase: '//span[@title="Yes"]',
        noChase: '//span[@title="No"]',
        saveButton: 'button[name="SaveEdit"]',
        chaser1Label: '//*[@class="slds-form-element__legend slds-form-element__label"]',
        chaserDateTime: '//input[@name="We_need_more_information_chaser_1__c"]',
        saveButton: '//button[@class="slds-button slds-button_brand"]',
        activityFeed: '(//a[@title="[ACTION REQUIRED] - We need more information"])[1]',
        verifyYes: '(//*[text()="Yes"])[3]',
        activityFeedDate: '(//div[@class="slds-var-m-right_small dueDate slds-text-color_weak"])[1]',
        emailActivityFeed: '(//a[@title="Raindrop: Update on your pension finding & transfer request"])[1]',
        personalDetails: '(//a[@id="detailTab__item"])[1]'
    }


    /**
     * function for click on cases
     * @return {void} Nothing
     */
    async clickonCases() {
        await this.verifyVisibility(this.elements.casesdropdown, true)
        await this.click(this.elements.casesdropdown)
        await this.click(this.elements.caseOption)
    }

    /**
    * function for select unassigned cases
    * @return {void} Nothing
    */
    async selectUnassignedCases() {
        await this.waitForSelector(this.elements.listView)
        await this.verifyVisibility(this.elements.listView, true)
        await this.click(this.elements.listView)
        await this.click(this.elements.textBox)
        await this.type(this.elements.textBox, "Unassigned cases")
        await this.wait(2)
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
    }

    /**
     * function for open specific contact
     * @return {void} Nothing
     */
    async openSpecificContact() {
        await this.waitForSelector(this.elements.specificContact)
        await this.verifyVisibility(this.elements.specificContact, true)
        await this.forceClick(this.elements.specificContact)
    }

    /**
     * function for change owner
     * @return {void} Nothing
     */
    async changeOwner() {
        let changeNameTo = "Akshay Garg";
        let name = await this.getTexts(this.elements.ownerName)
        if (name.indexOf(changeNameTo) >= 0) {
            changeNameTo = "Raul Tudor";
        }
        await this.click(this.elements.changeOwnerIcon)
        await this.click(this.elements.ownerSearchBar)
        await this.type(this.elements.ownerSearchBar, changeNameTo)
        await this.wait(5)
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
        await this.verifyVisibility(this.elements.transferAllOwndedCase, true)
        await this.click(this.elements.transferAllOwndedCase)
        await this.click(this.elements.changeOwnerButton)
    }

    /**
     * function for select chase for more information as yes
     * @return {void} Nothing
     */
    async selectNoChaseForMoreInformation() {
        await this.click(this.elements.personalDetails)
        await this.wait(2)
        await this.click(this.elements.editChase)
        await this.wait(4)
        await this.click(this.elements.selectChase)
        try {
            await this.click(this.elements.noChase)
        }
        catch (e) {
            await this.click(this.elements.selectChase)
            await this.click(this.elements.noChase)
        }
        await this.wait(4)
    }

    async selectYesChaseForMoreInformation() {
        await this.wait(2)
        await this.click(this.elements.editChase)
        await this.wait(4)
        await this.click(this.elements.selectChase)
        try {
            await this.click(this.elements.yesChase)
        }
        catch (e) {
            await this.click(this.elements.selectChase)
            await this.click(this.elements.yesChase)
        }
        await this.wait(4)
    }

    /**
     * function for verify chaser is selected as yes
     * @return {void} Nothing
     */
    async verifyChaserYes() {
        const verifyDates = function (addedDate) {
            return '(//*[@data-output-element-id="output-field"][contains(text(), "' + addedDate + '")])[1]'
        }
        await this.wait(5)
        await this.verifyVisibility(verifyDates(await this.getFutureDate(2)), true)
        await this.verifyVisibility(verifyDates(await this.getFutureDate(4)), true)
        await this.verifyVisibility(verifyDates(await this.getFutureDate(6)), true)
    }

    /**
     * function for select chase for more information
     * @return {void} Nothing
     */
    async selectChaseReason() {
        await this.verifyVisibility(this.elements.chaseReasonList, true)
        await this.click(this.elements.chaseReasonList)
        await this.wait(5)
        await this.pressKey('ArrowDown')
        await this.pressKey('Enter')
        await this.wait(5)
    }

    /**
     * function for select date and time
     * @return {void} Nothing
     */
    async selectDateAndTime() {
        var hour = d.getHours()
        var minute = d.getMinutes()
        if (minute < 30) {
            minMinutes = '00'
            maxMinutes = '30'
        }
        else {
            hour = hour + 1
            minMinutes = '30';
            maxMinutes = '00';
            if (hour == 23) {
                hour = '00'
            }
        }
        await this.verifyVisibility(this.elements.chaser1Label + '>> nth=2', true)
        await this.verifyVisibility(this.elements.chaserDateTime + '>> nth=0', true)
        await this.verifyVisibility(this.elements.chaserDateTime + '>> nth=1', true)
        await this.type(this.elements.chaserDateTime + '>> nth=0', date)
        await this.clearField(this.elements.chaserDateTime + '>> nth=1')
        await this.wait(5)
        await this.type(this.elements.chaserDateTime + '>> nth=1', hour + ":" + maxMinutes)
    }

    /**
     * function for save the chase information
     * @return {void} Nothing
     */
    async saveChaserInformation() {
        await this.verifyVisibility(this.elements.saveButton, true)
        await this.click(this.elements.saveButton)
        await this.wait(5)
    }

    /**
     * function for verifying activity feed for sending chaser to the customer
     * @return {void} Nothing
     */
    async verifyActivityFeed() {
        var hour = d.getHours()
        var minute = d.getMinutes()
        await this.wait(20)
        await this.scrollIntoElement(this.elements.activityFeed)
        await this.waitForSelector(this.elements.activityFeed)
        await this.verifyVisibility(this.elements.activityFeed, true)
        let latestActivityFeed = await this.getText(this.elements.activityFeedDate)
        await this.log(latestActivityFeed)
        let h = latestActivityFeed.split(":");
        let min = h[1].split(" ");
        let maximum = parseInt(minute) + 5;
        if (maximum > 59) {
            maximum = maximum - 60;
            maximum = '0' + maximum;
        }
        
        expect(h[0]).contains(d.getHours())
        if (min[0] > 55)
            await this.verifyLessThan(60, min[0])
        else
            await this.verifyLessThan(maximum, min[0])
        await this.verifyLessThanEqualTo(min[0], minute)
    }

    /**
     * function for verifying activity feed for sending email to the customer
     * @return {void} Nothing
     */
    async verifyActivityFeedForEmail() {
        var hour = d.getHours()
        var minute = d.getMinutes()
        await this.wait(20)
        await this.scrollIntoElement(this.elements.emailActivityFeed)
        await this.waitForSelector(this.elements.emailActivityFeed)
        await this.verifyVisibility(this.elements.emailActivityFeed, true)
        let latestActivityFeed = await this.getText(this.elements.activityFeedDate)
        await this.log(latestActivityFeed)
        let h = latestActivityFeed.split(":");
        let min = h[1].split(" ");
        let maximum = parseInt(minute) + 5;
        if (maximum > 59) {
            maximum = maximum - 60;
            maximum = '0' + maximum;
        }
        
        expect(h[0]).contains(d.getHours())
        if (min[0] > 55)
            await this.verifyLessThan(60, min[0])
        else
            await this.verifyLessThan(maximum, min[0])
        await this.verifyLessThanEqualTo(min[0], minute)
    }
}
