const ToDoInfo = (props) => {
  const {
    total,
    done,
    onDeleteButtonClick,
  } = props
  
  const hasTask = total > 0

  return (
        <div className="todo__info">
        <div className="todo__total-tasks">
          Выполнено задач {done} из {total}
        </div>
        {hasTask && (
          <button 
          className="todo__delete-all-button" 
          type="button"
          onClick={onDeleteButtonClick}
          >
          Удалить все
        </button>
        )}
      </div>
    )
}

export default ToDoInfo;