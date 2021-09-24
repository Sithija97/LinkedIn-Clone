import React from "react";
import { auth } from "../firebase";

const Login = () => {
  const handleLogIn = () => {};
  return (
    <div>
      <div>Login</div>
      <br />
      <div>
        <button onClick={handleLogIn()}>Google</button>
      </div>
    </div>
  );
};

export default Login;
