import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('the robot dashboard is open', async function (this: CustomWorld) {
    await this.dashboard.open();
});

Given('the robot is in error state',async function (this:CustomWorld) {
    await this.dashboard.simulateError();
});

When('the operator starts a task', async function (this: CustomWorld) {
    await this.dashboard.startTask();
});

When('the operator sends the robot to charging', async function (this: CustomWorld) {
    await this.dashboard.chargeRobot();
});

When('the operator resets the error', async function (this:CustomWorld) {
    await this.dashboard.resetRobot();
});

Then(
  'the robot status should be {string}',
  async function (this: CustomWorld, status: string) {
    await this.dashboard.expectStatusToBe(status);
  }
);