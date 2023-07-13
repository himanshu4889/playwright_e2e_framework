Feature: AJ_BELL

    Background: Login
        Given User opens the ajBell url
            
    @ajBellLogin
    Scenario: Verify user can add more pensions into its PPF account
        When user go to the login page
        Then user login to ppf account "gql3gi@8hlpvn6h.mailosaur.net"
        Then user go to add new pension page
        Then user add pension with employer 'Kinsey Locke'
        Then logout
