function TaskItem(props) {
    let { task, typeLabel, onToggle, onDelete } = props;
    let { id, title, priority, completed } = task;

    function handleComplete() {
        onToggle(id);
    }

    function handleDelete() {
        onDelete(id);
    }

    // Styles for the inner task card based on state/priority
    const innerCardStyles = {
        completed: {
            bg: "rgba(105, 219, 124, 0.1)",
            border: "1px solid rgba(105, 219, 124, 0.4)",
            textColor: "#a6e22e",
            circleBg: "#69db7c",
            circleText: "#121936"
        },
        High: {
            bg: "rgba(255, 107, 107, 0.1)",
            border: "1px solid rgba(255, 107, 107, 0.4)",
            textColor: "#ff8787",
            circleBg: "#ff6b6b",
            circleText: "#ffffff"
        },
        Medium: {
            bg: "rgba(255, 169, 77, 0.1)",
            border: "1px solid rgba(255, 169, 77, 0.4)",
            textColor: "#ffd8a8",
            circleBg: "#ffa94d",
            circleText: "#ffffff"
        },
        Low: {
            bg: "rgba(79, 110, 247, 0.1)",
            border: "1px solid rgba(79, 110, 247, 0.4)",
            textColor: "#a5d8ff",
            circleBg: "#4f6ef7",
            circleText: "#ffffff"
        }
    };

    const style = completed ? innerCardStyles.completed : (innerCardStyles[priority] || innerCardStyles.Low);
    const initial = title ? title.charAt(0).toUpperCase() : "T";

    return (
        <div
            className="rounded-xl p-4 flex flex-col mb-1 transition-all duration-200"
            style={{
                backgroundColor: "#161d3f",
                border: "1px solid #232c5e",
                width: "218px"
            }}
        >
            {/* Header: Label (Main Task / Secondary Task / etc.) & menu */}
            <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold tracking-wider" style={{ color: "#505f96" }}>
                    {typeLabel || "Task"}
                </span>
                <span className="text-gray-500 hover:text-white cursor-pointer text-xs font-bold">•••</span>
            </div>

            {/* Inner Colorful Card */}
            <div
                className="rounded-lg p-3 flex items-center gap-2 mb-3 cursor-pointer"
                style={{
                    backgroundColor: style.bg,
                    border: style.border
                }}
                onClick={handleComplete}
                title="Click to toggle completion"
            >
                {/* Circle Initial */}
                <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold flex-shrink-0"
                    style={{
                        backgroundColor: style.circleBg,
                        color: style.circleText
                    }}
                >
                    {completed ? "✓" : initial}
                </div>

                {/* Title */}
                <span
                    className="text-xs font-semibold truncate flex-1 leading-snug"
                    style={{
                        color: style.textColor,
                        textDecoration: completed ? "line-through" : "none"
                    }}
                >
                    {title}
                </span>
            </div>

            {/* Footer with actions and priority info */}
            <div className="flex justify-between items-center mt-1">
                <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{
                        backgroundColor: "#1f2a5c",
                        color: style.circleBg
                    }}
                >
                    {priority}
                </span>

                <div className="flex gap-2">
                    <button
                        onClick={handleComplete}
                        className="text-[10px] font-bold hover:underline cursor-pointer"
                        style={{ color: completed ? "#ffa94d" : "#69db7c" }}
                    >
                        {completed ? "Undo" : "Done"}
                    </button>
                    <button
                        onClick={handleDelete}
                        className="text-[10px] font-bold text-red-400 hover:underline cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;