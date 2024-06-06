import {Link} from "react-router-dom" 
import { useAuth } from "./security/AuthContext"


export default function HeaderComponent() {
    
    const authContext = useAuth()
    // const authContext = useContext(AuthContext)
    //console.log(authContext.number)                          // the variable name of the state is 'number'

    return (

            <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.todo.com">Memo</a>               {/* this is different link,hence using a href */}
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/prachi">Home</Link></li>                {/* Link are used when we have to navigate inside the single page application */}
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
  
}