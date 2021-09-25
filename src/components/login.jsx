import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@mui/material";

const Login = () => {
  const handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div>
        <b>Login</b>
      </div>
      <br />
      <div>
        <Button variant="contained" onClick={handleLogIn}>
          Google login
        </Button>
      </div>
    </div>
  );
};

export default Login;
