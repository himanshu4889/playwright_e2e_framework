Feature: COPF
​
    Background: Signup
        Given User opens the copf url
            
    @copf
    Scenario: Verify user can successfully submit the copf sign up page
    When user fills FirstName and LastName
    Then user fills email and password '@8hlpvn6h.mailosaur.net'
    Then user select gender 'Female'
    Then user select date of birth '22/11/1963'
    Then user fill insurance number 'AZ123456A'
    Then user select nationality and marital status
    Then user select address 'SW116JA'
    Then user fill pension with employer 'Joe Diner'
    Then user select target retirement age
    Then user fill signature
    Then user submit the form and verify
    Then user verify the email
    Then user open raindrop pension
    Then user select employment status as LTD Director
    Then user go back to old pensions page
    Then user again go to open a raindrop pension page
