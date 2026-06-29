# Test Strategy — Artemis I

## Objective

Validate that the robot monitoring dashboard correctly reflects robot state
transitions and that the automation suite is maintainable, readable, and
executable in CI without manual intervention.

## Scope

The system under test is a client-side Angular dashboard driven by
RobotStateService. There is no real backend — robot state is simulated
in-memory and exposed via a mock JSON endpoint.

### In scope
- Robot status transitions (idle → active → charging, idle → error → idle)
- Battery level display
- Connection status rendering
- Sensor alert appearance and dismissal
- API contract of the mock robot state endpoint

### Out of scope
- Authentication and authorization (not implemented)
- Real robotics hardware or ROS integration
- Cross-browser consistency beyond Chromium in CI

## Test levels

### Unit tests (Karma/Jasmine)
Target: RobotStateService logic.
Why: Service is the single source of truth for robot state —
errors here affect every UI element simultaneously.

### E2E tests (Playwright)
Target: Full user workflows through the dashboard.
Why: Validates that Angular bindings, state transitions, and
data-testid selectors work together end to end.

### BDD tests (Cucumber/Gherkin)
Target: Operator-facing behavior described in business language.
Why: Demonstrates that test scenarios are readable by non-technical
stakeholders, not just developers.

### API tests (Playwright APIRequestContext)
Target: Mock robot state endpoint structure and values.
Why: Decouples API contract validation from UI rendering —
a broken endpoint should fail independently of UI tests.

## Risk areas

| Risk | Mitigation |
|------|------------|
| State not resetting between scenarios | World hooks tear down browser context after each scenario |
| Selector brittleness | All selectors use data-testid, never CSS classes or DOM structure |
| CI flakiness from server startup timing | wait-on with TCP check before Cucumber; webServer in playwright.config.ts |

## Tooling decisions

Cucumber runs outside the Playwright test runner, requiring a separate
tsconfig (CommonJS) and manual server lifecycle management in CI.
This tradeoff was accepted to demonstrate BDD as a distinct layer
from E2E automation.