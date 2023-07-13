Feature: Salesforce

    Background: Login
        Given User opens Salesforce
        When User logs into Salesforce
            
    @sfpfCase
    Scenario: Search and verify employer contacts by domain
        When User searches for case number '00009654'
        Then User open and verify employer contact details tab in external data sources
        Then User search and verify employer details
        Then User search and verify contact details by employer domain
        Then User get contact email and verify
        Then logout the page