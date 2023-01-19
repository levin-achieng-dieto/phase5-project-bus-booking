import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import { Button,Input } from "antd";

function AddRoutes() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [busnumber, setBusnumber] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/routes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({from,to,busnumber,date,cost,time })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.log(error));
    };
  

  return (
    <>
    <Button  style ={{borderColor: "#092147", backgroundColor:"lightblue"}} >
    <Link to={"/routes"}>Back</Link>
    </Button>
     <h4 style={{color:"#092147"}} >Add Bus Routes</h4>
    <form id='form' className='flex flex-col'  onSubmit={handleSubmit}>
      <label>
        Location:
        <Input type="text" value={from} onChange={e => setFrom(e.target.value)} />
      </label>
      <label>
        Destination:
        <Input type="email" value={to} onChange={e => setTo(e.target.value)} />
      </label>
      <label>
        Bus:
        <Input type="busnumber" value={busnumber} onChange={e => setBusnumber(e.target.value)} />
      </label>
      <label>
        Date:
        <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label>
        Amount:
        <Input type="cost" value={cost} onChange={e => setCost(e.target.value)} />
      </label>
      <label>
        Time:
        <Input type="time" value={time} onChange={e => setTime(e.target.value)} />
      </label>
      <Button style ={{borderColor: "#092147", backgroundColor:"lightblue"}} type="submit">Submit</Button>
    </form>
  
    </>
  );
}

export default AddRoutes;
