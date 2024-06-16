import { apiClient } from "./ApiClient"

// export const executeBasicAuthenticationService = (token) => apiClient.get(`/basicauth`                          //bacause we are taking a variable token
//    , { 
//          headers: {
//             Authorization : token
//          } 
//    }
// )

export const executeJwtAuthenticationService 
= (username,password) => 
   apiClient.post(`/authenticate`, {username,password} )