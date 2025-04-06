import Task from './Task'

const TaskList = ({tasks, onDeleteTask, onToggleTaskDone}) => {

  if(tasks.length === 0){
    return <p>Não há tarefas cadastradas.</p>
  } 

  return <ul>
    {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} onToggleDone={() => onToggleTaskDone(task.id)}/>
    ))}
  </ul>
}

export default TaskList
