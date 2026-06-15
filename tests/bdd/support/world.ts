import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { RobotDashboardPage } from '../../pages/RobotDashboardPage';

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    private _dashboard?: RobotDashboardPage;

    constructor(options: IWorldOptions) {
        super(options);
    }
    
    get dashboard(): RobotDashboardPage{
        return (this._dashboard ??= new RobotDashboardPage(this.page));
    }
}
setWorldConstructor(CustomWorld);