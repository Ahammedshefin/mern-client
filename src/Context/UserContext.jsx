import { createContext, useEffect, useState } from "react";

import { server } from "../Constants/constatnts";

export const user_token = createContext();

export const Authprovider = ({ children }) => {
    const [token, settoken] = useState(localStorage.getItem("token"));
    const [user, setuser] = useState();
    const [isloading, setisloading] = useState(true);

    const storetokeninlokalstorage = (token) => {
        settoken(token);
        return localStorage.setItem("token", token);
    };
    const Logoutuser = () => {
        settoken("");

        return localStorage.removeItem("token");
    };

    let isloggedin = !!token;
    const jwtauthentication = async () => {
        try {
            setisloading(true);
            const response = await fetch(`${server}/userdata`, {
                method: "GET",
                headers: {
                    token: token,
                },
            });
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setuser(data.userdata);
                setisloading(false);
                // console.log();
            }
        } catch (error) {
            setisloading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        jwtauthentication();
    }, []);

    return (
        <user_token.Provider
            value={{
                storetokeninlokalstorage,
                Logoutuser,
                isloggedin,
                jwtauthentication,
                user,
                token,
                isloading,
            }}
        >
            {children}
        </user_token.Provider>
    );
};
