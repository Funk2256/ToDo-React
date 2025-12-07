import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const {
    tasks = [],
    onDeleteButtonClick,
    onTaskCompliteChange,
  }  = props
  const hasTask = true;
    if (!hasTask) {
        return <div className="todo__empty-message"></div>
    }

    return (
              <ul className="todo__list">
               {tasks.map((task) => (
                <ToDoItem 
                className='todo__item'
                key={task.id}
                onDeleteButtonClick = {onDeleteButtonClick}
                onTaskCompliteChange = {onTaskCompliteChange}
                id={task.id}
                title={task.title}
                isDone={task.isDone}
                />
               ))}
      </ul>
    )
}

export default ToDoList