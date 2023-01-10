import React, { useState } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
// import { Link, Redirect } from 'react-router-dom'
import "./SeatSelection.css";
export default function SeatSelection() {
    const [name, setName] = useState([])
    const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
    const [seatNumber, setSeatnumber] = useState([])
    // const [passengers, setPassengers] = useState([])
    // useEffect(()=>{
    //     let bId = localStorage.getItem('selectedBusId')
    //     if(bId){
    //         getSeatArray(bId)            
    //     }
    //     else return
    // },[localStorage])
    // const getSeatArray = async bId => {
    //     const baseURL = "http://localhost:8080/booking/"
    //     await axios.get(baseURL, bId)
    //     .this(response=>response.data)
    //     .this(data=>{
    //         setReservedSeat(data)
    //         console.log(reservedSeat)
    //     })
    // }
    const getSeatNumber = (e) => {
        renderPassengerData(seatNumber)
        let newSeat = e.target.value
        if (reservedSeat.includes(newSeat)) {
            e.disabled = true
            if (seatNumber.includes(newSeat)) {
                setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
            }
        } else {
            setSeatnumber([...seatNumber, newSeat])
            setReservedSeat([...reservedSeat, newSeat])
            console.log(seatNumber)
        }
    }
    const handleGender = (e, seatNo) => {
        const { value } = e.target
        setGender(gender.concat(value))
        // console.log(value)
        // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
    }
    const handlePassengerName = (e, seatNo) => {
        e.preventDefault()
        let value = e.target.value
        // console.log(value)
        if (!value) {
            return (setName("name is required"))
        } else {
            setName(name.concat(value))
            // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
        }
    }
    const handleSubmitDetails = e => {
        e.preventDefault()
        setArrowDown(true)
        localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
        localStorage.setItem("nameData", JSON.stringify(name))
        window.alert('Seat Confirmed.')
        window.location.href = "/book/menu2"

      
    }

    const renderPassengerData = (seatArray) => {
        return seatArray.map((seat, idx) => {
            return (
                <div>
                    <form key={idx} className="form seatfrm">
              <p className="text-capitalize text-center">Seat No: {seat}</p>
              <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
              <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                  <label className="form-check-label" for="male">Female</label>
              </div>
              <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                  <label className="form-check-label" htmlFor="female">Male</label>
              </div>
          </form>
      </div>)

        })
    }
    return (
        <div> <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="/seats">Select Seat</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="/payment">Payment</a>
                </li>
            </ul>
        </div>
            <div className="ss">
                <div className="row">
                    <div className="column1">
                        <div className="plane">
           
                            <form onChange={e => getSeatNumber(e)}>
                                <ol className="cabin fuselage">
                                    <li className="row row--1">
                                        <ol className="seats" type="H">
                                            <h3>H</h3>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="H1" id="H1" />
                                                <label htmlFor="H1">1</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" id="H2" value="H2" />
                                                <label htmlFor="H2">2</label>
                                         </li>
                                            <li className="seat">
                                                <input type="checkbox" value="H3" id="H3" />
                                                <label htmlFor="H3">3</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="H4" id="H4" />
                                                <label htmlFor="H4">4</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="H5" id="H5" />
                                                <label htmlFor="H5">5</label>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="row row--2">
                                        <ol className="seats" type="G">
                                        <h3>G</h3>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="G1" id="G1" />
                                                <label htmlFor="G1">1</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="G2" id="G2" />
                                                <label htmlFor="G2">2</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="G3" id="G3" />
                                                <label htmlFor="G3">3</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="G4" id="G4" />
                                                <label htmlFor="G4">4</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="G5" id="G5" />
                                                <label htmlFor="G5">5</label>
                                            </li>
                                          

                                        </ol>
                                    </li>
                                    <li className="row row--3">
                                        <ol className="seats" type="F">
                                        <h3>F</h3>
                                            <li className="seat">
                                                <input type="checkbox" value="F1" id="F1" />
                                                <label htmlFor="F1">1</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="F2" id="F2" />
                                                <label htmlFor="F2">2</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="F3" id="F3" />
                                                <label htmlFor="F3">3</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="F4" id="F4" />
                                                <label htmlFor="F4">4</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="F5" id="F5" />
                                                <label htmlFor="F5">5</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--4">
                                        <ol className="seats" type="E">
                                        <h3>E</h3>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="E1" id="E1" />
                                                <label htmlFor="E1">1</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="E2" id="E2" />
                                                <label htmlFor="E2">2</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="E3" id="E3" />
                                                <label htmlFor="E3">3</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="E4" id="E4" />
                                                <label htmlFor="E4">4</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="E5" id="E5" />
                                                <label htmlFor="E5">5</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--5">
                                        <ol className="seats" type="D">
                                        <h3>D</h3>
                                            <li className="seat">
                                                <input type="checkbox" value="D1" id="D1" />
                                                <label htmlFor="D1">1</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="D2" id="D2" />
                                                <label htmlFor="D2">2</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="D3" id="D3" />
                                                <label htmlFor="D3">3</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="D4" id="D4" />
                                                <label htmlFor="D4">4</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="D5" id="D5" />
                                                <label htmlFor="D5">5</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--6">
                                        <ol className="seats" type="C">
                                        <h3>C</h3>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="C1" id="C1" />
                                                <label htmlFor="C1">1</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="C2" id="C2" />
                                                <label htmlFor="C2">2</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="C3" id="C3" />
                                                <label htmlFor="C3">3</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="C4" id="C4" />
                                                <label htmlFor="C4">4</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="C5" id="C5" />
                                                <label htmlFor="C5">5</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--7">
                                        <ol className="seats" type="B">
                                        <h3>B</h3>
                                            <li className="seat">
                                                <input type="checkbox" value="B1" id="B1" />
                                                <label htmlFor="B1">1</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="B2" id="B2" />
                                                <label htmlFor="B2">2</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="B3" id="B3" />
                                                <label htmlFor="B3">3</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="B4" id="B4" />
                                                <label htmlFor="B4">4</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="B5" id="B5" />
                                                <label htmlFor="B5">5</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--8">
                                        <ol className="seats" type="A">
                                        <h3>A</h3>
                                            <li className="seat">
                                                <input type="checkbox" value="A1" id="A1" />
                                                <label htmlFor="A1">1</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="A2" id="A2" />
                                                <label htmlFor="A2">2</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="A3" id="A3" />
                                                <label htmlFor="A3">3</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="A4" id="A4" />
                                                <label htmlFor="A4">4</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="A5" id="A5" />
                                                <label htmlFor="A5">5</label>
                                            </li>

                                        </ol>
                                    </li>
                               
                               
                                </ol>
                            </form>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="seatInfo">
                            <form className="form-group">
                                {renderPassengerData(seatNumber)}
                            </form>
                            <div>
                                <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBT">
                                    Confirm Details
                                </button>
                            </div>
                            <div className={arrowDown ? "activeArrow2" : "nonActive"}>
                                <FaAngleDoubleDown />
                            </div>
                        </div>
                    </div>
                </div>

            </div></div>

    )
}