import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Bus.css"
const Bus = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('/buses',{
        });
        result = await result.json();
        setProducts(result);
    }

  
    function deleteBus(id) {
        axios.delete(`buses/${id}`).then(products());
      }
  

    return (
        <div className="product-list" >
            <button>
            <Link to={"/add-bus"}>Add Bus+</Link>
            </button>
            {/* <button style={{backgroundColor:"black" ,color:"white",  margin:"5px"}} >Add Bus+</button> */}

            <ul>
                {/* <li>S. No.</li> */}
                <li>Image</li>
                <li>Number_Plate</li>
                <li>Fleet_No</li>
                <li>Actions</li>
               
               

            </ul>
            {
                products.length>0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        {/* <li>{index + 1}</li> */}
                         <li><img style ={{ width: "70px",height:" 30px"}}src={item.image} alt={item.number_plate} /> </li>
                        <li>{item.number_plate}</li>
                        <li>{item.fleet_no}</li>
                       
                      
                        <li>
                            <button style={{color:"blue"}} >Edit </button>
                            <button style={{color:"red"}} onClick={() => deleteBus(item.id)}>Delete</button>
                            
                            </li>

                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default Bus;