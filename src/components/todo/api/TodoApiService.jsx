import axios from "axios"

const apiClient = axios.create(

    {
        baseURL:"http://localhost:8080"
    }
)

export const retrieveAllTodosForUsername = (username) =>  apiClient.get(`/users/${username}/todos`)
export const deleteTodoForId = (id) =>  apiClient.delete(`/users/todos/${id}`)
export const retrieveTodoApi = (id) =>  apiClient.get(`/users/todos/${id}`)