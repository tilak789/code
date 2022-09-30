import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CourseService from "./services/CourseService";
import "../App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function enrolledcourse() {
  //eslint-disable-next-line
  const [course, setCourse] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
    getAllCourses();
  }, []);
  function deleteItems() {
    sessionStorage.clear();
  }

  //eslint-disable-next-line
  const navigate = useNavigate();
  const getAllCourses = () => {
    CourseService.getAllCourses()
      .then((response) => {
        setCourse(response.data.coursesDetails);
          console.log(response.data);
         // navigate("/enrolledstudent");
      })
      .catch((error) => {
        console.log(error);
      });
    };
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("c");
    console.log(c);
  return (
    <>
      <div className="registerTitle">
        Enrolledcourse
        <Link
          to="/"
          className="logoff"
          onClick={() => {
            deleteItems();
          }}
        >
          {" "}
          Logout{" "}
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="studentHeader2">
            <TableRow>
              <TableCell>CourseName</TableCell>
              <TableCell align="right"> Course duration</TableCell>
              <TableCell align="right">Course Timing</TableCell>
              <TableCell align="right">Course description</TableCell>
              <TableCell align="right">
                <></>Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table">
            {course.map((course) => (
              <TableRow
                key={course.courseid}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {course.coursename}
                </TableCell>
                <TableCell align="right">{course.courseduration}</TableCell>
                <TableCell align="right">{course.coursetime}</TableCell>
                <TableCell align="right">{course.coursedescription}</TableCell>
                <TableCell align="right">
                  <Link
                    to={`/enrolledstudent/${course.courseid}`}
                    className="btn btn-danger"
                  >
                    {" "}
                    Enrolled course{" "}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
