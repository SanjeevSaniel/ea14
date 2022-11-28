import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
// import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { nanoid } from "nanoid";

import rows from "../rows-data.json";
import ReadOnlyRows from "../layouts/readOnlyRows";
import EditableRows from "../layouts/editableRows";

import "../css/students.css";

const StudentsBuild = (props) => {
  // const [tableHidden, setTableHidden] = useState(false);
  // const handleAdd = () => setTableHidden(true);
  // const handleSubmit = () => setTableHidden(false);

  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const handleAddOpen = () => {
    setAddForm(true);
  };
  const handleEditOpen = () => {
    setEditForm(true);
  };

  const handleAddClose = () => {
    setAddForm(false);
  };
  const handleEditClose = () => {
    setEditForm(false);
  };

  const [students, setStudents] = useState(rows);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  });

  const [editStudentId, setEditStudentId] = useState();

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      Id: nanoid(),
      Name: addFormData.Name,
      Age: addFormData.Age,
      Course: addFormData.Course,
      Batch: addFormData.Batch,
    };

    const newStudents = [...students, newStudent];
    setStudents(newStudents);
  };

  useEffect(() => {
    console.log("Students", students);
  }, [students]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Students_Details"));
    setStudents(data);
    console.log(data);
  }, []);

  useEffect(() => {
    if ("Students_Details")
      localStorage.setItem("Students_Details", JSON.stringify(students));
  }, [students]);

  return (
    <>
      <div className="data-table">
        <header className="header">
          <span className="title">Students Details</span>
          <Button variant="contained" onClick={handleAddOpen}>
            Add new student
          </Button>
        </header>

        <form onSubmit={handleAddFormSubmit}>
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
                {students.map((student) => (
                  <TableRow
                    key={student.Id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    
                    <ReadOnlyRows
                      student={student}
                      handleOpen={handleEditOpen}
                    />
                    {/* <TableCell component="th" scope="row">
                      {student.Name}
                    </TableCell>
                    <TableCell align="right">{student.Age}</TableCell>
                    <TableCell align="right">{student.Course}</TableCell>
                    <TableCell align="right">{student.Batch}</TableCell>
                    <TableCell align="right">
                      <Link>Edit</Link>
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </form>
      </div>
      <Outlet />

      {/* New Student Form */}
      <Dialog open={addForm} onClose={handleAddClose}>
        <div className="student-form">
          <form onSubmit={handleAddFormSubmit}>
            <TextField
              type="text"
              // classsName="textfield"
              id="outlined-basic"
              name="Name"
              label="Name"
              variant="outlined"
              style={{ width: "20rem" }}
              onChange={handleAddFormChange}
            />
            <TextField
              type="text"
              // classsName="textfield"
              id="outlined-basic"
              name="Age"
              label="Age"
              variant="outlined"
              style={{ width: "20rem" }}
              onChange={handleAddFormChange}
            />
            <TextField
              type="text"
              // classsName="textfield"
              id="outlined-basic"
              name="Course"
              label="Course"
              variant="outlined"
              style={{ width: "20rem" }}
              onChange={handleAddFormChange}
            />
            <TextField
              type="text"
              // classsName="textfield"
              id="outlined-basic"
              name="Batch"
              label="Batch"
              variant="outlined"
              style={{ width: "20rem" }}
              onChange={handleAddFormChange}
            />{" "}
            <br /> <br />
            {/* <Button variant="outlined" size="large" color="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button> */}
            {/* <Grid container spacing={10}>
                <Grid item xs={6}>
                  <TextField
                    classsName="textfield"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    style={{ width: "20rem" }}
                    onChange={handleAddFormChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    classsName="textfield"
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    style={{ width: "20rem" }}
                    onChange={handleAddFormChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    classsName="textfield"
                    id="outlined-basic"
                    label="Course"
                    variant="outlined"
                    style={{ width: "20rem" }}
                    onChange={handleAddFormChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    classsName="textfield"
                    id="outlined-basic"
                    label="Batch"
                    variant="outlined"
                    style={{ width: "20rem" }}
                    onChange={handleAddFormChange}
                  />
                </Grid>
              </Grid> */}
            <Stack spacing={10} direction="row" margin={1}>
              <Button
                onClick={handleAddClose}
                variant="outlined"
                size="large"
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={handleAddClose}
                variant="contained"
                size="large"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      </Dialog>
      
      <EditableRows
        open={editForm}
        handleClose={handleEditClose}
        handleAddFormSubmit={handleAddFormSubmit}
        handleAddFormChange={handleAddFormChange}
      />
    </>
  );
};

export default StudentsBuild;
