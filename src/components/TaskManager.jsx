import { useState } from "react";
import AddTaskForm from "./addTaskForm.jsx";
import TaskList from "./taskList.jsx";

function TaskManager() {
    // state
    let [tasks, setTasks] = useState([]);

    // handler
    function handleAddTask(newTask) {
        let task = {
            id: Date.now(),
            title: newTask.title,
            priority: newTask.priority,
            completed: false
        };
        setTasks([...tasks, task]);
    }

    function handleToggle(id) {
        let updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function handleDelete(id) {
        let updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    // counts
    let totalTasks = tasks.length;
    let completedTasks = tasks.filter((task) => task.completed).length;

    // return a react element
    return (
        <div className="min-h-screen p-6" style={{ backgroundColor: "#0f1535" }}>

            <div className="flex gap-4 mb-6">
                <div className="rounded-lg px-5 py-3 border" style={{ backgroundColor: "#1a2448", borderColor: "#2d3a6b" }}>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#8892b0" }}>Total Tasks</p>
                    <p className="text-2xl font-bold text-white">{totalTasks}</p>
                </div>
                <div className="rounded-lg px-5 py-3 border" style={{ backgroundColor: "#1a2448", borderColor: "#2d3a6b" }}>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#8892b0" }}>Completed</p>
                    <p className="text-2xl font-bold" style={{ color: "#69db7c" }}>{completedTasks}</p>
                </div>
                <div className="rounded-lg px-5 py-3 border" style={{ backgroundColor: "#1a2448", borderColor: "#2d3a6b" }}>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#8892b0" }}>Pending</p>
                    <p className="text-2xl font-bold" style={{ color: "#ffa94d" }}>{totalTasks - completedTasks}</p>
                </div>
            </div>

            <div className="flex gap-6 items-start">

                <div className="flex-shrink-0 w-72">
                    <AddTaskForm onAddTask={handleAddTask} />
                </div>

                <div className="flex-1">
                    <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
                </div>

            </div>
        </div>
    );
}

export default TaskManager;