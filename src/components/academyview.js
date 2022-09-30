import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InstituteService from "./services/InstituteService";
import "../App.css";
import axios from "axios";
import img1 from "./assets/img1.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
function academyview() {
  // eslint-disable-next-line
  const [acadamy, setAcadamy] = useState([]);
  // eslint-disable-next-line
  useEffect(() => {
    getAllInstitutes();
  }, []);
  function deleteItems() {
   sessionStorage.clear();
  }

  // eslint-disable-next-line
  const navigate = useNavigate();
  const getAllInstitutes = () => {
    InstituteService.getAllInstitutes()
      .then((response) => {
        setAcadamy(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteInstitute = (instituteid) => {
    InstituteService.deleteInstitute(instituteid)
      .then((response) => {
        getAllInstitutes();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {" "}
      <>
        <div className="registerTitle">
          <h6>Academy</h6>
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
        <div className="App-header">
          {acadamy.map((acadamy) => (
            <div className="acadmeydetails">
              <Card key={acadamy.instituteid} sx={{ minWidth: 275 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image="https://t4.ftcdn.net/jpg/01/00/52/51/240_F_100525189_9yvphYJlpugDwenKJyJIPj8XvTXzG38G.jpg"
                />
                <CardContent>
                  <p>{acadamy.institutename}</p>
                  <p>{acadamy.instituteaddress}</p>
                </CardContent>
                <CardActions>
                  <Link
                    className="btn btn-info"
                    to={`/institute/${acadamy.instituteid}`}
                  >
                    Update
                  </Link>
                  <Link
                    to={`/institute/${acadamy.instituteid}/course`}
                    className="btn btn-primary mb-2"
                  >
                    {" "}
                    Course Add{" "}
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteInstitute(acadamy.instituteid)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    Delete
                  </button>
                </CardActions>
              </Card>
            </div>
          ))}
          <Link to="/institute" className="btn btn-primary mb-2">
            {" "}
            Add Acadmey{" "}
          </Link>
        </div>
      </>
      <Link to="/coursesadd" className="btn btn-primary mb-2">
        {" "}
        courses{" "}
      </Link>
    </div>
  );
}

export default academyview;
