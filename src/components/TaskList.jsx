import TaskItem from "./TaskItem";

function TaskList(props) {
    let { tasks, onToggle, onDelete } = props;

    // Chunk tasks into groups of 3
    const chunkedTasks = [];
    const chunkSize = 3;
    for (let i = 0; i < tasks.length; i += chunkSize) {
        chunkedTasks.push(tasks.slice(i, i + chunkSize));
    }

    const columnNames = ["DRAFT", "IN PROGRESS", "EDITING", "DONE"];
    const labels = ["Main Task", "Secondary Task", "Tertiary Task"];

    return (
        <div>
            {tasks.length === 0
                ? (
                    <p className="text-center text-lg mt-10" style={{ color: "#4a5580" }}>
                        No tasks yet. Add one from the left.
                    </p>
                )
                : (
                    <div className="flex flex-row gap-6 overflow-x-auto pb-4 items-start">
                        {chunkedTasks.map((chunk, columnIndex) => {
                            const columnName = columnNames[columnIndex] || `STAGE ${columnIndex + 1}`;
                            return (
                                <div
                                    key={columnIndex}
                                    className="flex flex-col p-4 rounded-xl border flex-shrink-0"
                                    style={{
                                        width: "250px",
                                        backgroundColor: "#121936",
                                        borderColor: "#2d3a6b",
                                        minHeight: "450px"
                                    }}
                                >
                                    <div className="border-b pb-2 mb-4" style={{ borderColor: "#2d3a6b" }}>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-center" style={{ color: "#8892b0" }}>
                                            {columnName}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col gap-3 flex-grow">
                                        {chunk.map((task, itemIndex) => {
                                            const typeLabel = labels[itemIndex] || "Additional Task";
                                            return (
                                                <TaskItem
                                                    key={task.id}
                                                    task={task}
                                                    typeLabel={typeLabel}
                                                    onToggle={onToggle}
                                                    onDelete={onDelete}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            }
        </div>
    );
}

export default TaskList;