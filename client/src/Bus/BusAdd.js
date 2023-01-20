import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Bus.css"
const BusAdd = () => {


    const initialState ={

        image:"",
        number_plate:"",
        fleet_no:"",
        date:"",
        route_id:"2",
        driver_id: "1"
       
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
      fetch("/buses",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(formData)
      }).then((res)=>{
        alert('Bus Saved successfully.')
        navigate('/bus');
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
                                <h2>Add Bus</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                 

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image-Url</label>
                                            <input type ="text" id ="image" name ="image" value={formData.image}  onChange={handleOnChange}className="form-control"></input>
                                        
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Bus No</label>
                                            <input type ="text" id ="number_plate" name ="number_plate" value={formData.number_plate} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Fleet No</label>
                                            <input type ="text" id ="fleet_no" name ="fleet_no"value={formData.fleet_no} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>
         
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/bus" className="btn btn-danger">Back</Link>
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

export default BusAdd;