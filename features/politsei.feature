Feature: first tests on Politsei.ee

  I want to browse around on politsei.ee

  Scenario: doing stuff
    Given I open the police page
    When I click on services icon
    Then I am redirected to a subpage
    When I click on Tartu service
    Then I see the Tartu service title

 