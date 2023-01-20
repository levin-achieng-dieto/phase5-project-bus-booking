import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Bus/Bus.css"
const RouteAdd = () => {


    const initialState ={

        from:"",
        to:"",
        busnumber:"",
        date:"",
        time:"",
        cost:"",
        admin_id:"2"
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
      fetch("/routes",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(formData)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/routes');
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
                                <h2>Add Route</h2>
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
                                            <label>Pick-Up</label>
                                            <input type ="text" id ="from" name ="from" value={formData.from}  onChange={handleOnChange}className="form-control"></input>
                                        
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Destination</label>
                                            <input type ="text" id ="to" name ="to" value={formData.to} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Bus No</label>
                                            <input type ="text" id ="busnumber" name ="busnumber"value={formData.busnumber} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input type= "date" id ="date" name ="date" value={formData.date} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Time</label>
                                            <input type="time"  id ="time" name ="time" value={formData.time} onChange={handleOnChange}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <input type ="text" id ="cost" name ="cost" value={formData.cost} onChange={handleOnChange} className="form-control"></input>
                                        </div>
                                    </div>
                                

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/routes" className="btn btn-danger">Back</Link>
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

export default RouteAdd;