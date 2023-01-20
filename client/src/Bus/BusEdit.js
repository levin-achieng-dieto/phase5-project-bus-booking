import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Bus.css"


const BusEdit = () => {
    const { empid } = useParams();
 

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("/buses/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            imagechange(resp.image);
            number_platechange(resp.number_plate);
            fleet_nochange(resp.fleet_no);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [empid]);

    const[id,idchange]=useState("");
    const[image,imagechange]=useState("");
    const[number_plate,number_platechange]=useState("");
    const[fleet_no,fleet_nochange]=useState("");
  
  


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,image,number_plate,fleet_no};
      

      fetch(`/buses/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Bus Edited successfully.')
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
                            <h2>Bus Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                              

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input value={image} onChange={e=>imagechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Bus No</label>
                                        <input value={number_plate} onChange={e=>number_platechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Fleet No</label>
                                        <input type ="text" value={fleet_no} onChange={e=>fleet_nochange(e.target.value)} className="form-control"></input>
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
 
export default BusEdit;