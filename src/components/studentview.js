import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentService from "./services/StudentService";

const studentview = () => {
  //eslint-disable-next-line
  const [students, setStudents] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
    getAllStudents();
  }, []);
  function deleteItems() {
    sessionStorage.clear();
  }

  const getAllStudents = () => {
    StudentService.getAllStudents()
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteStudent = (studentid) => {
    StudentService.deleteStudent(studentid)
      .then((response) => {
        getAllStudents();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="studentHeader">Student</div>
      <div>
        <button className="searchbutton"> Search</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="studentHeader">
            <TableRow>
              <TableCell>student Id</TableCell>
              <TableCell align="right"> firstname</TableCell>
              <TableCell align="right">Entrolled course</TableCell>
              <TableCell align="right">Mobile number</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table">
            {students.map((students) => (
              <TableRow
                key={students.studentid}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {students.studentid}
                </TableCell>
                <TableCell align="right">{students.firstname}</TableCell>
                <TableCell align="right">{students.age}</TableCell>
                <TableCell align="right">{students.phonenumber}</TableCell>
                <TableCell align="right">
                  <Link
                    className="btn btn-info"
                    to={`/student/${students.studentid}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStudent(students.studentid)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}

            <Link
              to="/"
              className="btn btn-primary mb-2"
              onClick={() => {
                deleteItems();
              }}
            >
              {" "}
              Logout{" "}
            </Link>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default studentview;
