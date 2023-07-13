Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfpfCase
    Scenario: Verify employer chaser for yes, no and none
        When User searches for case number '00009654'
        Then update chase employer information to 'Yes' and verify
        Then update chase employer information to 'No' and verify
        Then update chase employer information to 'None' and verify
        Then logout the page