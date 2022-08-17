import React from "react";
import "./Register.css";
import Logo from "../../img/logo.png";


const register = () => {
  return (
    <div className="register">
      <img className="logo" src={Logo} alt='logo'></img>
      <div style={{top: '70px'}} className="container">
        <h2>It's now or never</h2>
        <h1>Come on , Join us!</h1>

        <form action="" id="join-us">
          <div className="fields">
            <span>
              <input placeholder="Username" type="text" className="my-input" />
            </span>
            <br />
            <span>
              <input placeholder="Email" type="text" className="my-input"/>
            </span>
            <br />
            <span>
              <input placeholder="Password" type="password" className="my-input"/>
            </span>
          </div>
          <div className="submit">
            <input value="Submit" type="button" className="my-input submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;