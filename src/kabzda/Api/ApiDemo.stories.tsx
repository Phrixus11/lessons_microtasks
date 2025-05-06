import {useEffect, useState} from "react";
import {type TaskType, todolistsAPI, type TodolistsType} from "./todolists-api";

const meta = {
  title: "ApiDemo",
}
export default meta


export const ApiTodolistsDemo = () => {
  const [todolists, setTodolists] = useState<TodolistsType[]>([])
  const [title, setTitle] = useState<string>('')
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    todolistsAPI.getTodolist()
        .then((res) => {
          console.log('todolists', res.data)
          setTodolists(res.data)
        })
        .catch((rej) => {
          setTodolists(rej.message)
        })

  }, [update]);

  const addTodolist = () => {
    todolistsAPI.createTodolist(title)
        .then(() => {
          setUpdate(!update)
        })
        .catch((rej) => {
          setTodolists(rej.message)
        })
  }

  const deleteTodolist = (id: string) => {
    todolistsAPI.deleteTodolist(id)
        .then(() => {
          setUpdate(!update)
        })
        .catch((rej) => {
          setTodolists(rej.message)
        })
  }

  return (
      <>
        <label>Add todolist
          <input value={title} onChange={(e) => {
            setTitle(e.currentTarget.value)
          }} type="text"/>
        </label>
        <button onClick={addTodolist}>ADD</button>
        <hr/>
        <h3>All todolists added</h3>
        <div>
          {Array.isArray(todolists) ? todolists.map(item => {

            return (
                <div key={item.id}>
                  <span>ID: {item.id} </span>
                  <span>TITLE: {item.title} </span>
                  <button onClick={() => deleteTodolist(item.id)}>Delete</button>
                  <br/>
                  <Taskslist todolistID={item.id}/>
                  <hr/>
                </div>
            )
          }) : []}
        </div>
      </>
  )
}


const Taskslist = ({todolistID}: { todolistID: string }) => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    todolistsAPI.getTasks(todolistID)
        .then((res) => {
          console.log('tasks', res.data.items)
          setTasks(res.data.items)
        })
  }, [update]);

  const createTask = () => {
    todolistsAPI.createTasks(todolistID)
        .then(() => {
          setUpdate(!update)
        })
  }

  return (
      <>
        <br/>
        <button onClick={createTask}>Create Task</button>
        {tasks.map((task, i) => {
          return (
              <div key={i}>
                <span>Task Title: {task.title}  </span>
              </div>
          )
        })}

      </>
  )
}