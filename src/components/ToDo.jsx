import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import ToDoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"   

const ToDo = () => {
  const tasks = [
    {id: 'task-1', title: 'Купить молоко', isDone: false},
    {id: 'task-2', title: 'Купить колокол', isDone: true},
  ]

  const deleteAllTasks = () => {
    console.log("Удаляем все задачи")
  }

  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с ${taskId}`)
  }

  const toggleTaskComplite = (taskId, isDone) => {
    console.log(`Задача ${taskId} ${isDone ? 'Выполнена' : 'Не выполнена'} `)
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    console.log('Задача добавленв')
  }
    return(
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
      addTask={addTask} 
      /> 
      <SearchTaskForm 
      onSearchInput={filterTasks}
      />
      <ToDoInfo 
      total={tasks.length}
      done={tasks.filter(({isDone}) => isDone).length}
      onDeleteButtonClick = {deleteAllTasks}
      />
       <ToDoList 
       tasks={tasks}
       onDeleteButtonClick = {deleteTask}
       onTaskCompliteChange = {toggleTaskComplite}
       />
      <div className="todo__empty-message"></div>
    </div>
    )
}

export default ToDo