import React, { useState, useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom";
import InstituteService from "./services/InstituteService";
import "../App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function admissionview() {
  // eslint-disable-next-line
  const [acadamy, setAcadamy] = useState([]);
  // eslint-disable-next-line
  useEffect(() => {
    getAllInstitutes();
  }, []);
  function deleteItems() {
   sessionStorage.clear();
  }

  //eslint-disable-next-line
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
  return (
    <>
      <div className="registerTitle">
        Academy
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
                <Link to="/enrolledcourse" className="btn btn-danger">
                  {" "}
                  EnrolledAcadmey{" "}
                </Link>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default admissionview