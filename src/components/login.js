import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
function login() {
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [registeredUsers, setRegisteredUsers] = useState([]);
  //eslint-disable-next-line
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  function ValidateEmail(mail) {
    //eslint-disable-line
    //eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  const handleSubmit = () => {
    if (password === "" && email === "") {
      alert("Provide login information");
    } else if (!ValidateEmail(email)) {
      alert("You have entered an invalid email address!");
    } else {
      const data = {
        email: email,
        password: password,
      };
      axios({
        // Endpoint to send files
        url: "http://localhost:8080/authenticate",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      })
        // Handle the response from backend here
        .then((res) => {
          console.log(res);
          sessionStorage.setItem(
            "Authorization",
            `Bearer ${res.data.data.token}`
          );
          axios({
            url: `http://localhost:8080/userDetails`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: sessionStorage.getItem("Authorization"),
            },
          })
            .then((res) => {
              console.log(res);
              //eslint-disable-next-line
              let i = null;
               let person = "admin";
              for (i = 0; i < res.data.length; i++) {
                if (res.data[i].email === data.email) {
                  // if (res.data[i].role === person) {
                  sessionStorage.setItem(
                    "loginUser",
                    JSON.stringify(res.data[i])
                  );
                  if (res.data[i].role === person) {
                    navigate("/academyview");
                  } else { 
                    navigate("/admissionview");
                  }

                }
              }
             
              
            })
            .catch((err) => {
              console.log(err);
            });
        })

        // Catch errors if any
        .catch((err) => {
          if (
            err.response.data.status === 400 &&
            err.response.data.message === "INVALID_CREDENTIALS"
          )
            alert("Plase provide valid Mail and password");
        });
    }
  };
  return (
    <div>
      <div className="registerTitle">
        <h1>Login</h1>
      </div>
      <div className="App-header">
        <input
          type="email"
          placeholder="Enter email"
          className="textField"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Password"
          className="textField"
          value={password}
          onChange={handlePassword}
        />
        <></>
        <div className="textUser">
          <button className="submitButton" onClick={handleSubmit}>
            Login
          </button>
          New User/admin?{" "}
          <span className="textLogin">
            {" "}
            <Link to="/register">Sign Up</Link>
            {}
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
export default login;
