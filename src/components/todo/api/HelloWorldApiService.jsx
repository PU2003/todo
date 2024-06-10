import axios from "axios"

const apiClient = axios.create(

    {
        baseURL:"http://localhost:8080"
    }
)

export const retrieveHelloWorldBean = (username) =>  apiClient.get(`/hello-world/path-variable/${username}`)
   

// also be written in the below way
//   export const retrieveHelloWorldBean = () => axios.get("http://localhost:8080/hello-world-bean")