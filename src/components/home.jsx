import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/authContext";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ListItem } from "@mui/material";
import DataTable from "./dataTable";

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
    <React.Fragment>
      <Container maxWidth="xl">
        {/* <div>
          <b>Invoice App</b> <br />
          <b>hi {user.displayName} ! there are 16 total invoices </b>
          <br />
          <br />
          <Button variant="contained" onClick={handleLoggedOut}>
            logout
          </Button>
        </div> */}
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={6} md={8}>
            <ListItem>
              <b>hi {user.displayName} ! there are 16 total invoices </b>
            </ListItem>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                <ListItem>
                  <Button variant="contained" onClick={handleLoggedOut}>
                    logout
                  </Button>
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={6} md={4}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <ListItem>
                  <Button variant="contained">Create</Button>
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Container maxWidth="lg">{/* <DataTable /> */}</Container>
      </Container>
    </React.Fragment>
  );
};

export default Home;
