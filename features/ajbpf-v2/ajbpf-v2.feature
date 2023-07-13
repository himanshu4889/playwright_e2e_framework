Feature: AJBPF-V2
    ​
    Background: Signup
        Given User opens the ajBf-V2 url

    @ajbpf-v2
    Scenario: Verify user can search pension request
        When User registers or logs in a Partner user in Raindrop system
            | fName  | lName | dob        | gender | nationalInsuranceNumber |
            | Kinsey | Locke | 22/07/1990 | female | ac123456a               |
        Then User add pension finding request with employer 'Mcdonald'
        Then User verify and select employer website 'Mcdonald'
        Then User add signature
        Then User submit the request
        Then User verify pension finding dashboard page