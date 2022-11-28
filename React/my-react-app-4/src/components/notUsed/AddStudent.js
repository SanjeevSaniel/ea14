import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { Navigate, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import rows from "../rows-data.json";
const AddStudent = (props) => {
  // const navigate = useNavigate();

  const [students, setStudents] = useState(rows);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  });

  const { name, age, course, batch } = addFormData;

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();

  //   const newStudent = {
  //     Id: nanoid(),
  //     Name: addFormData.Name,
  //     Age: addFormData.Age,
  //     Course: addFormData.Course,
  //     Batch: addFormData.Batch,
  //   };

  //   const newStudents = [...students, newStudent];
  //   setStudents(newStudents);
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      Id: nanoid(),
      Name: addFormData.Name,
      Age: addFormData.Age,
      Course: addFormData.Course,
      Batch: addFormData.Batch,
    };

    const newStudents = [...students, newStudent];
    setStudents(newStudents);
    // navigate("/StudentsBuild");
  };

  return (
    <div className="student-form">
      <form onSubmit={(e) => onSubmit(e)}>
        <TextField
          type="text"
          // classsName="textfield"
          id="outlined-basic"
          name="Name"
          label="Name"
          value={name}
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
          value={age}
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
          value={course}
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
          value={batch}
          variant="outlined"
          style={{ width: "20rem" }}
          onChange={handleAddFormChange}
        />{" "}
        <br /> <br />
        <Button variant="outlined" size="large" color="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
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
        {/* <Stack spacing={10} direction="row" margin={15}>
                <Button
                  onClick={handleSubmit}
                  variant="outlined"
                  size="large"
                  color="secondary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="contained"
                  size="large"
                >
                  Submit
                </Button>
              </Stack> */}
      </form>
    </div>
  );
};

export default AddStudent;
