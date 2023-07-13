Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfpfCase
    Scenario: Sending Provider LOA in Salesforce
        When User searches for case number '00009654'
        Then User update provider information 'National' and 'Default'
        Then save the updated information 
        Then Generate provider LOA and send Provider LOA
        Then Provider receives the LoA
        Then logout the page
        
        