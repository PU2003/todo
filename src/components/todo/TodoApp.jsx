import React ,{useState} from "react"
import './TodoApp.css'

export default function TodoApp(){

    return(
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent/>
        </div>
    )
}

function LoginComponent(){

    const [username,setUsername] = useState('name')

    const [password,setPassword] = useState('')

    const [showSuccessMessage,setShowSuccessMessage] = useState()

    const [showFailureMessage,setShowFailureMessage] = useState()

    function handleUsernameChange(event){
          //console.log(event.target.value)
          setUsername(event.target.value)               /* inside the (event.target.value) value gets updated each time when i provide an input
                                                            so if we provide these same changes to function,it will set the state. */
    }

    function handlePasswordChange(){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){

        if(username === "prachi" && password === "password"){
              setShowSuccessMessage(true)
              setShowFailureMessage(false)
              console.log(showSuccessMessage)

        }
        else{
            setShowSuccessMessage(false)
            setShowFailureMessage(true)

            console.log(showFailureMessage)
        }
    }

    return(
        <div className="Login">
            {/* <div className="successMessage">Authenticated Successfully.</div> */}
            {/* <div className="errorMessage">Authenticated Failed. Please check your credentials.</div> */}
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>     {/* we are passing the username 
                                                                                                                  as object and assigning 
                                                                                                                as value and also defining onChange 
                                                                                                                because we have to tell 
                                                                                                             what should be done when these fields changes or
                                                                                                             changes should be seen in username field 
                                                                                                              when i'm making the changes.*/}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}