Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfCustomer
    Scenario: Sending mass LoA in salesforce
        When User search for a ppf user '@8hlpvn6h.mailosaur.net'
        Then User open the customer person account
        Then User verify and open the related tab
        Then User add potential scheme profiles in user potential schemes field
        Then User add new scheme in user potential schemes field
        Then User send mass LoA
        Then User verify the email for mass LoA
        Then User verify LoA status
        Then User delete all schemes