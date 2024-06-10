import {useParams,Link } from "react-router-dom"
import { useState } from "react"
import { retrieveHelloWorldBean } from "./api/HelloWorldApiService"

export default function WelcomeComponent() {

    const {username} = useParams()                       // the params are the object,so we are directly taking value by deconstructing the 
    //console.log(username)                              // object and whatever is matching for username,the value will automatically assigned
                                                      // to username variable               
    
    const [message,setMessage] = useState(null)


    function callHelloWorldRestApi(){

        // axios.get("http://localhost:8080/hello-world")                    // axios.get because we are sending the get request
        // .then ((response) => successfulResponse(response))                  // the callabck method will be called when we get a successful response
        //                                                                 // giving parameter response in arror function and invoking success function
        // .catch((error) => errorResponse(error))
        // .finally(() => console.log("cleanup"))


        retrieveHelloWorldBean("prachi")
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log("cleanup"))

    }          

     
    function successfulResponse(response){
        console.log(response)
        //setMessage(response.data)
        //setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className="welcomeComponent">
            <h1>Welcome to our website {username}!</h1>
            <div>
                Manage your todos - <Link to ="/todos">Go Here</Link>
            </div>

            <div> 
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                Call Hello World </button>
            </div>

            <div className="text-info">{message}</div>

    

        </div>
    )
   
 }