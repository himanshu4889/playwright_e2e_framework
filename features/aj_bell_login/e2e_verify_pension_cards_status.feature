Feature: AJ_BELL

    Background: Login
        Given User opens the ajBell url
            
    @ajBellLogin
    Scenario: Verify user can verify all pension cards
        When user go to the login page
        Then user login to ppf account "bohcylxele@8hlpvn6h.mailosaur.net"
        Then user verify the dashboard page
        Then user verify pension cards
