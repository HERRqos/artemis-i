import { test, expect } from '@playwright/test';

test('robot state endpoint returns valid data', async ({
  request,
}) => {
  const response = await request.get('mock-data/robot-state.json'
  );
  expect(response.ok()).toBeTruthy();
  const robot = await response.json();
  expect(robot.name).toBe('Artemis I');
  expect(robot.status).toBeDefined();
  expect(robot.batteryLevel).toBeGreaterThan(0);
  expect(robot.connectionStatus).toBeDefined();
});

test('battery level is within valid range', async ({
  request,
}) => {
  const response = await request.get('mock-data/robot-state.json'
  );
  const robot = await response.json();
  expect(robot.batteryLevel).toBeGreaterThanOrEqual(0);
  expect(robot.batteryLevel).toBeLessThanOrEqual(100);
});