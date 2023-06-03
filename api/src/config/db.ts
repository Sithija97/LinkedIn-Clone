import mongoose from "mongoose";

mongoose
  .connect("mongodb://0.0.0.0:27017/clinic-mgt-db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
