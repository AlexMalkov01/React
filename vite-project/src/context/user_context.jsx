import { createContext, useState , useEffect} from "react";


 export const UserContext = createContext({ userID:1 }) 
 

 export function UserContextProvider({ children }) {
    const [userID , setUserID] = useState(1) 
  return (
    <UserContext.Provider value={{ userID , setUserID}}> 
    {children}
    </UserContext.Provider> 
  )
 } 