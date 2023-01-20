import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Route.css"

const RouteList= () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/routes" + id);
    // }
    const LoadEdit = (id) => {
        navigate("/routes/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove the route?')) {
            fetch("routes/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Route Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("/routes").then((res) => {
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
                    <h2>Routes</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/route/new" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Pick-Up</td>
                                <td>Destination</td>
                                <td>Bus No</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Amount</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.from}</td>
                                        <td>{item.to}</td>
                                        <td>{item.busnumber}</td>
                                        <td>{item.date}</td>
                                        <td>{item.time}</td>
                                        <td>{item.cost}</td>
                                        <td><a href="/route/new" onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a href="/routes" onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                          
                                        </td>
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

export default RouteList;