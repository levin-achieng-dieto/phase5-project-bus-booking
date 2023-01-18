import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./busbooking.css";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";



function Booking({ placeholder}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [data, setData]= useState([

    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("/routes");
            const resData= await reqData.json();
            setData(resData);
            // console.log(resData);
        }
        getUserdata();
    },[])
]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.to.toLowerCase().includes(searchWord.toLowerCase());
    });
 console.log(data)
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

 

  return (
    <>
    <div className="search">
        <h1> Seat Statuses </h1>
      <div className="searchInputs">
        <input
          type="text"
          placeholder= "Type destination to view routes ..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link to ="/bookings" className="dataItem" >
                <p>{value.to} </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
   
    </>
  );
}

export default Booking;