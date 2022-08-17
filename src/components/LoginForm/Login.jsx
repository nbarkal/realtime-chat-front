import React, { useState } from "react";
import Logo from "../../img/logo.png";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    fetch("http://192.168.50.130:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setUser(data);
        props.setIsAuth(true);
      });
  };

  return (
    <div>
      <div className="login">
        <img className="logo" src={Logo} alt="logo" />
        <div style={{ top: "70px" }} className="container">
          <h2>Login to Continiue</h2>
          <h1>Join Our Chat</h1>
          <form onSubmit={login} id="join-us">
            <div className="fields">
              <span>
                <input
                  placeholder="Username"
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
            <div style={{ marginTop: "25px", marginLeft: "45px" }} className="submit">
              <button style={{ cursor: "pointer" }} type="submit" className="my-input submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
