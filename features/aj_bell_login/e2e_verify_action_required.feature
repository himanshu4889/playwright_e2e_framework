Feature: AJ_BELL

    Background: Login
        Given User opens the ajBell url
            
    @ajBellLogin
    Scenario: Verify user can verify action required pension card
        When user go to the login page
        Then user login to ppf account "bpdpeahxdc@8hlpvn6h.mailosaur.net"
        Then user verify the dashboard page
        Then user verify action required pension card