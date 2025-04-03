const Task = ({task, onDelete}) => {
  return <li>
    <span>{task.text}</span>
    <button onClick={onDelete}>Remover</button>
  </li>
}

export default Task
