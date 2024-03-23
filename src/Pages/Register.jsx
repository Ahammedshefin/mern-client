import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { server } from "../Constants/constatnts";

function Register() {
    const navigate = useNavigate();
    const [user, setuser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
    const handleinput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setuser({ ...user, [name]: value });
    };
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${server}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            setuser({ username: "", email: "", phone: "", password: "" });
            navigate("/login");
        }else{
            console.log(response);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img
                                    src="/images/register.png"
                                    alt=""
                                    width="500"
                                    height="500"
                                />
                            </div>
                            <div className="registeration-form">
                                <div className="registration-form">
                                    Registration Form
                                </div>
                                <br />
                                <form onSubmit={handlesubmit}>
                                    <div>
                                        <label htmlFor="username">
                                            username
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handleinput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleinput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="phone"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleinput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">
                                            password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleinput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit"> Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Register;
