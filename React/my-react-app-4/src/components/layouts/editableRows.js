import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";

const EditableRows = ({
  open,
  handleClose,
  handleAddFormSubmit,
  handleAddFormChange,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
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
          <Stack spacing={10} direction="row" margin={1}>
            <Button
              onClick={handleClose}
              variant="outlined"
              size="large"
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleClose}
              variant="contained"
              size="large"
            >
              Update
            </Button>
          </Stack>
        </form>
      </div>
    </Dialog>
  );
};

export default EditableRows;
