
import React, { useState } from "react";
import { Link } from 'react-router-dom';


function AddBus() {
  const [number_plate, setNumber_plate] = useState("");
  const [fleet_no, setFleet_no] = useState("");
  const [image, setImage] = useState("")


  const handleSubmit = event => {
    event.preventDefault();
    fetch('/buses/addbus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({image, number_plate, fleet_no })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };
 
  return (
    <div >
        <button>
            <Link to={"/buses"}>Back</Link>
            </button>
      <h2 >Add Bus</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input type="text" value={image} placeholder= "Image url" onChange={event => setImage(event.target.value)} />
        </label>
        <label>
          Number Plate:
          <input type="text" value={number_plate} placeholder= "Number Plate" onChange={event => setNumber_plate(event.target.value)} />
        </label>
        <br />
        <label>
          Fleet Number:
          <input type="text" value={fleet_no} placeholder= "Fleet No" onChange={event => setFleet_no(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


  export default AddBus;