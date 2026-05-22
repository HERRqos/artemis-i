import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RobotStateService } from './services/robot-state.service';
import { RobotState } from './models/robot-state.model';
import { RobotDashboardComponent } from './components/robot-dashboard/robot-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RobotDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'artemis-i';
  robotStateService: RobotStateService = new RobotStateService;
  robot: RobotState | undefined;
  

  ngOnInit(): void {
  this.robotStateService.getRobotState().subscribe((robotState: RobotState) => {
    console.log(robotState);
    this.robot = robotState;
  });
}
}
