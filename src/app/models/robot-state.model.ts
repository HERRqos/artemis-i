export type RobotStatus = 'idle' | 'active' | 'charging' | 'error';
export type ConnectionStatus = 'online' | 'offline';

export interface RobotState {
    id: string;
    name: string;
    status: RobotStatus;
    batteryLevel: number;
    currentTask: string | null;
    connectionStatus: ConnectionStatus;
    sensorAlerts: string[];
}