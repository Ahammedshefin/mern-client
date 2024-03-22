import React, { useContext, useState } from "react";

import { server } from "../Constants/constatnts";
import { useNavigate } from "react-router-dom";
import { user_token } from "../Context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const { storetokeninlokalstorage } = useContext(user_token);

    const navigate = useNavigate();
    const [user, setuser] = useState({
        email: "",
        password: "",
    });
    const handleinput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setuser({ ...user, [name]: value });
    };
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${server}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const data = await response.json();

            storetokeninlokalstorage(data.token);

            setuser({ email: "", password: "" });
            toast.success("You are logined successfully");
            // navigate("/");
        } else {
            toast.error("Failed login");
        }
    };
    return (
        <div className="container">
            <div className="login-image">
                <img src="/images/login.png" alt="" width="500" height="500" />
            </div>
            <div className="login-form">
                <h1 style={{ marginBottom: "2rem" }}>Login Form</h1>
                <form onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Email"
                            id="email"
                            autoComplete="off"
                            value={user.email}
                            onChange={handleinput}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            required
                            name="password"
                            placeholder="password"
                            id="password"
                            autoComplete="off"
                            value={user.password}
                            onChange={handleinput}
                        />
                    </div>
                    <button type="submit">Login now</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
