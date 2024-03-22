import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";

// component exporting
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";
import Logout from "./Pages/Logout";
import Adminlayout from "./Components/Layouts/Admin-layout";
import Admincontacts from "./Pages/admincontacts";
import Adminusers from "./Pages/adminusers";
import Adminupdate from "./Pages/Adminupdate";
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<Error />} />
                <Route path="/admin" element={<Adminlayout />}>
                    <Route path="users" element={< Adminusers/>} />
                    <Route path="contacts" element={<Admincontacts />} />
                    <Route path="users/:id/edit"  element={<Adminupdate />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
