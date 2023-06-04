import express, { Request, Response } from "express";
import {
  addDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
} from "../controllers/doctors.controller.js";
const router = express.Router();

router.get("/getAllDoctors", getAllDoctors);
router.post("/createDoctor", addDoctor);
router.get("/getDoctor/:id", getDoctorById);
router.put("/updateDoctor/:id", updateDoctor);
router.delete("/deleteDoctor/:id", deleteDoctor);

export { router };
