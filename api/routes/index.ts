import express, { Request, Response } from "express";
import {
  registerDoctor,
  loginDoctor,
  logoutDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
} from "../controllers/doctors.controller.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/registerDoctor", registerDoctor);
router.post("/loginDoctor", loginDoctor);
router.post("/logoutDoctor", logoutDoctor);
router.get("/getAllDoctors", protect, getAllDoctors);
router.get("/getDoctor", protect, getDoctorById);
router.put("/updateDoctor", protect, updateDoctor);

export { router };
