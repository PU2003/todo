import {useParams,Link,useNavigate} from "react-router-dom"
import { useState } from "react";

export default function WelcomeComponent() {

     const {username} = useParams()                       // the params are the object,so we are directly taking value by deconstructing the 
    //console.log(username)                              // object and whatever is matching for username,the value will automatically assigned
                                                      // to username variable               
    
     const [message,setMessage] = useState(null)

    let imageStyle = {
        height: "100vh",
        width: "100vw",
        backgroundImage:
        'url("https://wallpapers.com/images/hd/pastel-phone-paint-patterns-puko8plk1s1fec9l.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        color: "white", 
     };
    
    const navigate = useNavigate()

    // function callHelloWorldRestApi(){

    //     // axios.get("http://localhost:8080/hello-world")                    // axios.get because we are sending the get request
    //     // .then ((response) => successfulResponse(response))                  // the callabck method will be called when we get a successful response
    //     //                                                                 // giving parameter response in arror function and invoking success function
    //     // .catch((error) => errorResponse(error))
    //     // .finally(() => console.log("cleanup"))


    //     retrieveHelloWorldBean("prachi")
    //     .then((response) => successfulResponse(response))
    //     .catch((error) => errorResponse(error))
    //     .finally(() => console.log("cleanup"))

    // }          

     
    // function successfulResponse(response){
    //     console.log(response)
    //     //setMessage(response.data)
    //     //setMessage(response.data.message)
    // }

    // function errorResponse(error){
    //     console.log(error)
    // }

    function callTodos(){
        navigate(`/todos`)
    }

    return (
        <div class = "image" style = {imageStyle}>
        <div className="welcomeComponent">
            {/* <div class = "image" style = {imageStyle}> */}
                <h1 style={{ color: 'red' }}>Welcome to our website {username}!</h1>
                <div style={{ color: 'purple',fontSize:"30px" }}>
                    Manage your todos  {/*<Link to ="/todos">Go Here</Link>  */}
                </div>

                <div> 
                    <button className="btn btn-success m-5" onClick={callTodos}>
                    Go Here </button>
                </div> 

                <div className="text-info">{message}</div>

            </div>
        </div>
    )
   
 }