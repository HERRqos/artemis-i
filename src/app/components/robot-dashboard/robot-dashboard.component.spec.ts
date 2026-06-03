import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RobotDashboardComponent } from './robot-dashboard.component';
import { RobotState } from '../../models/robot-state.model';

describe('RobotDashboardComponent', () => {
  let component: RobotDashboardComponent;
  let fixture: ComponentFixture<RobotDashboardComponent>;
  const mockRobot: RobotState={
    name: 'artemis-unit-Test',
    id: 'Artemis T',
    status: 'idle',
    batteryLevel: 50,
    currentTask: null,
    connectionStatus: 'online',
    sensorAlerts: []
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotDashboardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RobotDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test: dashboard is created

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test: A tastk is activated

  it('should set robot to active when start task is clicked', () => {
    component.robot = mockRobot;
    component.startTask();
    expect(component.robot?.status).toBe('active');
    expect(component.robot?.currentTask).toBe('Pick Components');
  });

  // Test: the robot is Charging

  it('should set robot to charging', () => {
    component.robot = mockRobot;
    component.sendToCharge();
    expect(component.robot?.status).toBe('charging');
  });

  // Test: the robot has found an obstacle

  it('should set robot to error', () => {
    component.robot = mockRobot;
    component.simulateError();
    expect(component.robot?.status).toBe('error');
  });

  // Test: the Alert has been cleared

  it('shoul clear alerts and return to idle',()=>{
    component.robot={
      ...mockRobot,
      status: 'error',
      sensorAlerts: ['Obstacle detected']
    };
    component.resetError();
    expect(component.robot?.status).toBe('idle');
    expect(component.robot?.sensorAlerts).toEqual([]);
  });

});
