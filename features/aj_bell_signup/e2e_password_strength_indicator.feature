Feature: AJ_BELL
​
    Background: Signup
        Given User opens the ajBell url
            
    @ajBellSignup
    Scenario: Verify Password strength indicator is appearing
        When User fills FirstName and LastName
        Then User type email '@8hlpvn6h.mailosaur.net'
        Then User type password for verify the password strength
