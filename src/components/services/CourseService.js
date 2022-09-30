import axios from "axios";

class CourseService {
  getAllCourses() {
    return axios({
      url: `http://localhost:8080/courses`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }
  createCourse(instituteid, course) {
    
    return axios({
      url: `http://localhost:8080/institute/${instituteid}/course`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
      data: JSON.stringify(course),
    });
  }
  getCourseById(courseid) {
    return axios({
      url: `http://localhost:8080/course` + "/" + courseid,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }

  updateCourse(courseid, course) {
    return axios({
      url: `http://localhost:8080/course` + "/" + courseid,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
      data: JSON.stringify(course),
    });
  }

  deleteCourse(courseid) {
    return axios({
      url: `http://localhost:8080/course` + "/" + courseid,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }
}
export default new CourseService();
