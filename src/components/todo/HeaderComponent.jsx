import {Link} from "react-router-dom" 
import { useAuth } from "./security/AuthContext"


export default function HeaderComponent() {
    
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    // const authContext = useContext(AuthContext)
    console.log(authContext.number,authContext.isAuthenticated,authContext.setAuthenticated)                          // the variable name of the state is 'number'
    

    function logout(){
        authContext.logout()
    }
    

    return (

            <header className="border-bottom border-dark border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.todo.com">Memo</a>               {/* this is different link,hence using a href */}
                        <div className="collapse navbar-collapse">

                            <ul className="navbar-nav">

                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/welcome/prachi">Home</Link>}                    {/* Link are used when we have to navigate inside the single page application */}
                                </li> 

                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                                </li>

                            </ul>
                        </div>

                        <ul className="navbar-nav">

                            <li className="nav-item fs-5">
                                {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                            </li>

                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                            </li>

                        </ul>

                    </nav>
                </div>
            </div>
        </header>
    )
  
}