import {apiKey, token} from "./apiSettings";
import axios from "axios";

const settings = {
  // withCredentials: true, // авторизация с помощью куки
  headers: {
    Authorization: `Bearer ${token}`, // авторизация с помощью токена
    'api-key': apiKey
  }
}

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  ...settings
})

export type TodolistsType = {
  id: string
  title: string
  addedDate: string
  order: number
}

export type TaskResponseType<D> = {
  items: D
  totalCount: number
  error: string
}

export type TaskType = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order:number
  addedDate: string
}

export const todolistsAPI = {
  getTodolist() {
    return instance.get<TodolistsType[]>('todo-lists')
  },
  createTodolist(title: string) {
    return instance.post('todo-lists',{title})
  },
  deleteTodolist(id: string) {
    return instance.delete(`todo-lists/${id}`)
  },
  getTasks(todolistId: string) {
    return instance.get<TaskResponseType<TaskType[]>>(`todo-lists/${todolistId}/tasks`)
  },
  createTasks(todolistId: string) {
    return instance.post(`todo-lists/${todolistId}/tasks`,{title: '123'})
  }
}