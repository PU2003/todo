import React ,{useState} from "react"
import './TodoApp.css'
import { BrowserRouter,Routes,Route,useNavigate,useParams,Link } from "react-router-dom"

export default function TodoApp(){

    return(
        <div className="TodoApp">

            <HeaderComponent/>

            <BrowserRouter>
                 <Routes>
                      <Route path="/" element={ <LoginComponent/> } />
                      <Route path="/login" element={ <LoginComponent/> } />
                      <Route path="/welcome/:username" element={ <WelcomeComponent/> } />
                      <Route path="/todos" element={ <ListTodosComponent/> } />
                      <Route path="/logout" element={ <LogoutComponent/> } />


                      <Route path="*" element={ <ErrorComponent/> } />               {/* when none of upper route match,this will match*/}

                 </Routes>
            
            </BrowserRouter>

            <FooterComponent/>
           
        </div>
    )
}

function LoginComponent(){

    const [username,setUsername] = useState('name')

    const [password,setPassword] = useState('')

    const [showSuccessMessage,setShowSuccessMessage] = useState()

    const [showFailureMessage,setShowFailureMessage] = useState()

    const navigate = useNavigate();

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
              navigate(`/welcome/${username}`)                           // in order to take variables we use ${} and within ` ` (tick)
        }

        else{
            setShowSuccessMessage(false)
            setShowFailureMessage(true)

            console.log(showFailureMessage)
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

    return(
        <div className="Login">

            {showSuccessMessage && <div className="successMessage">Authenticated Successfully.</div>}
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
    )
}


function WelcomeComponent() {

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

function ErrorComponent() {
   
    return (
        <div className="errorComponent">
             <h1>We are working very hard!</h1>
             <div>
                Apologies for 404.Reach out to our team at ABC.
             </div>
        </div>
    )
  
}

function HeaderComponent() {
   
    return (
        <div className="headerComponent">
             <div>
                  Header <hr  color="red" />
             </div>
        </div>
    )
  
}

function FooterComponent() {
   
    return (
        <div className="footerComponent">
             <div>
                   <hr color="red" /> Footer
             </div>
        </div>
    )
  
}

function LogoutComponent() {
   
    return (
        <div className="logoutComponent">
             <h1>You are logged out!</h1>
             <div>
                Thank you for using our app. Come back soon.
             </div>
        </div>
    )
  
}

function ListTodosComponent(){
    
    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay())

    const todos = [
                     {id : 1,description: "Learn Aws",done: false,targetDate: targetDate},
                     {id : 2,description: "Learn Full Stack Development",done: false,targetDate: targetDate},
                     {id : 3,description: "Learn DevOps",done: false,targetDate: targetDate},
                  
                  ]

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
                                        <td>{todo.targetDate.toDateString()}</td>
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
