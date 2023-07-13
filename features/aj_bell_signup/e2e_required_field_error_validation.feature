Feature: AJ_BELL
​
    Background: Signup
        Given User opens the ajBell url
            
    @ajBellSignup
    Scenario: Verify mandatory fields error validation
        When User verify the validation error for name, email and password fields
        When User fills FirstName and LastName
        Then User fills email and password '@8hlpvn6h.mailosaur.net'
        Then User verify the validation error for personal details
        Then User select gender 'Female'
        Then User select date of birth '1963'
        Then User select address 'SW116JA'
        Then User verify the validation error for national insurance number
        Then User fill insurance number 'AZ123456A'
        Then User verify the validation error for pension searches
        Then User fill pension with employer 'Joe Diner'
        Then User fill pension provider 'Aegon'
        Then User verify the validation error for the signature
        Then User fill signature