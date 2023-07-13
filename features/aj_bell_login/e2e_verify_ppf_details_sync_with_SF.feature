Feature: AJ_BELL

    Background: Login
        Given User opens the ajBell url
            
    @ajBellLogin
    Scenario: Verify ppf Details sync with salesforce
        When user go to the login page
        Then user login to ppf account "vkjpnuwskz@8hlpvn6h.mailosaur.net"
        Then user verify the dashboard page
        Then user go to searching pension tracker page and verify the page
        Given User opens Salesforce
        When User logs into Salesforce
        When User search for account 'vkjpnuwskz@8hlpvn6h.mailosaur.net'
        Then User verify searching status
        Then User verify employment details