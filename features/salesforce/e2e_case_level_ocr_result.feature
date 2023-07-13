Feature: Salesforce

    Background: Ops user login
        Given User opens Salesforce
        And User logs into Salesforce
            
    @sfpfCase
    Scenario: Verify Case level OCR results
        When User searches for Case by Raindrop ID 'user_previous_pension.4230'
        And User opens Related tab
        Then User can see Case level OCR results