import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

// 1. Create a context.

  export const AuthContext = createContext()

  export const useAuth = () => useContext(AuthContext)              // useContext is a hook and also variable can't encapsulate logic ,hence useAuth is a function       



// 2. Share the created context with other components.

  export default function AuthProvider({children}){                           // this is the funtion which will provide context to other components
                                                                            // children variable here will take all the components as children which are wrapped within the <AuthProvider> 
    // 3. Put some state in the context.
        const [number,setNumber] = useState(0);

        const [isAuthenticated,setAuthenticated] = useState(false)


        function login(username,password){
            
          if(username === "prachi" && password === "p"){

              setAuthenticated(true)
              return true;                         
            
          }

          else{
              setAuthenticated(false)
              return false;
          }

        }

        function logout(){
              setAuthenticated(false)
        }

       return(
            <AuthContext.Provider value={{number,isAuthenticated,login,logout}}>
                {children}
            </AuthContext.Provider>
       )
   } 