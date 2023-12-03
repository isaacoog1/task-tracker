import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Food shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length === 0 ? <h2>No tasks to do.</h2> : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;
