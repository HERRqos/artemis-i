# Artemis I - Project Progress & Engineering Journal

# Project Overview

Artemis I is a robotics-inspired dashboard application created as a portfolio project to demonstrate practical software test automation skills.

I started this project to learn, practice and demostrate the use of skills like Angular, Playwright, Cucumber, Git, Git Action and some other technologies I consider key to know when working on development projects, as well as practices like Test Documentation and Atumation Architecture.

The project is intentionally small and focused. 
The goal is not to build a production robotics platform, but to create a realistic application that can be tested using professional automation techniques.

---

# Professional Motivation

I created this project to gain hands-on experience with modern test automation practices using TypeScript, Playwright, and Cucumber, thinh i like to implement in my actual job.

My background combines Mechatronics Engineering, robotics-related research, and professional software development. 
Because software quality, reliability, and maintainability are critical in industrial and robotics environments, I wanted to build a small but realistic system that could be tested using industry-standard automation techniques.

The goal of this project is not to simulate a complete robotics platform, but to demonstrate practical skills in automated testing, test design, CI/CD integration, and quality-focused software development.

---

# Initial Project Planning

# Goal

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

# Why Angular?

- I already have professional experience with Angular
- It includes strong TypeScript integration
- It is very common in enterprise software
- It is appropriate for dashboard-style applications
- It will help to focus on testing rather than learning a new frontend framework

---

# Why Not React?

React would also be a valid choice. However, the purpose of the project is test automation. Learning React would not directly improve the testing objectives.
I have already worked in Angular on my workplace.

---

# Why CSR?

The application currently uses Client Side Rendering (CSR).

Reason:

- Dashboard applications typically operate after login.
- SEO (Search engine optiomization) is not important.
- The dashboard displays dynamic operational data.

---

# SSR and SSG Research Notes

During project planning, SSR and SSG concepts were reviewed.

# SSR

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

# SSG

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

# Conclusion

SSR and SSG were intentionally not implemented because they do not provide meaningful value for a small robot monitoring dashboard.

---

# System Under Test Design

The application was intentionally designed as a testable system.

Key principles:

# Stable Selectors

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

This allows robust Playwright automation. Also makes easy to keep track when the project grows.

---

# Separation of Responsibilities

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

# RobotState Model

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


# Artemis I - Week 3 Completion Report

## Objective

The objective of Week 3 was to move beyond basic Playwright UI testing and introduce a more professional automation architecture by implementing:

* Cucumber/Gherkin
* BDD structure
* Playwright integration
* API testing
* CI/CD automation

The focus was on understanding how different automation layers interact rather than simply increasing the number of tests.

---

# Starting Point

At the beginning of Week 3, the project already contained:

* Angular Dashboard
* RobotState model
* RobotStateService
* Interactive robot actions
* Unit tests
* Playwright smoke tests
* Playwright functional tests
* Page Object Model implementation

The project structure was stable enough to support a BDD layer.

---

# Cucumber Installation

Cucumber was introduced to support Behavior Driven Development (BDD).

Installed packages:

```bash
npm install --save-dev @cucumber/cucumber
npm install --save-dev ts-node
npm install --save-dev tsconfig-paths
```

---

# Version Compatibility Challenges

During installation, compatibility issues appeared between the latest Cucumber release and the current TypeScript project setup.

Problems observed:

* Module loading conflicts
* Differences between CommonJS and ES Modules
* Execution issues when running cucumber-js

Initial execution failed due to incompatibilities between package versions and module resolution.

Resolution:

A stable Cucumber version was selected that aligned with the project's TypeScript configuration.

Lesson learned:

Framework documentation often assumes ideal project configurations. Real-world integration frequently requires version validation and troubleshooting.

---

# Test Discovery Configuration

Running:

```bash
npm run bdd
```

did not initially execute the feature files.

Reason:

Cucumber could not automatically locate:

* Feature files
* Step definitions
* Support files

Solution:

Configuration files were introduced:

```text
cucumber.js
tsconfig.json
```

These files explicitly defined:

* Feature directories
* Step directories
* Support directories
* TypeScript execution configuration

Lesson learned:

Test frameworks require explicit discovery configuration and should not be expected to automatically locate project resources.

---

# BDD Folder Structure

Created:

```text
tests/
│
├── api/
│
├── pages/
│
├── bdd/
│   ├── features/
│   ├── steps/
│   └── support/
│
└── playwright/
```

Purpose:

* Separate UI automation
* Separate BDD specifications
* Separate API testing

This structure improves maintainability as the project grows.

---

# First Feature File

Created:

```gherkin
Feature: Robot Status Management

  Scenario: Operator starts a robot task

    Given the robot dashboard is open
    When the operator starts a task
    Then the robot status should be "active"
```

Important observation:

The feature describes business behavior rather than implementation details.

Preferred:

```gherkin
When the operator starts a task
```

Avoided:

```gherkin
When I click the Start Task button
```

This keeps the feature focused on requirements rather than UI implementation.

---

# Step Definitions

Initial implementation used placeholder logging:

```typescript
Given(...)
When(...)
Then(...)
```

with console output.

Example output:

```text
Dashboard opened
Task started
Expected status: active
```

BDD execution result:

```text
1 scenario (1 passed)
3 steps (3 passed)
```

This confirmed that:

* Feature discovery worked
* Step matching worked
* Cucumber configuration worked

---

# World and Shared Context

To prepare Playwright integration, a custom World object was introduced.

Purpose:

Store shared execution objects such as:

```typescript
Page
RobotDashboardPage
```

This allows step definitions to share browser state without duplicating setup logic.

Architecture:

```text
Feature File
      ↓
Step Definitions
      ↓
World
      ↓
RobotDashboardPage
      ↓
Playwright
      ↓
Angular Dashboard
```

Lesson learned:

The World acts as the shared execution context between Cucumber and Playwright.

---

# Page Object Model Improvements

The RobotDashboardPage was expanded and refined.

Implemented concepts:

* Stable selectors
* Encapsulated interactions
* Reusable UI operations

Examples:

```typescript
status()
battery()
connectionStatus()
currentTask()
dashboard()
```

Additional action methods:

```typescript
startTask()
chargeRobot()
simulateError()
resetError()
```

Lesson learned:

Page Objects should expose business actions rather than low-level UI interactions.

Preferred:

```typescript
await dashboard.startTask();
```

Instead of:

```typescript
await page.getByTestId('start-task-button').click();
```

---

# Naming and Selector Lessons

Several small issues highlighted the importance of consistency.

Examples:

* Typographical errors in method names
* Selector naming inconsistencies
* Missing imports such as expect

Lesson learned:

Automation frameworks are highly dependent on:

* Naming consistency
* Stable selectors
* Explicit imports

Minor mistakes can cause test failures even when application functionality is correct.

---

# API Testing

Week 3 introduced API validation.

Project goal:

Demonstrate Playwright API testing capabilities without creating unnecessary backend complexity.

Approach:

Use mock robot state data served by Angular.

Example endpoint:

```text
/assets/mock-data/robot-state.json
```

Validation objectives:

* Response availability
* Response structure
* Battery level validation
* Robot status validation

Lesson learned:

Automation engineers should validate both GUI behavior and API contracts.

---

# GitHub Actions CI/CD

Continuous Integration was introduced using GitHub Actions.

Workflow objectives:

* Install dependencies
* Execute Angular unit tests
* Execute Playwright tests
* Execute Cucumber tests

Example pipeline stages:

```text
npm ci

ng test

npx playwright test

npm run bdd
```

Purpose:

Ensure automated validation on:

* Push
* Pull Request

---

# Architecture Achieved

At the end of Week 3 the project architecture became:

```text
Angular Dashboard
        │
        ▼
RobotStateService
        │
        ▼
Robot State Data

        ▲
        │

Playwright
        ▲
        │

Page Objects
        ▲
        │

Cucumber Steps
        ▲
        │

Feature Files
```

---

# Week 3 Key Lessons Learned

## Framework Versions Matter

Latest package versions are not always the most productive choice.

Compatibility should be validated before adopting major updates.

---

## Module Systems Matter

Understanding:

* CommonJS
* ES Modules

became necessary when integrating Cucumber into the TypeScript project.

---

## Configuration Is Part of Engineering

Successful automation depends on:

* Correct discovery paths
* Runtime configuration
* Project structure

not only on writing test code.

---

## Page Objects Improve Maintainability

Centralizing selectors and actions reduced duplication and improved readability.

---

## BDD Describes Behavior

Feature files should describe business actions and expected outcomes rather than UI implementation details.

---

## Automation Exists at Multiple Layers

A complete automation strategy includes:

* Unit tests
* UI tests
* BDD tests
* API tests
* CI execution

rather than relying exclusively on browser automation.

---

# Week 3 Completion Status

Completed:

* Cucumber installation
* Cucumber configuration
* Feature files
* Step definitions
* BDD execution
* World architecture
* Page Object integration
* API testing structure
* GitHub Actions preparation

Status:

✅ Week 3 Complete

---

# Next Focus: Week 4

Week 4 will focus on:

* Documentation
* Test Strategy
* Architecture diagrams
* README improvements
* Repository cleanup
* Interview preparation

The objective is no longer to add significant functionality, but to improve professionalism and presentation quality.



Week 4:

⬜ Not Started