interface Task {
    id: number;
    title : string;
    description : string;
status : "OPEN" |"IN_PROGRESS" |"COMPLETED";
priority : "LOW" | "MEDIUM" | "HIGH";

}

const task : Task = {

    id : 1,
    title : "Learn TypeScript",
    description : "Learn the basics of TypeScript",
    status : "IN_PROGRESS",
    priority : "HIGH"
}

console.log(task);