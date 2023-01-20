import React, { useEffect, useState } from 'react';
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

  
  
    const handleDelete = async (id) => {
        const response = await fetch(`/buses/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      }
      
      const handleEdit = async (id, updatedData) => {
        const response = await fetch(`buses/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData)
        });
        const data = await response.json();
        console.log(data);
      }
      

    return (
        <div className="product-list" >
            <button>
            <Link to={"/bus/new"}>Add Bus+</Link>
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
                            <button style={{color:"blue"}} onClick={() =>handleEdit(item.id, {image: "new image", number_plate: "new number_plate", fleet_no: "new fleet_no"})} >Edit </button>
                            <button style={{color:"red"}} onClick={() =>handleDelete(item.id)}>Delete</button>
                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default Bus;