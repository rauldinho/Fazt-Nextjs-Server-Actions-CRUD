import React from "react";
import { Button } from "./ui/button";
import { deleteTask } from "@/actions/tasks-actions";

const TaskButtonDelete = ({ taskId }: { taskId: number }) => {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button variant={"destructive"}>Delete</Button>
        </form>
    );
};

export default TaskButtonDelete;
