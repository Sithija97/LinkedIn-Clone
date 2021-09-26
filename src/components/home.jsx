import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/authContext";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ListItem } from "@mui/material";
import DataTable from "./dataTable";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import TextInput from "./textInput";

const Home = () => {
  const history = useHistory();
  const { user } = useAuth();

  const initialState = {
    address: "",
    city: "",
    zip: "",
    country: "",
    client_name: "",
    client_email: "",
    c_address: "",
    c_city: "",
    c_zip: "",
    c_country: "",
  };
  const [open, setOpen] = useState(false);
  const [state, setstate] = useState(initialState);

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
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={6} md={8}>
            <ListItem>
              <b>
                hi {user && user.displayName} ! there are 16 total invoices{" "}
              </b>
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
                  <Button variant="contained" onClick={() => setOpen(true)}>
                    Create
                  </Button>
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          {/* <DataTable /> */}
          <Dialog
            maxWidth="lg"
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Create Invoice</DialogTitle>
            <DialogContent>
              <TextInput value={state.address} name="address" />
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <TextInput value={state.city} name="city" />
                <TextInput value={state.zip} name="zip" />
                <TextInput value={state.country} name="country" />
              </Grid>
              <TextInput value={state.client_name} name="client's name" />
              <TextInput value={state.client_name} name="client's email" />
              <TextInput value={state.c_address} name="address" />
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <TextInput value={state.city} name="city" />
                <TextInput value={state.zip} name="zip" />
                <TextInput value={state.country} name="country" />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary">
                Cancel
              </Button>
              <Button color="primary">Add</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Home;
