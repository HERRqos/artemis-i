# Artemis I - Robot Monitoring Dashboard Test Automation Portfolio

## Project Purpose

Artemis I is a robotics-themed test automation portfolio project designed to demonstrate practical skills in:

* TypeScript
* Angular
* Playwright
* Cucumber/Gherkin
* API Testing
* GitHub Actions CI
* Test Reporting
* Test Documentation

The project simulates a small Human-Machine Interface (HMI) dashboard used to monitor and interact with a robot.

This project is intentionally small and focused. The goal is to demonstrate software quality and automation engineering practices rather than build a production robotics platform.

---

# Career Positioning

This project supports applications for:

* QA Automation Engineer
* SDET
* Test Automation Engineer
* Software Engineer in Test
* DevOps-adjacent engineering roles
* Robotics software companies
* Industrial automation companies

Relevant background:

* Bachelor's Degree in Mechatronics Engineering
* EEG/Brain-Computer Interface robotics thesis
* Fachinformatiker für Anwendungsentwicklung
* Professional software development experience
* Angular, TypeScript, C#, Azure DevOps, Docker, CI/CD experience

The project should demonstrate practical testing ability without overclaiming expertise.

---

# Technology Decisions

## Frontend

Chosen:

* Angular
* TypeScript
* SCSS

Reason:

Angular aligns with existing professional experience and is commonly used for enterprise-style applications and dashboards.

---

## Test Automation

Chosen:

* Playwright
* TypeScript
* Cucumber/Gherkin (planned)

Reason:

Playwright provides:

* Modern browser automation
* Strong TypeScript support
* API testing capabilities
* Tracing and debugging support
* CI integration

---

## CI/CD

Chosen:

* GitHub Actions

Reason:

Simple setup and visible automation execution directly from GitHub.

---

# Angular Architecture Notes

## Angular vs React

Angular was selected because:

* Existing professional Angular experience
* Strong TypeScript integration
* Suitable for enterprise applications
* More relevant to existing profile

The project focus is test automation, not frontend framework experimentation.

---

## Angular and Vite

Question:

Can Angular use Vite?

Answer:

Modern Angular already uses Vite internally through Angular tooling.

Recommended approach:

```bash
ng new robot-dashboard
ng serve
```

Avoid custom Angular + Vite configurations for this project.

---

## CSS vs SCSS

Chosen:

SCSS

Project creation:

```bash
ng new robot-dashboard --routing --style=scss
```

Reason:

SCSS is common in Angular projects while remaining simple.

---

# Rendering Concepts Learned

## CSR

Client-Side Rendering

Flow:

```text
Browser loads Angular application
Angular requests data from APIs
Angular renders UI
```

Best for:

* Dashboards
* HMIs
* Internal tools
* Admin portals
* Robot monitoring applications

Chosen for Artemis I.

---

## SSR

Server-Side Rendering

Flow:

```text
User requests page
Server generates HTML
Browser receives generated HTML
Angular becomes interactive afterward
```

Useful for:

* SEO
* Public websites
* Public status pages
* Product pages

Not necessary for Artemis I dashboard.

---

## SSG

Static Site Generation

Flow:

```text
Build process generates HTML
User later downloads pre-generated pages
```

Useful for:

* Documentation
* Blogs
* Portfolio pages
* Static content

Not necessary for Artemis I dashboard.

---

## SEO

SEO = Search Engine Optimization

Purpose:

Help search engines understand and index public websites.

Important for:

* Public content
* Blogs
* Documentation
* Marketing pages

Not generally important for:

* Internal dashboards
* ERP systems
* HMIs
* Robot control systems

---

# ERP / SAP B1 Architecture Notes

Question:

If building a web version of SAP Business One, should Angular be used?

Answer:

Yes.

Reason:

SAP-like systems are:

* Form-heavy
* Data-heavy
* Workflow-oriented
* Enterprise applications

Angular is a strong fit.

Recommended architecture:

```text
Angular Frontend
       ↓
Backend API
       ↓
Business Logic
       ↓
Database / ERP Integration
```

Rendering recommendation:

* CSR for application screens
* SSR/SSG only for public-facing content

---

# Week 1 Scope

Goal:

Build a simple but testable Angular dashboard.

Deliverables:

* RobotState model
* RobotStateService
* Dashboard component
* README draft
* Stable selectors for future automation

---

# Implemented Components

## RobotState Model

File:

```text
src/app/models/robot-state.model.ts
```

Contains:

```ts
export type RobotStatus =
  | 'idle'
  | 'active'
  | 'charging'
  | 'error';

export type ConnectionStatus =
  | 'online'
  | 'offline';

export interface RobotState {
  id: string;
  name: string;
  status: RobotStatus;
  batteryLevel: number;
  currentTask: string | null;
  connectionStatus: ConnectionStatus;
  sensorAlerts: string[];
}
```

Purpose:

Provide strong typing for robot state information.

---

## RobotStateService

Purpose:

Provide robot data to the dashboard.

Current implementation:

Hardcoded simulated robot state.

Returns:

```text
Artemis I
Status: idle
Battery: 78%
Connection: online
Current Task: none
Sensor Alerts: none
```

Uses:

```ts
Observable<RobotState>
```

This allows future migration to API-based data without changing component structure.

---

# Testing Notes

## Unit Testing

Important lesson:

Do not write tests for TypeScript interfaces.

Reason:

Interfaces disappear at runtime.

Test:

* Services
* Components
* Runtime validation logic

Not:

* Interfaces

---

## RobotStateService Test

Created:

```text
robot-state.service.spec.ts
```

Verifies:

* Robot name
* Status
* Connection status
* Battery range
* Sensor alerts

---

## Angular Test Issues

Observed:

Editor highlighted:

* describe
* beforeEach
* expect
* done

Possible causes:

* Missing Jasmine types
* tsconfig.spec.json configuration
* IDE TypeScript cache

Checks:

```bash
npm ls @types/jasmine
```

Verify:

```json
{
  "compilerOptions": {
    "types": ["jasmine"]
  }
}
```

---

# Dashboard Implementation

Created:

```text
RobotDashboardComponent
```

Features:

* Robot name
* Status
* Battery
* Connection
* Current task
* Sensor alerts

Uses:

```html
data-testid
```

attributes for future Playwright tests.

Examples:

```html
data-testid="robot-status"
data-testid="battery-level"
data-testid="connection-status"
```

Reason:

Stable selectors improve automation reliability.

---

# Angular Standalone Component Lesson

Issue encountered:

```html
*ngIf
*ngFor
```

generated errors.

Reason:

Standalone Angular components require explicit imports.

Solution:

```ts
import { NgIf, NgFor } from '@angular/common';

imports: [NgIf, NgFor]
```

Alternative:

```ts
imports: [CommonModule]
```

---

# Dashboard Acceptance Criteria Achieved

Verified:

* ng build passes
* ng test passes
* Dashboard renders successfully
* Service provides data
* No hardcoded dashboard state
* Stable test selectors added

---

# Upcoming Milestone

## Goal 1

Add Playwright.

Tasks:

* Install Playwright
* Configure playwright.config.ts
* Configure Angular startup
* Create first smoke test

Expected smoke test:

```text
Dashboard visible
Robot name visible
Robot status visible
Battery visible
Connection visible
```

---

## Goal 2

Add interactive dashboard actions.

Planned buttons:

* Start Task
* Charge Robot
* Reset Error

Planned behavior:

Start Task:

```text
Status → active
Current Task → Pick Components
```

Charge Robot:

```text
Status → charging
Current Task → none
```

Reset Error:

```text
Status → idle
Sensor Alerts → cleared
```

---

# Planned Commits

Playwright:

```text
test: add Playwright dashboard smoke test
```

Dashboard actions:

```text
feat: add interactive robot dashboard actions
```

---

# Project Rule

Focus on:

```text
A believable system under test.
```

Avoid:

* ROS integration
* Kubernetes
* Databases
* Authentication
* Complex telemetry
* Advanced state management
* Overengineering

Quality and completion are more valuable than complexity.
