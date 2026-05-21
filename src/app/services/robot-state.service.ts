import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RobotState } from '../models/robot-state.model';

@Injectable({
  providedIn: 'root'
})
export class RobotStateService {
  
  getRobotState(): Observable<RobotState> {
    return of({
      id: 'artemis-unit-01',
      name: 'Artemis I',
      status: 'idle',
      batteryLevel: 78,
      currentTask: null,
      connectionStatus: 'online',
      sensorAlerts: [],
    });
  }
}
