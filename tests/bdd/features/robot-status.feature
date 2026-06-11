Feature: Robot Status Management

  Scenario: Operator starts a robot task

    Given the robot dashboard is open
    When the operator starts a task
    Then the robot status should be "active"
