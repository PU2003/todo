import { useEffect } from "react"
import { useState } from "react"
import {addNewTodoApi, retrieveAllTodosForUsername} from "./api/TodoApiService"
import { deleteTodoForId } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"
import { error } from "jquery"


export default function ListTodosComponent(){
    
    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay())

    const [todos,setTodos] = useState([])                 // want to change the state of todos as the username changes
    
    const [message,setMessage] = useState(null)

    const navigate = useNavigate()


    // const todos = [
    //                 //  {id : 1,description: "Learn Aws",done: false,targetDate: targetDate},
    //                 //  {id : 2,description: "Learn Full Stack Development",done: false,targetDate: targetDate},
    //                 //  {id : 3,description: "Learn DevOps",done: false,targetDate: targetDate},
                  
    //               ]
    
    const authContext = useAuth()
    const username = authContext.username

    useEffect( () => refreshTodos(), [] )
                                                                                        // if you want to load the data,as soon as the component is ready
                                                                                       // we don't want any dependency,we only we want to load it at the start
    
    function refreshTodos(){

        retrieveAllTodosForUsername(username)                            // once we call retrieve all todos for specific username
        
        .then((response) => {                                        // when response come we want to also save this in the state
           // console.log(response)
            setTodos(response.data)
        }) 

        .catch((error) => console.log(error))
    
    }

    function deleteTodo(id){
        // console.log("delete is clicked from id" + id)                          // now in order to tell which one to delete id shoukd be passed
        deleteTodoForId(id)
        .then(                                                                    // in then we want   1. Display Message
                                                                                   //                  2. Update List 
            () => {
                setMessage(`Delete of todo with id = ${id} successful`)
                refreshTodos()
            }

        )                               
                                                                                
        .catch(() => console.log(error))
    }

    function updateTodo(id){
                                                                                                       // now updating the todo with id
        console.log("update is clicked from "+ id +"button")                                   // here we need to redirect to a specific todo page
        navigate(`/todo/${id}`)                                                                                       // here we cannot directly call the api   
           
          
    }

    function addNewTodo(){
       
        navigate("/todo/-1")
        
    }


    return (
        <div className="container">

             <h1>Things You Want To Do!</h1>
             {message && <div className="alert alert-warning">{message}</div>}
             <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                           todos.map(
                               todo => ( 
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>                {/* convert it to string to give the date */}
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        } 
                    </tbody>
                </table>
             </div>
             <div className="btn btn-info m-5" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}