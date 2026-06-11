import { Given, When, Then } from '@cucumber/cucumber';

Given('the robot dashboard is open', async function () {
  console.log('Dashboard opened');
});

When('the operator starts a task', async function () {
  console.log('Task started');
});

Then(
  'the robot status should be {string}',
  async function (status: string) {
    console.log(`Expected status: ${status}`);
  }
);