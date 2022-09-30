import React, { useState, useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import CourseService from "./services/CourseService";
import { useNavigate } from "react-router-dom";

function courses() {
  // eslint-disable-next-line
  const [courseName, setCoursetName] = useState("");
  // eslint-disable-next-line
  const [courseDuration, setCourseDuration] = useState("");
  // eslint-disable-next-line
  const [courseTiming, setCourseTiming] = useState("");
  // eslint-disable-next-line
  const [noStudents, setNoStudents] = useState("");
  // eslint-disable-next-line
  const [courseDescription, setCourseDescription] = useState("");
  const handleCourseName = (e) => {
    setCoursetName(e.target.value);
  };
  const handleCourseDuration = (e) => {
    setCourseDuration(e.target.value);
  };
  const handleCourseTiming = (e) => {
    setCourseTiming(e.target.value);
  };
  const handleNoStudents = (e) => {
    setNoStudents(e.target.value);
  };
  const handleCourseDescription = (e) => {
    setCourseDescription(e.target.value);
  };
  function deleteItems() {
    sessionStorage.clear();
  }

  // eslint-disable-next-line
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { courseid } = useParams();
  // eslint-disable-next-line
  const { instituteid } = useParams();
  const saveOrUpdateStudent = (e) => {
    const data = {
      coursename: courseName,
      courseduration: courseDuration,
      coursetime: courseTiming,
      nostudents: noStudents,
      coursedescription: courseDescription,
    };
    console.log(data);
    if (courseid) {
      CourseService.updateCourse(courseid, data)
        .then((response) => {
          navigate("/coursesadd");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //let instituteID = 5;
      CourseService.createCourse(instituteid, data)
        .then((response) => {
          console.log(response.data);
          navigate("/coursesadd");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //eslint-disable-next-line
  useEffect(() => {
    CourseService.getCourseById(courseid)
      .then((response) => {
        setCourseTiming(response.data.coursetime);
        setCoursetName(response.data.coursename);
        setCourseDuration(response.data.courseduration);

        setNoStudents(response.data.nostudents);
        setCourseDescription(response.data.coursedescription);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="studentHeader">
        Courses
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
      <div className="instituteheader">
        <div>
          <input
            type="text"
            placeholder="Enter the course Name"
            className="textField1"
            value={courseName}
            onChange={handleCourseName}
          />
          <input
            type="text"
            placeholder="Enter course duration"
            className="textField1"
            value={courseDuration}
            onChange={handleCourseDuration}
          />
          <input
            type="text"
            placeholder="Enter the course timing"
            className="textField1"
            value={courseTiming}
            onChange={handleCourseTiming}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter no of students enrolled for course"
            className="textField1"
            value={noStudents}
            onChange={handleNoStudents}
          />
          <input
            type="text"
            placeholder="Enter course description"
            className="textField3"
            value={courseDescription}
            onChange={handleCourseDescription}
          />
        </div>
        <button
          className="submitButton1"
          onClick={(e) => saveOrUpdateStudent(e)}
        >
          Add courses
        </button>
      </div>
    </>
  );
}

export default courses;
