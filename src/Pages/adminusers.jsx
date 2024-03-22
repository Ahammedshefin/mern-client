import React, { useContext, useEffect, useState } from "react";
import { server } from "../Constants/constatnts";
import { user_token } from "../Context/UserContext";
import { Link } from "react-router-dom";

function adminusers() {
    const { token } = useContext(user_token);
    const [users, setusers] = useState([]);

    const getalluserdata = async () => {
        const data = await fetch(`${server}/admin/users`, {
            method: "GET",
            headers: {
                token: token,
            },
        });

        if (data.ok) {
            const usersdata = await data.json();
            setusers(usersdata.users);
        }
    };

    const deleteuser = async (userid) => {
        console.log(userid);

        const response = await fetch(`${server}/admin/user/delete/${userid}`, {
            method: "DELETE",
            headers: {
                token: token,
            },
        });

        console.log(response);
        if (response.ok) {
            getalluserdata();
        }
    };
    useEffect(() => {
        getalluserdata();
    }, []);

    return (
        <>
            <div className="">
                {users.map((obj, index) => {
                    return (
                        <div className="" key={index}>
                            <h1>username:{obj.username}</h1>
                            <h1>email:{obj.email}</h1>
                            <h1>phone:{obj.phone}</h1>
                            <h1>
                                <Link to={`/admin/users/${obj._id}/edit`}>
                                    edit
                                </Link>
                            </h1>
                            <h1>
                                <button
                                    onClick={() => {
                                        deleteuser(obj._id);
                                    }}
                                >
                                    delete
                                </button>
                            </h1>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default adminusers;
