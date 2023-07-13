Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfCustomer
    Scenario: Sending customer chaser in salesforce
        When User search for account 'knjrkekqew@8hlpvn6h.mailosaur.net'
        Then User open the customer person account
        Then User select chase for more information as yes
        Then User select chase reason from list
        Then User save the updated chaser
        Then User select chase for more information again
        Then User verify activity feed
        Then logout the page
