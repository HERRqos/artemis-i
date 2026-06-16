import {test, expect} from "@playwright/test";
import { RobotDashboardPage } from "./pages/RobotDashboardPage";
test('Dashboar loads Correctly',async ({ page })=>{ 
    const robotDashboard= new RobotDashboardPage(page);
    await robotDashboard.open();
    await expect(robotDashboard.dashboard()).toBeVisible();
    await expect(robotDashboard.status()).toHaveText('idle');
    await expect(robotDashboard.battery()).toHaveText('78%');
    await expect(robotDashboard.name()).toHaveText('Artemis I');
    await expect(robotDashboard.connectionStatus()).toHaveText('online');
    await expect(robotDashboard.currentTask()).toHaveText('No active task');
 });