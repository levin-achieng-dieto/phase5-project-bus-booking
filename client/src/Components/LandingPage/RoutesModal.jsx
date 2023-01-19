import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(source, destination, buses) {
  return { source, destination, buses };
}

const rows = [
  createData("Nairobi", "Mombasa", 12),
  createData("Mombasa", "Nairobi", 6),
  createData("Mombasa", "Kisumu", 3),
  createData("Kisumu", "Mombasa", 5),
  createData("Nairobi", "Kitale", 4),
  createData("Kitale ", "Nairobi", 5),
  createData("Garisa", "Nairobi", 5),
  createData("Nairobi", "Garisa", 3),
  createData("Lodwar", "Mombasa", 5),
  createData("Mombasa", "Lodwar", 5),
  createData("Lodwar", "Nairobi", 5),
  createData("Nairobi", "Lodwar", 5),
  
];

export default function RoutesModal() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <b style={{ color: "red", fontSize: "20px", height: "70px" }}>
          Note: Currently we are serving our customers only in the below
          mentioned routes.
        </b>
        <br />
        <b style={{ color: "green", fontSize: "16px", height: "70px" }}>
          Suggestion: To test all the features, select the route with maximum
          number of buses.
        </b>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>SOURCE</strong>
              </TableCell>
              <TableCell align="right">
                <strong>DESTINATION</strong>
              </TableCell>
              <TableCell align="right">
                <strong>BUS COUNT</strong>&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.source}>
                <TableCell component="th" scope="row">
                  {row.source}
                </TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.buses}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
