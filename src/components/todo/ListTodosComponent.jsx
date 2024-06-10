import { useEffect } from "react"
import { retrieveAllTodosForUsername } from "./api/TodoApiService"
import { useState } from "react"

export default function ListTodosComponent(){
    
    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay())

    const [todos,setTodos] = useState([])                 // want to change the state of todos as the username changes

    // const todos = [
    //                 //  {id : 1,description: "Learn Aws",done: false,targetDate: targetDate},
    //                 //  {id : 2,description: "Learn Full Stack Development",done: false,targetDate: targetDate},
    //                 //  {id : 3,description: "Learn DevOps",done: false,targetDate: targetDate},
                  
    //               ]


    useEffect( () => refreshTodos(), [] )
                                                                                        // if you want to load the data,as soon as the component is ready
                                                                                       // we don't want any dependency,we only we want to load it at the start
    
    function refreshTodos(){

        retrieveAllTodosForUsername("in28minutes")                            // once we call retrieve all todos for specific username
        
        .then((response) => {                                        // when response come we want to also save this in the state
           // console.log(response)
            setTodos(response.data)
        }) 

        .catch((error) => console.log(error))
    
    }

    return (
        <div className="container">
             <h1>Things You Want To Do!</h1>
             <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                           todos.map(
                               todo => ( 
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>                {/* convert it to string to give the date */}
                                    </tr>
                                )
                            )
                        } 
                    </tbody>
                </table>
             </div>
        </div>
    )
}