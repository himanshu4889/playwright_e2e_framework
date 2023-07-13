Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfpfCase
    Scenario: Verify user can successfully verify the government portal in salesforce
        When User search for a ppf user '@8hlpvn6h.mailosaur.net'
        Then User verify government portal