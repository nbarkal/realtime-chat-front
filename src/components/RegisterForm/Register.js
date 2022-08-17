import React from "react";
import "./Register.css";

const register = () => {
  return (
    <div className="register">
      <div style={{top: '20px'}} class="container">
        <h2>It's now or never</h2>
        <h1>Come on , Join us!</h1>

        <form action="" id="join-us">
          <div class="fields">
            <span>
              <input placeholder="Username" type="text" />
            </span>
            <br />
            <span>
              <input placeholder="Email" type="text" />
            </span>
            <br />
            <span>
              <input placeholder="Password" type="password" />
            </span>
          </div>
          <div class="submit">
            <input class="submit" value="Submit" type="button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;