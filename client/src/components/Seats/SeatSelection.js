import React from 'react'

import { Link } from 'react-router-dom'
import "./SeatSelection.css";
export default function SeatSelection() {



    return (
        <div> 
         
        <button style={{backgroundColor:"lightblue"}}>
        <Link to={`/seats`} >Back </Link>
        </button>
            <div className="ss">
                <div className="row">
                    <div className="column1">
                        <div className="plane">
        <h3>Available Seats</h3>
        
                            <form >
                                <ol className="cabin fuselage">
                                    <li className="row row--1">

                                    </li>
                                    <li className="row row--3">
                                        <ol className="seats" type="1">
                                        <h3>1.</h3>
                                            <li className="seat">
                                                <input type="checkbox" value="1a" id="1a" />
                                                <label htmlFor="1a">a</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="1b" id="1b" />
                                                <label htmlFor="1b">b</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="1c" id="1c" />
                                                <label htmlFor="1c">c</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="1d" id="1d" />
                                                <label htmlFor="1d">d</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="1e" id="1e" />
                                                <label htmlFor="1e">e</label>
                                            </li>

                                        </ol> 
                                    </li>
                                    <li className="row row--4">
                                        <ol className="seats" type="2">
                                        <h3>2.</h3>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="2f" id="2f" />
                                                <label htmlFor="2f">f</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="2g" id="2g" />
                                                <label htmlFor="2g">g</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="2h" id="2h" />
                                                <label htmlFor="2h">h</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="2i" id="2i" />
                                                <label htmlFor="2i">i</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="2j" id="2j" />
                                                <label htmlFor="2j">j</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--5">
                                        <ol className="seats" type="3">
                                        <h3>3.</h3>
                                            <li className="seat">
                                                <input type="checkbox" value="D1" id="D1" />
                                                <label htmlFor="D1">k</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="D2" id="D2" />
                                                <label htmlFor="D2">l</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="D3" id="D3" />
                                                <label htmlFor="D3">m</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="D4" id="D4" />
                                                <label htmlFor="D4">n</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="D5" id="D5" />
                                                <label htmlFor="D5">o</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--6">
                                        <ol className="seats" type="C">
                                        <h3>4.</h3>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="C1" id="C1" />
                                                <label htmlFor="C1">p</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="C2" id="C2" />
                                                <label htmlFor="C2">q</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="C3" id="C3" />
                                                <label htmlFor="C3">r</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="C4" id="C4" />
                                                <label htmlFor="C4">s</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="C5" id="C5" />
                                                <label htmlFor="C5">t</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--7">
                                        <ol className="seats" type="B">
                                        <h3>5.</h3>
                                            <li className="seat">
                                                <input type="checkbox" value="B1" id="B1" />
                                                <label htmlFor="B1">u</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="B2" id="B2" />
                                                <label htmlFor="B2">v</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="B3" id="B3" />
                                                <label htmlFor="B3">w</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="B4" id="B4" />
                                                <label htmlFor="B4">x</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="B5" id="B5" />
                                                <label htmlFor="B5">y</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--8">
                                        <ol className="seats" type="A">
                                        <h3>6.</h3>
                                            <li className="seat">
                                                <input type="checkbox" value="A1" id="A1" />
                                                <label htmlFor="A1">z</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="A2" id="A2" />
                                                <label htmlFor="A2">aa</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="A3" id="A3" />
                                                <label htmlFor="A3">bb</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="A4" id="A4" />
                                                <label htmlFor="A4">cc</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="A5" id="A5" />
                                                <label htmlFor="A5">dd</label>
                                            </li>

                                        </ol>
                                    </li>
                               
                               
                                </ol>
                            </form>
                        </div>
                    </div>
            
                </div>

            </div></div>

    )
}