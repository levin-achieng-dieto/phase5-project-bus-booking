
import React, { useState } from "react";
import {Link} from "react-router-dom"


function AddUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");

  
  const handleSubmit = event => {
    event.preventDefault();
    fetch('/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, address, phone_number })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };
  return (
    <div  >
       <button>
            <Link to={"/customers"}>Back</Link>
            </button>
      <h2 >ADD USER</h2>
      <form  onClick={handleSubmit}>
        <label>
          UserName:
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
        </label>
        <br/>
        <label>
          Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        </label>
        <br/>
        <label>
          Address:
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="address"
          placeholder="Enter your address"
        />
        </label>
        <br/>
        <label>
          Phone Number:
        <input
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
          type="phone_number"
          placeholder="Enter your phone no."
        />
        </label>
        <br/>
        <button
          type="submit"
        >
          ADD USER
        </button>
      </form>
    </div>
  );
}


  export default AddUser;