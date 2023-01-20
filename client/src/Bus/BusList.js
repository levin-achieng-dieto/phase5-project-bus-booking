import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Bus.css"

const BusList= () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/bus" + id);
    // }
    const LoadEdit = (id) => {
        navigate("/bus/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove this Bus?')) {
            fetch("buses/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Bus Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("/buses").then((res) => {
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
                    <h2>Buses</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/bus/new" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>image</td>
                                <td>Bus No</td>
                                <td>Fleet No</td>
                                <td>Actions</td>
                              
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{ <img style ={{ width: "70px",height:" 30px"}} src={item.image} alt={item.number_plate} />}</td>
                                        <td>{item.number_plate}</td>
                                        <td>{item.fleet_no}</td>
                                      
                                        <td><a href="/bus/edit" onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a href="/bus" onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                          
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

export default BusList;