import React ,{useState} from "react"
import './TodoApp.css'
import { BrowserRouter,Routes,Route,useNavigate,useParams,Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutComponent from "./LogoutComponent"
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";


export default function TodoApp(){

    return(
        <div className="TodoApp">
          <AuthProvider>
                <BrowserRouter>
                   <HeaderComponent/>                {/* in order to use link inside headerComponent,component should be inside the browserRouter*/}
                    <Routes>
                        <Route path="/" element={ <LoginComponent/> } />
                        <Route path="/login" element={ <LoginComponent/> } />
                        <Route path="/welcome/:username" element={ <WelcomeComponent/> } />
                        <Route path="/todos" element={ <ListTodosComponent/> } />
                        <Route path="/logout" element={ <LogoutComponent/> } />


                        <Route path="*" element={ <ErrorComponent/> } />               {/* when none of upper route match,this will match*/}

                    </Routes>
                
                </BrowserRouter>
           
           </AuthProvider>
           
        </div>
    )
}