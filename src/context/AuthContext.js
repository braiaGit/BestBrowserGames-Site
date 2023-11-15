import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
export const AuthContext = createContext()

function AuthProvider(props){
    const [session, setSession] = useLocalStorage('session',{})
    return(
        <AuthContext.Provider value={{session, setSession}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;