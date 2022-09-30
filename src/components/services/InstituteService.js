import axios from "axios";

class InstituteService {
  getAllInstitutes() {
    return axios({
      url: `http://localhost:8080/institute`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }
  getInstitutesById(instituteid) {
    return axios({
      url: `http://localhost:8080/institute/` + instituteid,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }
  createInstitute( institute) {
    return axios({
      url: `http://localhost:8080/institute`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
      data: JSON.stringify(institute),
    });
  }
  updateInstitute(instituteid, institute) {
    return axios({
      url: `http://localhost:8080/institute/` + instituteid,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
      data: JSON.stringify(institute),
    });
  }

  deleteInstitute(instituteid) {
    return axios({
      url: `http://localhost:8080/institute/` + instituteid,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization"),
      },
    });
  }
}
export default new InstituteService();
