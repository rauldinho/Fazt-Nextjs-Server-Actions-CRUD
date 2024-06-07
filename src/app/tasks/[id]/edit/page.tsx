import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const TaskPageEdit = async ({ params }: { params: { id: string } }) => {
    const task = await prisma.task.findFirst({
        where: {
            id: parseInt(params.id),
        },
    });

    if (!task) redirect("/");

    console.error(task);

    return (
        <div className="flex justify-center items-center h-screen">
            <TaskForm task={task} />
        </div>
    );
};

export default TaskPageEdit;
