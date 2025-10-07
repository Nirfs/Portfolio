import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null)

export function AuthProvider ({children}){
    const [token, setToken] = useState(localStorage.getItem("token"))

    const login = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logout =() => {
        setToken(null)
        localStorage.removeItem('token')
    }

    return(
        <AuthContext.Provider value={{token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}