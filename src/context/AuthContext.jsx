import { createContext, useContext, useState } from "react"

const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})


    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAhthContext = () => {
    return useContext(AuthContext)
}