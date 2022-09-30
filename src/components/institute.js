import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import InstituteService from "./services/InstituteService";
import { useNavigate } from "react-router-dom";
function institute() {
  // eslint-disable-next-line
  const [academyName, setAcademyName] = useState();
  // eslint-disable-next-line
  const [imageUrl, setImageUrl] = useState();
  // eslint-disable-next-line
  const [address, setAddress] = useState();
  // eslint-disable-next-line
  const [mobile, setMobile] = useState();
  // eslint-disable-next-line
  const [email, setEmail] = useState();
  // eslint-disable-next-line
  const [academyDescription, setAcademyDescription] = useState();
  const handleAcademyName = (e) => {
    setAcademyName(e.target.value);
  };
  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAcademyDescription = (e) => {
    setAcademyDescription(e.target.value);
  };
  function deleteItems() {
    sessionStorage.clear();
  }

  // eslint-disable-next-line
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { instituteid } = useParams();
  const handleSubmit = () => {
    const data = {
      institutename: academyName,
      imageurl: imageUrl,
      instituteaddress: address,
      mobile: mobile,
      email: email,
      institutedescription: academyDescription,
    };
    if (instituteid) {
      InstituteService.updateInstitute(instituteid, data)
        .then((response) => {
           navigate("/academyview");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      InstituteService.createInstitute(data)
        .then((response) => {
          console.log(response.data);
           navigate("/academyview");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // eslint-disable-next-line
  useEffect(() => {
    InstituteService.getInstitutesById(instituteid)
      .then((response) => {
        setAcademyName(response.data.institutename);
        setImageUrl(response.data.imageurl);
        setAddress(response.data.instituteaddress);
        setMobile(response.data.mobile);
        setEmail(response.data.email);
        setAcademyDescription(response.data.institutedescription);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="acadmey">
        {" "}
        <h4 align="center">Academy</h4>{" "}
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
      <div className="instituteheader1">
        <div>
          <input
            type="text"
            placeholder="Enter Academyname"
            className="textField1"
            value={academyName}
            onChange={handleAcademyName}
          />
          <input
            type="text"
            placeholder="Enter Academyimageurl"
            className="textField1"
            value={imageUrl}
            onChange={handleImageUrl}
          />

          <input
            type="text"
            placeholder="Enter Academy Location"
            className="textField1"
            value={address}
            onChange={handleAddress}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the contact number"
            className="textField1"
            value={mobile}
            onChange={handleMobile}
          />
          <input
            type="text"
            placeholder="Enter academy email"
            className="textField1"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            placeholder="Enter academy description"
            className="textField2"
            value={academyDescription}
            onChange={handleAcademyDescription}
          />
        </div>
        <button className="submitButton1" onClick={handleSubmit}>
          Add Academy
        </button>
      </div>
    </>
  );
}

export default institute;
