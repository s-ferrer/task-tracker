import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "Feb 5th 2:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Study React",
      day: "Feb 6th July 3:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctor appointment",
      day: "Feb 5th July 4:30",
      reminder: false,
    },
  ]);
  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
