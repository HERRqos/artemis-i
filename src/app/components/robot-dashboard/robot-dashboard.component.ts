import { Component } from '@angular/core';
import { RobotState } from '../../models/robot-state.model';
import { RobotStateService } from '../../services/robot-state.service';
import { NgIf, NgFor } from "@angular/common";

@Component({
  selector: 'app-robot-dashboard',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './robot-dashboard.component.html',
  styleUrl: './robot-dashboard.component.scss'
})
export class RobotDashboardComponent {
  robot: RobotState|null=null;
  constructor(private readonly robotStateService:RobotStateService){}
  ngOnInit():void{
    this.robotStateService.getRobotState().subscribe((robotState)=>{
      this.robot=robotState;
    });
  }
}
