# Task Flow Manager

A sleek, high-fidelity Kanban board built for people who want their task manager to feel as polished as the work they do. Designed with a premium dark-space aesthetic and smooth workflow transitions, Task Flow Manager helps you organize tasks visually without overwhelming the screen.

---

## 🛠️ Project Accomplishments

- Created the React project using Vite.
- Installed all required project dependencies using npm.
- Installed and configured Tailwind CSS for frontend styling.
- Created the project folder structure and React components.
- Created an array of task objects to store task details (title, priority, completed status).
- Developed a reusable TaskItem component using React functional components.
- Used props to pass task data between components.
- Rendered tasks dynamically using the JavaScript map() function.
- Designed a responsive Kanban board column layout using Tailwind CSS.
- Added custom styling using Tailwind CSS and inline styles.
- Rendered the application using main.jsx and createRoot().
- Implemented responsive UI for different screen sizes.
- Displayed dynamic task details (title, priority, completed status, dynamic column sub-labels) in task cards.
- Used JSX syntax for designing UI components.
- Organized the code using reusable and modular React components (TaskManager, TaskList, TaskItem, AddTaskForm).

---

## 📚 Core Concepts & Implementation

### 1. map()
- **Definition**: `map()` is a JavaScript array method used to iterate through arrays and render elements dynamically.
- **Purpose**: Used to display multiple task cards and chunked column streams dynamically from the tasks list array.

### 2. Props
- **Definition**: Props are used to pass data and callback functions from parent components to child components.
- **Purpose**: Used to pass task details, toggle statuses, and delete handlers from `TaskManager` down to `TaskList` and `TaskItem`.

### 3. Functional Components
- **Definition**: Functional components are JavaScript functions that return JSX.
- **Purpose**: Used for creating modular and reusable UI components such as `AddTaskForm`, `TaskList`, and `TaskItem`.

### 4. JSX
- **Definition**: JSX is JavaScript XML syntax used to write HTML inside JavaScript.
- **Purpose**: Used to design the interactive React user interface components for the task cards and Kanban grid.

### 5. Tailwind CSS
- **Definition**: Tailwind CSS is a utility-first CSS framework.
- **Purpose**: Used for modern, responsive frontend styling, grid alignment, layout spacings, and micro-interactions.

### 6. Dynamic Rendering
- **Definition**: Dynamic rendering means displaying data dynamically from arrays or state.
- **Purpose**: Used to render task items dynamically in real-time as tasks are added, completed, or deleted.

### 7. Responsive Column Layout
- **Definition**: Responsive layouts automatically adjust the UI based on screen size.
- **Purpose**: Used to make the horizontal Kanban board layout mobile-friendly and beautiful across all viewports.
