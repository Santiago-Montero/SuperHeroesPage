import React,{ useState } from "react";

const  UserContext = React.createContext();


export const UserContextProvider = ({ children }) =>{
    const [token , setToken] = useState('')
    
    const singIn = (t) =>{
        setToken(t)
    }
    const leave = () =>{
        localStorage.removeItem('token')
        setToken('')
        
    }

    return(
        <UserContext.Provider 
        value={{
            token,
            singIn,
            leave
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext
