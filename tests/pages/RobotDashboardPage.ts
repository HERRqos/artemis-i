import { Page } from "@playwright/test";

export class RobotDashboardPage {
    constructor(private page: Page) { }
    status() { return this.page.getByTestId('robot-status'); }
    battery() { return this.page.getByTestId('battery-level'); }
    name() { return this.page.getByTestId('robot-name');}
    connectionStatus(){return this.page.getByTestId('connection-status');}
    currentTask(){return this.page.getByTestId('current-task');}
    dasboard() {return this.page.getByTestId('robot-dashboard');}
    async open() { await this.page.goto('/'); }
}