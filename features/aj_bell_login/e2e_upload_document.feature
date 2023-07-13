Feature: AJ_BELL
    Background: Login
        Given User opens the ajBell url
            
    @ajBellLogin
    Scenario: Verify user can upload document
        When user go to the login page
        Then user login to ppf account "gql3gi@8hlpvn6h.mailosaur.net"
        Then user verify the dashboard page
        Then user go to upload proof of address page
        Then user upload the document for proof of address
        Then user verify proof of address document is uploaded or not
        Then user go to upload proof of name change page
        Then user upload the document for proof of name change
        Then user verify document is uploaded or not
        Then logout