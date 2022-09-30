import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import StudentService from "./services/StudentService";
import { useNavigate,Link } from "react-router-dom";

export default function enrolledstudent() {
  // eslint-disable-next-line
  const [firstName, setFirstName] = useState("");
  // eslint-disable-next-line
  const [fatherName, setFatherName] = useState("");
  // eslint-disable-next-line
  const [motherName, setMotherName] = useState("");
  // eslint-disable-next-line
  const [emailId, setEmailId] = useState("");
  // eslint-disable-next-line
  const [age, setAge] = useState("");
  // eslint-disable-next-line
  const [lastName, setlastName] = useState("");
  // eslint-disable-next-line
  const [phoneNumber, setPhoneNumber] = useState("");
  // eslint-disable-next-line
  const [gender, setGender] = useState("");
  // eslint-disable-next-line
  const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("");
  // eslint-disable-next-line
  const [houseNo, setHouseNo] = useState("");
  // eslint-disable-next-line
  const [streetName, setStreetName] = useState("");
  // eslint-disable-next-line
  const [areaName, setAreaName] = useState("");
  // eslint-disable-next-line
  const [pinCode, setPinCode] = useState("");
  // eslint-disable-next-line
  const [state, setstate] = useState("");
  // eslint-disable-next-line
  const [nationality, setNationality] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleFatherName = (e) => {
    setFatherName(e.target.value);
  };
  const handleMotherName = (e) => {
    setMotherName(e.target.value);
  };
  const handleEmailId = (e) => {
    setEmailId(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleLastName = (e) => {
    setlastName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleAlternativePhoneNumber = (e) => {
    setAlternativePhoneNumber(e.target.value);
  };
  const handleHouseNo = (e) => {
    setHouseNo(e.target.value);
  };
  const handleStreetName = (e) => {
    setStreetName(e.target.value);
  };
  const handleAreaName = (e) => {
    setAreaName(e.target.value);
  };
  const handlePinCode = (e) => {
    setPinCode(e.target.value);
  };
  const handleState = (e) => {
    setstate(e.target.value);
  };
  const handleNationality = (e) => {
    setNationality(e.target.value);
  };
  function deleteItems() {
   sessionStorage.clear();
  }

  // eslint-disable-next-line
  const navigate = useNavigate();
  // eslint-disable-next-line
    const { courseid } = useParams();
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("c");
    console.log(c);
  const saveOrUpdateStudent = (e) => {
    const data = {
      firstname: firstName,
      fathername: fatherName,
      mothername: motherName,
      emailid: emailId,
      age: age,
      lastname: lastName,
      phonenumber: phoneNumber,
      gender: gender,
      alternativephonenumber: alternativePhoneNumber,
      houseno: houseNo,
      streetname: streetName,
      areaname: areaName,
      pincode: pinCode,
      state: state,
      nationality: nationality,
    };
    console.log(data);
    StudentService.createStudent(courseid, data)
      .then((response) => {
        console.log(response.data);

        //navigate.push("/course/" + courseID + "/sudent");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      \
      <>
        <div className="studentHeader1">
          EnrolledStudents
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
        <div className="studentBody">
          <div className="studentSide1">
            <input
              type="text"
              placeholder="Enter your firstname"
              className="textField4"
              value={firstName}
              onChange={handleFirstName}
            />
            <input
              type="text"
              placeholder="Enter your father name"
              className="textField4"
              value={fatherName}
              onChange={handleFatherName}
            />
            <input
              type="text"
              placeholder="Enter your mother name"
              className="textField4"
              value={motherName}
              onChange={handleMotherName}
            />
            <input
              type="text"
              placeholder="Enter emailid"
              className="textField4"
              value={emailId}
              onChange={handleEmailId}
            />
            <input
              type="text"
              placeholder="Enter your age"
              className="textField4"
              value={age}
              onChange={handleAge}
            />
          </div>
          <div className="studetdiv1">
            <div style={{ height: 68 }}>
              <input
                type="text"
                placeholder="Enter your lastname"
                className="textField4"
                value={lastName}
                onChange={handleLastName}
              />
              <input
                type="text"
                placeholder="Enter your phonenumber"
                className="textField4"
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
            </div>

            <div style={{ height: 68 }}>
              <input
                type="text"
                placeholder="Enter your male or female"
                className="textField4"
                value={gender}
                onChange={handleGender}
              />
              <input
                type="text"
                placeholder="Enter your alternativenumber"
                className="textField4"
                value={alternativePhoneNumber}
                onChange={handleAlternativePhoneNumber}
              />
            </div>
            <div className="adressdetails">
              <label>Address information</label>
              <div>
                <div style={{ height: 64 }}>
                  <label>House No: </label>
                  <input
                    type="text"
                    className="textField4"
                    value={houseNo}
                    onChange={handleHouseNo}
                  />
                </div>
                <div style={{ height: 64 }}>
                  <label>Street Name: </label>
                  <input
                    type="text"
                    className="textField4"
                    value={streetName}
                    onChange={handleStreetName}
                  />
                </div>
                <div style={{ height: 68 }}>
                  <label>Area Name: </label>
                  <input
                    style={{ width: "35%" }}
                    type="text"
                    className="textField4"
                    value={areaName}
                    onChange={handleAreaName}
                  />
                  <label>Pincode: </label>
                  <input
                    style={{ width: "25%" }}
                    type="text"
                    className="textField4"
                    value={pinCode}
                    onChange={handlePinCode}
                  />
                </div>
                <div style={{ height: 68 }}>
                  <label>State: </label>
                  <input
                    style={{ width: "35%" }}
                    type="text"
                    className="textField4"
                    value={state}
                    onChange={handleState}
                  />
                  <label>Nationality: </label>
                  <input
                    style={{ width: "20%" }}
                    type="text"
                    className="textField4"
                    value={nationality}
                    onChange={handleNationality}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="submitButton1"
            onClick={(e) => saveOrUpdateStudent(e)}
          >
            Enroll now
          </button>
        </div>
      </>
    </>
  );
}
