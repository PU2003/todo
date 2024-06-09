import axios from "axios"

export const retrieveHelloWorldBean = (username) =>   axios.get(`http://localhost:8080//hello-world/path-variable/${username}`)
   

// also be written in the below way
//   export const retrieveHelloWorldBean = () => axios.get("http://localhost:8080/hello-world-bean")