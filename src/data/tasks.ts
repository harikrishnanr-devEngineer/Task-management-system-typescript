import type { Task } from "../types/Task";

export const tasks: Task[] = [
    {
        id: 1,
        title : "Learn TypeScript",
        description : "Understand TypeScript fundamentals",
        status : "IN_PROGRESS",
        priority : "HIGH"
    },
    {
         id: 2,
        title: "Learn React",
        description: "Understand React components",
        status: "OPEN",
        priority: "MEDIUM"
    },
    {
        id: 3,
        title: "Create Dashboard",
        description: "Develop task dashboard",
        status: "COMPLETED",
        priority: "LOW"
    }
];
