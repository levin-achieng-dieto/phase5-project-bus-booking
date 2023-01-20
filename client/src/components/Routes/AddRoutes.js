import React,{useState} from 'react'
import {Link} from "react-router-dom"
const initialState ={

  from:"",
  to:"",
  busnumber:"",
  date:"",
  time:"",
  cost:"",

  }


function AddRoutes ({onAddRoute}) {
 const [formData, setFormData]=useState(initialState);

const handleOnChange =(e) => {
const { name,value}=e.target;
setFormData(formData=>{
  return {
...formData, 
[name]:value

  }
  
})

}
const handleSubmit=(e)=>{
  e.preventDefault();
fetch("http://localhost:3000/Books",{
  method:'POST',
  headers:{
    'content-Type':'application/json'
  },
  body:JSON.stringify(formData)
})
.then((response)=>response.json())
.then((newRoute)=>{console.log(newRoute)
  onAddRoute(newRoute);
});
  setFormData(initialState)
}


  return (
    <div>
      <form  className='form' autoComplete='off'
      onSubmit={handleSubmit} >
       <button>
      <Link to={"/routes"}>Back</Link>
      </button>
      <h3>New Route +</h3>
      <label htmlFor="from">Pick-Up</label>
       <input 
       type="text"
        id="from" 
        name="from"
        onChange={handleOnChange}
        value={formData.from}
        />

      <label htmlFor="to">Destionation</label>
       <input 
       type="text" 
       id="to" 
       name="to"
       onChange={handleOnChange}
       value={formData.to}
       />


       <lable htmlFor='busnumber'>Bus</lable>
        <input 
        type="text" 
        id="busnumber" 
        name="busnumber"
        onChange={handleOnChange}
        value={formData.busnumber}
        />

        <label htmlFor="date">Date</label>
       <input 
       type="date" 
       id="date" 
       name="date"
       onChange={handleOnChange}
       value={formData.date}
       
       />

        <label htmlFor="time">Time</label>
       <input 
       type="time" 
       id="time" 
       name="time"
       onChange={handleOnChange}
       value={formData.time}
       
       />

        <label htmlFor="cost">Amount</label>
       <input 
       type="text" 
       id="cost" 
       name="cost"
       onChange={handleOnChange}
       value={formData.cost}
       
       />
       

        <button style={{color: "darkkhaki"}} type="submit" >Submit</button>
      </form>
        

    </div>
  )
}

export default AddRoutes