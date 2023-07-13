Feature: AJ_BELL

    Background: Login
        Given User opens the ajBell url
            
    @ajBellLogin
    Scenario: Verify forgot password functionality by resetting password and adding mobile number
        When user go to the login page
        Then user go to the forgot password page
        Then user reset the password "lrcfzzxjym@8hlpvn6h.mailosaur.net"
        Then user login to ppf account "lrcfzzxjym@8hlpvn6h.mailosaur.net"
        Then user change the password 
        Then User add mobile number
        Then User edit mobile number
        Then logout