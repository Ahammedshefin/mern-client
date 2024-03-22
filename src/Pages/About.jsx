import React, { useContext } from "react";
import { user_token } from "../Context/UserContext";

function About() {

    const { user } = useContext(user_token);
    console.log(user);

    return (
        <>
            <h1>hai { user ? user.username : "User"}</h1>
        </>
    );
}

export default About;
