Feature: AJ_BELL
​
    Background: Signup
        Given User opens the ajBell url
            
    @ajBellSignup
    Scenario: Verify user can successfully submit the aj bell sign up page and verify personal details
        When User fills FirstName and LastName
        Then User fills email and password '@8hlpvn6h.mailosaur.net'
        Then User select gender 'Female'
        Then User select date of birth '1963'
        Then User enter mobile number '123456789'
        Then User upload the document for proof of address at sign up page
        Then User select address 'SW116JA'
        Then User fill insurance number 'AZ123456A'
        Then User fill pension with employer 'McDonald'
        Then User verify and select employer website for 'McDonald'
        Then User fill previous postcode 'sw116'
        Then User fill pension provider 'Aegon'
        Then User fill signature
        Then User submit the form and verify
        Then User verify the email for ppf
        Then User verify successfully land on the ppf dashboard page
        Then User go to the profile page
        Then User verify personal details
        Then logout
