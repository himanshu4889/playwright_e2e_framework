Feature: Salesforce

    Background: Ops user login
        Given User opens Salesforce
        And User logs into Salesforce
            
    @sfCustomer
    Scenario: Verify proof of name document is uploaded 
        When User search for account 'knjrkekqew@8hlpvn6h.mailosaur.net'
        Then User open the customer person account
        Then User open the file tab
        Then User upload proof of name document
        Then logout the page

