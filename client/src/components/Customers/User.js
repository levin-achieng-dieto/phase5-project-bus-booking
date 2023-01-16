import axios from "axios";
import "./User.css"
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  
  useEffect(() => {
    axios.get("/clients").then((res) => {
      setUser(res.data);
    });
  }, []);

  
  function deleteUser(id) {
    axios.delete(`clients/${id}`).then(user());
  }

  console.log(user);
  return (
    
      <div className="product-item">
        <h3>Customers List</h3>

        <button style={{backgroundColor:"white",color:"green", margin:"10px"}}>
            <Link to={"/add-customer"}>Add Customer+</Link>
            </button>
        <Link to={`/`} >Home </Link>
          
            <ul >
              <li>.#.</li>
              <li>Name</li>
              <li>Email</li>
              <li>Phone Number</li>
              <li>Actions</li>
            </ul>
  
            {
            user.length>0 ? user.map((item, index) =>
            <ul key={item._id}>
              <li>{index + 1}</li>
              <li>{item.username}</li>
              <li>{item.email} </li>
              <li>{item.phone_number}</li>
              <li>
                 <button style={{color:"blue"}}>Edit </button>
                 <button style={{color:"red"}} onClick = {() =>deleteUser(item.id)}>Delete</button>
                </li>
         </ul>
                )
                :<h1>No Result Found</h1>
            }
     
      </div>
    
  );
}

export default Users;