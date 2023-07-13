Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfCustomer
    Scenario: Verify expand and collapse summary that are in related tab
        When User search for account 'knjrkekqew@8hlpvn6h.mailosaur.net'
        Then User open the customer person account
        Then User verify and open the related tab
        And User verify expand and collapse that are in related tab