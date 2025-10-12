// Librairies
import { useState, createContext, useContext } from "react"

// Création du contexte Auth
const AuthContext = createContext(null)

/**
 * Fournit le contexte d'authentification à l'application
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"))

  const login = (token) => {
    setToken(token)
    localStorage.setItem("token", token)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Hook pour accéder facilement au contexte d'authentification
 * 
 * @returns {{token: string|null, login: function, logout: function}}
 */
export function useAuth() {
  return useContext(AuthContext)
}
