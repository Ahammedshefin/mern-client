import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { user_token } from "../Context/UserContext";
import { server } from "../Constants/constatnts";
import { toast } from "react-toastify";
function Adminupdate() {
    const [data, setdata] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const handleinput = (name, value) => {
        // console.log(name,value);
        setdata({ ...data, [name]: value });
    };

    const { token } = useContext(user_token);

    const params = useParams();
    const getuserdata = async () => {
        try {
            const userdetails = await fetch(
                `${server}/admin/users/${params.id}`,
                {
                    method: "GET",
                    headers: {
                        token: token,
                    },
                }
            );
            const dataafterconverted = await userdetails.json();
            setdata({
                username: dataafterconverted.userdata.username,
                email: dataafterconverted.userdata.email,
                phone: dataafterconverted.userdata.phone,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getuserdata();
    }, []);

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${server}/admin/users/update/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        token: token,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                toast.success("updated sucessfully");
            } else {
                toast.error("updated unsucessfully");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="">
                <form onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            id="username"
                            required
                            autoComplete="off"
                            value={data.username}
                            onChange={(e) => {
                                handleinput(e.target.name, e.target.value);
                            }}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="email"
                            required
                            autoComplete="off"
                            value={data.email}
                            onChange={(e) => {
                                handleinput(e.target.name, e.target.value);
                            }}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="phone">phone</label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="phone"
                            id="phone"
                            required
                            autoComplete="off"
                            value={data.phone}
                            onChange={(e) => {
                                handleinput(e.target.name, e.target.value);
                            }}
                        />
                    </div>
                    <br />
                    <button type="submit"> EDIT NOW</button>
                </form>
            </div>
        </>
    );
}

export default Adminupdate;
