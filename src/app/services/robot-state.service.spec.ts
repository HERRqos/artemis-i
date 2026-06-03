import { TestBed } from '@angular/core/testing';

import { RobotStateService } from './robot-state.service';

describe('Robot services testing', () => {
  let service: RobotStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobotStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return the simulated Artemis I robot state', (done) => {
    service.getRobotState().subscribe((robotState) => {
      expect(robotState).toEqual({
        id: 'artemis-unit-01',
        name: 'Artemis I',
        status: 'idle',
        batteryLevel: 78,
        currentTask: null,
        connectionStatus: 'online',
        sensorAlerts: [],
      });

      done();
    });
  });
});
