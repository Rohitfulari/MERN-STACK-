import React, { useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  // Signup form state
  const [signupName, setSignupName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupNumber, setSignupNumber] = useState("");
  const [signupEmail, setSignupEmail] = useState("");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/user", {
        name: signupName,
        email: signupEmail,
        number: signupNumber,
        password: signupPassword
      });
      console.log(res);

      console.log("name:", signupName);
      console.log("email:", signupEmail);
      console.log("num:", signupNumber);
      console.log("pass:", signupPassword);

    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/user/login", {
        email: loginEmail,
        password: loginPassword
      });

      if (result.data.msg === "success") {
        if (loginEmail === "Admin@gmail.com" && loginPassword === "Admin@11rvf") {
          navigate("/admin");
        } else {
          console.log("Login successful, navigating to /home");
          console.log("The user data email:", loginEmail);
          console.log("user password:", loginPassword);
          navigate("/home");
        }
      } else {
        console.log("Login failed, result.data:", result.data);
        alert("Data not match");
      }

    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className='container'>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>

            <input type="text"
              name="username"
              placeholder="User name"
              required
              onChange={(e) => setSignupName(e.target.value)}
              value={signupName}
            />

            <input type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setSignupEmail(e.target.value)}
              value={signupEmail}
            />

            <input type="number"
              name="number"
              placeholder="Mob. Number"
              required
              onChange={(e) => setSignupNumber(e.target.value)}
              value={signupNumber}
            />

            <input type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
            />

            <button type="submit" className='sig' style={{ marginBottom: "-15px" }}>Submit</button>
            <label htmlFor="chk" className='sig'>Login</label>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleUserLogin}>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setLoginEmail(e.target.value)}
              value={loginEmail}
            />

            <input type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
