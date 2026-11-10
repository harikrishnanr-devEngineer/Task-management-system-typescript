import type { ApiResponse } from "./types/ApiResponse";
import type { Task } from "./types/Task";

const taskResponse: ApiResponse<Task> = {
    
    success: true,
    message: "Api fetched successfully",
    data: {
        id: 1,
        title: "Learn TypeScript",
        description: "Understand Generic Interfaces",
        status: "IN_PROGRESS",
        priority: "HIGH",
      
    }
};

function App() {
    return (
        <>
            <h1>Generic Interface Practice</h1>

            <h2>{taskResponse.message}</h2>

            <p>Task: {taskResponse.data.title}</p>

            <p>Status: {taskResponse.data.status}</p>
             
        </>
    );
}

export default App;