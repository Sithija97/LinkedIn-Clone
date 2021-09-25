import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/authContext";
import Button from "@mui/material/Button";

const Home = () => {
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    /* other func if user is there */
  }, [user, history]);

  const handleLoggedOut = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div>
      <b>home</b> <br />
      <br />
      <Button variant="contained" onClick={handleLoggedOut}>
        logout
      </Button>
    </div>
  );
};

export default Home;
