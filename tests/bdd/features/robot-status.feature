Feature: Robot Status Management

  Scenario: Operator starts a robot task

    Given the robot dashboard is open
    When the operator starts a task
    Then the robot status should be "active"

  Scenario: Operator sends robot to charging

    Given the robot dashboard is open
    When the operator sends the robot to charging
    Then the robot status should be "charging"

  Scenario: Operator recovers robot from error state

    Given the robot dashboard is open
    And the robot is in error state
    When the operator resets the error
    Then the robot status should be "idle"
  