import { apiClient } from "./ApiClient"

export const retrieveAllTodosForUsername = (username) =>  apiClient.get(`/users/${username}/todos`)
export const deleteTodoForId = (id) =>  apiClient.delete(`/users/todos/${id}`)
export const retrieveTodoApi = (id) =>  apiClient.get(`/users/todos/${id}`)
export const updateTodoApi = (id,todo) =>  apiClient.put(`/users/todos/${id}`,todo)                      // todo is the request body,so it will be passed like this
export const createTodoApi = (todo) =>  apiClient.post(`/users/todos`,todo)