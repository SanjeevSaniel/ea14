import React from "react";
import { Link } from "react-router-dom";
import TableCell from "@mui/material/TableCell";

const ReadOnlyRows = ({ student, handleOpen }) => {
  return (
    <>
      <TableCell component="th" scope="row">
        {student.Name}
      </TableCell>
      <TableCell align="right">{student.Age}</TableCell>
      <TableCell align="right">{student.Course}</TableCell>
      <TableCell align="right">{student.Batch}</TableCell>
      <TableCell align="right">
        <Link onClick={handleOpen}>Edit</Link>
      </TableCell>
    </>
  );
};

export default ReadOnlyRows;
