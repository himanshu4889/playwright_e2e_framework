Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfCustomer
    Scenario: Sending an email to customer in Salesforce
        When User searches for case number '00009654'
        Then User go to the email
        Then User select template folders
        Then User select assign email and send the email
        Then User select generic update email and send the email
        Then User verify activity feed for email
        Then logout the page
