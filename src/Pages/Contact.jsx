import React, { useContext, useState } from "react";
import { user_token } from "../Context/UserContext";
import { server } from "../Constants/constatnts";
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();
    const [contact, setcontact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [userdata, setuserdata] = useState(true);
    const { user } = useContext(user_token);
    // console.log(user);
    const handleinput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setcontact({ ...contact, [name]: value });
    };
    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${server}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setcontact({
                    username: "",
                    email: "",
                    message: "",
                });
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (user && userdata) {
        setcontact({
            username: user.username,
            email: user.email,
            message: "",
        });

        setuserdata(false);
    }
    return (
        <>
            <section>
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>
                <div className="contaienr grid grid-two-cols ">
                    <div className="contact-image">
                        <img
                            src="/images/support.png"
                            alt=""
                            width="400"
                            height="500"
                        />
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handlesubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <br />
                                <input
                                    type="text"
                                    name="username"
                                    required
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleinput}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleinput}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <br />
                                <textarea
                                    name="message"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    value={contact.message}
                                    onChange={handleinput}
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <section style={{ marginTop: "5rem" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.0747303022463!2d75.27429837404077!3d12.377926427618075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4618f66e2249f%3A0x6aa2bcabf3809b22!2sKallanchira%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1710679837580!5m2!1sen!2sin"
                        width="1680"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
            </section>
        </>
    );
}

export default Contact;
