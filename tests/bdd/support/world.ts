import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { RobotDashboardPage } from '../../pages/RobotDashboardPage';

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    dashboard!:RobotDashboardPage;

    constructor(options: IWorldOptions) {
        super(options);
    }
}
setWorldConstructor(CustomWorld);