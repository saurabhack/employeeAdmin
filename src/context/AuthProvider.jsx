import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    // setLocalStorage()
    const [userData, setUserData] = useState([]);
    const logout=()=>{
        localStorage.setItem('loggedInUser','')
        window.location.reload()
    }
    

    useEffect(() => {
        const {employees} = getLocalStorage();
        setUserData( employees );
    }, []);
    
    return (
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
