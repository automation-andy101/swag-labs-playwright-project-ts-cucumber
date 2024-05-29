Feature: Login

    As a user I wanted to login to the application so that I can purchase products

    Background: 
        Given I visit the Sauce Demo website login page 

    Scenario: Login with valid credentials
        When I enter valid login credentials
        And submit the login form
        Then I should see the home page


    # Scenario Outline: Try to login with invalid credentials
    #     When I enter "<username>" and "<password>"
    #     Then I should see an error message

    #     Example:
    #         | username | password |
    #         | fail-1   | fail-1 |
    #         | fail-2   | fail-2 |
    #         | fail-3   | fail-3 |

            