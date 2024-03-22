import React, { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { user_token } from "../Context/UserContext";
function Navbar() {
    const { isloggedin } = useContext(user_token);

    return (
        <div className="container">
            <Link to="/" className="logo">
                Mern
            </Link>

            <ul>
                <li>
                    <Link className="links" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/service">
                        Services
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/register">
                        Register
                    </Link>
                </li>
                {isloggedin ? (
                    <li>
                        <Link className="links" to="/logout">
                            Logout
                        </Link>
                    </li>
                ) : (
                    <li>
                        <Link className="links" to="/login">
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Navbar;
