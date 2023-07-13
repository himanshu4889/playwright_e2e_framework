Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfpfCase
    Scenario: Assigning cases in Salesforce
        When User select unassigned cases
        Then User change account owner
        Then logout the page