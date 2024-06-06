import {useParams,Link } from "react-router-dom"

export default function WelcomeComponent() {

    const {username} = useParams()                       // the params are the object,so we are directly taking value by deconstructing the 
    console.log(username)                              // object and whatever is matching for username,the value will automatically assigned
                                                      // to username variable               
 
     return (
         <div className="welcomeComponent">
             <h1>Welcome to our website {username}!</h1>
             <div>
                 Manage your todos - <Link to ="/todos">Go Here</Link>
             </div>
         </div>
     )
   
 }