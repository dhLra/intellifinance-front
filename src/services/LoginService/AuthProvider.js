import React, { createContext, useEffect, useState } from "react";
import { getUserLocalStorage, LoginRequest, setuserLocalStorage } from "./LoginService";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user)
        }
    }, [])

    async function authenticate(email, pass) {
        const res = await LoginRequest(email, pass);

        const payload = { token: res.id_user, name: res.name, email: res.email, is_frist_login: res.is_frist_login };

        setUser(payload);
        setuserLocalStorage(payload);
    }

    function logout() {
        setUser(null);
        setuserLocalStorage(null);
    }


    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

