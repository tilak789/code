import { Link } from "react-router-dom";
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
function coursesadd() {
  //eslint-disable-next-line
  const [course, setCourse] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
   getAllCourses();
  }, []);
  function deleteItems() {
    sessionStorage.clear();
  }

  const getAllCourses = () => {
    CourseService.getAllCourses()
      .then((response) => {
        setCourse(response.data.coursesDetails);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteCourse = (courseid) => {
    CourseService.deleteCourse(courseid)
      .then((response) => {
        getAllCourses();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCourseById = (courseid) => {
    CourseService.getCourseById(courseid)
      .then((response) => {
        getCourseById();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="studentHeader">
        coursesview
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
      <div>
        <input
          type="text"
          placeholder="Type here to search course by courseid"
          className="text1"
        />
        <button
          className="searchbutton"
          onClick={() => getCourseById(course.courseid)}
        >
          {" "}
          Search
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="studentHeader">
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
                    className="btn btn-info"
                    to={`/course/${course.courseid}`}
                  >
                    Update
                  </Link>
                  <Link
                    to={`/course/${course.courseid}/student`}
                    className="btn btn-primary mb-2"
                  >
                    {" "}
                    Student Add{" "}
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCourse(course.courseid)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
            <Link to="/studentview" className="btn btn-primary mb-2">
              {" "}
              student{" "}
            </Link>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default coursesadd;
