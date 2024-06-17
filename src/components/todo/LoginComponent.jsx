import React ,{useState} from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"


export default function LoginComponent(){

    const [username,setUsername] = useState('name')

    const [password,setPassword] = useState('')

    const [showFailureMessage,setShowFailureMessage] = useState()

    const navigate = useNavigate();

    const authContext = useAuth()

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

        if(authContext.login(username,password)){

              navigate(`/welcome/${username}`)                           // in order to take variables we use ${} and within ` ` (tick)
              
        }

        else{
            
            setShowFailureMessage(true)
        }
    }

    // function SuccessMessageComponent(){

    //     if(showSuccessMessage){
    //        return <div className="successMessage">Authenticated Successfully.</div>
    //     }
    //     return null
    // }

    // function FailureMessageComponent(){

    //     if(showFailureMessage){
    //        return <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>
    //     }
    //     return null
    // }

    let imageStyle = {
        height: "100vh",
        width: "100vw",
        backgroundImage:
        'url("https://e0.pxfuel.com/wallpapers/801/81/desktop-wallpaper-cute-home-screen-cute-stitch-aesthetic.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        color: "white", 
     };

    return(
        <div class = "image" style = {imageStyle}>
        <div className="Login">

            {/* {showSuccessMessage && <div className="successMessage">Authenticated Successfully.</div>} */}
            {showFailureMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>}

            {/* <div className="successMessage">Authenticated Successfully.</div> */}
            {/* <div className="errorMessage">Authenticated Failed. Please check your credentials.</div> */}

            <div className="LoginForm">
                <div>
                    <h1>Time to login!</h1>
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
        </div>
    )
}