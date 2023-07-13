Feature: AJ_BELL
​
    Background: Signup
        Given User opens the ajBell url
            
    @ajBellSignup
    Scenario: Verify employment type
        When User fills FirstName and LastName
        Then User fills email and password '@8hlpvn6h.mailosaur.net'
        Then User select gender 'Female'
        Then User select date of birth '1963'
        Then User select address 'SW116JA'
        Then User fill insurance number 'AZ123456A'
        Then User fill pension with employer 'Joe Diner'
        Then User verify part time and full time options
        Then User select part time option
        Then User fill signature
        Then User submit the form and verify
        Then User verify the email for ppf
        Then User verify successfully land on the ppf dashboard page
        Then User go to the profile page
        Then logout