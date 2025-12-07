import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const {
    tasks = [],
    filteredTasks,
    onDeleteButtonClick,
    onTaskCompliteChange,
  }  = props

  const hasTask = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if (!hasTask) {
      return <div className="todo__empty-message">Задач пока нет</div>
  }

  if (hasTask && isEmptyFilteredTasks) {
      return <div className="todo__empty-message">Задачи не найдены</div>
  }

    return (
              <ul className="todo__list">
               {(filteredTasks ?? tasks).map((task) => (
                <ToDoItem 
                className='todo__item'
                key={task.id}
                onDeleteButtonClick = {onDeleteButtonClick}
                onTaskCompliteChange = {onTaskCompliteChange}
                {...task}
                />
               ))}
      </ul>
    )
}

export default ToDoList