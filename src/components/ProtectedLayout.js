import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../services/useAuth";


const ProtectedLayout = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    //console.log(auth.token)
    if (!auth.token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedLayout;