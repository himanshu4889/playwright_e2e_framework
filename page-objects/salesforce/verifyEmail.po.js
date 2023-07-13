/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');

exports.Verify_Email = class Verify_Email extends BaseAction {
  constructor() {
    super();
  }
  /**
   * Creating elements object for initializing required locators
   */
  elements = {
    refreshButton: '.right-actions button[title="Refresh this feed"]',
    feedStatus: '.compactTimeStamp[title="Just now"]'
  };

  /**
   * function to verifying the email
   * @return {void} Nothing
   */
  async checkSentStatus() {
    await this.scrollIntoElement(this.elements.refreshButton + ">> nth = 2")
    await this.wait(40)
    await this.forceClick(this.elements.refreshButton + ">> nth = 2");
    try{
      await this.waitForSelector(this.elements.feedStatus)
      await this.shouldVisible(this.elements.feedStatus)
    }
    catch(e){
      this.checkSentStatus();
    }
  }

  /**
    * function for verify mailosaur email
    * @return {void} Nothing
    */
  async verifyEmailForMassLoA(emailId) {
        const MailosaurClient = require('mailosaur');
        const apiKey = process.env.CYPRESS_MAILOSAUR_API_KEY
        const serverId = '8hlpvn6h'
        const mailosaur = new MailosaurClient(apiKey)
        const criteria = {
            sentTo: (emailId)
        }
        let email = await mailosaur.messages.get(serverId, criteria)
        expect(email.html.body).contains("Raindrop")
        expect(email.html.body).contains("Letter of Authority - Request for Details of Existing Pension Plan(s)")
        expect(email.subject).contains("Pension Information Request");
        await this.wait(5)
}

};
