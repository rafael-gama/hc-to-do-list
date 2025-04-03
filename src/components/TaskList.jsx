import Task from './Task'

const TaskList = ({tasks, onDeleteTask}) => {
  return <ul>
    {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)}/>
    ))}
  </ul>
}

export default TaskList
