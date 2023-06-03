import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { router } from "./routes/index.js";
import "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
