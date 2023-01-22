import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import "./BusesList.css"
// import "./BusesList1.css"

const BusList= () => {
    const [empdata, empdatachange] = useState(null);
    // const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

//   const filtereddata =  empdata .filter((val) => {
//     if(searchTerm === ""){
//       return val;
//     }else if(val.to.toLowerCase().includes(searchTerm.toLowerCase())){
//       return val;
//     }
//   })
 




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
                    <h2 style={{color:"black"}}>Available Buses</h2>
                </div>
                <input id="searchInput" type="text" 
                placeholder="Search your destination..." 
                onChange={(e)=>{setSearchTerm(e.target.value)}}
                 />
         
          
         

{/* 
          
              <div className="template_Container">
          {
            empdata 
              .filter((val) => {
                if(searchTerm === ""){
                  return val;
                }else if(val.to.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div  key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.busnumber}</h3>
                      <h3> Destination:{val.to}</h3>
                      <p className="price">{val.cost}</p>
                  </div> 
                )
              })
          }
        </div> */}
                <div className="card-body">
                   
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Bus</td>
                                <td>Pick-Up</td>
                                <td>Destination</td>
                                <td>Bus No</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Amount</td>
                                <td>Book</td>
                               
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{ <img style ={{ width: "100px",height:" 70px"}} src={item.image} alt={item.busnumber} />}</td>
                                        <td>{item.from}</td>
                                        <td>{item.to}</td>
                                        <td>{item.busnumber}</td>
                                        <td>{item.date}</td>
                                        <td>{item.time}</td>
                                        <td>{item.cost}</td>
                                        <td><a href="/bookings" onClick={() => { }} className="btn btn-success">Book Now</a>
                                           
                                          
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