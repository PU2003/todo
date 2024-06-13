import React ,{useState} from "react"
import './TodoApp.css'
import { BrowserRouter,Routes,Route,useNavigate,useParams,Link,Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutComponent from "./LogoutComponent"
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";
import { useAuth } from "./security/AuthContext";
import TodoComponent from "./TodoComponent";

function AuthenticatedRoute({children}){
    
    const authContext = useAuth()

    if(authContext.isAuthenticated)
       return children

    return <Navigate to="/" />
}


export default function TodoApp(){

    return(
        <div className="TodoApp">
          <AuthProvider>
                <BrowserRouter>
                   <HeaderComponent/>                {/* in order to use link inside headerComponent,component should be inside the browserRouter*/}
                    <Routes>
                        <Route path="/" element={ <LoginComponent/> } />
                        <Route path="/login" element={ <LoginComponent/> } />

                        <Route path="/welcome/:username" element={ 
                            <AuthenticatedRoute>
                                 <WelcomeComponent/> 
                            </AuthenticatedRoute>
                        } />

                        <Route path="/todos" element={ 
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                            </AuthenticatedRoute>     
                        } />

                        <Route path="/todo/:id" element={ 
                            <AuthenticatedRoute>
                                <TodoComponent/>
                            </AuthenticatedRoute>     
                        } />

                        <Route path="/logout" element={ 
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>      
                        } />

                        <Route path="*" element={ <ErrorComponent/> } />                {/* when none of upper route match,this will match*/}

                    </Routes>
                </BrowserRouter>
           </AuthProvider>
        </div>
    )
}