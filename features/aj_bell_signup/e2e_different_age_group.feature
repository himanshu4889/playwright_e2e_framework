Feature: AJ_BELL
​
    Background: Signup
        Given User opens the ajBell url
            
    @ajBellSignup
    Scenario: Verify form validation for the user above 120 years and below 18 years
        When User fills FirstName and LastName
        Then User fills email and password '@8hlpvn6h.mailosaur.net'
        Then User select date of birth '2015' and verify the error message for min age
        Then User select date of birth '1901' and verify the error message for max age