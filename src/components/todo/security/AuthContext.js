import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import React from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

// 1. Create a context.

  export const AuthContext = createContext()

  export const useAuth = () => useContext(AuthContext)              // useContext is a hook and also variable can't encapsulate logic ,hence useAuth is a function       



// 2. Share the created context with other components.

  export default function AuthProvider({children}){                           // this is the funtion which will provide context to other components
                                                                            // children variable here will take all the components as children which are wrapped within the <AuthProvider> 
    // 3. Put some state in the context.
        const [number,setNumber] = useState(0);

        const [isAuthenticated,setAuthenticated] = useState(false)
        
        const [username,setUsername] = useState(null)
        
        const[token,setToken] = useState(null)

        async function login(username,password){
            

          try {
              
              console.log("going to fetch token")

              const response = await executeJwtAuthenticationService(username,password)
              
              //console.log("Checking the response")

              if(response.status == 200){
                    
                    const jwtToken = "Bearer " + response.data.token

                    setAuthenticated(true)
                    setUsername(username)
                    setToken(jwtToken)
                  
                    //console.log("the jwt tokenm is set")
                    apiClient.interceptors.request.use(
                        (config) => {
                            console.log("intercepting and adding a token")
                            config.headers.Authorization = jwtToken
                            return config
                        }
                    )

                    return true

              }

              else{
                logout()
                return false
              }
          }
          catch(error){
             logout()
             return false
          }

          // if(username === "prachi" && password === "p"){

          //     setAuthenticated(true)
          //     setUsername(username)
          //     return true;                         
            
          // }


        }

        function logout(){
              setAuthenticated(false)
              setToken(null)
              setUsername(null)
        }

       return(
            <AuthContext.Provider value={{number,isAuthenticated,login,logout,username}}>
                {children}
            </AuthContext.Provider>
       )
   } 