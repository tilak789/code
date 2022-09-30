import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";
function main() {
  // eslint-disable-next-line
  const [userName, setUserName] = useState("");
  // eslint-disable-next-line
  const [role, setRole] = useState("");
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [mobileNumber, setMobileNumber] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [confirmPassword, setConfirmPassword] = useState("");
  // eslint-disable-next-line
  const [loadSpinner, setloadSpinner] = useState(false);
  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  function ValidateEmail(mail) {
    //eslint-disable-line
    //eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  function CheckIndianNumber(b) {
    var a = /^\d{10}$/;
    if (a.test(b)) {
      return true;
    } else {
      return false;
    }
  }
  const handleSubmit = () => {
   // setloadSpinner(true);
    //eslint-disable-next-line
    if (
      password === "" &&
      confirmPassword === "" &&
      userName === "" &&
      role === "" &&
      email === "" &&
      mobileNumber === ""
    ) {
      alert("Provide user information");
    } else if (!ValidateEmail(email)) {
      alert("You have entered an invalid email address!");
    } else if (!CheckIndianNumber(mobileNumber)) {
      alert("Your Mobile Number Is Not Valid.");
    } else if (!(password.length >= 8)) {
      alert("password length should be greater than eight");
    } else if (password !== confirmPassword) {
      alert("Password and confirm password not same");
    } else {
      const data = {
        username: userName,
        password: password,
        email: email,
        mobilenumber: mobileNumber,
        role: role,
      };

      axios({
        // Endpoint to send files
        url: "http://localhost:8080/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      })
        // Handle the response from backend here
        .then((res) => {
          console.log(res);
          setloadSpinner(false);
        })

        // Catch errors if any
        .catch((err) => {
          setloadSpinner(false);
          if (err.response.data.status === 400)
            alert(err.response.data.message);
        });
    }
  };
  return (
    <div>
      {/* <LoadingSpinner /> */}
      <div className="registerTitle">
        <h1>Register</h1>
      </div>
      <div className="App-header1">
        <input
          type="text"
          placeholder="Enter admin/user"
          className="textField01"
          value={role}
          onChange={handleRole}
        />

        <input
          type="email"
          placeholder="Enter email"
          className="textField01"
          value={email}
          onChange={handleEmail}
        />

        <input
          type="text"
          placeholder="Enter Username"
          className="textField01"
          value={userName}
          onChange={handleUserName}
        />

        <input
          type="number"
          placeholder="Enter Mobilenumber"
          className="textField01"
          value={mobileNumber}
          onChange={handleMobileNumber}
        />

        <input
          type="password"
          placeholder="Password"
          className="textField01"
          value={password}
          onChange={handlePassword}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="textField01"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />

        <button className="submitButton" onClick={handleSubmit}>
          submit
        </button>
        <div className="textUser">
          Already a user?{" "}
          <span className="textLogin">
            {" "}
            <Link to="/"> Login </Link>{" "}
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
export default main;
