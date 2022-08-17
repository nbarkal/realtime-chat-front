import React from "react";
import Logo from "../../img/logo.png";
import './Login.css'


const Login = () => {
  return (
    <div>
         <div className="login">
      <img className="logo" src={Logo} alt='logo'></img>
      <div style={{top: '70px'}} className="container">
        <h2>Login to Continiue</h2>
        <h1>Join Our Chat</h1>
        <form action="" id="join-us">
          <div className="fields">
            <span>
              <input placeholder="Username" type="text" className="my-input" />
            </span>
            <br />
            <span>
              <input placeholder="Password" type="password" className="my-input"/>
            </span>
          </div>
          <div className="submit">
            <input value="Login" type="button" className="my-input submit"/>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;