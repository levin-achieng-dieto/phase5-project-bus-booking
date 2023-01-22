import { useEffect, useState } from "react";
import "./Bus.css"

const Bookings= () => {
    const [empdata, empdatachange] = useState(null);
 




    useEffect(() => {
        fetch("/bookings").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    console.log(empdata)
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Bookings</h2>
                </div>
                <div className="card-body">
                  
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                               
                                <td>Name</td>
                                <td>Phone Number</td>
                                <td>Bus No</td>
                                <td>Pick-Up</td>
                                <td>Destination</td>
                                <td>Seat</td>
                                <td>Amount</td>
                                <td>No of Passagers</td>
                              
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.phonenumber}</td>
                                        <td>{item.busnumber}</td>
                                        <td>{item.from}</td>
                                        <td>{item.to}</td>
                                        <td>{item.seat}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.no_of_passangers}</td>
                                    
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

export default Bookings;