import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";
import "./css/students.css";

function createData(name, age, course, batch, change) {
  return { name, age, course, batch, change };
}

const rows = [
  createData("Aashish", 24, "MERN", "June", <Link>Edit</Link>),
  createData("Ankit", 23, "MERN", "September", <Link>Edit</Link>),
  createData("Sanjana", 62, "MERN", "August", <Link>Edit</Link>),
  createData("Rohit", 30, "MERN", "July", <Link>Edit</Link>),
];

const Students = () => {
  const [tableHidden, setTableHidden] = useState(false);
  const handleAdd = () => setTableHidden(true);
  const handleSubmit = () => setTableHidden(false);

  return (
    <>
      {tableHidden ? (
        <div className="student-form">
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <TextField
                classsName="textfield"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                style={{ width: "20rem" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                classsName="textfield"
                id="outlined-basic"
                label="Age"
                variant="outlined"
                style={{ width: "20rem" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                classsName="textfield"
                id="outlined-basic"
                label="Course"
                variant="outlined"
                style={{ width: "20rem" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                classsName="textfield"
                id="outlined-basic"
                label="Batch"
                variant="outlined"
                style={{ width: "20rem" }}
              />
            </Grid>
          </Grid>{" "}
          <Stack spacing={10} direction="row" margin={15}>
            <Button onClick={handleSubmit} variant="outlined" size="large" color="error">
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="contained" size="large">
              Submit
            </Button>
          </Stack>
        </div>
      ) : (
        <div className="data-table">
          <header className="header">
            <span className="title">Students Details</span>
            <Button onClick={handleAdd} variant="contained">
              Add new student
            </Button>
          </header>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Course</TableCell>
                  <TableCell align="right">Batch</TableCell>
                  <TableCell align="right">Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.course}</TableCell>
                    <TableCell align="right">{row.batch}</TableCell>
                    <TableCell align="right">{row.change}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default Students;
