import React from "react";
import Main from "./components/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Institute from "./components/institute";
import Courses from "./components/courses";
import Students from "./components/students";
import Studentview from "./components/studentview";
import Academyview from "./components/academyview";
import Coursesadd from "./components/coursesadd";
import Admissionview from "./components/admissionview";
import Enrolledcourse from "./components/enrolledcourse";
import Enrolledstudent from "./components/enrolledstudent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Main />} />
        {/* <Route path="/student/:courseid" element={<Students />} /> */}
        <Route path="/course/:courseid/student" element={<Students />} />
        <Route path="/academyview" element={<Academyview />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/institute/:instituteid" element={<Institute />} />
        <Route path="/studentview" element={<Studentview />} />
        <Route path="/student/:studentid" element={<Students />} />
        <Route path="/coursesadd" element={<Coursesadd />} />
        <Route path="/course/:courseid" element={<Courses />} />
        <Route path="/institute/:instituteid/course" element={<Courses />} />
        <Route path="/admissionview" element={<Admissionview />} />
        <Route path="/enrolledcourse" element={<Enrolledcourse />} />
        <Route
          path="/enrolledstudent/:courseid"
          element={<Enrolledstudent />}
        />
      </Routes>
    </BrowserRouter>
    //<Admissionview />
    // <Enrolledcourse/>
  );
}

export default App;
