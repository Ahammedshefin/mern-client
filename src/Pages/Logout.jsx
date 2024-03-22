import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { user_token } from "../Context/UserContext";
function Logout() {
    const { Logoutuser } = useContext(user_token);

    useEffect(() => {
        Logoutuser();
    }, [Logoutuser]);

    return <Navigate to="/login" />;
}

export default Logout;
