import { useState } from "react";

function AddTaskForm(props) {
    let [title, setTitle] = useState("");
    let [priority, setPriority] = useState("Low");
    let [errors, setErrors] = useState({});

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handlePriorityChange(e) {
        setPriority(e.target.value);
    }

    function validate() {
        let newErrors = {};
        if (!title.trim()) {
            newErrors.title = "Title is required";
        } else if (title.trim().length < 3) {
            newErrors.title = "Title must be at least 3 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit() {
        if (validate()) {
            props.onAddTask({ title: title.trim(), priority });
            setTitle("");
            setPriority("Low");
            setErrors({});
        }
    }

    const inputStyle = {
        width: "100%",
        backgroundColor: "#0f1535",
        border: "1px solid #2d3a6b",
        borderRadius: "6px",
        padding: "8px 12px",
        color: "#ffffff",
        fontSize: "13px",
        outline: "none",
    };

    return (
        <div
            className="rounded-lg p-5 border"
            style={{ backgroundColor: "#1a2448", borderColor: "#2d3a6b" }}
        >
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#8892b0" }}>
                Add New Task
            </h2>

            {/* title field */}
            <div className="mb-4">
                <label className="block text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: "#8892b0" }}>
                    Task Title
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter task title..."
                    style={inputStyle}
                />
                {errors.title && (
                    <p className="text-xs mt-1" style={{ color: "#ff6b6b" }}>{errors.title}</p>
                )}
            </div>

            {/* priority field */}
            <div className="mb-5">
                <label className="block text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: "#8892b0" }}>
                    Priority
                </label>
                <select
                    value={priority}
                    onChange={handlePriorityChange}
                    style={inputStyle}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            {/* submit button */}
            <button
                onClick={handleSubmit}
                className="w-full font-bold text-sm rounded py-2 cursor-pointer"
                style={{ backgroundColor: "#4f6ef7", color: "#ffffff", border: "none" }}
            >
                Add Task
            </button>
        </div>
    );
}

export default AddTaskForm;