import { Page } from "@playwright/test";
import { expect } from '@playwright/test';

export class RobotDashboardPage {
    constructor(private page: Page) { }
    status() { return this.page.getByTestId('robot-status'); }
    battery() { return this.page.getByTestId('battery-level'); }
    name() { return this.page.getByTestId('robot-name');}
    connectionStatus(){return this.page.getByTestId('connection-status');}
    currentTask(){return this.page.getByTestId('current-task');}
    dashboard() {return this.page.getByTestId('robot-dashboard');}
    async open() { await this.page.goto('/'); }
    startTaskbutton() { return this.page.getByTestId('start-task-button'); }
    chargeRobotButton() { return this.page.getByTestId('charge-robot-button'); }
    simulateErrorButton() { return this.page.getByTestId('simulate-error-button'); }
    resetRobotButton() { return this.page.getByTestId('reset-error-button'); }
    async startTask() { await this.startTaskbutton().click(); }
    async chargeRobot() { await this.chargeRobotButton().click(); } 
    async simulateError() { await this.simulateErrorButton().click(); }
    async resetRobot() { await this.resetRobotButton().click(); }
    async expectStatusToBe(status: string) { await expect(this.status()).toHaveText(status); }
}