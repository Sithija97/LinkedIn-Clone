import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
