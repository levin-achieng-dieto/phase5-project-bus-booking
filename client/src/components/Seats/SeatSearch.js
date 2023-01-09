import { React } from "react";
import TextField from "@mui/material/TextField";
import "./SeatSearch.css";

function SeatSearch() {
  return (
    <div className="main">
      <h1>Seat Status</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Bus Number"
        />
      </div>
    
    </div>
  );
}

export default SeatSearch;