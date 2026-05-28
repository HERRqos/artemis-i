import {test, expect} from "@playwright/test";
test('should display the Artemis I dashboard',async ({ page })=>{ 
    await page.goto('/');
    await expect(page.getByTestId('robot-dashboard')).toBeVisible();
    await expect(page.getByTestId('robot-name')).toHaveText('Artemis I');
    await expect(page.getByTestId('robot-status')).toHaveText('idle');
    await expect(page.getByTestId('battery-level')).toHaveText('78%');
    await expect(page.getByTestId('connection-status')).toHaveText('online');
    await expect(page.getByTestId('current-task')).toHaveText('No active task');
 });