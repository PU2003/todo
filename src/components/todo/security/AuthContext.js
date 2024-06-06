import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

// 1. Create a context.

  export const AuthContext = createContext()

  export const useAuth = () => useContext(AuthContext)                     

// 2. Put some state in the state.

// 3. Share the created context with other components.

  export default function AuthProvider({children}){                           // this is the funtion which will provide context to other components
                                                                            // children variable here will take all the components as children which are wrapped within the <AuthProvider> 
    //  Put some state in the state.
        const [number,setNumber] = useState(0);

       return(
            <AuthContext.Provider value={{number}}>
                {children}
            </AuthContext.Provider>
       )
   } 