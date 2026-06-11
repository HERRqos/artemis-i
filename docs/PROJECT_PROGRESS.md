# Artemis I - Project Progress & Engineering Journal

## Project Overview

Artemis I is a robotics-inspired dashboard application created as a portfolio project to demonstrate practical software test automation skills.

I started this project to learn, practice and demostrate the use if skills like Angular, Playwright, Cucumber, Git, Git Action and some other technologies I consider key to know when working on development projects, as well as practices like Test Documentation and Atumation Architecture.

The project is intentionally small and focused. The goal is not to build a production robotics platform, but to create a realistic application that can be tested using professional automation techniques.

---

# Professional Motivation

I created this project to gain hands-on experience with modern test automation practices using TypeScript, Playwright, and Cucumber.

My background combines Mechatronics Engineering, robotics-related research, and professional software development. Because software quality, reliability, and maintainability are critical in industrial and robotics environments, I wanted to build a small but realistic system that could be tested using industry-standard automation techniques.

The goal of this project is not to simulate a complete robotics platform, but to demonstrate practical skills in automated testing, test design, CI/CD integration, and quality-focused software development.

---

# Initial Project Planning

## Original Goal

Create a small but realistic robot monitoring dashboard that can be used as a target for automated testing.

The dashboard should display:

- Robot status
- Battery level
- Current task
- Sensor alerts
- Connection status

The dashboard should support state changes that can later be automated through Playwright and Cucumber.

---

# Architecture Decisions

## Why Angular?

Angular was selected because:

- Existing professional experience with Angular
- Strong TypeScript integration
- Common in enterprise software
- Appropriate for dashboard-style applications
- Allows focus on testing rather than learning a new frontend framework

---

## Why Not React?

React would also be a valid choice.

However:

- The purpose of the project is test automation.
- Learning React would not directly improve the testing objectives.
- Angular allows faster implementation using existing knowledge.

---

## Why CSR?

The application currently uses Client Side Rendering (CSR).

Reason:

- Dashboard applications typically operate after login.
- SEO (Search engine optiomization) is not important.
- The dashboard displays dynamic operational data.

Examples:

- HMIs
- Robot dashboards
- ERP systems
- Monitoring systems

---

## SSR and SSG Research Notes

During project planning, SSR and SSG concepts were reviewed.

### SSR

Server Side Rendering:

```
Request
  ↓
Server builds page
  ↓
Browser receives HTML
```

Useful for:

- Public websites
- Marketing pages
- Search engine visibility

---

### SSG

Static Site Generation:

```
Build time
  ↓
HTML generated
  ↓
Users download static pages
```

Useful for:

- Documentation
- Blogs
- Portfolio websites

---

### Conclusion

SSR and SSG were intentionally not implemented because they do not provide meaningful value for a small robot monitoring dashboard.

---

# Angular + Vite Notes

Research was performed regarding Angular and Vite.

Conclusion:

Modern Angular already integrates Vite internally through Angular tooling.

Custom Angular/Vite integration was intentionally avoided to keep the project focused.

---

# System Under Test Design

The application was intentionally designed as a testable system.

Key principles:

### Stable Selectors

Every important UI element uses:

```html
data-testid=""
```

Examples:

```html
data-testid="robot-status"
data-testid="battery-level"
data-testid="connection-status"
```

This allows robust Playwright automation.

---

### Separation of Responsibilities

Robot state is provided by:

```text
RobotStateService
```

The dashboard component consumes the service.

Benefits:

- Easier testing
- Better maintainability
- Future API integration

---

# Week 1 Objectives

Goal:

Build a stable System Under Test before introducing Playwright.

---

# Week 1 Deliverables

## RobotState Model

Created:

```text
src/app/models/robot-state.model.ts
```

Implemented:

- RobotStatus union type
- ConnectionStatus union type
- RobotState interface

Purpose:

Strong typing of robot state data.

---

## RobotStateService

Created:

```text
src/app/services/robot-state.service.ts
```

Current implementation:

Returns a simulated robot state using:

```ts
Observable<RobotState>
```

Example:

```text
Robot Name: Artemis I
Status: idle
Battery: 78%
Connection: online
Current Task: none
Sensor Alerts: none
```

---

## Unit Testing Lessons

Important finding:

Interfaces should not be unit tested.

Reason:

Interfaces do not exist at runtime.

Instead, testing should focus on:

- Services
- Components
- Runtime validation
- Business behavior

---

## Angular Standalone Components

Issue encountered:

```html
*ngIf
*ngFor
```

generated errors.

Resolution:

```ts
imports: [NgIf, NgFor]
```

Lesson:

Standalone Angular components require explicit imports.

---

## Dashboard Component

Created:

```text
RobotDashboardComponent
```

Displays:

- Robot name
- Status
- Battery level
- Connection status
- Current task
- Sensor alerts

---

## Interactive Robot State Transitions

Implemented actions:

### Start Task

Changes:

```text
idle
↓
active
```

Current task becomes:

```text
Pick Components
```

---

### Charge Robot

Changes:

```text
active
↓
charging
```

Current task cleared.

---

### Simulate Error

Changes:

```text
error
```

Sensor alert added.

---

### Reset Error

Changes:

```text
idle
```

Sensor alerts removed.

---

# Current State Machine

```text
idle
 │
 ├── Start Task
 ▼
active
 │
 ├── Charge Robot
 ▼
charging

idle
 │
 ├── Simulate Error
 ▼
error
 │
 ├── Reset Error
 ▼
idle
```

This state machine provides meaningful automation scenarios.

---

# Week 1 Acceptance Criteria

Completed:

- Angular dashboard created
- RobotState model created
- RobotStateService created
- Unit tests passing
- Dashboard rendering correctly
- Interactive state transitions implemented
- Stable test selectors added
- README drafted
- Project journal started

Status:

✅ Completed

---

# Planned Week 2 Objectives

Introduce Playwright.

Deliverables:

- Playwright installation
- Smoke test
- Functional tests
- Page Object Model
- Test reporting

Success criteria:

```text
npx playwright test
```

runs successfully.

---

# Planned Week 3 Objectives

Introduce:

- Cucumber/Gherkin
- BDD scenarios
- API testing
- GitHub Actions CI

Deliverables:

- Feature files
- Step definitions
- API test suite
- CI pipeline

---

# Planned Week 4 Objectives

Professional polish.

Deliverables:

- Architecture documentation
- Test strategy documentation
- Improved README
- Screenshots
- Interview preparation notes

---

# Lessons Learned So Far

- Focus on completing a small project rather than overengineering.
- Build a System Under Test before building automation.
- Stable selectors are critical for maintainable UI automation.
- Angular standalone components require explicit imports.
- Interfaces should not be unit tested.
- Documentation should evolve alongside implementation.

---

# Current Project Status

Week 1:

✅ Complete

Week 2:


## Week 2 Lessons Learned

### Naming consistency matters

I discovered that typos in selectors and Page Object methods
(e.g. `dasboard()` instead of `dashboard()`) can introduce
confusion and make tests harder to maintain.

This reinforced the importance of using clear and consistent
naming conventions throughout the application and test suite.

### Stable selectors improve maintainability

Using `data-testid` attributes made Playwright tests much
more robust than relying on CSS classes or DOM structure.

### Page Objects improve readability

Moving selectors and interactions into a Page Object reduced
duplication and made tests easier to read.

### Test code has its own dependencies

While creating helper methods inside the Page Object,
I encountered an error because `expect` was not imported.

This highlighted that test utilities and assertions are
dependencies that must be explicitly managed, just like
application code.

Week 3:

### Module and Tooling Compatibility

While introducing Cucumber, I encountered compatibility
issues related to module systems and package versions.

The latest package version did not integrate cleanly with
the existing TypeScript setup, so I investigated version
compatibility and selected a stable configuration.

This highlighted the importance of understanding tooling,
module systems, and project configuration rather than
relying solely on installation guides.

### Test Discovery Configuration

Running Cucumber required explicit configuration for
feature files, step definitions, and support files.

I learned that test frameworks often require discovery
configuration and should not be expected to automatically
locate project resources.

Week 4:

⬜ Not Started