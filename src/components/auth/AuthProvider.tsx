import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthContextType } from "../../models/AuthContextType";

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children} : {children: ReactNode}) =>{
     const [isAuthenticated, setIsAuthenticated] = useState(false)
    //  const [isAuthenticated, setIsAuthenticated] = useState(true)

    //  Get token from localstorage

    useEffect(()=>{
        const token = localStorage.getItem("ecoCheckCmjd-2026")
        if(token){
            setIsAuthenticated(!!token)
        }
    },[])

    const login = (token: string) =>{
        localStorage.setItem("ecoCheckCmjd-2026",token)
        setIsAuthenticated(true)
    }
    const logout = () => {
        localStorage.removeItem("ecoCheckCmjd-2026")
        setIsAuthenticated(false)

    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("Should use useAuth within the AuthProvider")
    }
    return context
}