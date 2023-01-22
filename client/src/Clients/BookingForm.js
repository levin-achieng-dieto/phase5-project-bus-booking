import "./BusesList.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const BookingForm = () => {


    const initialState ={

        name:"",
        phonenumber:"",
        busnumber:"",
        from:"",
        to:"",
        no_of_passangers:"",
        bus_id:"1",
        client_id:"2"
        }

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
        
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      fetch("/bookings",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(formData)
      }).then((res)=>{
        alert('Bus Booked successfully.')
        navigate('/seat-selection');
      }).catch((err)=>{
        console.log(err.message)
      })

    } 

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                {/* <h2>Add Route</h2> */}
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    {/* <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div> */}

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{color:"black"}}>Name</label>
                                            <input type ="text" id ="name" name ="name" value={formData.name}  onChange={handleOnChange}className="form-control"></input>
                                        
                                        </div>
                                    </div>

                                    <div  className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{color:"black"}} >Phone Number</label>
                                            <input type ="text" id ="phonenumber" name ="phonenumber" value={formData.phonenumber} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{color:"black"}} >Bus No</label>
                                            <input type ="text" id ="busnumber" name ="busnumber"value={formData.busnumber} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{color:"black"}} >Pick- Up</label>
                                            <input type= "text" id ="from" name ="from" value={formData.from} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{color:"black"}} >Destination</label>
                                            <input type="text"  id ="to" name ="to" value={formData.to} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{color:"black"}} >Passangers</label>
                                            <input type ="text" id ="no_of_passangers" name ="no_of_passangers" value={formData.no_of_passangers} onChange={handleOnChange} className="form-control"></input>
                                        </div>
                                    </div>
                                

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                             
                                           <button className="btn btn-success" type="submit"> Submit </button>
                                           
                                           <Link to="/buses" className="btn btn-danger">Cancel</Link>
                
                                        </div>
                                    </div>

                                </div> 

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default BookingForm;