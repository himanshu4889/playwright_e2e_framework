/*global browser, userContext, userPage*/

const { BaseAction } = require('../../setup/baseAction');
exports.sfpfcase = class sfpfcase extends BaseAction {
  constructor() {
    super();
  }
  /**
   * Creating elements object for initializing required locators
   */
  elements = {
    searchBar: 'button[aria-label="Search"]',
    searchedTitle: '.slds-m-vertical_xxx-small',
    enterCaseNumber: '.assistantPanel input[type="search"]',
    editProvider: 'button[title="Edit Provider"]',
    scrolltoProvider: '[title="Edit VA Employer Chaser"]',
    providerName: '//*[text()="Provider"]/..//*[@placeholder="Search Accounts..."]',
    schemeName: 'input[placeholder="Search Schemes..."]',
    saveButton: 'button[name="SaveEdit"]',
    clearIcon: 'button[title="Clear Selection"]',
    generateProvider: '//div[@id="__next"]//button[text()="Generate provider LOA"]',
    sendProvider: '//div[@id="__next"]//button[text()="Send provider LOA"]',
    iframe: '//iframe[contains(@src,"https://salesforce-git-master-raindrop-tech.vercel.app/case-actions/")]',
    scrollToGenerate: '//span[text()="Employer Information"]',
    pensionId: '[title="Pension ID"]',
    editEmployer: 'button[title="Edit Employer"]',
    employerName: 'input[placeholder="Search Accounts..."]',
    generateEmployer: '//div[@id="__next"]//button[text()="Generate employer LOA"]',
    sendEmployer: '//div[@id="__next"]//button[text()="Send employer LOA"]',
    verifyEmployerName: '//span[text()="Altrad"]',
    editChase: 'button[title="Edit Chase Employer for More Information"]',
    noneChaseForMoreInfo: '[title="--None--"]',
    yesChaseForMoreInfo: '[title="Yes"]',
    noChaseForMoreInfo: '[title="No"]',
    employerHeading: '//span[@class="test-id__field-label"][text()="Employer"]',
    loadingState: "//button[contains(@class,'MuiLoadingButton-loading')]",
    viewProfileButton: '.slds-avatar_profile-image-small [data-aura-class="uiImage"]',
    logoutButton: '//a[@class="profile-link-label logout uiOutputURL"]',
    chaserEditor: '//button[contains(@aria-label,"Chase Employer for More Information")]',
    contactName: '//span[@title="Account"]',
    userId: '//div[@data-aura-class="forceSearchRecordPreviewHeader"]//a[@data-refid="recordId"]',
    governmentPortal: '(//button[text()="Goverment portal"])[1]',
    schemes: '(//p[text()="Schemes"])[1]',
    schemeNameHeading: '(//div[@data-field="schemeName"])[1]',
    addressHeading: '(//div[@data-field="address"])[1]',
    telephoneHeading: '(//div[@data-field="telephone"])[1]',
    externalData: '//span[@title="External Data Sources"]',
    iframeGovernmentPortal: '//*[@data-component-id="c_ExternalDataSourcesComp"]//iframe',
    archievedSchemes: '//p[text()="Archived schemes"]',
    selectChase: '//button[contains(@aria-label,"Chase Employer for More Information")]',
    nextButton: '//button[@class="slds-button slds-button--neutral slds-button slds-button_brand uiButton"]',
    employerRecordType: '//span[text()="Employers"]',
    accountName: '//input[@data-aura-class="uiInput uiInputTextForAutocomplete uiInput--default uiInput--input uiInput uiAutocomplete uiInput--default uiInput--lookup"]',
    companyRegistrationNumber: '//input[@maxlength="10"]',
    primaryEmail: '(//input[@inputmode="email"])[2]',
    saveEmployer: '//button[@title="Save"]',
    errorMessage: '//span[@class="genericError uiOutputText"]',
    relatedTab: '(//a[@data-tab-value="relatedListsTab"])[2]',
    recordId: '(//span//a[@data-refid="recordId"])[1]',
    dateReceived: '//div[text()="Date received"]',
    documentClass: '//div[text()="Document class"]',
    hasData: '//div[text()="hasData?"]',
    approxValue: '//div[text()="Approx Value"]',
    pensionPlan: '//div[text()="Pension plan ref"]',
    downloadDoc: '//div[text()="Download Doc"]',
    dateReceivedValue: '//div[@data-field="dateReceived"]',
    documentClassValue: '//div[@data-field="documentClass"]//div[@class="MuiDataGrid-cellContent"]',
    hasDataValue: '//div[@data-field="hasData"]//div[@class="MuiDataGrid-cellContent"]',
    approxValueData: '//div[@data-field="transferValue"]//div[@class="MuiDataGrid-cellContent"]',
    pensionPlanValue: '//div[@data-field="pensionPlanReferenceNumber"]//div[@class="MuiDataGrid-cellContent"]',
    ocrIframe: '//iframe[contains(@src,"https://salesforce-git-master-raindrop-tech.vercel.app/case/details-panel/related/")]',
    status: '(//div[@class="slds-form-element__control"]//*[text()="🔎 Searching"])[1]',
    employerUrl: '//div[@class="slds-form-element__control"]//*[text()="https://myraindrop.co.uk/"]',
    employerSize: '//div[@class="slds-form-element__control"]//*[text()="medium"]',
    externalDataSources: '//span[@title="External Data Sources"]',
    employerContactDetails: '(//button[@role="tab"])[5]',
    employerDomain: '//input[@name="companyDomain"]',
    greyButton: '//button[@data-testid="tid-btn-grey"]',
    title: '//div[text()="Title"]',
    employerWebsite: '//div[text()="Employer website"]',
    employerExtract: '//div[text()="Employer extract"]',
    externalDataSurcesIframe: '//iframe[contains(@src,"https://salesforce-git-master-raindrop-tech.vercel.app/case/tab-panels/")]',
    searchEmployer: '//input[@name="employer"]',
    employerError: '//div[@aria-label="employer"]',
    companyDomainError: '//div[@aria-label="companyDomain"]',
    firsrName: '//div[text()="First Name"]',
    lastName: '//div[text()="Last Name"]',
    emailStatus: '//div[text()="Email Status"]',
    email: '//div[@data-field="email"]',
    customerRelatedIframe: '//iframe[contains(@src,"https://salesforce-git-master-raindrop-tech.vercel.app/user/details-panel/related/")]',
    customerRelatedtab: '(//div[@class="slds-tabs_default"]//a[@data-tab-value="relatedListsTab"])[1]',
    userRequiredActions: '//p[text()="User Required Actions"]',
    userPotentialSchemes: '//p[text()="User Potential Schemes"]',
    providerTab: '//a[@data-label="Provider"]',
    addSchemeButton: '.MuiButton-outlinedPrimary',
    sendLoAButton: '.MuiButton-primaryPrimary',
    schemeProfile: '(//button[@title="Open"])[2]',
    addSchemeProfile: '(//*[@data-testid="AddIcon"])[2]',
    addSchemeDropDown: '(//input[@role="combobox"])[3]',
    saveScheme: '//*[@data-testid="SaveIcon"]',
    loaStatus: '//div[@data-field="loaStatus"]',
    deleteButton: '//*[@data-testid="DeleteOutlinedIcon"]',
    yesButton: '.MuiButton-textPrimary',
    deleteDialogueBox: '//p[@id="alert-dialog-description"]',
    horizontalScroll: '.MuiDataGrid-virtualScroller',
    governmentPortalData: '.MuiTypography-body1',
    moreTab: '(//button[@class="slds-button"])[5]'
  };

  /**
   * function for searching a case
   * @param {string} case_no - value for the case we are searching for
   * @return {void} Nothing
   */
  async searchCaseNumber(case_no) {
    await page.waitForLoadState("load", { timeout: 50000 });
    await this.waitForSelector(this.elements.searchBar)
    await this.verifyVisibility(this.elements.searchBar, true)
    await this.wait(5)
    await this.click(this.elements.searchBar)
    await this.type(this.elements.enterCaseNumber, case_no)
    await this.wait(5)
    await this.pressKey('ArrowDown')
    await this.pressKey('Enter')
    await this.waitForSelector(this.elements.pensionId)
    await this.verifyVisibility(this.elements.pensionId, true)
  }

  /**
   * function for updating the provider information
   * @param {string} provider_name - value for the provider name
   * @param {string} scheme - value for the scheme
   * @return {void} Nothing
   */
  async updateProviderInformation(provider_name, scheme) {
    await this.waitForSelector(this.elements.editProvider)
    await this.click(this.elements.editProvider)
    await this.wait(2)
    await this.waitForSelector(this.elements.clearIcon + ' >> nth=1')
    await this.click(this.elements.clearIcon + ' >> nth=1');
    await this.waitForSelector(this.elements.providerName)
    await this.type(this.elements.providerName, provider_name)
    await this.wait(2)
    await this.pressKey('ArrowDown')
    await this.wait(2)
    await this.pressKey('Enter')
    await this.click(this.elements.clearIcon + ' >> nth=2');
    await this.type(this.elements.schemeName, scheme)
    await this.wait(2)
    await this.pressKey('ArrowDown')
    await this.wait(2)
    await this.pressKey('Enter')
  }

  /**
   * function for clicking on save button
   * @return {void} Nothing
   */
  async saveInformation() {
    await this.verifyVisibility(this.elements.saveButton, true)
    await this.click(this.elements.saveButton)
  }

  /**
   * function for clicking on generate provider LOA
   * @return {void} Nothing
   */
  async generateAndSendProviderLOA() {
    await this.wait(5)
    await this.scrollIntoElement(this.elements.providerTab)
    await this.verifyVisibility(this.elements.providerTab, true)
    await this.click(this.elements.providerTab)
    await this.wait(5)
    await this.pressKey('Enter')
    await this.wait(2)
    await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.generateProvider, true)
    await this.scrollIntoElement(this.elements.iframe)
    await this.clickInIframe(this.elements.iframe, this.elements.generateProvider)
    await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.sendProvider, true)
    await this.forceClickInIframe(this.elements.iframe, this.elements.sendProvider)
  }

  /**
   * function for updating the employer information
   * @param {string} employer_name - value for the employer name
   * @return {void} Nothing
   */
  async updateEmployerInformation(employer_name) {
    await this.waitForSelector(this.elements.editEmployer)
    await this.click(this.elements.editEmployer)
    await this.waitForSelector(this.elements.clearIcon + ' >> nth=3')
    await this.click(this.elements.clearIcon + ' >> nth=3');
    await this.type(this.elements.employerName, employer_name)
    await this.wait(5)
    await this.pressKey('ArrowDown')
    await this.wait(3)
    await this.pressKey('Enter')
  }

  /**
   * function for generate and send employer LOA
   * @return {void} Nothing
   */
  async generateAndSendEmployerLOA() {
    await this.wait(2)
    await this.scrollIntoElement(this.elements.providerTab)
    await this.verifyVisibility(this.elements.providerTab, true)
    await this.click(this.elements.providerTab)
    await this.pressKey('Enter')
    await this.wait(2)
    await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.generateEmployer, true)
    await this.scrollIntoElement(this.elements.iframe)
    await this.clickInIframe(this.elements.iframe, this.elements.generateEmployer)
    await this.verifyVisibilityinIframe(this.elements.iframe, this.elements.sendEmployer, true)
    await this.clickInIframe(this.elements.iframe, this.elements.sendEmployer)
    await this.wait(2)
  }

  /**
   * function for select chaser
   * @return {void} Nothing
   */
  async selectChaser(chaser) {
    await this.click(this.elements.editChase)
    await this.verifyVisibility(this.elements.selectChase, true)
    await this.click(this.elements.selectChase)
    await this.click(chaser)
    await this.wait(2)
  }

  /**
   * function for updating the employer chaser information
   * @param {string} text - value for the chaser to be selected
   * @return {void} Nothing
   */
  async updateChaseEmployer(text) {
    if (text == "Yes") {
      await this.selectChaser(this.elements.yesChaseForMoreInfo)
    } else if (text == "None") {
      await this.selectChaser(this.elements.noneChaseForMoreInfo)
    } else if (text == "No") {
      await this.selectChaser(this.elements.noChaseForMoreInfo)
    }
  }

  /**
   * function for save chaser and verify
   * @return {void} Nothing
   */
  async saveChaserAndVerify(flag) {
    const verifyDates = function (addedDate) {
      return '//*[@data-output-element-id="output-field"][contains(text(),"' + addedDate + '")]'
    }
    await this.verifyVisibility(this.elements.saveButton, true)
    await this.click(this.elements.saveButton)
    if (flag == "Yes") {
      await this.verifyVisibility(verifyDates(this.getFutureDate(2)), true)
      await this.verifyVisibility(verifyDates(this.getFutureDate(4)), true)
      await this.verifyVisibility(verifyDates(this.getFutureDate(6)), true)
    }
    else {
      await this.verifyVisibility(verifyDates(this.getFutureDate(2)), false)
      await this.verifyVisibility(verifyDates(this.getFutureDate(4)), false)
      await this.verifyVisibility(verifyDates(this.getFutureDate(6)), false)
    }
    await this.wait(2)
  }

  /**
   * function for log out the page
   * @return {void} Nothing
   */
  async logout() {
    await this.wait(4)
    await this.verifyVisibility(this.elements.viewProfileButton, true)
    await this.click(this.elements.viewProfileButton)
    await this.waitForSelector(this.elements.logoutButton)
    await this.verifyVisibility(this.elements.logoutButton, true)
    await this.click(this.elements.logoutButton)
  }

  async searchPpfUser(user_id) {
    await this.waitForSelector(this.elements.searchBar)
    await this.verifyVisibility(this.elements.searchBar, true)
    await this.wait(5)
    await this.click(this.elements.searchBar)
    await this.type(this.elements.enterCaseNumber, user_id)
    await this.wait(5)
    await this.pressKey('ArrowDown')
    await this.pressKey('Enter')
    await this.waitForSelector(this.elements.userId)
    await this.verifyVisibility(this.elements.userId, true)
    await this.click(this.elements.userId)
  }

  /**
   * function for open person account
   * @return {void} Nothing
   */
  async openPersonAccount() {
    await this.waitForSelector(this.elements.contactName + ' >> nth=3 ')
    await this.verifyVisibility(this.elements.contactName + ' >> nth=3 ', true)
    await this.forceClick(this.elements.contactName + ' >> nth=3 ')
    await this.wait(5)
  }

  /** 
   * function for open related tab
   * function for creating new employer account
   * @return {void} Nothing
   */
  async createNewEmployerAccount(employer_Name) {
    await this.click(this.elements.editEmployer)
    await this.waitForSelector(this.elements.clearIcon + '>> nth=3')
    await this.click(this.elements.clearIcon + '>> nth=3')
    await this.wait(2)
    await this.type(this.elements.employerName, employer_Name + ' ' + await this.getRandomString())
    await this.wait(2)
    await this.pressKey('ArrowDown')
    await this.wait(2)
    await this.pressKey('Enter')
    await this.click(this.elements.nextButton)
  }

  /**
   * function for creating new employer account
   * @return {void} Nothing
   */
  async verifyAccountInformation() {
    await this.wait(2)
    await this.verifyVisibility(this.elements.accountName + '>>nth=0', true)
    await this.verifyVisibility(this.elements.companyRegistrationNumber, true)
    await this.verifyVisibility(this.elements.primaryEmail, true)
  }

  /**
   * function for creating new employer account
   * @return {void} Nothing
   */
  async fillAccountInformation(account_Name, email_id) {
    await this.type(this.elements.accountName + '>>nth=0', await this.getRandomString(account_Name))
    await this.type(this.elements.companyRegistrationNumber, await this.generateRandomNumber())
    await this.type(this.elements.primaryEmail, await this.getRandomString(email_id) + "@8hlpvn6h.mailosaur.net")
    await this.click(this.elements.saveEmployer)
  }

  /**
   * function for searching a raindrop id
   * @param {string} raindrop_id - value for the case we are searching for
   * @return {void} Nothing
   */
  async searchRaindropId(raindrop_id) {
    await page.waitForLoadState("load", { timeout: 50000 });
    await this.waitForSelector(this.elements.searchBar)
    await this.verifyVisibility(this.elements.searchBar, true)
    await this.wait(5)
    await this.click(this.elements.searchBar)
    await this.type(this.elements.enterCaseNumber, raindrop_id)
    await this.wait(5)
    await this.pressKey('ArrowDown')
    await this.pressKey('Enter')
    await this.waitForSelector(this.elements.recordId)
    await this.verifyVisibility(this.elements.recordId, true)
    await this.click(this.elements.recordId)
  }

  async verifyGovernmentPortal() {
    await this.shouldContainText(this.elements.externalData, "External Data Sources")
    await this.click(this.elements.externalData)
    await this.wait(5)
    await this.shouldContainTextInIframe(this.elements.iframeGovernmentPortal, this.elements.governmentPortal, "Goverment Portal")
    await this.shouldContainTextInIframe(this.elements.iframeGovernmentPortal, this.elements.governmentPortalData + '>>nth=0', "Employers")
    await this.shouldContainTextInIframe(this.elements.iframeGovernmentPortal, this.elements.governmentPortalData + '>>nth=1', "Schemes")
    await this.shouldContainTextInIframe(this.elements.iframeGovernmentPortal, this.elements.governmentPortalData + '>>nth=2', "Previous scheme name")
    await this.wait(2)
  }

  /**
   * function for verify searching status
   * @return {void} Nothing
   */
  async verifySearchingStatus() {
    await this.wait(2)
    await this.scrollIntoElement(this.elements.status)
    await this.verifyVisibility(this.elements.status, true)
    await this.shouldContainSomeText(this.elements.status, "Searching")
  }

  /**
   * function for verify employment details
   * @return {void} Nothing
   */
  async verifyEmploymentDetails() {
    await this.verifyVisibility(this.elements.employerUrl, true)
    await this.shouldContainSomeText(this.elements.employerUrl, "https://myraindrop.co.uk/")
  }

  /**
   * function for open related tab
   * @return {void} Nothing
   */
  async openRelatedTab() {
    await this.wait(10)
    await this.scrollIntoElement(this.elements.moreTab)
    await this.verifyVisibility(this.elements.moreTab, true)
    await this.pressKey('ArrowDown')
    await this.pressKey('Enter')
    await this.wait(10)
  }

  /**
   * function for verify ocr results
   * @return {void} Nothing
   */
  async verifyDateReceivedValues() {
    await this.wait(4)
    await this.verifyVisibilityinIframe(this.elements.ocrIframe, this.elements.dateReceived, true)
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.dateReceived, "Date received")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.dateReceivedValue + '>>nth=1', "07 Feb 23")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.dateReceivedValue + '>>nth=2', "08 Feb 23")
  }

  async verifyDocumentClassValues() {
    await this.verifyVisibilityinIframe(this.elements.ocrIframe, this.elements.documentClass, true)
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.documentClass, "Document class")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.documentClassValue + '>>nth=0', "Legal & General Policy")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.documentClassValue + '>>nth=1', "NEST Policy")
  }

  async verifyhasDataValues() {
    await this.verifyVisibilityinIframe(this.elements.ocrIframe, this.elements.hasData, true)
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.hasData, "hasData?")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.hasDataValue + '>>nth=0', "true")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.hasDataValue + '>>nth=1', "true")
  }

  async verifyApproxValue() {
    await this.verifyVisibilityinIframe(this.elements.ocrIframe, this.elements.approxValue, true)
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.approxValue, "Approx Value")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.approxValueData + '>>nth=0', "£556.88")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.approxValueData + '>>nth=1', "£ 3857.61")
  }

  async verifyPensionPlan() {
    await this.verifyVisibilityinIframe(this.elements.ocrIframe, this.elements.pensionPlan, true)
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.pensionPlan, "Pension plan ref")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.pensionPlanValue + '>>nth=0', "2665485101")
    await this.shouldContainTextInIframe(this.elements.ocrIframe, this.elements.pensionPlanValue + '>>nth=1', "MEM016054695")
  }

  /**
   * function for opening employer contact details
   * @return {void} Nothing
   */
  async openEmployerContactDetails() {
    await this.verifyVisibility(this.elements.externalDataSources, true)
    await this.click(this.elements.externalDataSources)
    await this.wait(5)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.employerContactDetails, true)
    await this.clickInIframe(this.elements.externalDataSurcesIframe, this.elements.employerContactDetails)
  }

  /**
   * function for verifying employer contact details
   * @return {void} Nothing
   */
  async verifyEmployerContactDetails() {
    await this.wait(4)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.searchEmployer, true)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.greyButton + '>>nth=0', true)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.employerDomain, true)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.greyButton + '>>nth=1', true)
  }

  /**
   * function for searching employer
   * @return {void} Nothing
   */
  async searchingEmployer() {
    await this.typeInIframe(this.elements.externalDataSurcesIframe, this.elements.searchEmployer, "myRaindrop")
    await this.clickInIframe(this.elements.externalDataSurcesIframe, this.elements.greyButton + '>>nth=0')
    await this.wait(4)
    await this.scrollIntoElementInIframe(this.elements.externalDataSurcesIframe, this.elements.title + '>>nth=0')
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.title + '>>nth=0', true)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.employerWebsite, true)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.employerExtract, true)
  }

  /**
   * function for validating error
   * @return {void} Nothing
   */
  async validateSearchingError() {
    await this.clearFieldInIframe(this.elements.externalDataSurcesIframe, this.elements.searchEmployer)
    await this.clickInIframe(this.elements.externalDataSurcesIframe, this.elements.greyButton + '>>nth=0')
    await this.wait(2)
    await this.shouldContainTextInIframe(this.elements.externalDataSurcesIframe, this.elements.employerError, "Enter employer name")
    await this.clickInIframe(this.elements.externalDataSurcesIframe, this.elements.greyButton + '>>nth=1')
    await this.shouldContainTextInIframe(this.elements.externalDataSurcesIframe, this.elements.companyDomainError, "Enter domain name")
  }

  /**
   * function for searching contact details
   * @return {void} Nothing
   */
  async searchingContactDetails() {
    await this.typeInIframe(this.elements.externalDataSurcesIframe, this.elements.employerDomain, "https://www.myraindrop.co.uk/")
    await this.clickInIframe(this.elements.externalDataSurcesIframe, this.elements.greyButton + '>>nth=1')
    await this.scrollIntoElementInIframe(this.elements.externalDataSurcesIframe, this.elements.firsrName)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.firsrName, true)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.lastName, true)
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.emailStatus, true)
  }

  /**
   * function for get contact details
   * @return {void} Nothing
   */
  async getContactDetails() {
    await this.wait(2)
    await this.clickInIframe(this.elements.externalDataSurcesIframe, this.elements.greyButton + '>>nth=2')
    await this.verifyVisibilityinIframe(this.elements.externalDataSurcesIframe, this.elements.email + '>>nth=0', true)
    await this.shouldContainSomeTextInIframe(this.elements.externalDataSurcesIframe, this.elements.email + '>>nth=1')
  }

  /**
  * function for verify related tab
  * @return {void} Nothing
  */
  async verifyRelatedTab() {
    await this.wait(5)
    await this.verifyVisibility(this.elements.customerRelatedtab, true)
    await this.click(this.elements.customerRelatedtab)
    await this.wait(10)
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.userRequiredActions, true)
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.userPotentialSchemes, true)
  }

  /**
   * function for verify expand and collapse summary that are in related tab
   * @return {void} Nothing
   */
  async verifyExpandandCollapseSummary() {
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.userRequiredActions, true)
    await this.wait(1)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.userRequiredActions, true)
    await this.wait(1)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.userPotentialSchemes, true)
    await this.wait(1)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.userPotentialSchemes, true)
    await this.wait(1)
  }

  /**
  * function for adding new scheme profile
  * @return {void} Nothing
  */
  async addSchemeProfile() {
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.sendLoAButton + '>>nth=1', false)
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.schemeProfile, true)
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.addSchemeProfile, true)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.schemeProfile)
    await this.pressKey('ArrowDown')
    await this.pressKey('Enter')
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.addSchemeProfile)
  }

  /**
  * function for adding new scheme
  * @return {void} Nothing
  */
  async addScheme() {
    await this .wait(2)
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.addSchemeButton + '>>nth=1', true)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.addSchemeButton + '>>nth=1')
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.addSchemeDropDown, true)
    await this.typeInIframe(this.elements.customerRelatedIframe, this.elements.addSchemeDropDown, "Aegon")
    await this.pressKey('ArrowDown')
    await this.pressKey('ArrowDown')
    await this.pressKey('Enter')
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.saveScheme)
  }

  /**
  * function for sending mass LoA
  * @return {void} Nothing
  */
  async sendMassLoA() {
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.sendLoAButton, true)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.sendLoAButton)
    await this.wait(2)
  }

  /**
  * function for verifying LoA status
  * @return {void} Nothing
  */
  async verifyLoAStatus() {
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.loaStatus + '>>nth=0', true)
    await this.shouldContainTextInIframe(this.elements.customerRelatedIframe, this.elements.loaStatus + '>>nth=1', "SENT")
    await this.shouldContainTextInIframe(this.elements.customerRelatedIframe, this.elements.loaStatus + '>>nth=2', "SENT")
    await this.shouldContainTextInIframe(this.elements.customerRelatedIframe, this.elements.loaStatus + '>>nth=3', "SENT")
  }

  /**
  * function for deleting the schemes
  * @return {void} Nothing
  */
  async deleteScheme() {
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.deleteButton + '>>nth=0', true)
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.deleteButton + '>>nth=1', true)
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.deleteButton + '>>nth=2', true)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.deleteButton + '>>nth=2', true)
    await this.shouldContainTextInIframe(this.elements.customerRelatedIframe, this.elements.deleteDialogueBox, "Are you sure you want to delete this scheme?")
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.yesButton + '>>nth=1', true)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.yesButton + '>>nth=1')
    await this.wait(2)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.deleteButton + '>>nth=1', true)
    await this.shouldContainTextInIframe(this.elements.customerRelatedIframe, this.elements.deleteDialogueBox, "Are you sure you want to delete this scheme?")
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.yesButton + '>>nth=1', true)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.yesButton + '>>nth=1')
    await this.wait(2)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.deleteButton + '>>nth=0', true)
    await this.shouldContainTextInIframe(this.elements.customerRelatedIframe, this.elements.deleteDialogueBox, "Are you sure you want to delete this scheme?")
    await this.verifyVisibilityinIframe(this.elements.customerRelatedIframe, this.elements.yesButton + '>>nth=1', true)
    await this.clickInIframe(this.elements.customerRelatedIframe, this.elements.yesButton + '>>nth=1')
  }
}