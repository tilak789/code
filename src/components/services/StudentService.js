import axios from "axios";

class StudentService {
  getAllStudents() {
    return axios({
      url: `http://localhost:8080/student`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }
  createStudent(courseid, students) {
    console.log(students);
    return axios({
      url: `http://localhost:8080/course/${courseid}/student`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
     data: JSON.stringify(students),
    });
    
  }
  getStudentById(studentid) {
    return axios({
      url: `http://localhost:8080/student` + "/" + studentid,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }

  updateStudent(studentid, student) {
    return axios({
      url: `http://localhost:8080/student` + "/" + studentid,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
      data: JSON.stringify(student),
    });
  }

  deleteStudent(studentid) {
    return axios({
      url: `http://localhost:8080/student` + "/" + studentid,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }
}
export default new StudentService();
