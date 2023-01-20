import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Route.css"


const RouteEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("/routes/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            fromchange(resp.from);
            tochange(resp.to);
            busnumberchange(resp.busnumber);
            datechange(resp.date);
            timechange(resp.time);
            costchange(resp.cost);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [empid]);

    const[id,idchange]=useState("");
    const[from,fromchange]=useState("");
    const[to,tochange]=useState("");
    const[busnumber,busnumberchange]=useState("");
    const[date,datechange]=useState("");
    const[time,timechange]=useState("");
    const[cost,costchange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,from,to,busnumber,date,time,cost};
      

      fetch(`/routes/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
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
                            <h2>Route Edit</h2>
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
                                        <label>Pick-Up</label>
                                        <input required value={from} onMouseDown={e=>valchange(true)} onChange={e=>fromchange(e.target.value)} className="form-control"></input>
                                    {from.length===0 && validation && <span className="text-danger">Enter location..</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Destination</label>
                                        <input value={to} onChange={e=>tochange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Bus No</label>
                                        <input value={busnumber} onChange={e=>busnumberchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <input type ="date" value={date} onChange={e=>datechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Time</label>
                                        <input type ="time" value={time} onChange={e=>timechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input value={cost} onChange={e=>costchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                {/* <div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label  className="form-check-label">Is Active</label>
                                        
                                    </div>
                                </div> */}
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
 
export default RouteEdit;