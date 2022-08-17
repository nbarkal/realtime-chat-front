import React, { useState } from "react";
import "./Register.css";
import Logo from "../../img/logo.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    fetch("http://192.168.50.130:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })}

  return (
    <div className="register">
      <img className="logo" src={Logo} alt="logo"></img>
      <div style={{ top: "70px" }} className="container">
        <h2>It's now or never</h2>
        <h1>Come on , Join us!</h1>

        <form onSubmit={register} id="join-us">
          <div className="fields">
            <span>
              <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="my-input"
              />
            </span>
            <br />
            <span>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="my-input"
              />
            </span>
            <br />
            <span>
              <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="my-input"
              />
            </span>
          </div>
          <div style={{marginTop: '25px', marginLeft: '45px'}} className="submit">
            <button style={{ cursor: 'pointer'}} type="submit" className="my-input submit" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
