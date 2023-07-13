Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfpfCase
    Scenario: Sending Employer LOA in Salesforce
        When User searches for case number '00009654'
        And User update employer information 'Altrad'
        And save the updated information 
        And User generates and sends Employer LOA
        Then Employer receives the LoA
        Then logout the page

