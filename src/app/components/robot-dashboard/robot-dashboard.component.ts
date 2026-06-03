import { Component } from '@angular/core';
import { RobotState } from '../../models/robot-state.model';
import { RobotStateService } from '../../services/robot-state.service';
import { NgIf, NgFor } from "@angular/common";

@Component({
  selector: 'app-robot-dashboard',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './robot-dashboard.component.html',
  styleUrl: './robot-dashboard.component.scss'
})
export class RobotDashboardComponent {

  startTask() {
    if (!this.robot) {
      return;
    }
    this.robot = { ...this.robot, status: 'active', currentTask: 'Pick Components' };
  }
  sendToCharge() {
    if (!this.robot) {
      return;
    }
    this.robot = { ...this.robot, status: 'charging', currentTask: null };
  }
  simulateError() {
    if (!this.robot) {
      return;
    }
    this.robot = { ...this.robot, status: 'error', sensorAlerts: ['Obstacle detected'] };
  }
  resetError() {
    if (!this.robot) {
      return;
    }
    this.robot = { ...this.robot, status: 'idle', sensorAlerts: [], currentTask: null };
  }
  robot: RobotState | null = null;
  constructor(private readonly robotStateService: RobotStateService) { }
  ngOnInit(): void {
    this.robotStateService.getRobotState().subscribe((robotState) => {
      this.robot = robotState;
    });
  }
}
