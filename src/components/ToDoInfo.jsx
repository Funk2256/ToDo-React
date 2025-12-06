const ToDoInfo = (props) => {
  const {
    total,
    done,
  } = props
  
  const hasTask = total > 0
  return (
        <div className="todo__info">
        <div className="todo__total-tasks">
          Выполнено задач {done} из {total}
        </div>
        {hasTask && (
          <button className="todo__delete-all-button" type="button">
          Удалить все
        </button>
        )}
      </div>
    )
}

export default ToDoInfo;