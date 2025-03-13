Feature: Login functionality

  Scenario: Valid login with correct credentials
    Given I am on the login page "https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login"
    When  I enter valid credentials "Playwright@gmail.com" and "March@2025"
    And   I click on the login button
    Then  I should be logged in successfully