import React, { useContext } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { user_token } from "../../Context/UserContext";

function Adminlayout() {
    const { user } = useContext(user_token);
    const { isloading } = useContext(user_token);

    if(isloading){
        return <h1>Loading .....</h1>
    }

    if (!user.isadmin) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin">
                                    {" "}
                                    <FaHome /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts">
                                    <IoIosCall />
                                    contacts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/services">services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/users">
                                    <FaUser />
                                    users
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Adminlayout;
