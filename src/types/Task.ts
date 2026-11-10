export type TaskStatus = 
| "OPEN"
| "IN_PROGRESS"
|"COMPLETED";

export type TaskPriority=
| "LOW"
| "MEDIUM"
| "HIGH";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
   
}