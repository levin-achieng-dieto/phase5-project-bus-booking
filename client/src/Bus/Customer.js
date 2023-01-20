import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Bus.css"

const Customer= () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/bus" + id);
    // }
    // const LoadEdit = (id) => {
    //     navigate("/bus/edit/" + id);
    // }
    // const Removefunction = (id) => {
    //     if (window.confirm('Do you want to remove this Bus?')) {
    //         fetch("buses/" + id, {
    //             method: "DELETE"
    //         }).then((res) => {
    //             alert('Bus Removed successfully.')
    //             window.location.reload();
    //         }).catch((err) => {
    //             console.log(err.message)
    //         })
    //     }
    // }




    useEffect(() => {
        fetch("/clients").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Customers</h2>
                </div>
                <div className="card-body">
                  
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Adress</td>
                                <td>Phone Number</td>
                              
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phone_number}</td>
                                    
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Customer;