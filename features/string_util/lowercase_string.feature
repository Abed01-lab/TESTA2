Feature: Lowercase a string

  Scenario: Lowercase a simple string
    Given a user inputs "ABC" in uppercase
    When the user wants to lowercase the inputs
    Then the user should get "abc" in lowercase
