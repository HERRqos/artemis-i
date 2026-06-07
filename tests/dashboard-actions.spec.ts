import {test, expect} from "@playwright/test";
import { RobotDashboardPage } from "./pages/RobotDashboardPage";
test('Robot becomes active when task starts',async ({ page })=> {
    const robotDashboard= new RobotDashboardPage(page);
    await robotDashboard.open();
    await robotDashboard.startTask();
    await robotDashboard.expectStatusToBe('active');
    await expect(robotDashboard.currentTask()).toHaveText('Pick Components');
});
test('Robot enters charging state',async ({ page })=> {
    const robotDashboard= new RobotDashboardPage(page);
    await robotDashboard.open();
    await robotDashboard.chargeRobot();
    await robotDashboard.expectStatusToBe('charging');
});
test('Robot enters error state',async ({ page })=> {
    const robotDashboard= new RobotDashboardPage(page);
    await robotDashboard.open();
    await robotDashboard.simulateError();
    await robotDashboard.expectStatusToBe('error');
});
test('Reset error returns robot to idle state',async ({ page })=> {
    const robotDashboard= new RobotDashboardPage(page);
    await robotDashboard.open();
    await robotDashboard.simulateError();
    await robotDashboard.resetRobot();
    await robotDashboard.expectStatusToBe('idle');
});
