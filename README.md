![CI](https://github.com/HERRqos/artemis-i/actions/workflows/ci.yml/badge.svg)

# Artemis I — Robot Monitoring Dashboard

Test automation portfolio project targeting a robotics-inspired Angular dashboard.
Demonstrates Playwright, Cucumber/BDD, API testing, and CI/CD with GitHub Actions.

## What this project demonstrates

- Page Object Model with Playwright and TypeScript
- BDD scenarios with Cucumber/Gherkin describing operator behavior
- API contract validation against mock robot state endpoints
- GitHub Actions pipeline with artifact upload for test reports
- Cross-platform npm scripts for local and CI execution

## Application

Angular dashboard simulating a robot monitoring interface with state transitions:
idle → active → charging, and idle → error → idle.
State is driven by RobotStateService, exposing stable data-testid selectors
for reliable automation.

## Running the tests

### Unit tests
\`\`\`
npm test
\`\`\`

### Playwright E2E
\`\`\`
npm start          # terminal 1
npx playwright test  # terminal 2
\`\`\`

### BDD (Cucumber/Gherkin)
\`\`\`
npm start      # terminal 1
npm run bdd    # terminal 2 — waits for server then runs Cucumber
\`\`\`

Or start everything in one command (local only):
\`\`\`
npm run bdd:local
\`\`\`

CI uses `npm run bdd:ci` — server is managed by the pipeline.

## Project structure

\`\`\`
tests/
├── playwright-tests/   # Playwright E2E tests
├── bdd/
│   ├── features/       # Gherkin feature files
│   ├── steps/          # Step definitions
│   └── support/        # World and hooks
└── api/                # API tests
\`\`\`

## CI

GitHub Actions runs on push and pull request:
- Angular unit tests (ChromeHeadless)
- Playwright E2E (Chromium)
- Cucumber BDD suite
- Test reports uploaded as artifacts (3-day retention)

## Tech stack

TypeScript · Angular 18 · Playwright · Cucumber · GitHub Actions