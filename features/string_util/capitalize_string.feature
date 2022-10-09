Feature: Capitalize a string

  Scenario: Capitalize a string with only lowercase
    Given a user inputs "abc" in lowercase
    When the user wants to capitalize the inputs
    Then the user should get "ABC" in capital

  Scenario: Capitalize a string that with one capital letter
    Given a user inputs aBc
    When he wants to turn input into all capital letters
    Then the output must be "ABC"
