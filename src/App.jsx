import { useEffect, useState } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    //id, title, done
    setTasks([...tasks, { id: Date.now(), text: task, done: false}]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const toggleTaskDone = (taskId) => {
    setTasks(
      tasks.map(
        (task) => task.id === taskId 
        ? {...task, done: !task.done} 
        : task
      )
    )
  }

  return (
    <>
      <h1>Lista de tarefas</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskDone={toggleTaskDone}/>
    </>
  )
}

export default App
