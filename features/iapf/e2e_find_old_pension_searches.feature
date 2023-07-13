Feature: IAPF

    Background: Login
        Given User opens the IAPF url
        When user login to IAPF account "iaq2ll@8hlpvn6h.mailosaur.net"
        Then user go to find old pensions page
        Then user fill first pension search information

    @smoke @iapf
    Scenario: Verify user can submit the search request into its IAPF account
    Then user submit the search request
    
    @iapf
    Scenario: Verify user can add one pension card and can submit the search request
    Then user add one pension card
    Then user leave the second card empty and try to submit the request
    
    @iapf
    Scenario: Verify user can add two more pensions
    Then user add second pension card
    Then user fill second pension card
    Then user add third pension card
    Then verify user can delete third pension card
    Then user submit the search request



