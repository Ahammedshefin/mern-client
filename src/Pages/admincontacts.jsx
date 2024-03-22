import React, { useEffect, useState } from "react";
import { server } from "../Constants/constatnts";
import { useContext } from "react";
import { user_token } from "../Context/UserContext";
import { toast } from "react-toastify";
function admincontacts() {
    const { token } = useContext(user_token);
    const [contactdatas, setcontactdatas] = useState([]);

    const getcontactdata = async () => {
        try {
            const contactdata = await fetch(`${server}/admin/contacts`, {
                method: "GET",
                headers: {
                    token: token,
                },
            });
            // console.log(contactdata);
            if (contactdata.ok) {
                const data = await contactdata.json();
                // console.log();
                setcontactdatas(data.contactdetails);
            } else {
                console.log("failed getting contact data");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const deletecontact = async (id) => {
        try {
            const response = await fetch(`${server}/admin/contact/delete/${id}`, {
                method: "DELETE",
                headers: {
                    token: token,
                },
            });

            if (response.ok) {
                const dataafterdelete = response.json();
                console.log(dataafterdelete);
                toast.success("delete successfully");
                getcontactdata();
            } else {
                toast.error("delete failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getcontactdata();
    }, []);

    return (
        <>
            <div className="container">
                <div className="datas">
                    <div className="data">
                        <table width="1000" style={{ fontSize: "20px" }}>
                            <thead>
                                <tr>
                                    <td>name</td>
                                    <td>email</td>
                                    <td>message</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {contactdatas.map((obj, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{obj.username}</td>
                                            <td>{obj.email}</td>
                                            <td>{obj.message}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        deletecontact(obj._id);
                                                    }}
                                                >
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default admincontacts;
